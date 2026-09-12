// src/data/semanticBlocks.js

export const semanticBlocks = {

    family: {
        id: "family",
        title: "Family",
        subtitle: "La familia",
        description:
            "Aprende vocabulario y expresiones básicas relacionadas con los miembros de la familia.",

        vocabulary: [
            {
                english: "father",
                spanish: "padre"
            },
            {
                english: "mother",
                spanish: "madre"
            },
            {
                english: "brother",
                spanish: "hermano"
            },
            {
                english: "sister",
                spanish: "hermana"
            },
            {
                english: "son",
                spanish: "hijo"
            },
            {
                english: "daughter",
                spanish: "hija"
            }
        ]
    },


    // =========================================================
    // HEALTH
    // =========================================================

    health: {

        id: "health",

        title: "Health",

        subtitle: "La salud",

        description:
            "Aprende vocabulario y expresiones básicas relacionadas con la salud, el cuerpo, las enfermedades y la atención médica.",


        // =====================================================
        // VOCABULARIO
        // =====================================================

        vocabulary: [

            {
                english: "health",
                spanish: "salud",
                category: "concept"
            },

            {
                english: "doctor",
                spanish: "médico",
                category: "people"
            },

            {
                english: "nurse",
                spanish: "enfermero / enfermera",
                category: "people"
            },

            {
                english: "patient",
                spanish: "paciente",
                category: "people"
            },

            {
                english: "hospital",
                spanish: "hospital",
                category: "place"
            },

            {
                english: "clinic",
                spanish: "clínica",
                category: "place"
            },

            {
                english: "medicine",
                spanish: "medicina",
                category: "treatment"
            },

            {
                english: "pain",
                spanish: "dolor",
                category: "condition"
            },

            {
                english: "headache",
                spanish: "dolor de cabeza",
                category: "condition"
            },

            {
                english: "fever",
                spanish: "fiebre",
                category: "condition"
            },

            {
                english: "cough",
                spanish: "tos",
                category: "condition"
            },

            {
                english: "sick",
                spanish: "enfermo / enferma",
                category: "condition"
            },

            {
                english: "healthy",
                spanish: "saludable",
                category: "condition"
            },

            {
                english: "body",
                spanish: "cuerpo",
                category: "body"
            },

            {
                english: "treatment",
                spanish: "tratamiento",
                category: "treatment"
            },

            {
                english: "appointment",
                spanish: "cita médica",
                category: "healthcare"
            }

        ],


        // =====================================================
        // EXPRESIONES
        // =====================================================

        expressions: [

            {
                english: "I feel sick.",
                spanish: "Me siento enfermo/a."
            },

            {
                english: "I have a headache.",
                spanish: "Tengo dolor de cabeza."
            },

            {
                english: "I have a fever.",
                spanish: "Tengo fiebre."
            },

            {
                english: "I have a cough.",
                spanish: "Tengo tos."
            },

            {
                english: "I have pain.",
                spanish: "Tengo dolor."
            },

            {
                english: "I need a doctor.",
                spanish: "Necesito un médico."
            },

            {
                english: "I need medicine.",
                spanish: "Necesito medicina."
            },

            {
                english: "I have an appointment.",
                spanish: "Tengo una cita médica."
            },

            {
                english: "Are you okay?",
                spanish: "¿Estás bien?"
            },

            {
                english: "I feel healthy.",
                spanish: "Me siento saludable."
            }

        ],


        // =====================================================
        // ETAPAS
        // =====================================================

        stages: [

            {
                id: 1,
                key: "discover",
                title: "Descubrir",
                description:
                    "Conoce las palabras fundamentales relacionadas con la salud."
            },

            {
                id: 2,
                key: "recognize",
                title: "Reconocer",
                description:
                    "Identifica palabras y conceptos relacionados con la salud."
            },

            {
                id: 3,
                key: "relate",
                title: "Relacionar",
                description:
                    "Relaciona personas, lugares, condiciones y acciones dentro del contexto de la salud."
            },

            {
                id: 4,
                key: "understand",
                title: "Comprender",
                description:
                    "Comprende expresiones sencillas utilizadas en situaciones relacionadas con la salud."
            },

            {
                id: 5,
                key: "build",
                title: "Construir",
                description:
                    "Construye frases sencillas utilizando vocabulario y expresiones del bloque."
            },

            {
                id: 6,
                key: "communicate",
                title: "Comunicar",
                description:
                    "Utiliza el vocabulario aprendido para comunicarse en situaciones sencillas."
            }

        ]

    }

};