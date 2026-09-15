import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./ListeningPage.css";

// =========================================================
// DATOS DEL BLOQUE FAMILY
// =========================================================

const FAMILY_DATA = {
    id: "family",
    title: "Family",
    subtitle: "La familia",
    description:
        "Escucha, reconoce, relaciona, comprende, construye y comunica vocabulario básico sobre la familia.",
};

// =========================================================
// ETAPAS
// =========================================================

const STAGES = [
    {
        id: 1,
        key: "discover",
        title: "Descubrir",
        icon: "🔎",
        description:
            "Escucha y descubre las palabras fundamentales.",
    },
    {
        id: 2,
        key: "recognize",
        title: "Reconocer",
        icon: "👂",
        description:
            "Escucha y reconoce la palabra correcta.",
    },
    {
        id: 3,
        key: "relate",
        title: "Relacionar",
        icon: "🔗",
        description:
            "Relaciona lo que escuchas con su significado.",
    },
    {
        id: 4,
        key: "understand",
        title: "Comprender",
        icon: "🧠",
        description:
            "Escucha oraciones y comprende su significado.",
    },
    {
        id: 5,
        key: "build",
        title: "Construir",
        icon: "🧩",
        description:
            "Construye correctamente las oraciones.",
    },
    {
        id: 6,
        key: "communicate",
        title: "Comunicar",
        icon: "🗣️",
        description:
            "Escucha, comprende y responde en inglés.",
    },
];

// =========================================================
// PREGUNTAS
// =========================================================

const QUESTIONS = {
    discover: [
        {
            audio: "father",
            options: ["father", "mother", "brother"],
            answer: "father",
        },
        {
            audio: "mother",
            options: ["mother", "sister", "daughter"],
            answer: "mother",
        },
        {
            audio: "brother",
            options: ["father", "brother", "son"],
            answer: "brother",
        },
        {
            audio: "sister",
            options: ["sister", "mother", "daughter"],
            answer: "sister",
        },
    ],

    recognize: [
        {
            audio: "mother",
            options: [
                "father",
                "mother",
                "sister",
                "daughter",
            ],
            answer: "mother",
        },
        {
            audio: "brother",
            options: [
                "brother",
                "father",
                "son",
                "grandfather",
            ],
            answer: "brother",
        },
        {
            audio: "daughter",
            options: [
                "mother",
                "daughter",
                "sister",
                "son",
            ],
            answer: "daughter",
        },
        {
            audio: "grandmother",
            options: [
                "grandfather",
                "mother",
                "grandmother",
                "daughter",
            ],
            answer: "grandmother",
        },
    ],

    relate: [
        {
            audio: "father",
            options: [
                "padre",
                "madre",
                "hermano",
                "abuelo",
            ],
            answer: "padre",
        },
        {
            audio: "mother",
            options: [
                "hermana",
                "madre",
                "hija",
                "abuela",
            ],
            answer: "madre",
        },
        {
            audio: "son",
            options: [
                "hijo",
                "padre",
                "hermano",
                "abuelo",
            ],
            answer: "hijo",
        },
        {
            audio: "grandfather",
            options: [
                "abuelo",
                "abuela",
                "padre",
                "hijo",
            ],
            answer: "abuelo",
        },
    ],

    understand: [
        {
            audio: "This is my mother.",
            options: [
                "Esta es mi madre.",
                "Este es mi padre.",
                "Ella es mi hermana.",
            ],
            answer: "Esta es mi madre.",
        },
        {
            audio: "This is my father.",
            options: [
                "Él es mi hermano.",
                "Este es mi padre.",
                "Esta es mi madre.",
            ],
            answer: "Este es mi padre.",
        },
        {
            audio: "She is my sister.",
            options: [
                "Ella es mi hermana.",
                "Ella es mi madre.",
                "Él es mi hermano.",
            ],
            answer: "Ella es mi hermana.",
        },
        {
            audio: "He is my brother.",
            options: [
                "Él es mi hermano.",
                "Él es mi padre.",
                "Ella es mi hermana.",
            ],
            answer: "Él es mi hermano.",
        },
    ],

    build: [
        {
            audio: "This is my mother.",
            sentence: "This is my mother.",
            words: ["This", "is", "my", "mother"],
        },
        {
            audio: "This is my father.",
            sentence: "This is my father.",
            words: ["This", "is", "my", "father"],
        },
        {
            audio: "She is my sister.",
            sentence: "She is my sister.",
            words: ["She", "is", "my", "sister"],
        },
        {
            audio: "He is my brother.",
            sentence: "He is my brother.",
            words: ["He", "is", "my", "brother"],
        },
    ],

    communicate: [
        {
            audio: "Who is your mother?",
            options: [
                "She is my mother.",
                "He is my brother.",
                "This is my father.",
            ],
            answer: "She is my mother.",
        },
        {
            audio: "Who is your father?",
            options: [
                "She is my sister.",
                "He is my father.",
                "This is my daughter.",
            ],
            answer: "He is my father.",
        },
        {
            audio: "Who is your brother?",
            options: [
                "He is my brother.",
                "She is my mother.",
                "This is my sister.",
            ],
            answer: "He is my brother.",
        },
    ],
};

