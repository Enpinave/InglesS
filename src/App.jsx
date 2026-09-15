
import { Routes, Route, Navigate } from "react-router-dom";

import PyramidPage from "./pages/PyramidPage";
import SemanticBlockPage from "./pages/SemanticBlockPage";
import ListeningPage from "./pages/listening/ListeningPage";

function App() {
    return (
        <Routes>

            {/* =================================================
                PÁGINA PRINCIPAL
            ================================================= */}

            <Route
                path="/"
                element={<PyramidPage />}
            />


            {/* =================================================
                LISTENING
            ================================================= */}

            <Route
                path="/student/listening"
                element={<ListeningPage />}
            />


            {/* =================================================
                BLOQUES SEMÁNTICOS
                Ejemplo:
                /family
                /health
                /sports
            ================================================= */}

            <Route
                path="/:block"
                element={<SemanticBlockPage />}
            />


            {/* =================================================
                RUTA DESCONOCIDA
            ================================================= */}

            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>
    );
}

export default App;
