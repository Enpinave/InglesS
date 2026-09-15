
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getSemanticBlock } from "../services/semanticBlockService";

import "./SemanticBlockPage.css";


/* ============================================================
   ETAPAS
   ============================================================ */

const STAGES = [
    {
        id: 1,
        name: "DESCUBRIR",
        description: "Conoce las palabras fundamentales del bloque.",
    },
    {
        id: 2,
        name: "RECONOCER",
        description:
            "Identifica y reconoce las palabras en inglés y su significado.",
    },
    {
        id: 3,
        name: "RELACIONAR",
        description:
            "Relaciona palabras y conceptos dentro del bloque semántico.",
    },
    {
        id: 4,
        name: "COMPRENDER",
        description:
            "Comprende expresiones y situaciones sencillas.",
    },
    {
        id: 5,
        name: "CONSTRUIR",
        description:
            "Construye expresiones usando las palabras aprendidas.",
    },
    {
        id: 6,
        name: "COMUNICAR",
        description:
            "Utiliza el lenguaje en una situación comunicativa.",
    },
];


/* ============================================================
   UTILIDADES
   ============================================================ */

function normalizeText(value = "") {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/[¿?¡!.,;:]/g, "")
        .replace(/\s+/g, " ");
}


function shuffleArray(array = []) {
    return [...array].sort(() => Math.random() - 0.5);
}


