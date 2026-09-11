
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getSemanticBlock } from "../services/semanticBlockService";

import "./SemanticBlockPage.css";


function SemanticBlockPage() {

    const { block } = useParams();
    const navigate = useNavigate();


    // =========================================
    // DATOS DEL BLOQUE
    // =========================================

    const [semanticBlock, setSemanticBlock] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // =========================================
    // ETAPAS
    // =========================================

    const [stageIndex, setStageIndex] = useState(0);


    // =========================================
    // ETAPA 3 · RELACIONAR
    // =========================================

    const [relationIndex, setRelationIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [relationFeedback, setRelationFeedback] = useState("");
    const [relationScore, setRelationScore] = useState(0);
    const [relationAnswered, setRelationAnswered] = useState(false);


    // =========================================
    // ETAPA 5 · CONSTRUIR
    // =========================================

    const [buildIndex, setBuildIndex] = useState(0);
    const [buildWords, setBuildWords] = useState([]);
    const [buildFeedback, setBuildFeedback] = useState("");
    const [buildCompleted, setBuildCompleted] = useState(false);


    // =========================================
    // ETAPA 6 · COMUNICAR
    // =========================================

    const [communicationIndex, setCommunicationIndex] = useState(0);
    const [communicationWords, setCommunicationWords] = useState([]);
    const [communicationFeedback, setCommunicationFeedback] = useState("");
    const [communicationCompleted, setCommunicationCompleted] = useState(false);


    // =========================================
    // CARGAR BLOQUE DESDE SPRING BOOT
    // =========================================

    useEffect(() => {

        async function loadBlock() {

            try {

                setLoading(true);
                setError("");

                const data =
                    await getSemanticBlock(block);

                setSemanticBlock(data);

            } catch (err) {

                console.error(err);

                setError(
                    "No fue posible cargar el bloque semántico."
                );

            } finally {

                setLoading(false);

            }
        }


        loadBlock();

    }, [block]);


    // =========================================
    // CARGANDO
    // =========================================

    if (loading) {

        return (
            <div className="semantic-block-page">

                <div className="semantic-block-container">

                    <p>
                        Cargando bloque semántico...
                    </p>

                </div>

            </div>
        );
    }


    // =========================================
    // ERROR
    // =========================================

    if (error || !semanticBlock) {

        return (
            <div className="semantic-block-page">

                <div className="semantic-block-container">

                    <p className="error-message">
                        {error ||
                            "Bloque semántico no encontrado."}
                    </p>

                    <button
                        className="back-button"
                        onClick={() => navigate("/")}
                    >
                        ← Volver a Mi Pirámide
                    </button>

                </div>

            </div>
        );
    }


    // =========================================
    // DATOS DEL BLOQUE
    // =========================================

    const stages =
        semanticBlock.stages || [];

    const vocabulary =
        semanticBlock.vocabulary || [];

    const concepts =
        semanticBlock.concepts || [];

    const relations =
        semanticBlock.relations || [];

    const expressions =
        semanticBlock.expressions || [];

    const sentences =
        semanticBlock.sentences || [];

    const communication =
        semanticBlock.communication || [];


    // =========================================
    // ETAPA ACTUAL
    // =========================================

    const currentStage =
        stages[stageIndex];


    // =========================================
    // RELACIÓN ACTUAL
    // =========================================

    const currentRelation =
        relations[relationIndex];


    // =========================================
    // COMUNICACIÓN
    // =========================================

    const communicationSituation =
        communication.length > 0
            ? communication[0]
            : null;


    const communicationSentences =
        communicationSituation?.sentences || [];


    const currentCommunicationSentence =
        communicationSentences.length > 0
            ? communicationSentences[
                communicationIndex
            ]
            : null;


    // =========================================
    // PROGRESO
    // =========================================

    const progress =
        stages.length > 0
            ? Math.round(
                ((stageIndex + 1) /
                    stages.length) *
                100
            )
            : 0;


    // =========================================
    // REFERENCIA SEMÁNTICA
    // =========================================

    const getReferenceName = (reference) => {

        if (!reference) {
            return "";
        }


        const referenceId =
            String(reference.id || "")
                .trim()
                .toLowerCase();


        const word =
            vocabulary.find(
                (item) =>
                    String(item.id)
                        .trim()
                        .toLowerCase() ===
                    referenceId
            );


        if (word) {
            return word.english;
        }


        const concept =
            concepts.find(
                (item) =>
                    String(item.id)
                        .trim()
                        .toLowerCase() ===
                    referenceId
            );


        if (concept) {
            return concept.name;
        }


        return reference.id;
    };


    // =========================================
    // TEXTO DE RELACIÓN
    // =========================================

    const getRelationText = (type) => {

        switch (
            String(type || "")
                .trim()
                .toLowerCase()
        ) {

            case "is_a":
                return "es un";

            case "related_to":
                return "está relacionado con";

            default:
                return type;
        }
    };


    // =========================================
    // OPCIONES DE RELACIÓN
    // =========================================

    const getAnswerOptions = (relation) => {

        if (!relation) {
            return [];
        }


        const targetType =
            String(
                relation.target?.type || ""
            )
                .trim()
                .toUpperCase();


        if (targetType === "CONCEPT") {

            return concepts.map(
                (concept) => ({
                    id: concept.id,
                    text: concept.name
                })
            );
        }


        if (targetType === "WORD") {

            return vocabulary.map(
                (word) => ({
                    id: word.id,
                    text: word.english
                })
            );
        }


        return [];
    };


    const answerOptions =
        getAnswerOptions(
            currentRelation
        );


    // =========================================
    // SELECCIONAR RESPUESTA DE RELACIÓN
    // =========================================

    const selectAnswer = (option) => {

        if (relationAnswered) {
            return;
        }


        setSelectedAnswer(option);

        setRelationFeedback("");
    };


    // =========================================
    // COMPROBAR RELACIÓN
    // =========================================

    const checkAnswer = () => {

        if (relationAnswered) {
            return;
        }


        if (!selectedAnswer) {

            setRelationFeedback(
                "incorrect"
            );

            return;
        }


        if (!currentRelation) {
            return;
        }


        const correctId =
            String(
                currentRelation.target?.id || ""
            )
                .trim()
                .toLowerCase();


        const selectedId =
            String(
                selectedAnswer.id || ""
            )
                .trim()
                .toLowerCase();


        if (selectedId === correctId) {

            setRelationAnswered(true);

            setRelationFeedback(
                "correct"
            );

            setRelationScore(
                (score) => score + 1
            );


            setTimeout(() => {

                if (
                    relationIndex <
                    relations.length - 1
                ) {

                    setRelationIndex(
                        (index) =>
                            index + 1
                    );

                    setSelectedAnswer(null);

                    setRelationFeedback("");

                    setRelationAnswered(false);

                } else {

                    setRelationFeedback(
                        "finished"
                    );

                }

            }, 700);

        } else {

            setRelationFeedback(
                "incorrect"
            );
        }
    };


    // =========================================
    // ETAPA 5 · EXPRESIÓN ACTUAL
    // =========================================

    const currentExpression =
        expressions.length > 0
            ? expressions[buildIndex]
            : null;


    // =========================================
    // PALABRAS DE LA EXPRESIÓN
    // =========================================

    const getExpressionWords = (expression) => {

        if (!expression) {
            return [];
        }


        if (
            expression.words &&
            expression.words.length > 0
        ) {

            return expression.words.map(
                (word) =>
                    word.english
            );
        }


        return String(
            expression.text || ""
        )
            .trim()
            .split(/\s+/)
            .filter(Boolean);
    };


    const expectedBuildWords =
        getExpressionWords(
            currentExpression
        );


    // =========================================
    // OPCIONES DE CONSTRUIR
    // =========================================

    const getBuildOptions = (expression) => {

        if (!expression) {
            return [];
        }


        const correctWords =
            getExpressionWords(
                expression
            );


        const vocabularyWords =
            vocabulary.map(
                (word) =>
                    word.english
            );


        const distractors =
            vocabularyWords.filter(
                (word) =>
                    !correctWords.some(
                        (correctWord) =>
                            correctWord.toLowerCase() ===
                            word.toLowerCase()
                    )
            );


        const selectedDistractors =
            distractors.slice(0, 2);


        return [
            ...correctWords,
            ...selectedDistractors
        ];
    };


    const buildOptions =
        getBuildOptions(
            currentExpression
        );


    // =========================================
    // SELECCIONAR PALABRA PARA CONSTRUIR
    // =========================================

    const selectBuildWord = (word) => {

        if (buildCompleted) {
            return;
        }


        const nextPosition =
            buildWords.length;


        const expectedWord =
            expectedBuildWords[
                nextPosition
            ];


        if (!expectedWord) {
            return;
        }


        if (
            word.toLowerCase() ===
            expectedWord.toLowerCase()
        ) {

            const newWords = [
                ...buildWords,
                word
            ];


            setBuildWords(newWords);

            setBuildFeedback(
                "correct"
            );


            if (
                newWords.length ===
                expectedBuildWords.length
            ) {

                setBuildCompleted(true);

                setBuildFeedback(
                    "finished"
                );
            }

        } else {

            setBuildFeedback(
                "incorrect"
            );
        }
    };


    // =========================================
    // SIGUIENTE EXPRESIÓN
    // =========================================

    const nextBuildExpression = () => {

        if (
            buildIndex <
            expressions.length - 1
        ) {

            setBuildIndex(
                (index) =>
                    index + 1
            );

            setBuildWords([]);

            setBuildFeedback("");

            setBuildCompleted(false);
        }
    };


    // =========================================
    // ETAPA 6 · PALABRAS DE LA ORACIÓN
    // =========================================

    const getSentenceWords = (sentence) => {

        if (!sentence) {
            return [];
        }


        return String(
            sentence.text || ""
        )
            .trim()
            .split(/\s+/)
            .filter(Boolean);
    };


    const expectedCommunicationWords =
        getSentenceWords(
            currentCommunicationSentence
        );


    // =========================================
    // OPCIONES DE COMUNICACIÓN
    // =========================================

    const getCommunicationOptions = (sentence) => {

        if (!sentence) {
            return [];
        }


        const sentenceWords =
            getSentenceWords(
                sentence
            );


        const vocabularyWords =
            vocabulary.map(
                (word) =>
                    word.english
            );


        const distractors =
            vocabularyWords.filter(
                (word) =>
                    !sentenceWords.some(
                        (sentenceWord) =>
                            sentenceWord.toLowerCase() ===
                            word.toLowerCase()
                    )
            );


        const selectedDistractors =
            distractors.slice(0, 2);


        return [
            ...sentenceWords,
            ...selectedDistractors
        ];
    };


    const communicationOptions =
        getCommunicationOptions(
            currentCommunicationSentence
        );


    // =========================================
    // SELECCIONAR PALABRA DE COMUNICACIÓN
    // =========================================

    const selectCommunicationWord = (word) => {

        if (communicationCompleted) {
            return;
        }


        const nextPosition =
            communicationWords.length;


        const expectedWord =
            expectedCommunicationWords[
                nextPosition
            ];


        if (!expectedWord) {
            return;
        }


        if (
            word.toLowerCase() ===
            expectedWord.toLowerCase()
        ) {

            const newWords = [
                ...communicationWords,
                word
            ];


            setCommunicationWords(
                newWords
            );


            setCommunicationFeedback(
                "correct"
            );


            if (
                newWords.length ===
                expectedCommunicationWords.length
            ) {

                setCommunicationCompleted(
                    true
                );


                setCommunicationFeedback(
                    "finished"
                );
            }

        } else {

            setCommunicationFeedback(
                "incorrect"
            );
        }
    };


    // =========================================
    // SIGUIENTE SITUACIÓN COMUNICATIVA
    // =========================================

    const nextCommunicationSentence = () => {

        if (
            communicationIndex <
            communicationSentences.length - 1
        ) {

            setCommunicationIndex(
                (index) =>
                    index + 1
            );


            setCommunicationWords([]);

            setCommunicationFeedback("");

            setCommunicationCompleted(false);
        }
    };


    // =========================================
    // CAMBIAR ETAPA
    // =========================================

    const changeStage = (index) => {

        if (
            index < 0 ||
            index >= stages.length
        ) {
            return;
        }


        setStageIndex(index);


        // Reiniciar RELACIONAR

        if (index === 2) {

            setSelectedAnswer(null);

            setRelationFeedback("");

            setRelationAnswered(false);
        }


        // Reiniciar CONSTRUIR

        if (index === 4) {

            setBuildIndex(0);

            setBuildWords([]);

            setBuildFeedback("");

            setBuildCompleted(false);
        }


        // Reiniciar COMUNICAR

        if (index === 5) {

            setCommunicationIndex(0);

            setCommunicationWords([]);

            setCommunicationFeedback("");

            setCommunicationCompleted(false);
        }
    };


    // =========================================
    // ETAPA 1 · DESCUBRIR
    // =========================================

    const renderDiscoverStage = () => {

        return (
            <section className="activity-section">

                <h2>
                    Descubre el vocabulario
                </h2>

                <p>
                    Explora las palabras fundamentales
                    del bloque semántico.
                </p>


                <div className="vocabulary-grid">

                    {vocabulary.map(
                        (word) => (

                            <div
                                className="word-card"
                                key={word.id}
                            >

                                <h3>
                                    {word.english}
                                </h3>

                                <p>
                                    {word.spanish}
                                </p>


                                {word.pronunciation && (

                                    <small>
                                        {word.pronunciation}
                                    </small>

                                )}

                            </div>

                        )
                    )}

                </div>

            </section>
        );
    };


    // =========================================
    // ETAPA 2 · RECONOCER
    // =========================================

    const renderRecognitionStage = () => {

        return (
            <section className="activity-section">

                <h2>
                    Reconoce las palabras
                </h2>

                <p>
                    Observa las palabras y relaciónalas
                    con su significado.
                </p>


                <div className="recognition-grid">

                    {vocabulary.map(
                        (word) => (

                            <div
                                className="recognition-card"
                                key={word.id}
                            >

                                <strong>
                                    {word.english}
                                </strong>

                                <span>
                                    {word.spanish}
                                </span>

                            </div>

                        )
                    )}

                </div>

            </section>
        );
    };


    // =========================================
    // ETAPA 3 · RELACIONAR
    // =========================================

    const renderRelationStage = () => {

        if (!relations.length) {

            return (
                <section className="activity-section">

                    <h2>
                        Relacionar
                    </h2>

                    <p>
                        No hay relaciones disponibles.
                    </p>

                </section>
            );
        }


        return (
            <section className="activity-section">

                <h2>
                    Relaciona las palabras
                </h2>

                <p>
                    Selecciona la respuesta que completa
                    correctamente la relación.
                </p>


                <div className="relation-score">

                    <strong>
                        Relaciones correctas:
                    </strong>{" "}

                    {relationScore} / {relations.length}

                </div>


                {currentRelation && (

                    <div className="relation-activity">

                        <div className="relation-prompt">

                            <div className="relation-source">

                                {getReferenceName(
                                    currentRelation.source
                                )}

                            </div>


                            <div className="relation-arrow">
                                ↓
                            </div>


                            <div className="relation-type">

                                {getRelationText(
                                    currentRelation.type
                                )}

                            </div>


                            <div className="relation-arrow">
                                ↓
                            </div>


                            <div className="relation-question-mark">
                                ?
                            </div>

                        </div>


                        <div className="relation-question">

                            <h3>
                                ¿Cuál completa la relación?
                            </h3>


                            <div className="relation-options">

                                {answerOptions.map(
                                    (option) => (

                                        <button
                                            key={option.id}
                                            className={`relation-answer ${
                                                selectedAnswer?.id ===
                                                option.id
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                selectAnswer(
                                                    option
                                                )
                                            }
                                            disabled={
                                                relationAnswered
                                            }
                                        >
                                            {option.text}
                                        </button>

                                    )
                                )}

                            </div>


                            <button
                                className="check-relation-button"
                                onClick={
                                    checkAnswer
                                }
                                disabled={
                                    relationAnswered
                                }
                            >
                                Comprobar respuesta
                            </button>


                            {relationFeedback && (

                                <div
                                    className={`relation-feedback ${
                                        relationFeedback
                                    }`}
                                >

                                    {relationFeedback ===
                                        "correct" &&
                                        "✓ ¡Correcto!"}

                                    {relationFeedback ===
                                        "incorrect" &&
                                        "✗ Inténtalo nuevamente"}

                                    {relationFeedback ===
                                        "finished" &&
                                        "✓ ¡Excelente! Has completado todas las relaciones."}

                                </div>

                            )}

                        </div>

                    </div>

                )}

            </section>
        );
    };


    // =========================================
    // ETAPA 4 · COMPRENDER
    // =========================================

    const renderUnderstandStage = () => {

        return (
            <section className="activity-section">

                <h2>
                    Comprender
                </h2>

                <p>
                    Comprende cómo las palabras
                    y conceptos aparecen en oraciones.
                </p>


                <div className="sentences-list">

                    {sentences.map(
                        (sentence) => (

                            <div
                                className="sentence-card"
                                key={sentence.id}
                            >

                                <h3>
                                    {sentence.text}
                                </h3>

                                <p>
                                    {sentence.translation}
                                </p>

                            </div>

                        )
                    )}

                </div>

            </section>
        );
    };


    // =========================================
    // ETAPA 5 · CONSTRUIR
    // =========================================

    const renderBuildStage = () => {

        if (!expressions.length) {

            return (
                <section className="activity-section">

                    <h2>
                        Construir
                    </h2>

                    <p>
                        No hay expresiones disponibles.
                    </p>

                </section>
            );
        }


        return (
            <section className="activity-section">

                <h2>
                    Construye la expresión
                </h2>

                <p>
                    Selecciona las palabras en el orden
                    correcto para construir la expresión.
                </p>


                <div className="build-score">

                    Expresión{" "}

                    {buildIndex + 1} de{" "}

                    {expressions.length}

                </div>


                <div className="build-instruction">

                    <span>
                        Construye:
                    </span>

                    <strong>
                        {currentExpression.meaning}
                    </strong>

                </div>


                <div className="build-sentence">

                    {buildWords.length === 0 ? (

                        <span className="build-placeholder">
                            Selecciona las palabras...
                        </span>

                    ) : (

                        buildWords.map(
                            (word, index) => (

                                <span
                                    className="build-word"
                                    key={index}
                                >
                                    {word}
                                </span>

                            )
                        )

                    )}

                </div>


                <div className="build-options">

                    {buildOptions.map(
                        (word, index) => (

                            <button
                                key={`${word}-${index}`}
                                className="build-word-button"
                                onClick={() =>
                                    selectBuildWord(
                                        word
                                    )
                                }
                                disabled={
                                    buildCompleted
                                }
                            >
                                {word}
                            </button>

                        )
                    )}

                </div>


                {buildFeedback && (

                    <div
                        className={`build-feedback ${
                            buildFeedback
                        }`}
                    >

                        {buildFeedback ===
                            "correct" &&
                            "✓ ¡Correcto! Continúa."}


                        {buildFeedback ===
                            "incorrect" &&
                            "✗ Esa palabra no corresponde todavía. Piensa en el orden de la expresión."}


                        {buildFeedback ===
                            "finished" &&
                            "✓ ¡Excelente! Has construido correctamente la expresión."}

                    </div>

                )}


                {buildCompleted && (

                    <div className="build-result">

                        <h3>
                            {currentExpression.text}
                        </h3>

                        <p>
                            {currentExpression.meaning}
                        </p>


                        {buildIndex <
                            expressions.length - 1 && (

                            <button
                                className="next-build-button"
                                onClick={
                                    nextBuildExpression
                                }
                            >
                                Siguiente expresión →
                            </button>

                        )}


                        {buildIndex ===
                            expressions.length - 1 && (

                            <p className="build-finished-message">
                                ✓ Has construido todas las expresiones.
                            </p>

                        )}

                    </div>

                )}

            </section>
        );
    };


    // =========================================
    // ETAPA 6 · COMUNICAR
    // =========================================

    const renderCommunicationStage = () => {

        if (!communicationSituation) {

            return (
                <section className="activity-section">

                    <h2>
                        Comunicar
                    </h2>

                    <p>
                        No hay situaciones comunicativas
                        disponibles.
                    </p>

                </section>
            );
        }


        if (!currentCommunicationSentence) {

            return (
                <section className="activity-section">

                    <h2>
                        Comunicar
                    </h2>

                    <p>
                        No hay oraciones disponibles
                        para esta situación.
                    </p>

                </section>
            );
        }


        const completedAll =
            communicationIndex ===
                communicationSentences.length - 1 &&
            communicationCompleted;


        return (
            <section className="activity-section">

                <h2>
                    Comunicar
                </h2>

                <p>
                    Utiliza el inglés para comunicarte
                    en una situación real.
                </p>


                {/* =================================
                    SITUACIÓN COMUNICATIVA
                ================================== */}

                <div className="communication-context">

                    <h3>
                        {communicationSituation.title}
                    </h3>

                    <p>
                        {communicationSituation.context}
                    </p>

                    <p>
                        <strong>
                            Objetivo:
                        </strong>{" "}

                        {communicationSituation.objective}
                    </p>

                </div>


                {/* =================================
                    CONTADOR
                ================================== */}

                <div className="communication-counter">

                    Situación{" "}

                    {communicationIndex + 1} de{" "}

                    {communicationSentences.length}

                </div>


                {!completedAll && (

                    <>

                        {/* =============================
                            INSTRUCCIÓN
                        ============================== */}

                        <div className="communication-prompt">

                            <span>
                                Presenta a este miembro
                                de tu familia:
                            </span>

                            <strong>
                                {currentCommunicationSentence.translation}
                            </strong>

                        </div>


                        {/* =============================
                            ORACIÓN EN CONSTRUCCIÓN
                        ============================== */}

                        <div className="communication-sentence">

                            {communicationWords.length === 0 ? (

                                <span className="communication-placeholder">
                                    Construye aquí la oración...
                                </span>

                            ) : (

                                communicationWords.map(
                                    (word, index) => (

                                        <span
                                            key={`${word}-${index}`}
                                            className="communication-word"
                                        >
                                            {word}
                                        </span>

                                    )
                                )

                            )}

                        </div>


                        {/* =============================
                            OPCIONES
                        ============================== */}

                        <div className="communication-options">

                            {communicationOptions.map(
                                (word, index) => (

                                    <button
                                        key={`${word}-${index}`}
                                        className="communication-word-button"
                                        onClick={() =>
                                            selectCommunicationWord(
                                                word
                                            )
                                        }
                                        disabled={
                                            communicationCompleted
                                        }
                                    >
                                        {word}
                                    </button>

                                )
                            )}

                        </div>


                        {/* =============================
                            RETROALIMENTACIÓN
                        ============================== */}

                        {communicationFeedback ===
                            "correct" && (

                            <div className="communication-feedback correct">

                                ✓ Correcto. Continúa
                                construyendo la oración.

                            </div>

                        )}


                        {communicationFeedback ===
                            "incorrect" && (

                            <div className="communication-feedback incorrect">

                                ✗ Esa no es la palabra
                                que corresponde ahora.
                                Intenta nuevamente.

                            </div>

                        )}


                        {communicationFeedback ===
                            "finished" && (

                            <div className="communication-feedback finished">

                                ✓ ¡Muy bien! Has comunicado
                                correctamente la idea.

                            </div>

                        )}

                    </>

                )}


                {/* =================================
                    RESULTADO DE LA SITUACIÓN
                ================================== */}

                {communicationCompleted &&
                    !completedAll && (

                        <div className="communication-result">

                            <h3>
                                {currentCommunicationSentence.text}
                            </h3>

                            <p>
                                Has construido correctamente
                                la oración.
                            </p>


                            <button
                                className="next-communication-button"
                                onClick={
                                    nextCommunicationSentence
                                }
                            >
                                Siguiente situación →
                            </button>

                        </div>

                    )}


                {/* =================================
                    COMUNICACIÓN COMPLETADA
                ================================== */}

                {completedAll && (

                    <div className="communication-result">

                        <h3>
                            🎉 ¡Comunicación completada!
                        </h3>

                        <p>
                            Has utilizado el vocabulario
                            de Family para construir
                            oraciones en una situación
                            comunicativa.
                        </p>


                        <div className="communication-final-sentence">

                            {currentCommunicationSentence.text}

                        </div>

                    </div>

                )}

            </section>
        );
    };


    // =========================================
    // CONTENIDO DE LA ETAPA
    // =========================================

    const renderStageContent = () => {

        switch (stageIndex) {

            case 0:
                return renderDiscoverStage();

            case 1:
                return renderRecognitionStage();

            case 2:
                return renderRelationStage();

            case 3:
                return renderUnderstandStage();

            case 4:
                return renderBuildStage();

            case 5:
                return renderCommunicationStage();

            default:
                return null;
        }
    };


    // =========================================
    // RENDER PRINCIPAL
    // =========================================

    return (
        <div className="semantic-block-page">

            <div className="semantic-block-container">

                {/* =================================
                    VOLVER
                ================================== */}

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Volver a Mi Pirámide
                </button>


                {/* =================================
                    ENCABEZADO
                ================================== */}

                <header className="semantic-block-header">

                    <span className="block-label">
                        BLOQUE SEMÁNTICO
                    </span>


                    <h1>
                        {semanticBlock.name}
                    </h1>


                    <p className="block-title">
                        {semanticBlock.title}
                    </p>


                    <p>
                        {semanticBlock.description}
                    </p>

                </header>


                {/* =================================
                    PROGRESO
                ================================== */}

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
                                    `${progress}%`
                            }}
                        />

                    </div>

                </section>


                {/* =================================
                    ETAPAS
                ================================== */}

                <section className="stages-section">

                    <div className="stages">

                        {stages.map(
                            (stage, index) => (

                                <button
                                    key={
                                        stage.number
                                    }
                                    className={`stage ${
                                        index === stageIndex
                                            ? "active"
                                            : index < stageIndex
                                                ? "completed"
                                                : ""
                                    }`}
                                    onClick={() =>
                                        changeStage(
                                            index
                                        )
                                    }
                                >

                                    <span className="stage-number">
                                        {stage.number}
                                    </span>

                                    <span className="stage-name">
                                        {stage.name}
                                    </span>

                                </button>

                            )
                        )}

                    </div>

                </section>


                {/* =================================
                    ETAPA ACTUAL
                ================================== */}

                {currentStage && (

                    <div className="current-stage">

                        <span className="stage-label">
                            ETAPA{" "}
                            {currentStage.number}
                        </span>


                        <h2>
                            {currentStage.name}
                        </h2>


                        <p>
                            {currentStage.description}
                        </p>

                    </div>

                )}


                {/* =================================
                    CONTENIDO
                ================================== */}

                <main className="semantic-content">

                    {renderStageContent()}

                </main>


                {/* =================================
                    NAVEGACIÓN
                ================================== */}

                <div className="stage-navigation">

                    <button
                        onClick={() =>
                            changeStage(
                                stageIndex - 1
                            )
                        }
                        disabled={
                            stageIndex === 0
                        }
                    >
                        ← Anterior
                    </button>


                    <button
                        onClick={() =>
                            changeStage(
                                stageIndex + 1
                            )
                        }
                        disabled={
                            stageIndex ===
                            stages.length - 1
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
