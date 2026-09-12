import { useNavigate } from "react-router-dom";
import "./PyramidPage.css";
function PyramidPage() {

    const navigate = useNavigate();

    const semanticBlocks = [
        {
            id: "family",
            name: "Family",
            description: "La familia",
            available: true
        },
        {
            id: "health",
            name: "Health",
            description: "La salud",
            available: true
        },
        {
            id: "sports",
            name: "Sports",
            description: "Los deportes",
            available: true
        },
        {
            id: "body",
            name: "Body",
            description: "El cuerpo",
            available: true
        },

        {
            id: "education",
            name: "Education",
            description: "La educación",
            available: true
        },
        {
            id: "shopping",
            name: "Shopping",
            description: "Las compras",
            available: true
        },
        {
            id: "science",
            name: "Science",
            description: "La ciencia",
            available: true
        }
    ];

    const openBlock = (block) => {

        if (!block.available) {
            return;
        }

        navigate(`/${block.id}`);
    };

    return (
        <div className="pyramid-page">

            <header className="pyramid-header">

                <h1>Mi Pirámide</h1>

                <p>
                    Construye progresivamente tu conocimiento del inglés.
                </p>

            </header>


            <main className="pyramid-container">

                {/* NIVEL 5 */}
                <section className="pyramid-level communication">

                    <h2>COMUNICACIÓN</h2>

                    <p>
                        Utiliza el inglés para comunicarte.
                    </p>

                </section>


                {/* NIVEL 4 */}
                <section className="pyramid-level sentences">

                    <h2>ORACIONES</h2>

                    <p>
                        Construye oraciones con sentido.
                    </p>

                </section>


                {/* NIVEL 3 */}
                <section className="pyramid-level expressions">

                    <h2>EXPRESIONES</h2>

                    <p>
                        Aprende expresiones utilizadas en contexto.
                    </p>

                </section>


                {/* NIVEL 2 */}
                <section className="pyramid-level vocabulary">

                    <h2>VOCABULARIO</h2>

                    <p>
                        Aprende palabras y sus relaciones.
                    </p>

                </section>


                {/* BASE */}
                <section className="pyramid-level semantic-blocks">

                    <h2>BLOQUES SEMÁNTICOS</h2>

                    <p>
                        Explora el inglés a partir de campos de significado.
                    </p>


                    <div className="blocks-grid">

                        {semanticBlocks.map((block) => (

                            <button
                                key={block.id}
                                className={
                                    `semantic-block ${
                                        block.available
                                            ? "available"
                                            : "locked"
                                    }`
                                }
                                onClick={() => openBlock(block)}
                                disabled={!block.available}
                            >

                                <span className="block-name">
                                    {block.name}
                                </span>

                                <span className="block-description">
                                    {block.description}
                                </span>

                                {!block.available && (
                                    <span className="block-lock">
                                        🔒
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