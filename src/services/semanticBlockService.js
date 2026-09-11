const API_URL = "http://localhost:8080/api/blocks";

export async function getSemanticBlock(blockId) {
    const response = await fetch(`${API_URL}/${blockId}`);

    if (!response.ok) {
        throw new Error(
            `No se pudo cargar el bloque semántico: ${blockId}`
        );
    }

    return response.json();
}