// =========================================================
// UTILIDADES
// =========================================================

function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

// Normaliza:
// "This is my mother."
// "THIS   IS   MY   MOTHER"
// "This is my mother"
// Todas quedan equivalentes.
function normalizeText(text) {
    return String(text)
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:]/g, "")
        .replace(/\s+/g, " ");
}

function speak(text) {
    if (
        typeof window === "undefined" ||
        !("speechSynthesis" in window)
    ) {
        return;
    }

    window.speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.82;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
}

// =========================================================
// COMPONENTE
// =========================================================

function ListeningPage() {
    const navigate = useNavigate();
    const { block } = useParams();

    // =====================================================
    // ESTADOS
    // =====================================================

    const [currentStage, setCurrentStage] =
        useState(1);

    const [questionIndex, setQuestionIndex] =
        useState(0);

    const [selectedAnswer, setSelectedAnswer] =
        useState("");

    const [feedback, setFeedback] =
        useState(null);

    const [score, setScore] =
        useState(0);

    const [completedStages, setCompletedStages] =
        useState([]);

    const [orderedWords, setOrderedWords] =
        useState([]);

    const [availableWords, setAvailableWords] =
        useState([]);

    const [hasPlayed, setHasPlayed] =
        useState(false);

    const [finished, setFinished] =
        useState(false);

    // =====================================================
    // DATOS
    // =====================================================

    const data = useMemo(
        () => FAMILY_DATA,
        []
    );

    const currentStageData =
        STAGES[currentStage - 1];

    const currentQuestions =
        QUESTIONS[
            currentStageData?.key
        ] || [];

    /*
     * Protección importante:
     *
     * Si por cualquier razón questionIndex
     * queda fuera del rango de la etapa,
     * utilizamos automáticamente la primera pregunta.
     */
    const currentQuestion =
        currentQuestions[questionIndex] ||
        currentQuestions[0] ||
        null;

    const progress = Math.round(
        (completedStages.length /
            STAGES.length) *
            100
    );

    const isSuccess =
        feedback?.type === "success";

    // =====================================================
    // CAMBIO DE ETAPA
    // =====================================================

    useEffect(() => {
        setQuestionIndex(0);
        setSelectedAnswer("");
        setFeedback(null);
        setOrderedWords([]);
        setAvailableWords([]);
        setHasPlayed(false);

        if (currentStage === 5) {
            const firstQuestion =
                QUESTIONS.build[0];

            if (firstQuestion) {
                setAvailableWords(
                    shuffle(
                        firstQuestion.words
                    )
                );
            }
        }
    }, [currentStage]);

    // =====================================================
    // CAMBIO DE PREGUNTA EN CONSTRUIR
    // =====================================================

    useEffect(() => {
        if (currentStage !== 5) {
            return;
        }

        const question =
            QUESTIONS.build[
                questionIndex
            ];

        if (!question) {
            return;
        }

        setOrderedWords([]);
        setAvailableWords(
            shuffle(question.words)
        );
        setFeedback(null);
        setSelectedAnswer("");
        setHasPlayed(false);
    }, [
        currentStage,
        questionIndex,
    ]);

    // =====================================================
    // LIMPIAR AUDIO AL SALIR
    // =====================================================

    useEffect(() => {
        return () => {
            if (
                typeof window !==
                    "undefined" &&
                "speechSynthesis" in
                    window
            ) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    // =====================================================
    // AUDIO
    // =====================================================

    const playAudio = () => {
        if (!currentQuestion) {
            return;
        }

        speak(currentQuestion.audio);

        setHasPlayed(true);
    };

    // =====================================================
    // SIGUIENTE PREGUNTA
    // =====================================================

    const goToNextQuestion = () => {
        setSelectedAnswer("");
        setFeedback(null);
        setHasPlayed(false);

        const lastQuestion =
            questionIndex >=
            currentQuestions.length - 1;

        if (!lastQuestion) {
            setQuestionIndex(
                (previous) =>
                    previous + 1
            );

            return;
        }

        completeStage();
    };

    // =====================================================
    // COMPLETAR ETAPA
    // =====================================================

    const completeStage = () => {
        setCompletedStages(
            (previous) => {
                if (
                    previous.includes(
                        currentStage
                    )
                ) {
                    return previous;
                }

                return [
                    ...previous,
                    currentStage,
                ];
            }
        );

        if (
            currentStage <
            STAGES.length
        ) {
            window.setTimeout(() => {
                setCurrentStage(
                    (previous) =>
                        previous + 1
                );
            }, 650);

            return;
        }

        window.setTimeout(() => {
            setFinished(true);
        }, 650);
    };

    // =====================================================
    // RESPUESTA DE OPCIÓN MÚLTIPLE
    // =====================================================

    const handleAnswer = (answer) => {
        if (
            !currentQuestion ||
            isSuccess
        ) {
            return;
        }

        setSelectedAnswer(answer);

        const correct =
            normalizeText(answer) ===
            normalizeText(
                currentQuestion.answer
            );

        if (correct) {
            setScore(
                (previous) =>
                    previous + 1
            );

            setFeedback({
                type: "success",
                message:
                    "¡Correcto! Excelente escucha.",
            });

            window.setTimeout(() => {
                goToNextQuestion();
            }, 900);

            return;
        }

        setFeedback({
            type: "error",
            message:
                "No es esa respuesta. Escucha nuevamente e inténtalo.",
        });

        window.setTimeout(() => {
            setFeedback(null);
            setSelectedAnswer("");
        }, 850);
    };

    // =====================================================
    // COMUNICAR
    // =====================================================

    const handleCommunication = (
        answer
    ) => {
        if (
            !currentQuestion ||
            isSuccess
        ) {
            return;
        }

        setSelectedAnswer(answer);

        const correct =
            normalizeText(answer) ===
            normalizeText(
                currentQuestion.answer
            );

        if (correct) {
            setScore(
                (previous) =>
                    previous + 1
            );

            setFeedback({
                type: "success",
                message:
                    "¡Muy bien! Comprendiste la pregunta.",
            });

            window.setTimeout(() => {
                goToNextQuestion();
            }, 900);

            return;
        }

        setFeedback({
            type: "error",
            message:
                "Escucha nuevamente la pregunta e inténtalo.",
        });

        window.setTimeout(() => {
            setFeedback(null);
            setSelectedAnswer("");
        }, 850);
    };

    // =====================================================
    // CONSTRUIR - AGREGAR PALABRA
    // =====================================================

    const addWord = (
        word,
        index
    ) => {
        if (isSuccess) {
            return;
        }

        setOrderedWords(
            (previous) => [
                ...previous,
                word,
            ]
        );

        setAvailableWords(
            (previous) =>
                previous.filter(
                    (_, itemIndex) =>
                        itemIndex !== index
                )
        );
    };

    // =====================================================
    // CONSTRUIR - QUITAR PALABRA
    // =====================================================

    const removeWord = (
        word,
        index
    ) => {
        if (isSuccess) {
            return;
        }

        setOrderedWords(
            (previous) =>
                previous.filter(
                    (_, itemIndex) =>
                        itemIndex !== index
                )
        );

        setAvailableWords(
            (previous) => [
                ...previous,
                word,
            ]
        );
    };

    // =====================================================
    // CONSTRUIR - COMPROBAR
    // =====================================================

    const checkSentence = () => {
        if (
            !currentQuestion ||
            isSuccess
        ) {
            return;
        }

        const answer =
            orderedWords.join(" ");

        const expected =
            currentQuestion.sentence;

        const normalizedAnswer =
            normalizeText(answer);

        const normalizedExpected =
            normalizeText(expected);

        const correct =
            normalizedAnswer ===
            normalizedExpected;

        if (correct) {
            setScore(
                (previous) =>
                    previous + 1
            );

            setFeedback({
                type: "success",
                message:
                    "¡Excelente! La oración está correcta.",
            });

            window.setTimeout(() => {
                goToNextQuestion();
            }, 900);

            return;
        }

        setFeedback({
            type: "error",
            message:
                "El orden no es correcto. Escucha nuevamente e inténtalo.",
        });

        window.setTimeout(() => {
            setFeedback(null);
        }, 850);
    };

    // =====================================================
    // REINICIAR
    // =====================================================

    const restart = () => {
        if (
            typeof window !==
                "undefined" &&
            "speechSynthesis" in
                window
        ) {
            window.speechSynthesis.cancel();
        }

        setCurrentStage(1);
        setQuestionIndex(0);
        setSelectedAnswer("");
        setFeedback(null);
        setScore(0);
        setCompletedStages([]);
        setOrderedWords([]);
        setAvailableWords([]);
        setHasPlayed(false);
        setFinished(false);
    };

    // =====================================================
    // VOLVER AL BLOQUE
    // =====================================================

    const goBackToBlock = () => {
        navigate(
            `/student/blocks/${
                block || "family"
            }`
        );
    };

    // =====================================================
    // SELECCIONAR ETAPA
    // =====================================================

    const selectStage = (
        stageNumber
    ) => {
        if (stageNumber === 1) {
            setCurrentStage(1);
            return;
        }

        const previousCompleted =
            completedStages.includes(
                stageNumber - 1
            );

        const currentCompleted =
            completedStages.includes(
                stageNumber
            );

        if (
            previousCompleted ||
            currentCompleted
        ) {
            setCurrentStage(
                stageNumber
            );
        }
    };

    // =====================================================
    // NAVEGACIÓN DE ETAPAS
    // =====================================================

    const renderStageNavigation =
        () => {
            return (
                <div className="listening-stages">
                    {STAGES.map(
                        (stage) => {
                            const completed =
                                completedStages.includes(
                                    stage.id
                                );

                            const active =
                                currentStage ===
                                stage.id;

                            const locked =
                                stage.id >
                                    1 &&
                                !completedStages.includes(
                                    stage.id -
                                        1
                                ) &&
                                !completed;

                            return (
                                <button
                                    key={
                                        stage.id
                                    }
                                    type="button"
                                    className={`listening-stage ${
                                        active
                                            ? "active"
                                            : ""
                                    } ${
                                        completed
                                            ? "completed"
                                            : ""
                                    } ${
                                        locked
                                            ? "locked"
                                            : ""
                                    }`}
                                    disabled={
                                        locked
                                    }
                                    onClick={() =>
                                        selectStage(
                                            stage.id
                                        )
                                    }
                                >
                                    <span className="stage-number">
                                        {completed
                                            ? "✓"
                                            : locked
                                            ? "🔒"
                                            : stage.id}
                                    </span>

                                    <span className="stage-icon">
                                        {
                                            stage.icon
                                        }
                                    </span>

                                    <span className="stage-title">
                                        {
                                            stage.title
                                        }
                                    </span>
                                </button>
                            );
                        }
                    )}
                </div>
            );
        };

    // =====================================================
    // DESCUBRIR
    // =====================================================

    const renderDiscover =
        () => {
            if (!currentQuestion) {
                return null;
            }

            return (
                <div className="listening-activity">
                    <div className="activity-header">
                        <span className="activity-number">
                            ACTIVIDAD 1
                        </span>

                        <h2>
                            Descubre el vocabulario
                        </h2>

                        <p>
                            Escucha la palabra y
                            selecciona la palabra
                            que escuchaste.
                        </p>
                    </div>

                    <div className="listening-card">
                        <div className="audio-visual">
                            <span className="audio-icon">
                                🎧
                            </span>

                            <span>
                                {hasPlayed
                                    ? "Escucha nuevamente si lo necesitas"
                                    : "Presiona para escuchar"}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="listen-button"
                            onClick={
                                playAudio
                            }
                        >
                            🔊 Escuchar
                        </button>

                        <div className="answer-grid">
                            {currentQuestion.options.map(
                                (option) => (
                                    <button
                                        key={
                                            option
                                        }
                                        type="button"
                                        className={`answer-button ${
                                            selectedAnswer ===
                                            option
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleAnswer(
                                                option
                                            )
                                        }
                                        disabled={
                                            isSuccess
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            );
        };

    // =====================================================
    // RECONOCER
    // =====================================================

    const renderRecognize =
        () => {
            if (!currentQuestion) {
                return null;
            }

            return (
                <div className="listening-activity">
                    <div className="activity-header">
                        <span className="activity-number">
                            ACTIVIDAD 2
                        </span>

                        <h2>
                            Reconoce la palabra
                        </h2>

                        <p>
                            Escucha con atención y
                            selecciona la palabra
                            correcta.
                        </p>
                    </div>

                    <div className="listening-card recognize-card">
                        <div className="big-audio">
                            🎧
                        </div>

                        <button
                            type="button"
                            className="listen-button primary"
                            onClick={
                                playAudio
                            }
                        >
                            🔊 Escuchar palabra
                        </button>

                        <div className="recognize-question">
                            ¿Qué palabra
                            escuchaste?
                        </div>

                        <div className="answer-grid four">
                            {currentQuestion.options.map(
                                (option) => (
                                    <button
                                        key={
                                            option
                                        }
                                        type="button"
                                        className={`answer-button ${
                                            selectedAnswer ===
                                            option
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleAnswer(
                                                option
                                            )
                                        }
                                        disabled={
                                            isSuccess
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            );
        };

    // =====================================================
    // RELACIONAR
    // =====================================================

    const renderRelate =
        () => {
            if (!currentQuestion) {
                return null;
            }

            return (
                <div className="listening-activity">
                    <div className="activity-header">
                        <span className="activity-number">
                            ACTIVIDAD 3
                        </span>

                        <h2>
                            Relaciona
                        </h2>

                        <p>
                            Escucha la palabra en inglés
                            y relaciónala con su
                            significado.
                        </p>
                    </div>

                    <div className="listening-card">
                        <button
                            type="button"
                            className="listen-button"
                            onClick={
                                playAudio
                            }
                        >
                            🔊 Escuchar
                        </button>

                        <div className="relation-question">
                            ¿Qué significa?
                        </div>

                        <div className="answer-grid">
                            {currentQuestion.options.map(
                                (option) => (
                                    <button
                                        key={
                                            option
                                        }
                                        type="button"
                                        className={`meaning-button ${
                                            selectedAnswer ===
                                            option
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleAnswer(
                                                option
                                            )
                                        }
                                        disabled={
                                            isSuccess
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            );
        };

    // =====================================================
    // COMPRENDER
    // =====================================================

    const renderUnderstand =
        () => {
            if (!currentQuestion) {
                return null;
            }

            return (
                <div className="listening-activity">
                    <div className="activity-header">
                        <span className="activity-number">
                            ACTIVIDAD 4
                        </span>

                        <h2>
                            Comprende la oración
                        </h2>

                        <p>
                            Escucha la oración completa
                            y selecciona su significado.
                        </p>
                    </div>

                    <div className="listening-card sentence-card">
                        <div className="sentence-audio">
                            <div className="audio-circle">
                                🎧
                            </div>

                            <button
                                type="button"
                                className="listen-button primary"
                                onClick={
                                    playAudio
                                }
                            >
                                🔊 Escuchar oración
                            </button>
                        </div>

                        <div className="question-label">
                            ¿Qué significa lo
                            que escuchaste?
                        </div>

                        <div className="answer-list">
                            {currentQuestion.options.map(
                                (option) => (
                                    <button
                                        key={
                                            option
                                        }
                                        type="button"
                                        className={`sentence-option ${
                                            selectedAnswer ===
                                            option
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleAnswer(
                                                option
                                            )
                                        }
                                        disabled={
                                            isSuccess
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            );
        };

    // =====================================================
    // CONSTRUIR
    // =====================================================

    const renderBuild =
        () => {
            if (!currentQuestion) {
                return null;
            }

            return (
                <div className="listening-activity">
                    <div className="activity-header">
                        <span className="activity-number">
                            ACTIVIDAD 5
                        </span>

                        <h2>
                            Construye la oración
                        </h2>

                        <p>
                            Escucha la oración y
                            organiza las palabras
                            en el orden correcto.
                        </p>
                    </div>

                    <div className="listening-card build-card">
                        <button
                            type="button"
                            className="listen-button"
                            onClick={
                                playAudio
                            }
                        >
                            🔊 Escuchar oración
                        </button>

                        <div className="selected-words">
                            {orderedWords.length ===
                            0 ? (
                                <span className="empty-message">
                                    Selecciona las
                                    palabras para
                                    construir la
                                    oración.
                                </span>
                            ) : (
                                orderedWords.map(
                                    (
                                        word,
                                        index
                                    ) => (
                                        <button
                                            key={`${word}-${index}`}
                                            type="button"
                                            className="word-chip selected"
                                            onClick={() =>
                                                removeWord(
                                                    word,
                                                    index
                                                )
                                            }
                                            disabled={
                                                isSuccess
                                            }
                                        >
                                            {
                                                word
                                            }
                                        </button>
                                    )
                                )
                            )}
                        </div>

                        <div className="available-words">
                            {availableWords.map(
                                (
                                    word,
                                    index
                                ) => (
                                    <button
                                        key={`${word}-${index}`}
                                        type="button"
                                        className="word-chip"
                                        onClick={() =>
                                            addWord(
                                                word,
                                                index
                                            )
                                        }
                                        disabled={
                                            isSuccess
                                        }
                                    >
                                        {
                                            word
                                        }
                                    </button>
                                )
                            )}
                        </div>

                        <button
                            type="button"
                            className="check-button"
                            onClick={
                                checkSentence
                            }
                            disabled={
                                orderedWords.length ===
                                    0 ||
                                isSuccess
                            }
                        >
                            ✓ Comprobar oración
                        </button>
                    </div>
                </div>
            );
        };

    // =====================================================
    // COMUNICAR
    // =====================================================

    const renderCommunicate =
        () => {
            /*
             * Protección contra el error:
             *
             * Cannot read properties of undefined
             * (reading 'options')
             */
            if (!currentQuestion) {
                return null;
            }

            return (
                <div className="listening-activity">
                    <div className="activity-header">
                        <span className="activity-number">
                            ACTIVIDAD 6
                        </span>

                        <h2>
                            Comunica
                        </h2>

                        <p>
                            Escucha la pregunta y
                            selecciona la respuesta
                            adecuada en inglés.
                        </p>
                    </div>

                    <div className="listening-card communicate-card">
                        <div className="communication-audio">
                            <div className="question-icon">
                                💬
                            </div>

                            <button
                                type="button"
                                className="listen-button primary"
                                onClick={
                                    playAudio
                                }
                            >
                                🔊 Escuchar pregunta
                            </button>
                        </div>

                        <div className="communication-question">
                            Pregunta escuchada
                        </div>

                        <div className="answer-list">
                            {currentQuestion.options.map(
                                (option) => (
                                    <button
                                        key={
                                            option
                                        }
                                        type="button"
                                        className={`communication-option ${
                                            selectedAnswer ===
                                            option
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleCommunication(
                                                option
                                            )
                                        }
                                        disabled={
                                            isSuccess
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            );
        };

    // =====================================================
    // ACTIVIDAD ACTUAL
    // =====================================================

    const renderActivity =
        () => {
            if (!currentStageData) {
                return null;
            }

            switch (
                currentStageData.key
            ) {
                case "discover":
                    return renderDiscover();

                case "recognize":
                    return renderRecognize();

                case "relate":
                    return renderRelate();

                case "understand":
                    return renderUnderstand();

                case "build":
                    return renderBuild();

                case "communicate":
                    return renderCommunicate();

                default:
                    return null;
            }
        };

    // =====================================================
    // FEEDBACK
    // =====================================================

    const renderFeedback =
        () => {
            if (!feedback) {
                return null;
            }

            return (
                <div
                    className={`listening-feedback ${feedback.type}`}
                >
                    <span className="feedback-icon">
                        {feedback.type ===
                        "success"
                            ? "✓"
                            : "↻"}
                    </span>

                    <span>
                        {
                            feedback.message
                        }
                    </span>
                </div>
            );
        };

    // =====================================================
    // PANTALLA FINAL
    // =====================================================

    if (finished) {
        return (
            <main className="listening-page">
                <div className="listening-container">
                    <section className="listening-complete">
                        <div className="complete-icon">
                            🎉
                        </div>

                        <span className="complete-label">
                            BLOQUE COMPLETADO
                        </span>

                        <h1>
                            ¡Excelente trabajo!
                        </h1>

                        <p>
                            Has completado las seis
                            etapas del listening del
                            bloque{" "}
                            <strong>
                                Family
                            </strong>
                            .
                        </p>

                        <div className="final-score">
                            <span>
                                Puntuación
                            </span>

                            <strong>
                                {score}
                            </strong>
                        </div>

                        <div className="complete-actions">
                            <button
                                type="button"
                                className="primary-action"
                                onClick={
                                    restart
                                }
                            >
                                🔄 Repetir Listening
                            </button>

                            <button
                                type="button"
                                className="secondary-action"
                                onClick={
                                    goBackToBlock
                                }
                            >
                                ← Volver al bloque
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        );
    }

    // =====================================================
    // PROTECCIÓN GENERAL
    // =====================================================

    if (!currentStageData) {
        return (
            <main className="listening-page">
                <div className="listening-container">
                    <section className="listening-complete">
                        <div className="complete-icon">
                            ⚠️
                        </div>

                        <h1>
                            No se pudo cargar la etapa
                        </h1>

                        <button
                            type="button"
                            className="primary-action"
                            onClick={restart}
                        >
                            🔄 Reiniciar
                        </button>
                    </section>
                </div>
            </main>
        );
    }

    // =====================================================
    // PANTALLA PRINCIPAL
    // =====================================================

    return (
        <main className="listening-page">
            <div className="listening-container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <header className="listening-header">
                    <div className="header-top">
                        <button
                            type="button"
                            className="back-button"
                            onClick={
                                goBackToBlock
                            }
                        >
                            ← Volver
                        </button>

                        <span className="lesson-type">
                            🎧 LISTENING
                        </span>
                    </div>

                    <div className="header-content">
                        <div className="block-icon">
                            👨‍👩‍👧‍👦
                        </div>

                        <div>
                            <span className="eyebrow">
                                BLOQUE SEMÁNTICO
                            </span>

                            <h1>
                                {data.title}
                            </h1>

                            <p>
                                {
                                    data.description
                                }
                            </p>
                        </div>
                    </div>
                </header>

                {/* =================================================
                    PROGRESO
                ================================================= */}

                <section className="progress-section">
                    <div className="progress-info">
                        <div>
                            <span>
                                Progreso del
                                Listening
                            </span>

                            <strong>
                                {progress}%
                            </strong>
                        </div>

                        <span>
                            Etapa{" "}
                            {currentStage} de{" "}
                            {STAGES.length}
                        </span>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </section>

                {/* =================================================
                    ETAPAS
                ================================================= */}

                {renderStageNavigation()}

                {/* =================================================
                    ETAPA ACTUAL
                ================================================= */}

                <section className="current-stage-info">
                    <div className="current-stage-icon">
                        {
                            currentStageData.icon
                        }
                    </div>

                    <div>
                        <span>
                            ETAPA{" "}
                            {currentStage}
                        </span>

                        <h2>
                            {
                                currentStageData.title
                            }
                        </h2>

                        <p>
                            {
                                currentStageData.description
                            }
                        </p>
                    </div>

                    <div className="question-counter">
                        <strong>
                            {questionIndex +
                                1}
                        </strong>

                        <span>
                            {" "}
                            /{" "}
                            {
                                currentQuestions.length
                            }
                        </span>
                    </div>
                </section>

                {/* =================================================
                    ACTIVIDAD
                ================================================= */}

                {renderActivity()}

                {/* =================================================
                    FEEDBACK
                ================================================= */}

                {renderFeedback()}

                {/* =================================================
                    FOOTER
                ================================================= */}

                <footer className="listening-footer">
                    <div className="score-display">
                        <span>
                            ⭐ Puntos
                        </span>

                        <strong>
                            {score}
                        </strong>
                    </div>

                    <div className="learning-message">
                        Escucha → reconoce →
                        comprende → construye →
                        comunica
                    </div>
                </footer>
            </div>
        </main>
    );
}

export default ListeningPage;