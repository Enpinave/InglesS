import { Routes, Route, Navigate } from "react-router-dom";

import PyramidPage from "./pages/PyramidPage";
import SemanticBlockPage from "./pages/SemanticBlockPage";

function App() {
    return (
        <Routes>

            {/* Página principal */}
            <Route
                path="/"
                element={<PyramidPage />}
            />

            {/* Bloque semántico */}
            <Route
                path="/:block"
                element={<SemanticBlockPage />}
            />

            {/* Ruta desconocida */}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>
    );
}

export default App;