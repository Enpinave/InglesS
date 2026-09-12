
package com.ingles.data;

import java.util.List;
import java.util.Map;

public class SportsData {

    // =========================================================
    // VOCABULARIO
    // =========================================================

    public static final List<Map<String, String>> VOCABULARY = List.of(

        Map.of(
            "id", "sports-001",
            "word", "sport",
            "translation", "deporte",
            "pronunciation", "/spɔːrt/"
        ),

        Map.of(
            "id", "sports-002",
            "word", "football",
            "translation", "fútbol",
            "pronunciation", "/ˈfʊtbɔːl/"
        ),

        Map.of(
            "id", "sports-003",
            "word", "basketball",
            "translation", "baloncesto",
            "pronunciation", "/ˈbɑːskɪtbɔːl/"
        ),

        Map.of(
            "id", "sports-004",
            "word", "tennis",
            "translation", "tenis",
            "pronunciation", "/ˈtenɪs/"
        ),

        Map.of(
            "id", "sports-005",
            "word", "swimming",
            "translation", "natación",
            "pronunciation", "/ˈswɪmɪŋ/"
        ),

        Map.of(
            "id", "sports-006",
            "word", "running",
            "translation", "correr",
            "pronunciation", "/ˈrʌnɪŋ/"
        ),

        Map.of(
            "id", "sports-007",
            "word", "cycling",
            "translation", "ciclismo",
            "pronunciation", "/ˈsaɪklɪŋ/"
        ),

        Map.of(
            "id", "sports-008",
            "word", "volleyball",
            "translation", "voleibol",
            "pronunciation", "/ˈvɒlibɔːl/"
        ),

        Map.of(
            "id", "sports-009",
            "word", "player",
            "translation", "jugador",
            "pronunciation", "/ˈpleɪər/"
        ),

        Map.of(
            "id", "sports-010",
            "word", "team",
            "translation", "equipo",
            "pronunciation", "/tiːm/"
        ),

        Map.of(
            "id", "sports-011",
            "word", "coach",
            "translation", "entrenador",
            "pronunciation", "/koʊtʃ/"
        ),

        Map.of(
            "id", "sports-012",
            "word", "ball",
            "translation", "balón",
            "pronunciation", "/bɔːl/"
        ),

        Map.of(
            "id", "sports-013",
            "word", "game",
            "translation", "juego",
            "pronunciation", "/ɡeɪm/"
        ),

        Map.of(
            "id", "sports-014",
            "word", "match",
            "translation", "partido",
            "pronunciation", "/mætʃ/"
        ),

        Map.of(
            "id", "sports-015",
            "word", "competition",
            "translation", "competencia",
            "pronunciation", "/ˌkɒmpəˈtɪʃən/"
        ),

        Map.of(
            "id", "sports-016",
            "word", "winner",
            "translation", "ganador",
            "pronunciation", "/ˈwɪnər/"
        ),

        Map.of(
            "id", "sports-017",
            "word", "training",
            "translation", "entrenamiento",
            "pronunciation", "/ˈtreɪnɪŋ/"
        )
    );


    // =========================================================
    // EXPRESIONES
    // =========================================================

    public static final List<Map<String, Object>> EXPRESSIONS = List.of(

        Map.of(
            "id", "sports-exp-001",
            "text", "I play football",
            "translation", "Yo juego fútbol.",
            "words", List.of("football")
        ),

        Map.of(
            "id", "sports-exp-002",
            "text", "I like basketball",
            "translation", "Me gusta el baloncesto.",
            "words", List.of("basketball")
        ),

        Map.of(
            "id", "sports-exp-003",
            "text", "I play tennis",
            "translation", "Yo juego tenis.",
            "words", List.of("tennis")
        ),

        Map.of(
            "id", "sports-exp-004",
            "text", "I like swimming",
            "translation", "Me gusta la natación.",
            "words", List.of("swimming")
        ),

        Map.of(
            "id", "sports-exp-005",
            "text", "I am a player",
            "translation", "Soy un jugador.",
            "words", List.of("player")
        ),

        Map.of(
            "id", "sports-exp-006",
            "text", "My team is ready",
            "translation", "Mi equipo está listo.",
            "words", List.of("team")
        ),

        Map.of(
            "id", "sports-exp-007",
            "text", "I train every day",
            "translation", "Entreno todos los días.",
            "words", List.of("training")
        ),

        Map.of(
            "id", "sports-exp-008",
            "text", "We play a match",
            "translation", "Jugamos un partido.",
            "words", List.of("match")
        )
    );


    // =========================================================
    // ORACIONES
    // =========================================================