function getSentenceWords(text = "") {
    return String(text)
        .replace(/[¿?¡!.,;:"]/g, "")
        .split(/\s+/)
        .filter(Boolean);
}


/* ============================================================
   TEXTO EN INGLÉS
   ============================================================ */

function getEnglishWord(word) {

    if (!word) {
        return "";
    }

    return (
        word.english ||
        word.word ||
        word.term ||
        word.text ||
        ""
    );
}


function getEnglishSentence(sentence) {

    if (!sentence) {
        return "";
    }

    return (
        sentence.text ||
        sentence.english ||
        sentence.sentence ||
        sentence.expression ||
        ""
    );
}


/* ============================================================
   BOTÓN DE LISTENING
   ============================================================ */

function AudioButton({
    text,
    label = "Escuchar",
    small = false,
}) {

    const [speaking, setSpeaking] = useState(false);


    function handleSpeak() {

        const cleanText = String(text || "").trim();

        if (!cleanText) {
            return;
        }


        if (
            typeof window === "undefined" ||
            !("speechSynthesis" in window)
        ) {

            return;
        }


        window.speechSynthesis.cancel();


        const utterance =
            new SpeechSynthesisUtterance(
                cleanText
            );


        utterance.lang = "en-US";

        utterance.rate = 0.85;

        utterance.pitch = 1;

        utterance.volume = 1;


        /* ----------------------------------------------------
           Intentar seleccionar una voz inglesa
           ---------------------------------------------------- */

        const voices =
            window.speechSynthesis.getVoices();


        const englishVoice =
            voices.find(
                voice =>
                    voice.lang
                        ?.toLowerCase()
                        .startsWith("en")
            );


        if (englishVoice) {
            utterance.voice =
                englishVoice;
        }


        utterance.onstart = () => {
            setSpeaking(true);
        };


        utterance.onend = () => {
            setSpeaking(false);
        };


        utterance.onerror = () => {
            setSpeaking(false);
        };


        window.speechSynthesis.speak(
            utterance
        );

    }


    return (

        <button
            type="button"
            className={
                small
                    ? "audio-button audio-button-small"
                    : "audio-button"
            }
            onClick={handleSpeak}
            disabled={!text}
            title={`Escuchar: ${text || ""}`}
        >

            <span className="audio-button-icon">
                {speaking ? "🔊" : "🎧"}
            </span>

            <span>
                {speaking
                    ? "Reproduciendo..."
                    : label}
            </span>

        </button>

    );
}


/* ============================================================
   COMPONENTE
   ============================================================ */

function SemanticBlockPage() {

    const { block } = useParams();
    const navigate = useNavigate();


    /* ========================================================
       CARGA
       ======================================================== */

    const [blockData, setBlockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    /* ========================================================
       ETAPAS
       ======================================================== */

    const [stageIndex, setStageIndex] = useState(0);
    const [highestStageIndex, setHighestStageIndex] = useState(0);


    /* ========================================================
       DESCUBRIR
       ======================================================== */

    const [discoveredWords, setDiscoveredWords] = useState([]);
    const [discoverCompleted, setDiscoverCompleted] =
        useState(false);


    /* ========================================================
       RECONOCER
       ======================================================== */

    const [recognitionIndex, setRecognitionIndex] =
        useState(0);

    const [recognitionOptions, setRecognitionOptions] =
        useState([]);

    const [recognitionSelected, setRecognitionSelected] =
        useState(null);

    const [recognitionCorrect, setRecognitionCorrect] =
        useState(0);

    const [recognitionFinished, setRecognitionFinished] =
        useState(false);


    /* ========================================================
       RELACIONAR
       ======================================================== */

    const [relationIndex, setRelationIndex] =
        useState(0);

    const [relationOptions, setRelationOptions] =
        useState([]);

    const [relationSelected, setRelationSelected] =
        useState(null);

    const [relationCorrect, setRelationCorrect] =
        useState(0);

    const [relationFinished, setRelationFinished] =
        useState(false);


    /* ========================================================
       COMPRENDER
       ======================================================== */

    const [understandIndex, setUnderstandIndex] =
        useState(0);

    const [understandOptions, setUnderstandOptions] =
        useState([]);

    const [understandSelected, setUnderstandSelected] =
        useState(null);

    const [understandCorrect, setUnderstandCorrect] =
        useState(0);

    const [understandFinished, setUnderstandFinished] =
        useState(false);


    /* ========================================================
       CONSTRUIR
       ======================================================== */

    const [buildIndex, setBuildIndex] = useState(0);

    const [buildWords, setBuildWords] =
        useState([]);

    const [buildOptions, setBuildOptions] =
        useState([]);

    const [buildFeedback, setBuildFeedback] =
        useState("");

    const [buildFinished, setBuildFinished] =
        useState(false);

    const [buildCorrect, setBuildCorrect] =
        useState(0);


    /* ========================================================
       COMUNICAR
       ======================================================== */

    const [communicationIndex, setCommunicationIndex] =
        useState(0);

    const [communicationWords, setCommunicationWords] =
        useState([]);

    const [communicationOptions, setCommunicationOptions] =
        useState([]);

    const [communicationFeedback, setCommunicationFeedback] =
        useState("");

    const [communicationFinished, setCommunicationFinished] =
        useState(false);

    const [communicationCorrect, setCommunicationCorrect] =
        useState(0);


    /* ========================================================
       DETENER AUDIO AL SALIR DEL BLOQUE
       ======================================================== */

    useEffect(() => {

        return () => {

            if (
                typeof window !== "undefined" &&
                "speechSynthesis" in window
            ) {

                window.speechSynthesis.cancel();

            }

        };

    }, [block]);


    /* ========================================================
       CARGAR BLOQUE
       ======================================================== */

    useEffect(() => {

        let mounted = true;


        async function loadBlock() {

            try {

                setLoading(true);
                setError("");

                const data =
                    await getSemanticBlock(block);


                if (mounted) {
                    setBlockData(data);
                }

            } catch (err) {

                console.error(err);

                if (mounted) {

                    setError(
                        err.message ||
                        "No se pudo cargar el bloque semántico."
                    );

                }

            } finally {

                if (mounted) {
                    setLoading(false);
                }

            }

        }


        if (block) {
            loadBlock();
        }


        return () => {
            mounted = false;
        };

    }, [block]);


    /* ========================================================
       DATOS
       ======================================================== */

    const vocabulary = useMemo(() => {

        return Array.isArray(
            blockData?.vocabulary
        )
            ? blockData.vocabulary
            : [];

    }, [blockData]);


    const expressions = useMemo(() => {

        return Array.isArray(
            blockData?.expressions
        )
            ? blockData.expressions
            : [];

    }, [blockData]);


    const sentences = useMemo(() => {

        if (
            Array.isArray(
                blockData?.sentences
            )
        ) {

            return blockData.sentences;

        }

        return expressions;

    }, [
        blockData,
        expressions,
    ]);


    const relations = useMemo(() => {

        return Array.isArray(
            blockData?.relations
        )
            ? blockData.relations
            : [];

    }, [blockData]);


    const communication = useMemo(() => {

        if (
            Array.isArray(
                blockData?.communication
            )
        ) {

            return blockData.communication;

        }

        return [];

    }, [blockData]);


    /* ========================================================
       RESOLVER REFERENCIAS DEL BACKEND
       ======================================================== */

    function resolveReference(value) {

        if (
            value === null ||
            value === undefined
        ) {
            return "";
        }


        if (
            typeof value === "string" ||
            typeof value === "number"
        ) {
            return String(value);
        }


        if (
            typeof value !== "object"
        ) {
            return String(value);
        }


        const referenceId =
            value.id ||
            value.value ||
            value.key ||
            "";


        if (!referenceId) {
            return "";
        }


        /* ----------------------------------------------
           VOCABULARIO
           ---------------------------------------------- */

        const vocabularyItem =
            vocabulary.find(
                item =>
                    item?.id === referenceId
            );


        if (vocabularyItem) {

            return (
                vocabularyItem.english ||
                vocabularyItem.word ||
                vocabularyItem.term ||
                vocabularyItem.text ||
                vocabularyItem.name ||
                vocabularyItem.spanish ||
                referenceId
            );

        }


        /* ----------------------------------------------
           EXPRESIONES
           ---------------------------------------------- */

        const expressionItem =
            expressions.find(
                item =>
                    item?.id === referenceId
            );


        if (expressionItem) {

            return (
                expressionItem.text ||
                expressionItem.english ||
                expressionItem.expression ||
                expressionItem.name ||
                referenceId
            );

        }


        /* ----------------------------------------------
           ORACIONES
           ---------------------------------------------- */

        const sentenceItem =
            sentences.find(
                item =>
                    item?.id === referenceId
            );


        if (sentenceItem) {

            return (
                sentenceItem.text ||
                sentenceItem.english ||
                referenceId
            );

        }


        return referenceId;
    }


    /* ========================================================
       OBTENER FUENTE DE UNA RELACIÓN
       ======================================================== */

    function getRelationSource(relation) {

        if (!relation) {
            return "";
        }

        return resolveReference(
            relation.source ??
            relation.sourceWord ??
            relation.from ??
            relation.origin
        );

    }


    /* ========================================================
       OBTENER DESTINO DE UNA RELACIÓN
       ======================================================== */

    function getRelationTarget(relation) {

        if (!relation) {
            return "";
        }

        return resolveReference(
            relation.target ??
            relation.targetWord ??
            relation.answer ??
            relation.relatedWord ??
            relation.to ??
            relation.destination
        );

    }


    /* ========================================================
       PROGRESO
       ======================================================== */

    const progress = useMemo(() => {

        if (highestStageIndex <= 0) {
            return 0;
        }

        return Math.round(
            (
                highestStageIndex /
                (STAGES.length - 1)
            ) * 100
        );

    }, [highestStageIndex]);


    /* ========================================================
       DESBLOQUEAR SIGUIENTE
       ======================================================== */

    function unlockNextStage() {

        setHighestStageIndex(
            previous => {

                return Math.min(
                    previous + 1,
                    STAGES.length - 1
                );

            }
        );

    }


    /* ========================================================
       CAMBIAR ETAPA
       ======================================================== */

    function changeStage(index) {

        if (
            index >
            highestStageIndex
        ) {
            return;
        }

        setStageIndex(index);

    }


    /* ========================================================
       RECONOCER — PREPARAR OPCIONES
       ======================================================== */

    useEffect(() => {

        if (
            stageIndex !== 1 ||
            recognitionFinished ||
            vocabulary.length === 0
        ) {
            return;
        }


        const currentWord =
            vocabulary[recognitionIndex];


        if (!currentWord) {
            return;
        }


        const correct =
            currentWord.spanish ||
            currentWord.translation ||
            currentWord.meaning ||
            "";


        const alternatives =
            vocabulary
                .filter(
                    (_, index) =>
                        index !==
                        recognitionIndex
                )
                .map(
                    word =>
                        word.spanish ||
                        word.translation ||
                        word.meaning ||
                        ""
                )
                .filter(Boolean);


        const options =
            shuffleArray([
                correct,
                ...shuffleArray(
                    alternatives
                ).slice(0, 3),
            ]);


        setRecognitionOptions(
            options
        );

    }, [
        stageIndex,
        recognitionFinished,
        recognitionIndex,
        vocabulary,
    ]);


    /* ========================================================
       RECONOCER — RESPUESTA
       ======================================================== */

    function handleRecognitionAnswer(
        option
    ) {

        if (
            recognitionSelected !==
            null
        ) {
            return;
        }


        const currentWord =
            vocabulary[
                recognitionIndex
            ];


        const correct =
            currentWord?.spanish ||
            currentWord?.translation ||
            currentWord?.meaning ||
            "";


        const isCorrect =
            normalizeText(option) ===
            normalizeText(correct);


        setRecognitionSelected(
            option
        );


        if (isCorrect) {

            setRecognitionCorrect(
                previous =>
                    previous + 1
            );

        }


        setTimeout(() => {

            if (
                recognitionIndex <
                vocabulary.length - 1
            ) {

                setRecognitionIndex(
                    previous =>
                        previous + 1
                );

                setRecognitionSelected(
                    null
                );

            } else {

                setRecognitionFinished(
                    true
                );

                unlockNextStage();

            }

        }, 700);

    }


    /* ========================================================
       RELACIONAR — PREPARAR
       ======================================================== */

    useEffect(() => {

        if (
            stageIndex !== 2 ||
            relationFinished ||
            relations.length === 0
        ) {
            return;
        }


        const currentRelation =
            relations[
                relationIndex
            ];


        if (!currentRelation) {
            return;
        }


        const correct =
            getRelationTarget(
                currentRelation
            );


        if (!correct) {
            return;
        }


        const alternatives =
            relations
                .filter(
                    (_, index) =>
                        index !==
                        relationIndex
                )
                .map(
                    relation =>
                        getRelationTarget(
                            relation
                        )
                )
                .filter(Boolean);


        const uniqueAlternatives =
            [
                ...new Set(
                    alternatives
                ),
            ].filter(
                item =>
                    normalizeText(item) !==
                    normalizeText(correct)
            );


        const options =
            shuffleArray([
                correct,
                ...shuffleArray(
                    uniqueAlternatives
                ).slice(0, 3),
            ]);


        setRelationOptions(
            options
        );

    }, [
        stageIndex,
        relationFinished,
        relationIndex,
        relations,
        vocabulary,
        expressions,
        sentences,
    ]);


    /* ========================================================
       RELACIONAR — RESPUESTA
       ======================================================== */

    function handleRelationAnswer(
        option
    ) {

        if (
            relationSelected !==
            null
        ) {
            return;
        }


        const currentRelation =
            relations[
                relationIndex
            ];


        const correct =
            getRelationTarget(
                currentRelation
            );


        const isCorrect =
            normalizeText(option) ===
            normalizeText(correct);


        setRelationSelected(
            option
        );


        if (isCorrect) {

            setRelationCorrect(
                previous =>
                    previous + 1
            );

        }


        setTimeout(() => {

            if (
                relationIndex <
                relations.length - 1
            ) {

                setRelationIndex(
                    previous =>
                        previous + 1
                );

                setRelationSelected(
                    null
                );

            } else {

                setRelationFinished(
                    true
                );

                unlockNextStage();

            }

        }, 700);

    }


    /* ========================================================
       COMPRENDER — OBTENER DATOS
       ======================================================== */

    function getUnderstandQuestion(
        item
    ) {

        if (!item) {
            return "";
        }

        return (
            item.question ||
            item.prompt ||
            item.questionText ||
            ""
        );

    }


    function getUnderstandCorrectAnswer(
        item
    ) {

        if (!item) {
            return "";
        }

        return resolveReference(
            item.correctAnswer ??
            item.answer ??
            item.correct ??
            item.translation
        );

    }


    function getUnderstandOptions(
        item
    ) {

        if (!item) {
            return [];
        }


        if (
            Array.isArray(
                item.options
            )
        ) {

            return item.options
                .map(
                    option =>
                        resolveReference(
                            option
                        )
                )
                .filter(Boolean);

        }


        return [];

    }


    /* ========================================================
       COMPRENDER — PREPARAR
       ======================================================== */

    useEffect(() => {

        if (
            stageIndex !== 3 ||
            understandFinished ||
            sentences.length === 0
        ) {
            return;
        }


        const current =
            sentences[
                understandIndex
            ];


        if (!current) {
            return;
        }


        const options =
            getUnderstandOptions(
                current
            );


        if (
            options.length > 0
        ) {

            setUnderstandOptions(
                shuffleArray(
                    options
                )
            );

        } else {

            setUnderstandOptions([]);

        }

    }, [
        stageIndex,
        understandFinished,
        understandIndex,
        sentences,
        vocabulary,
        expressions,
    ]);


    /* ========================================================
       COMPRENDER — RESPUESTA
       ======================================================== */

    function handleUnderstandAnswer(
        option
    ) {

        if (
            understandSelected !==
            null
        ) {
            return;
        }


        const current =
            sentences[
                understandIndex
            ];


        const correct =
            getUnderstandCorrectAnswer(
                current
            );


        const isCorrect =
            normalizeText(option) ===
            normalizeText(correct);


        setUnderstandSelected(
            option
        );


        if (isCorrect) {

            setUnderstandCorrect(
                previous =>
                    previous + 1
            );

        }


        setTimeout(() => {

            if (
                understandIndex <
                sentences.length - 1
            ) {

                setUnderstandIndex(
                    previous =>
                        previous + 1
                );

                setUnderstandSelected(
                    null
                );

            } else {

                setUnderstandFinished(
                    true
                );

                unlockNextStage();

            }

        }, 700);

    }


    /* ========================================================
       CONSTRUIR — PREPARAR
       ======================================================== */

    useEffect(() => {

        if (
            stageIndex !== 4 ||
            buildFinished ||
            expressions.length === 0
        ) {
            return;
        }


        const expression =
            expressions[
                buildIndex
            ];


        if (!expression) {
            return;
        }


        const words =
            getSentenceWords(
                expression.text ||
                expression.english ||
                ""
            );


        setBuildWords([]);

        setBuildFeedback("");

        setBuildOptions(
            shuffleArray(words)
        );

    }, [
        stageIndex,
        buildFinished,
        buildIndex,
        expressions,
    ]);


    /* ========================================================
       CONSTRUIR — RESPUESTA
       ======================================================== */

    function handleBuildWord(
        word
    ) {

        if (
            buildFeedback.startsWith("✓")
        ) {
            return;
        }


        const expression =
            expressions[
                buildIndex
            ];


        if (!expression) {
            return;
        }


        const expectedWords =
            getSentenceWords(
                expression.text ||
                expression.english ||
                ""
            );


        const position =
            buildWords.length;


        const expectedWord =
            expectedWords[
                position
            ];


        if (
            normalizeText(word) ===
            normalizeText(expectedWord)
        ) {

            const newWords = [
                ...buildWords,
                word,
            ];


            setBuildWords(
                newWords
            );


            setBuildOptions(
                previous => {

                    const index =
                        previous.findIndex(
                            item =>
                                item ===
                                word
                        );


                    if (index === -1) {
                        return previous;
                    }


                    return previous.filter(
                        (_, itemIndex) =>
                            itemIndex !==
                            index
                    );

                }
            );


            if (
                newWords.length ===
                expectedWords.length
            ) {

                setBuildCorrect(
                    previous =>
                        previous + 1
                );


                setBuildFeedback(
                    "✓ ¡Excelente! La oración es correcta."
                );


                setTimeout(() => {

                    if (
                        buildIndex <
                        expressions.length - 1
                    ) {

                        setBuildIndex(
                            previous =>
                                previous + 1
                        );

                    } else {

                        setBuildFinished(
                            true
                        );

                        unlockNextStage();

                    }

                }, 900);

            }

        } else {

            setBuildFeedback(
                `La siguiente palabra es "${expectedWord}". Intenta nuevamente.`
            );

        }

    }


    /* ========================================================
       COMUNICAR
       ======================================================== */

    const communicationActivities =
        useMemo(() => {

            const result = [];


            communication.forEach(
                (item) => {

                    if (!item) {
                        return;
                    }


                    const context =
                        item.context ||
                        item.description ||
                        "Situación comunicativa";


                    /* ----------------------------------------
                       REFERENCIAS A SENTENCES
                       ---------------------------------------- */

                    if (
                        Array.isArray(
                            item.sentences
                        ) &&
                        item.sentences.length > 0
                    ) {

                        item.sentences.forEach(
                            reference => {

                                let sentenceId =
                                    "";


                                if (
                                    typeof reference ===
                                    "object"
                                ) {

                                    sentenceId =
                                        reference.id ||
                                        reference.value ||
                                        reference.key ||
                                        "";

                                } else {

                                    sentenceId =
                                        reference;

                                }


                                const sentence =
                                    sentences.find(
                                        item =>
                                            item?.id ===
                                            sentenceId
                                    );


                                if (sentence) {

                                    result.push({
                                        context,
                                        sentence,
                                    });

                                }

                            }
                        );


                        return;
                    }


                    /* ----------------------------------------
                       ORACIÓN DIRECTA
                       ---------------------------------------- */

                    const directText =
                        item.text ||
                        item.sentence ||
                        item.expression ||
                        item.english ||
                        "";


                    if (directText) {

                        result.push({
                            context,
                            sentence: item,
                        });

                    }

                }
            );


            return result;

        }, [
            communication,
            sentences,
        ]);


    /* ========================================================
       COMUNICAR — PREPARAR
       ======================================================== */

    useEffect(() => {

        if (
            stageIndex !== 5 ||
            communicationFinished ||
            communicationActivities.length === 0
        ) {
            return;
        }


        const activity =
            communicationActivities[
                communicationIndex
            ];


        if (!activity) {
            return;
        }


        const sentence =
            activity.sentence;


        const text =
            getEnglishSentence(
                sentence
            );


        const words =
            getSentenceWords(text);


        setCommunicationWords([]);

        setCommunicationFeedback("");

        setCommunicationOptions(
            shuffleArray(words)
        );

    }, [
        stageIndex,
        communicationFinished,
        communicationIndex,
        communicationActivities,
    ]);


    /* ========================================================
       COMUNICAR — RESPONDER
       ======================================================== */

    function handleCommunicationWord(
        word
    ) {

        if (
            communicationFeedback.startsWith(
                "✓"
            )
        ) {
            return;
        }


        const activity =
            communicationActivities[
                communicationIndex
            ];


        if (!activity) {
            return;
        }


        const sentence =
            activity.sentence;


        const text =
            getEnglishSentence(
                sentence
            );


        const expectedWords =
            getSentenceWords(text);


        const position =
            communicationWords.length;


        const expectedWord =
            expectedWords[
                position
            ];


        if (
            normalizeText(word) ===
            normalizeText(expectedWord)
        ) {

            const newWords = [
                ...communicationWords,
                word,
            ];


            setCommunicationWords(
                newWords
            );


            setCommunicationOptions(
                previous => {

                    const index =
                        previous.findIndex(
                            item =>
                                item ===
                                word
                        );


                    if (index === -1) {
                        return previous;
                    }


                    return previous.filter(
                        (_, itemIndex) =>
                            itemIndex !==
                            index
                    );

                }
            );


            if (
                newWords.length ===
                expectedWords.length
            ) {

                setCommunicationCorrect(
                    previous =>
                        previous + 1
                );


                setCommunicationFeedback(
                    "✓ Muy bien. Has construido correctamente la comunicación."
                );


                setTimeout(() => {

                    if (
                        communicationIndex <
                        communicationActivities.length - 1
                    ) {

                        setCommunicationIndex(
                            previous =>
                                previous + 1
                        );

                    } else {

                        setCommunicationFinished(
                            true
                        );

                    }

                }, 900);

            }

        } else {

            setCommunicationFeedback(
                "Observa el orden de la oración e intenta nuevamente."
            );

        }

    }


    /* ========================================================
       VOLVER
       ======================================================== */

    function handleBack() {

        if (
            typeof window !== "undefined" &&
            "speechSynthesis" in window
        ) {

            window.speechSynthesis.cancel();

        }


        navigate("/student/pyramid");

    }


    /* ========================================================
       CARGANDO
       ======================================================== */

    if (loading) {

        return (

            <div className="semantic-block-page">

                <div className="semantic-block-container">

                    <div className="loading-message">
                        Cargando bloque semántico...
                    </div>

                </div>

            </div>

        );

    }


    /* ========================================================
       ERROR
       ======================================================== */

    if (
        error ||
        !blockData
    ) {

        return (

            <div className="semantic-block-page">

                <div className="semantic-block-container">

                    <button
                        className="back-button"
                        onClick={handleBack}
                    >
                        ← Volver a Mi Pirámide
                    </button>


                    <div className="error-message">

                        {error ||
                            "No se encontró el bloque semántico."}

                    </div>

                </div>

            </div>

        );

    }


    /* ========================================================
       INFORMACIÓN DEL BLOQUE
       ======================================================== */

    const blockTitle =
        blockData.name ||
        blockData.title ||
        block;


    const blockDescription =
        blockData.description ||
        "Aprende vocabulario y expresiones básicas relacionadas con este bloque.";


    /* ========================================================
       RENDER
       ======================================================== */

    return (

        <div className="semantic-block-page">

            <div className="semantic-block-container">


                {/* ==================================================
                    VOLVER
                    ================================================== */}

                <button
                    className="back-button"
                    onClick={handleBack}
                >
                    ← Volver a Mi Pirámide
                </button>


                {/* ==================================================
                    CABECERA
                    ================================================== */}

                <header className="semantic-block-header">

                    <div className="block-label">
                        BLOQUE SEMÁNTICO
                    </div>

                    <h1 className="block-title">
                        {blockTitle}
                    </h1>

                    <p className="block-description">
                        {blockDescription}
                    </p>


                    {/* =================================================
                        INDICADOR READER + LISTENING
                    ================================================= */}

                    <div className="learning-modes">

                        <span className="learning-mode active">
                            📖 Reader
                        </span>

                        <span className="learning-mode">
                            🎧 Listening
                        </span>

                    </div>

                </header>


                {/* ==================================================
                    PROGRESO
                    ================================================== */}

                <section className="progress-section">

                    <div className="progress-header">

                        <strong>
                            Progreso del bloque
                        </strong>

                        <span>
                            {progress}%
                        </span>

                    </div>


                    <div className="progress-bar">

                        <div
                            className="progress-fill"
                            style={{
                                width:
                                    `${progress}%`,
                            }}
                        />

                    </div>

                </section>


                {/* ==================================================
                    ETAPAS
                    ================================================== */}

                <section className="stages-section">

                    <div className="stages">

                        {STAGES.map(
                            (
                                stage,
                                index
                            ) => {

                                const locked =
                                    index >
                                    highestStageIndex;


                                const completed =
                                    index <
                                    highestStageIndex;


                                const active =
                                    index ===
                                    stageIndex;


                                return (

                                    <button
                                        key={stage.id}
                                        className={[
                                            "stage",
                                            active
                                                ? "active"
                                                : "",
                                            completed
                                                ? "completed"
                                                : "",
                                            locked
                                                ? "locked"
                                                : "",
                                        ].join(" ")}
                                        disabled={locked}
                                        onClick={() =>
                                            changeStage(
                                                index
                                            )
                                        }
                                    >

                                        <span className="stage-number">

                                            {completed
                                                ? "✓"
                                                : stage.id}

                                        </span>


                                        <span className="stage-name">
                                            {stage.name}
                                        </span>

                                    </button>

                                );

                            }
                        )}

                    </div>

                </section>


                {/* ==================================================
                    CONTENIDO
                    ================================================== */}

                <main className="semantic-content">


                    {/* ==================================================
                        ETAPA 1 — DESCUBRIR
                        ================================================== */}

                    {stageIndex === 0 && (

                        <section className="activity-section">

                            <div className="stage-label">
                                ETAPA 1
                            </div>

                            <h2>
                                DESCUBRIR
                            </h2>

                            <p className="stage-description">
                                Conoce las palabras fundamentales
                                del bloque y descubre su significado.
                            </p>


                            <div className="vocabulary-grid">

                                {vocabulary.map(
                                    (
                                        word,
                                        index
                                    ) => {

                                        const english =
                                            getEnglishWord(
                                                word
                                            );


                                        const spanish =
                                            word?.spanish ||
                                            word?.translation ||
                                            word?.meaning ||
                                            "";


                                        const discovered =
                                            discoveredWords.includes(
                                                index
                                            );


                                        return (

                                            <div
                                                key={
                                                    word?.id ||
                                                    index
                                                }
                                                className="word-card"
                                            >

                                                <button
                                                    type="button"
                                                    className="word-card-main"
                                                    onClick={() => {

                                                        setDiscoveredWords(
                                                            previous =>
                                                                previous.includes(
                                                                    index
                                                                )
                                                                    ? previous
                                                                    : [
                                                                        ...previous,
                                                                        index,
                                                                    ]
                                                        );

                                                    }}
                                                >

                                                    <span className="word-english">
                                                        {english}
                                                    </span>


                                                    {discovered && (

                                                        <>

                                                            <span className="word-spanish">
                                                                {spanish}
                                                            </span>


                                                            {word?.pronunciation && (

                                                                <span className="word-pronunciation">
                                                                    {
                                                                        word.pronunciation
                                                                    }
                                                                </span>

                                                            )}

                                                        </>

                                                    )}

                                                </button>


                                                {/* --------------------------------
                                                    LISTENING
                                                --------------------------------- */}

                                                <AudioButton
                                                    text={english}
                                                    label="Escuchar"
                                                    small
                                                />

                                            </div>

                                        );

                                    }
                                )}

                            </div>


                            {!discoverCompleted && (

                                <button
                                    className="primary-button"
                                    disabled={
                                        vocabulary.length === 0 ||
                                        discoveredWords.length <
                                        vocabulary.length
                                    }
                                    onClick={() => {

                                        setDiscoverCompleted(
                                            true
                                        );

                                        unlockNextStage();

                                    }}
                                >
                                    ✓ Completar Descubrir
                                </button>

                            )}


                            {discoverCompleted && (

                                <div className="build-result">

                                    <strong>
                                        ✓ Descubrir completado
                                    </strong>

                                    <p>
                                        Has explorado todo el
                                        vocabulario del bloque.
                                    </p>

                                </div>

                            )}

                        </section>

                    )}


                    {/* ==================================================
                        ETAPA 2 — RECONOCER
                        ================================================== */}

                    {stageIndex === 1 && (

                        <section className="activity-section">

                            <div className="stage-label">
                                ETAPA 2
                            </div>

                            <h2>
                                RECONOCER
                            </h2>

                            <p className="stage-description">
                                Identifica y reconoce las palabras
                                en inglés y su significado.
                            </p>


                            {!recognitionFinished &&
                                vocabulary.length > 0 && (

                                    <div className="recognition-activity">

                                        <div className="build-score">

                                            Palabra{" "}
                                            {recognitionIndex + 1}
                                            {" de "}
                                            {vocabulary.length}

                                        </div>


                                        <div className="recognition-word">

                                            {
                                                getEnglishWord(
                                                    vocabulary[
                                                        recognitionIndex
                                                    ]
                                                )
                                            }

                                        </div>


                                        <AudioButton
                                            text={getEnglishWord(
                                                vocabulary[
                                                    recognitionIndex
                                                ]
                                            )}
                                            label="Escuchar palabra"
                                        />


                                        <p className="relation-question">
                                            ¿Qué significa?
                                        </p>


                                        <div className="relation-options">

                                            {recognitionOptions.map(
                                                (
                                                    option,
                                                    index
                                                ) => {

                                                    const current =
                                                        vocabulary[
                                                            recognitionIndex
                                                        ];


                                                    const correct =
                                                        current?.spanish ||
                                                        current?.translation ||
                                                        current?.meaning ||
                                                        "";


                                                    const selected =
                                                        recognitionSelected ===
                                                        option;


                                                    const isCorrect =
                                                        normalizeText(
                                                            option
                                                        ) ===
                                                        normalizeText(
                                                            correct
                                                        );


                                                    return (

                                                        <button
                                                            key={
                                                                `${option}-${index}`
                                                            }
                                                            className={
                                                                selected
                                                                    ? "selected"
                                                                    : ""
                                                            }
                                                            disabled={
                                                                recognitionSelected !==
                                                                null
                                                            }
                                                            onClick={() =>
                                                                handleRecognitionAnswer(
                                                                    option
                                                                )
                                                            }
                                                        >

                                                            {option}

                                                            {selected &&
                                                                isCorrect &&
                                                                " ✓"}

                                                            {selected &&
                                                                !isCorrect &&
                                                                " ✗"}

                                                        </button>

                                                    );

                                                }
                                            )}

                                        </div>

                                    </div>

                                )}


                            {recognitionFinished && (

                                <div className="build-result">

                                    <strong>
                                        ✓ Reconocer completado
                                    </strong>

                                    <p>
                                        Puntaje final:{" "}
                                        {recognitionCorrect}
                                        {" / "}
                                        {vocabulary.length}
                                    </p>


                                    <button
                                        className="primary-button"
                                        onClick={() =>
                                            setStageIndex(2)
                                        }
                                    >
                                        Continuar a Relacionar →
                                    </button>

                                </div>

                            )}

                        </section>

                    )}


                    {/* ==================================================
                        ETAPA 3 — RELACIONAR
                        ================================================== */}

                    {stageIndex === 2 && (

                        <section className="activity-section">

                            <div className="stage-label">
                                ETAPA 3
                            </div>

                            <h2>
                                RELACIONAR
                            </h2>

                            <p className="stage-description">
                                Relaciona palabras y conceptos
                                que pertenecen al mismo contexto.
                            </p>


                            {!relationFinished &&
                                relations.length > 0 && (

                                    <div className="relation-activity">

                                        <div className="build-score">

                                            Relación{" "}
                                            {relationIndex + 1}
                                            {" de "}
                                            {relations.length}

                                        </div>


                                        <div className="relation-prompt">

                                            <div className="relation-source">

                                                {getRelationSource(
                                                    relations[
                                                        relationIndex
                                                    ]
                                                )}

                                            </div>


                                            <div className="relation-arrow">
                                                →
                                            </div>


                                            <div className="relation-target">
                                                ?
                                            </div>

                                        </div>


                                        <AudioButton
                                            text={getRelationSource(
                                                relations[
                                                    relationIndex
                                                ]
                                            )}
                                            label="Escuchar palabra"
                                        />


                                        <p className="relation-question">
                                            ¿Qué palabra se relaciona
                                            con ella?
                                        </p>


                                        <div className="relation-options">

                                            {relationOptions.map(
                                                (
                                                    option,
                                                    index
                                                ) => {

                                                    const correct =
                                                        getRelationTarget(
                                                            relations[
                                                                relationIndex
                                                            ]
                                                        );


                                                    const selected =
                                                        relationSelected ===
                                                        option;


                                                    const isCorrect =
                                                        normalizeText(
                                                            option
                                                        ) ===
                                                        normalizeText(
                                                            correct
                                                        );


                                                    return (

                                                        <button
                                                            key={
                                                                `${option}-${index}`
                                                            }
                                                            className={
                                                                selected
                                                                    ? "selected"
                                                                    : ""
                                                            }
                                                            disabled={
                                                                relationSelected !==
                                                                null
                                                            }
                                                            onClick={() =>
                                                                handleRelationAnswer(
                                                                    option
                                                                )
                                                            }
                                                        >

                                                            {option}

                                                            {selected &&
                                                                isCorrect &&
                                                                " ✓"}

                                                            {selected &&
                                                                !isCorrect &&
                                                                " ✗"}

                                                        </button>

                                                    );

                                                }
                                            )}

                                        </div>

                                    </div>

                                )}


                            {!relationFinished &&
                                relations.length === 0 && (

                                    <div className="build-result">

                                        <strong>
                                            No hay relaciones disponibles.
                                        </strong>

                                        <p>
                                            El bloque todavía no tiene
                                            relaciones configuradas.
                                        </p>

                                    </div>

                                )}


                            {relationFinished && (

                                <div className="build-result">

                                    <strong>
                                        ✓ Relacionar completado
                                    </strong>

                                    <p>
                                        Puntaje final:{" "}
                                        {relationCorrect}
                                        {" / "}
                                        {relations.length}
                                    </p>


                                    <button
                                        className="primary-button"
                                        onClick={() =>
                                            setStageIndex(3)
                                        }
                                    >
                                        Continuar a Comprender →
                                    </button>

                                </div>

                            )}

                        </section>

                    )}


                    {/* ==================================================
                        ETAPA 4 — COMPRENDER
                        ================================================== */}

                    {stageIndex === 3 && (

                        <section className="activity-section">

                            <div className="stage-label">
                                ETAPA 4
                            </div>

                            <h2>
                                COMPRENDER
                            </h2>

                            <p className="stage-description">
                                Comprende expresiones y situaciones
                                sencillas relacionadas con el bloque.
                            </p>


                            {!understandFinished &&
                                sentences.length > 0 && (

                                    <div className="recognition-activity">

                                        <div className="build-score">

                                            Situación{" "}
                                            {understandIndex + 1}
                                            {" de "}
                                            {sentences.length}

                                        </div>


                                        <div className="sentence-card">

                                            <div className="sentence-english">

                                                {getEnglishSentence(
                                                    sentences[
                                                        understandIndex
                                                    ]
                                                )}

                                            </div>


                                            <AudioButton
                                                text={getEnglishSentence(
                                                    sentences[
                                                        understandIndex
                                                    ]
                                                )}
                                                label="Escuchar oración"
                                            />


                                            <div className="sentence-spanish">

                                                {
                                                    sentences[
                                                        understandIndex
                                                    ]?.translation ||
                                                    sentences[
                                                        understandIndex
                                                    ]?.spanish ||
                                                    ""
                                                }

                                            </div>

                                        </div>


                                        <p className="relation-question">

                                            {
                                                getUnderstandQuestion(
                                                    sentences[
                                                        understandIndex
                                                    ]
                                                ) ||
                                                "¿Qué significa esta expresión?"
                                            }

                                        </p>


                                        {understandOptions.length > 0 ? (

                                            <div className="relation-options">

                                                {understandOptions.map(
                                                    (
                                                        option,
                                                        index
                                                    ) => {

                                                        const correct =
                                                            getUnderstandCorrectAnswer(
                                                                sentences[
                                                                    understandIndex
                                                                ]
                                                            );


                                                        const selected =
                                                            understandSelected ===
                                                            option;


                                                        const isCorrect =
                                                            normalizeText(
                                                                option
                                                            ) ===
                                                            normalizeText(
                                                                correct
                                                            );


                                                        return (

                                                            <button
                                                                key={
                                                                    `${option}-${index}`
                                                                }
                                                                className={
                                                                    selected
                                                                        ? "selected"
                                                                        : ""
                                                                }
                                                                disabled={
                                                                    understandSelected !==
                                                                    null
                                                                }
                                                                onClick={() =>
                                                                    handleUnderstandAnswer(
                                                                        option
                                                                    )
                                                                }
                                                            >

                                                                {option}

                                                                {selected &&
                                                                    isCorrect &&
                                                                    " ✓"}

                                                                {selected &&
                                                                    !isCorrect &&
                                                                    " ✗"}

                                                            </button>

                                                        );

                                                    }
                                                )}

                                            </div>

                                        ) : (

                                            <button
                                                className="primary-button"
                                                onClick={() => {

                                                    setUnderstandCorrect(
                                                        previous =>
                                                            previous + 1
                                                    );


                                                    if (
                                                        understandIndex <
                                                        sentences.length - 1
                                                    ) {

                                                        setUnderstandIndex(
                                                            previous =>
                                                                previous + 1
                                                        );

                                                    } else {

                                                        setUnderstandFinished(
                                                            true
                                                        );

                                                        unlockNextStage();

                                                    }

                                                }}
                                            >
                                                Comprendido ✓
                                            </button>

                                        )}

                                    </div>

                                )}


                            {!understandFinished &&
                                sentences.length === 0 && (

                                    <div className="build-result">

                                        <strong>
                                            No hay expresiones disponibles.
                                        </strong>

                                        <p>
                                            El bloque todavía no tiene
                                            contenido para esta etapa.
                                        </p>

                                    </div>

                                )}


                            {understandFinished && (

                                <div className="build-result">

                                    <strong>
                                        ✓ Comprender completado
                                    </strong>

                                    <p>
                                        Has comprendido las expresiones
                                        principales del bloque.
                                    </p>


                                    <button
                                        className="primary-button"
                                        onClick={() =>
                                            setStageIndex(4)
                                        }
                                    >
                                        Continuar a Construir →
                                    </button>

                                </div>

                            )}

                        </section>

                    )}


                    {/* ==================================================
                        ETAPA 5 — CONSTRUIR
                        ================================================== */}

                    {stageIndex === 4 && (

                        <section className="activity-section">

                            <div className="stage-label">
                                ETAPA 5
                            </div>

                            <h2>
                                CONSTRUIR
                            </h2>

                            <p className="stage-description">
                                Construye correctamente las expresiones
                                utilizando las palabras aprendidas.
                            </p>


                            {!buildFinished &&
                                expressions.length > 0 && (

                                    <>

                                        <div className="build-score">

                                            Oración{" "}
                                            {buildIndex + 1}
                                            {" de "}
                                            {expressions.length}

                                        </div>


                                        <div className="build-sentence">

                                            <strong>
                                                Traducción:
                                            </strong>

                                            <span>

                                                {
                                                    expressions[
                                                        buildIndex
                                                    ]?.translation ||
                                                    expressions[
                                                        buildIndex
                                                    ]?.spanish ||
                                                    ""
                                                }

                                            </span>

                                        </div>


                                        {/* --------------------------------
                                            ESCUCHAR MODELO
                                        --------------------------------- */}

                                        <AudioButton
                                            text={getEnglishSentence(
                                                expressions[
                                                    buildIndex
                                                ]
                                            )}
                                            label="Escuchar modelo"
                                        />


                                        <div className="build-placeholder">

                                            {buildWords.length === 0
                                                ? "Selecciona las palabras..."
                                                : buildWords.map(
                                                    (
                                                        word,
                                                        index
                                                    ) => (

                                                        <span
                                                            key={
                                                                `${word}-${index}`
                                                            }
                                                            className="build-word"
                                                        >
                                                            {word}
                                                        </span>

                                                    )
                                                )}

                                        </div>


                                        <div className="build-options">

                                            {buildOptions.map(
                                                (
                                                    word,
                                                    index
                                                ) => (

                                                    <button
                                                        key={
                                                            `${word}-${index}`
                                                        }
                                                        className="build-word-button"
                                                        onClick={() =>
                                                            handleBuildWord(
                                                                word
                                                            )
                                                        }
                                                    >
                                                        {word}
                                                    </button>

                                                )
                                            )}

                                        </div>


                                        {buildFeedback && (

                                            <div
                                                className={
                                                    buildFeedback.startsWith(
                                                        "✓"
                                                    )
                                                        ? "build-feedback correct"
                                                        : "build-feedback incorrect"
                                                }
                                            >
                                                {buildFeedback}
                                            </div>

                                        )}

                                    </>

                                )}


                            {!buildFinished &&
                                expressions.length === 0 && (

                                    <div className="build-result">

                                        <strong>
                                            No hay expresiones disponibles.
                                        </strong>

                                    </div>

                                )}


                            {buildFinished && (

                                <div className="build-result">

                                    <strong>
                                        ✓ Construir completado
                                    </strong>

                                    <p>
                                        Has construido correctamente
                                        las expresiones del bloque.
                                    </p>


                                    <button
                                        className="primary-button next-build-button"
                                        onClick={() =>
                                            setStageIndex(5)
                                        }
                                    >
                                        Continuar a Comunicar →
                                    </button>

                                </div>

                            )}

                        </section>

                    )}


                    {/* ==================================================
                        ETAPA 6 — COMUNICAR
                        ================================================== */}

                    {stageIndex === 5 && (

                        <section className="activity-section">

                            <div className="stage-label">
                                ETAPA 6
                            </div>

                            <h2>
                                COMUNICAR
                            </h2>

                            <p className="stage-description">
                                Utiliza el vocabulario y las expresiones
                                aprendidas para comunicar una idea.
                            </p>


                            {!communicationFinished &&
                                communicationActivities.length > 0 && (

                                    <>

                                        <div className="communication-context">

                                            <h3>
                                                Situación comunicativa
                                            </h3>

                                            <p>

                                                {
                                                    communicationActivities[
                                                        communicationIndex
                                                    ]?.context
                                                }

                                            </p>

                                        </div>


                                        <div className="communication-counter">

                                            Situación{" "}
                                            {communicationIndex + 1}
                                            {" de "}
                                            {
                                                communicationActivities.length
                                            }

                                        </div>


                                        <div className="communication-sentence">

                                            {
                                                communicationActivities[
                                                    communicationIndex
                                                ]?.sentence?.translation ||
                                                communicationActivities[
                                                    communicationIndex
                                                ]?.sentence?.spanish ||
                                                ""
                                            }

                                        </div>


                                        {/* --------------------------------
                                            ESCUCHAR ORACIÓN
                                        --------------------------------- */}

                                        <AudioButton
                                            text={getEnglishSentence(
                                                communicationActivities[
                                                    communicationIndex
                                                ]?.sentence
                                            )}
                                            label="Escuchar oración"
                                        />


                                        <div className="communication-placeholder">

                                            {communicationWords.length === 0
                                                ? "Construye la expresión..."
                                                : communicationWords.map(
                                                    (
                                                        word,
                                                        index
                                                    ) => (

                                                        <span
                                                            key={
                                                                `${word}-${index}`
                                                            }
                                                            className="communication-word"
                                                        >
                                                            {word}
                                                        </span>

                                                    )
                                                )}

                                        </div>


                                        <div className="communication-options">

                                            {communicationOptions.map(
                                                (
                                                    word,
                                                    index
                                                ) => (

                                                    <button
                                                        key={
                                                            `${word}-${index}`
                                                        }
                                                        className="communication-word-button"
                                                        onClick={() =>
                                                            handleCommunicationWord(
                                                                word
                                                            )
                                                        }
                                                    >
                                                        {word}
                                                    </button>

                                                )
                                            )}

                                        </div>


                                        {communicationFeedback && (

                                            <div
                                                className={
                                                    communicationFeedback.startsWith(
                                                        "✓"
                                                    )
                                                        ? "communication-feedback correct"
                                                        : "communication-feedback incorrect"
                                                }
                                            >
                                                {communicationFeedback}
                                            </div>

                                        )}

                                    </>

                                )}


                            {!communicationFinished &&
                                communicationActivities.length === 0 && (

                                    <div className="build-result">

                                        <strong>
                                            No hay situaciones comunicativas.
                                        </strong>

                                        <p>
                                            El bloque todavía no tiene
                                            situaciones configuradas.
                                        </p>

                                    </div>

                                )}


                            {communicationFinished && (

                                <div className="build-result communication-final-sentence">

                                    <strong>
                                        🎉 ¡Bloque completado!
                                    </strong>

                                    <p>
                                        Has recorrido las seis etapas:
                                    </p>

                                    <p>
                                        Descubrir → Reconocer →
                                        Relacionar → Comprender →
                                        Construir → Comunicar
                                    </p>

                                    <p>
                                        Puntaje de comunicación:{" "}
                                        {communicationCorrect}
                                        {" / "}
                                        {
                                            communicationActivities.length
                                        }
                                    </p>


                                    <button
                                        className="primary-button"
                                        onClick={handleBack}
                                    >
                                        ← Volver a Mi Pirámide
                                    </button>

                                </div>

                            )}

                        </section>

                    )}

                </main>


                {/* ==================================================
                    NAVEGACIÓN INFERIOR
                    ================================================== */}

                <div className="stage-navigation">

                    <button
                        className="secondary-button"
                        disabled={
                            stageIndex === 0
                        }
                        onClick={() =>
                            setStageIndex(
                                previous =>
                                    Math.max(
                                        0,
                                        previous - 1
                                    )
                            )
                        }
                    >
                        ← Anterior
                    </button>


                    <span>
                        Etapa {stageIndex + 1} de{" "}
                        {STAGES.length}
                    </span>


                    <button
                        className="secondary-button"
                        disabled={
                            stageIndex >=
                            highestStageIndex
                        }
                        onClick={() =>
                            setStageIndex(
                                previous =>
                                    Math.min(
                                        highestStageIndex,
                                        previous + 1
                                    )
                            )
                        }
                    >
                        Siguiente →
                    </button>

                </div>

            </div>

        </div>

    );

}


export default SemanticBlockPage;
