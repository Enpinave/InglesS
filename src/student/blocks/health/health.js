
// ============================================================
// BLOQUE SEMÁNTICO: HEALTH
// ============================================================

export const health = {

    id: "health",

    title: "Health",

    subtitle: "La salud",

    description:
        "Aprende vocabulario, relaciones y expresiones básicas para hablar sobre la salud y situaciones cotidianas.",


    // ========================================================
    // VOCABULARIO
    // ========================================================

    vocabulary: [

        // PEOPLE
        {
            id: "doctor",
            english: "doctor",
            spanish: "médico",
            category: "people"
        },

        {
            id: "nurse",
            english: "nurse",
            spanish: "enfermero / enfermera",
            category: "people"
        },

        {
            id: "patient",
            english: "patient",
            spanish: "paciente",
            category: "people"
        },


        // PLACES
        {
            id: "hospital",
            english: "hospital",
            spanish: "hospital",
            category: "places"
        },

        {
            id: "clinic",
            english: "clinic",
            spanish: "clínica",
            category: "places"
        },


        // BODY
        {
            id: "body",
            english: "body",
            spanish: "cuerpo",
            category: "body"
        },

        {
            id: "head",
            english: "head",
            spanish: "cabeza",
            category: "body"
        },

        {
            id: "stomach",
            english: "stomach",
            spanish: "estómago",
            category: "body"
        },

        {
            id: "hand",
            english: "hand",
            spanish: "mano",
            category: "body"
        },

        {
            id: "leg",
            english: "leg",
            spanish: "pierna",
            category: "body"
        },


        // CONDITIONS
        {
            id: "pain",
            english: "pain",
            spanish: "dolor",
            category: "conditions"
        },

        {
            id: "headache",
            english: "headache",
            spanish: "dolor de cabeza",
            category: "conditions"
        },

        {
            id: "fever",
            english: "fever",
            spanish: "fiebre",
            category: "conditions"
        },

        {
            id: "cough",
            english: "cough",
            spanish: "tos",
            category: "conditions"
        },

        {
            id: "cold",
            english: "cold",
            spanish: "resfriado",
            category: "conditions"
        },

        {
            id: "sick",
            english: "sick",
            spanish: "enfermo / enferma",
            category: "conditions"
        },

        {
            id: "healthy",
            english: "healthy",
            spanish: "saludable",
            category: "conditions"
        },


        // TREATMENT
        {
            id: "medicine",
            english: "medicine",
            spanish: "medicina",
            category: "treatment"
        },

        {
            id: "treatment",
            english: "treatment",
            spanish: "tratamiento",
            category: "treatment"
        },


        // HEALTHCARE
        {
            id: "appointment",
            english: "appointment",
            spanish: "cita médica",
            category: "healthcare"
        },

        {
            id: "checkup",
            english: "checkup",
            spanish: "chequeo médico",
            category: "healthcare"
        }

    ],


    // ========================================================
    // EXPRESIONES
    // ========================================================

    expressions: [

        {
            id: "exp1",
            english: "I feel sick.",
            spanish: "Me siento enfermo/a."
        },

        {
            id: "exp2",
            english: "I feel healthy.",
            spanish: "Me siento saludable."
        },

        {
            id: "exp3",
            english: "I have a headache.",
            spanish: "Tengo dolor de cabeza."
        },

        {
            id: "exp4",
            english: "I have a fever.",
            spanish: "Tengo fiebre."
        },

        {
            id: "exp5",
            english: "I have a cough.",
            spanish: "Tengo tos."
        },

        {
            id: "exp6",
            english: "I have a stomachache.",
            spanish: "Tengo dolor de estómago."
        },

        {
            id: "exp7",
            english: "I need a doctor.",
            spanish: "Necesito un médico."
        },

        {
            id: "exp8",
            english: "I need medicine.",
            spanish: "Necesito medicina."
        },

        {
            id: "exp9",
            english: "I have an appointment.",
            spanish: "Tengo una cita médica."
        },

        {
            id: "exp10",
            english: "Are you okay?",
            spanish: "¿Estás bien?"
        },

        {
            id: "exp11",
            english: "What's wrong?",
            spanish: "¿Qué pasa?"
        },

        {
            id: "exp12",
            english: "I don't feel well.",
            spanish: "No me siento bien."
        }

    ],


    // ========================================================
    // RELACIONES SEMÁNTICAS
    // ========================================================

    semanticRelations: {

        people: [
            "doctor",
            "nurse",
            "patient"
        ],

        places: [
            "hospital",
            "clinic"
        ],

        body: [
            "body",
            "head",
            "stomach",
            "hand",
            "leg"
        ],

        conditions: [
            "pain",
            "headache",
            "fever",
            "cough",
            "cold",
            "sick",
            "healthy"
        ],

        treatment: [
            "medicine",
            "treatment"
        ],

        healthcare: [
            "appointment",
            "checkup"
        ]

    },


    // ========================================================
    // RELACIONES CONCEPTUALES
    // ========================================================

    relations: [

        {
            from: "doctor",
            relation: "works_at",
            to: "hospital"
        },

        {
            from: "doctor",
            relation: "helps",
            to: "patient"
        },

        {
            from: "nurse",
            relation: "helps",
            to: "patient"
        },

        {
            from: "patient",
            relation: "visits",
            to: "doctor"
        },

        {
            from: "patient",
            relation: "visits",
            to: "hospital"
        },

        {
            from: "headache",
            relation: "affects",
            to: "head"
        },

        {
            from: "stomachache",
            relation: "affects",
            to: "stomach"
        },

        {
            from: "fever",
            relation: "is_a",
            to: "condition"
        },

        {
            from: "cough",
            relation: "is_a",
            to: "condition"
        },

        {
            from: "medicine",
            relation: "used_for",
            to: "treatment"
        },

        {
            from: "appointment",
            relation: "with",
            to: "doctor"
        }

    ],


    // ========================================================
    // ETAPAS DE APRENDIZAJE
    // ========================================================

    stages: [

        // ====================================================
        // 1. DESCUBRIR
        // ====================================================

        {
            id: 1,

            key: "discover",

            title: "Descubrir",

            description:
                "Conoce las palabras fundamentales relacionadas con la salud.",

            activities: [

                {
                    id: "health-discover-1",

                    type: "explore",

                    title: "Explora el vocabulario",

                    instruction:
                        "Observa cada palabra y descubre su significado.",

                    items: [
                        "doctor",
                        "nurse",
                        "patient",
                        "hospital",
                        "medicine",
                        "pain",
                        "headache",
                        "fever"
                    ]
                },

                {
                    id: "health-discover-2",

                    type: "identify",

                    title: "Descubre las palabras",

                    instruction:
                        "Relaciona cada palabra en inglés con su significado.",

                    items: [
                        {
                            english: "doctor",
                            spanish: "médico"
                        },
                        {
                            english: "hospital",
                            spanish: "hospital"
                        },
                        {
                            english: "medicine",
                            spanish: "medicina"
                        },
                        {
                            english: "fever",
                            spanish: "fiebre"
                        }
                    ]
                }

            ]
        },


        // ====================================================
        // 2. RECONOCER
        // ====================================================

        {
            id: 2,

            key: "recognize",

            title: "Reconocer",

            description:
                "Identifica palabras y conceptos relacionados con la salud.",

            activities: [

                {
                    id: "health-recognize-1",

                    type: "multipleChoice",

                    title: "¿Qué palabra corresponde?",

                    instruction:
                        "Selecciona la palabra correcta.",

                    questions: [

                        {
                            question: "¿Cuál significa médico?",

                            options: [
                                "doctor",
                                "patient",
                                "nurse",
                                "hospital"
                            ],

                            answer: "doctor"
                        },

                        {
                            question: "¿Cuál significa fiebre?",

                            options: [
                                "pain",
                                "fever",
                                "cough",
                                "cold"
                            ],

                            answer: "fever"
                        },

                        {
                            question: "¿Cuál significa medicina?",

                            options: [
                                "treatment",
                                "medicine",
                                "appointment",
                                "hospital"
                            ],

                            answer: "medicine"
                        }

                    ]
                },


                {
                    id: "health-recognize-2",

                    type: "classification",

                    title: "Clasifica las palabras",

                    instruction:
                        "Ubica cada palabra en la categoría correcta.",

                    categories: {

                        people: [
                            "doctor",
                            "nurse",
                            "patient"
                        ],

                        places: [
                            "hospital",
                            "clinic"
                        ],

                        conditions: [
                            "fever",
                            "headache",
                            "cough"
                        ]

                    }

                }

            ]

        },


        // ====================================================
        // 3. RELACIONAR
        // ====================================================

        {
            id: 3,

            key: "relate",

            title: "Relacionar",

            description:
                "Relaciona personas, lugares, partes del cuerpo y condiciones de salud.",

            activities: [

                {
                    id: "health-relate-1",

                    type: "matching",

                    title: "Relaciona los conceptos",

                    instruction:
                        "Une cada concepto con el elemento relacionado.",

                    pairs: [

                        {
                            left: "doctor",
                            right: "patient"
                        },

                        {
                            left: "doctor",
                            right: "hospital"
                        },

                        {
                            left: "headache",
                            right: "head"
                        },

                        {
                            left: "medicine",
                            right: "treatment"
                        }

                    ]

                },


                {
                    id: "health-relate-2",

                    type: "semanticNetwork",

                    title: "Construye relaciones",

                    instruction:
                        "Descubre cómo se conectan los conceptos.",

                    relations: [
                        "doctor → patient",
                        "doctor → hospital",
                        "headache → head",
                        "medicine → treatment"
                    ]

                }

            ]

        },


        // ====================================================
        // 4. COMPRENDER
        // ====================================================

        {
            id: 4,

            key: "understand",

            title: "Comprender",

            description:
                "Comprende expresiones sencillas utilizadas en situaciones de salud.",

            activities: [

                {
                    id: "health-understand-1",

                    type: "situation",

                    title: "Comprende la situación",

                    instruction:
                        "Lee la situación y selecciona la respuesta adecuada.",

                    situations: [

                        {
                            question: "You have a headache. What can you say?",

                            options: [
                                "I have a headache.",
                                "I am a doctor.",
                                "I work at a hospital."
                            ],

                            answer: "I have a headache."
                        },

                        {
                            question: "You need medical attention. What can you say?",

                            options: [
                                "I need a doctor.",
                                "I feel healthy.",
                                "I am a nurse."
                            ],

                            answer: "I need a doctor."
                        }

                    ]

                },


                {
                    id: "health-understand-2",

                    type: "comprehension",

                    title: "Comprende la expresión",

                    instruction:
                        "Selecciona el significado correcto.",

                    questions: [

                        {
                            english: "I feel sick.",

                            options: [
                                "Me siento enfermo/a.",
                                "Soy médico.",
                                "Estoy en el hospital."
                            ],

                            answer: "Me siento enfermo/a."
                        },

                        {
                            english: "What's wrong?",

                            options: [
                                "¿Qué pasa?",
                                "¿Dónde está el médico?",
                                "¿Qué medicina necesitas?"
                            ],

                            answer: "¿Qué pasa?"
                        }

                    ]

                }

            ]

        },


        // ====================================================
        // 5. CONSTRUIR
        // ====================================================

        {
            id: 5,

            key: "build",

            title: "Construir",

            description:
                "Construye frases sencillas utilizando el vocabulario aprendido.",

            activities: [

                {
                    id: "health-build-1",

                    type: "sentence",

                    title: "Construye la oración",

                    instruction:
                        "Ordena las palabras para formar una oración correcta.",

                    exercises: [

                        {
                            words: [
                                "I",
                                "have",
                                "a",
                                "headache"
                            ],

                            answer: "I have a headache."
                        },

                        {
                            words: [
                                "I",
                                "need",
                                "a",
                                "doctor"
                            ],

                            answer: "I need a doctor."
                        },

                        {
                            words: [
                                "I",
                                "have",
                                "a",
                                "fever"
                            ],

                            answer: "I have a fever."
                        }

                    ]

                },


                {
                    id: "health-build-2",

                    type: "complete",

                    title: "Completa la oración",

                    instruction:
                        "Selecciona la palabra que completa correctamente la oración.",

                    exercises: [

                        {
                            sentence: "I have a ____.",

                            options: [
                                "headache",
                                "doctor",
                                "hospital"
                            ],

                            answer: "headache"
                        },

                        {
                            sentence: "I need a ____.",

                            options: [
                                "doctor",
                                "fever",
                                "pain"
                            ],

                            answer: "doctor"
                        },

                        {
                            sentence: "I take ____.",

                            options: [
                                "medicine",
                                "hospital",
                                "patient"
                            ],

                            answer: "medicine"
                        }

                    ]

                }

            ]

        },


        // ====================================================
        // 6. COMUNICAR
        // ====================================================

        {
            id: 6,

            key: "communicate",

            title: "Comunicar",

            description:
                "Utiliza el vocabulario aprendido para comunicarte en situaciones sencillas.",

            activities: [

                {
                    id: "health-communicate-1",

                    type: "dialogue",

                    title: "En la consulta médica",

                    instruction:
                        "Completa el diálogo entre el médico y el paciente.",

                    dialogue: [

                        {
                            speaker: "Doctor",
                            text: "What's wrong?"
                        },

                        {
                            speaker: "Patient",
                            options: [
                                "I have a headache.",
                                "I am a doctor.",
                                "This is a hospital."
                            ],

                            answer: "I have a headache."
                        },

                        {
                            speaker: "Doctor",
                            text: "You should rest."
                        }

                    ]

                },


                {
                    id: "health-communicate-2",

                    type: "scenario",

                    title: "Comunica una situación",

                    instruction:
                        "Selecciona la expresión que utilizarías en cada situación.",

                    scenarios: [

                        {
                            situation:
                                "You feel sick and need medical help.",

                            options: [
                                "I need a doctor.",
                                "I feel healthy.",
                                "I am a nurse."
                            ],

                            answer: "I need a doctor."
                        },

                        {
                            situation:
                                "You have a fever.",

                            options: [
                                "I have a fever.",
                                "I work at a clinic.",
                                "I am a patient."
                            ],

                            answer: "I have a fever."
                        }

                    ]

                }

            ]

        }

    ]

};