    public static final List<Map<String, String>> SENTENCES = List.of(

        Map.of(
            "id", "sports-exp-001",
            "text", "I play football",
            "translation", "Yo juego fútbol."
        ),

        Map.of(
            "id", "sports-exp-002",
            "text", "I like basketball",
            "translation", "Me gusta el baloncesto."
        ),

        Map.of(
            "id", "sports-exp-003",
            "text", "I play tennis",
            "translation", "Yo juego tenis."
        ),

        Map.of(
            "id", "sports-exp-004",
            "text", "I like swimming",
            "translation", "Me gusta la natación."
        ),

        Map.of(
            "id", "sports-exp-005",
            "text", "I am a player",
            "translation", "Soy un jugador."
        ),

        Map.of(
            "id", "sports-exp-006",
            "text", "My team is ready",
            "translation", "Mi equipo está listo."
        ),

        Map.of(
            "id", "sports-exp-007",
            "text", "I train every day",
            "translation", "Entreno todos los días."
        ),

        Map.of(
            "id", "sports-exp-008",
            "text", "We play a match",
            "translation", "Jugamos un partido."
        )
    );


    // =========================================================
    // RELACIONES SEMÁNTICAS
    // =========================================================

    public static final List<Map<String, String>> RELATIONS = List.of(

        Map.of(
            "from", "sports-002",
            "to", "sports-012",
            "type", "USES"
        ),

        Map.of(
            "from", "sports-003",
            "to", "sports-012",
            "type", "USES"
        ),

        Map.of(
            "from", "sports-009",
            "to", "sports-010",
            "type", "BELONGS_TO"
        ),

        Map.of(
            "from", "sports-011",
            "to", "sports-010",
            "type", "LEADS"
        ),

        Map.of(
            "from", "sports-009",
            "to", "sports-011",
            "type", "WORKS_WITH"
        ),

        Map.of(
            "from", "sports-014",
            "to", "sports-013",
            "type", "IS_A"
        ),

        Map.of(
            "from", "sports-015",
            "to", "sports-014",
            "type", "CONTAINS"
        ),

        Map.of(
            "from", "sports-016",
            "to", "sports-015",
            "type", "CAN_WIN"
        ),

        Map.of(
            "from", "sports-017",
            "to", "sports-009",
            "type", "PREPARES"
        ),

        Map.of(
            "from", "sports-005",
            "to", "sports-001",
            "type", "IS_A"
        ),

        Map.of(
            "from", "sports-006",
            "to", "sports-001",
            "type", "IS_A"
        ),

        Map.of(
            "from", "sports-007",
            "to", "sports-001",
            "type", "IS_A"
        ),

        Map.of(
            "from", "sports-008",
            "to", "sports-001",
            "type", "IS_A"
        ),

        Map.of(
            "from", "sports-010",
            "to", "sports-009",
            "type", "HAS"
        ),

        Map.of(
            "from", "sports-011",
            "to", "sports-017",
            "type", "GUIDES"
        )
    );


    // =========================================================
    // CONTEXTOS DE COMUNICACIÓN
    // =========================================================

    public static final List<Map<String, Object>> COMMUNICATION = List.of(

        Map.of(
            "id", "sports-context-001",
            "context", "You are talking about your favorite sport.",
            "sentences", List.of(
                Map.of(
                    "type", "SENTENCE",
                    "id", "sports-exp-001"
                ),
                Map.of(
                    "type", "SENTENCE",
                    "id", "sports-exp-002"
                )
            )
        ),

        Map.of(
            "id", "sports-context-002",
            "context", "You are talking about a sports match.",
            "sentences", List.of(
                Map.of(
                    "type", "SENTENCE",
                    "id", "sports-exp-005"
                ),
                Map.of(
                    "type", "SENTENCE",
                    "id", "sports-exp-008"
                )
            )
        ),

        Map.of(
            "id", "sports-context-003",
            "context", "You are talking about your team.",
            "sentences", List.of(
                Map.of(
                    "type", "SENTENCE",
                    "id", "sports-exp-006"
                ),
                Map.of(
                    "type", "SENTENCE",
                    "id", "sports-exp-007"
                )
            )
        )
    );


    // =========================================================
    // INFORMACIÓN GENERAL DEL BLOQUE
    // =========================================================

    public static final Map<String, String> BLOCK = Map.of(
        "id", "sports",
        "name", "Sports",
        "translation", "Los deportes",
        "description",
        "Aprende vocabulario y expresiones relacionadas con los deportes."
    );


    // =========================================================
    // UTILIDAD
    // =========================================================

    private SportsData() {
        // Clase de datos estáticos.
    }
}
