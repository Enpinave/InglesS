
import { useNavigate } from "react-router-dom";
import "./PyramidPage.css";

function PyramidPage() {
    const navigate = useNavigate();

    // =========================================================
    // BLOQUES SEMÁNTICOS
    // =========================================================

    const semanticBlocks = [
        {
            id: "family",
            name: "Family",
            description: "La familia",
            available: true,
        },
        {
            id: "health",
            name: "Health",
            description: "La salud",
            available: true,
        },
        {
            id: "sports",
            name: "Sports",
            description: "Los deportes",
            available: true,
        },
        {
            id: "body",
            name: "Body",
            description: "El cuerpo",
            available: true,
        },
        {
            id: "education",
            name: "Education",
            description: "La educación",
            available: true,
        },
        {
            id: "shopping",
            name: "Shopping",
            description: "Las compras",
            available: true,
        },
        {
            id: "science",
            name: "Science",
            description: "La ciencia",
            available: true,
        },
    ];

    // =========================================================
    // ABRIR BLOQUE SEMÁNTICO
    // =========================================================

    const openBlock = (block) => {
        if (!block.available) {
            return;
        }

        navigate(`/${block.id}`);
    };

    // =========================================================
    // ABRIR LISTENING
    // =========================================================

    const openListening = () => {
        navigate("/student/listening");
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <div className="pyramid-page">

            {/* =================================================
                HEADER
            ================================================= */}

            <header className="pyramid-header">

                <h1>
                    Mi Pirámide
                </h1>

                <p>
                    Construye progresivamente tu conocimiento
                    del inglés.
                </p>

            </header>


            {/* =================================================
                PIRÁMIDE
            ================================================= */}

            <main className="pyramid-container">

                {/* =================================================
                    NIVEL 1 — COMUNICACIÓN
                ================================================= */}

                <section className="pyramid-level communication">

                    <h2>
                        COMUNICACIÓN
                    </h2>

                    <p>
                        Utiliza el inglés para comunicarte.
                    </p>

                </section>


                {/* =================================================
                    NIVEL 2 — ORACIONES
                ================================================= */}

                <section className="pyramid-level sentences">

                    <h2>
                        ORACIONES
                    </h2>

                    <p>
                        Construye oraciones con sentido.
                    </p>

                </section>


                {/* =================================================
                    NIVEL 3 — LISTENING
                ================================================= */}

                <button
                    type="button"
                    className="pyramid-level listening"
                    onClick={openListening}
                >

                    <h2>
                        🎧 LISTENING
                    </h2>

                    <p>
                        Desarrolla la comprensión auditiva
                        del inglés.
                    </p>

                    <span className="listening-action">
                        Escuchar →
                    </span>

                </button>


                {/* =================================================
                    NIVEL 4 — VOCABULARIO
                ================================================= */}

                <section className="pyramid-level vocabulary">

                    <h2>
                        VOCABULARIO
                    </h2>

                    <p>
                        Aprende palabras y sus relaciones.
                    </p>

                </section>


                {/* =================================================
                    NIVEL 5 — BLOQUES SEMÁNTICOS
                ================================================= */}

                <section className="pyramid-level semantic-blocks">

                    <h2>
                        BLOQUES SEMÁNTICOS
                    </h2>

                    <p>
                        Explora el inglés a partir de campos
                        de significado.
                    </p>


                    <div className="blocks-grid">

                        {semanticBlocks.map((block) => (

                            <button
                                key={block.id}
                                type="button"
                                className={`semantic-block ${
                                    block.available
                                        ? "available"
                                        : "locked"
                                }`}
                                onClick={() =>
                                    openBlock(block)
                                }
                                disabled={!block.available}
                            >

                                <span className="block-name">
                                    {block.name}
                                </span>

                                <span className="block-description">
                                    {block.description}
                                </span>

                                {block.available ? (
                                    <span className="block-action">
                                        Entrar →
                                    </span>
                                ) : (
                                    <span className="block-lock">
                                        🔒 Bloqueado
                                    </span>
                                )}

                            </button>

                        ))}

                    </div>

                </section>

            </main>

        </div>
    );
}

export default PyramidPage;
