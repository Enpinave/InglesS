package com.ingles.data;

import com.ingles.model.Activity;
import com.ingles.model.CommunicationSituation;
import com.ingles.model.Concept;
import com.ingles.model.Expression;
import com.ingles.model.SemanticBlock;
import com.ingles.model.SemanticReference;
import com.ingles.model.SemanticRelation;
import com.ingles.model.Sentence;
import com.ingles.model.Stage;
import com.ingles.model.Word;

public class HealthData {

    public static SemanticBlock create() {

        // =========================================================
        // BLOQUE SEMÁNTICO
        // =========================================================

        SemanticBlock health = new SemanticBlock(
                "health",
                "Health",
                "Health - La salud",
                "Bloque semántico para aprender vocabulario, "
                        + "relaciones, expresiones, oraciones y comunicación "
                        + "relacionada con la salud."
        );

        // =========================================================
        // CONCEPTOS
        // =========================================================

        Concept healthConcept = new Concept(
                "health",
                "HEALTH",
                "The condition of a person related to physical and mental well-being."
        );

        Concept personConcept = new Concept(
                "person",
                "PERSON",
                "A human being."
        );

        Concept healthcareConcept = new Concept(
                "healthcare",
                "HEALTHCARE",
                "The services and activities used to care for people's health."
        );

        Concept conditionConcept = new Concept(
                "condition",
                "CONDITION",
                "A state of health that affects a person."
        );

        Concept bodyConcept = new Concept(
                "body",
                "BODY",
                "The physical structure of a person."
        );

        Concept treatmentConcept = new Concept(
                "treatment",
                "TREATMENT",
                "Something used to help a person with a health condition."
        );

        health.addConcept(healthConcept);
        health.addConcept(personConcept);
        health.addConcept(healthcareConcept);
        health.addConcept(conditionConcept);
        health.addConcept(bodyConcept);
        health.addConcept(treatmentConcept);

        // =========================================================
        // VOCABULARIO
        // =========================================================

        Word doctor = new Word(
                "doctor",
                "doctor",
                "médico",
                "/ˈdɒktər/",
                healthcareConcept
        );

        Word nurse = new Word(
                "nurse",
                "nurse",
                "enfermero / enfermera",
                "/nɜːrs/",
                healthcareConcept
        );

        Word patient = new Word(
                "patient",
                "patient",
                "paciente",
                "/ˈpeɪʃənt/",
                personConcept
        );

        Word hospital = new Word(
                "hospital",
                "hospital",
                "hospital",
                "/ˈhɒspɪtl/",
                healthcareConcept
        );

        Word clinic = new Word(
                "clinic",
                "clinic",
                "clínica",
                "/ˈklɪnɪk/",
                healthcareConcept
        );

        Word body = new Word(
                "body",
                "body",
                "cuerpo",
                "/ˈbɒdi/",
                bodyConcept
        );

        Word head = new Word(
                "head",
                "head",
                "cabeza",
                "/hed/",
                bodyConcept
        );

        Word stomach = new Word(
                "stomach",
                "stomach",
                "estómago",
                "/ˈstʌmək/",
                bodyConcept
        );

        Word pain = new Word(
                "pain",
                "pain",
                "dolor",
                "/peɪn/",
                conditionConcept
        );

        Word headache = new Word(
                "headache",
                "headache",
                "dolor de cabeza",
                "/ˈhedeɪk/",
                conditionConcept
        );

        Word fever = new Word(
                "fever",
                "fever",
                "fiebre",
                "/ˈfiːvər/",
                conditionConcept
        );

        Word cough = new Word(
                "cough",
                "cough",
                "tos",
                "/kɒf/",
                conditionConcept
        );

        Word sick = new Word(
                "sick",
                "sick",
                "enfermo",
                "/sɪk/",
                healthConcept
        );

        Word healthy = new Word(
                "healthy",
                "healthy",
                "saludable",
                "/ˈhelθi/",
                healthConcept
        );

        Word medicine = new Word(
                "medicine",
                "medicine",
                "medicina",
                "/ˈmedɪsɪn/",
                treatmentConcept
        );

        Word treatment = new Word(
                "treatment",
                "treatment",
                "tratamiento",
                "/ˈtriːtmənt/",
                treatmentConcept
        );

        Word appointment = new Word(
                "appointment",
                "appointment",
                "cita",
                "/əˈpɔɪntmənt/",
                healthcareConcept
        );

        health.addWord(doctor);
        health.addWord(nurse);
        health.addWord(patient);
        health.addWord(hospital);
        health.addWord(clinic);
        health.addWord(body);
        health.addWord(head);
        health.addWord(stomach);
        health.addWord(pain);
        health.addWord(headache);
        health.addWord(fever);
        health.addWord(cough);
        health.addWord(sick);
        health.addWord(healthy);
        health.addWord(medicine);
        health.addWord(treatment);
        health.addWord(appointment);

        // =========================================================
        // RELACIONES SEMÁNTICAS
        // =========================================================

        health.addRelation(
                new SemanticRelation(
                        "health-rel-001",
                        "related_to",
                        "A doctor is related to healthcare.",
                        new SemanticReference("WORD", "doctor"),
                        new SemanticReference("CONCEPT", "healthcare")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-002",
                        "related_to",
                        "A nurse is related to healthcare.",
                        new SemanticReference("WORD", "nurse"),
                        new SemanticReference("CONCEPT", "healthcare")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-003",
                        "related_to",
                        "A patient receives healthcare.",
                        new SemanticReference("WORD", "patient"),
                        new SemanticReference("CONCEPT", "healthcare")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-004",
                        "located_in",
                        "A hospital is a place where healthcare is provided.",
                        new SemanticReference("WORD", "hospital"),
                        new SemanticReference("CONCEPT", "healthcare")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-005",
                        "located_in",
                        "A clinic is a place where healthcare is provided.",
                        new SemanticReference("WORD", "clinic"),
                        new SemanticReference("CONCEPT", "healthcare")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-006",
                        "part_of",
                        "The head is part of the body.",
                        new SemanticReference("WORD", "head"),
                        new SemanticReference("CONCEPT", "body")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-007",
                        "part_of",
                        "The stomach is part of the body.",
                        new SemanticReference("WORD", "stomach"),
                        new SemanticReference("CONCEPT", "body")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-008",
                        "affects",
                        "A headache affects the head.",
                        new SemanticReference("WORD", "headache"),
                        new SemanticReference("WORD", "head")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-009",
                        "is_a",
                        "A headache is a health condition.",
                        new SemanticReference("WORD", "headache"),
                        new SemanticReference("CONCEPT", "condition")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-010",
                        "is_a",
                        "A fever is a health condition.",
                        new SemanticReference("WORD", "fever"),
                        new SemanticReference("CONCEPT", "condition")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-011",
                        "is_a",
                        "A cough is a health condition.",
                        new SemanticReference("WORD", "cough"),
                        new SemanticReference("CONCEPT", "condition")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-012",
                        "related_to",
                        "Pain is related to health conditions.",
                        new SemanticReference("WORD", "pain"),
                        new SemanticReference("CONCEPT", "condition")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-013",
                        "used_for",
                        "Medicine can be used as a treatment.",
                        new SemanticReference("WORD", "medicine"),
                        new SemanticReference("CONCEPT", "treatment")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-014",
                        "related_to",
                        "An appointment is related to healthcare.",
                        new SemanticReference("WORD", "appointment"),
                        new SemanticReference("CONCEPT", "healthcare")
                )
        );

        health.addRelation(
                new SemanticRelation(
                        "health-rel-015",
                        "opposite",
                        "Sick and healthy describe different health conditions.",
                        new SemanticReference("WORD", "sick"),
                        new SemanticReference("WORD", "healthy")
                )
        );

        // =========================================================
        // EXPRESIONES
        // =========================================================

        Expression iFeelSick = new Expression(
                "health-exp-001",
                "I feel sick",
                "Me siento enfermo."
        );
        iFeelSick.addWord(sick);

        Expression iHaveAHeadache = new Expression(
                "health-exp-002",
                "I have a headache",
                "Tengo dolor de cabeza."
        );
        iHaveAHeadache.addWord(headache);

        Expression iHaveAFever = new Expression(
                "health-exp-003",
                "I have a fever",
                "Tengo fiebre."
        );
        iHaveAFever.addWord(fever);

        Expression iHaveACough = new Expression(
                "health-exp-004",
                "I have a cough",
                "Tengo tos."
        );
        iHaveACough.addWord(cough);

        Expression iNeedADoctor = new Expression(
                "health-exp-005",
                "I need a doctor",
                "Necesito un médico."
        );
        iNeedADoctor.addWord(doctor);

        Expression iNeedMedicine = new Expression(
                "health-exp-006",
                "I need medicine",
                "Necesito medicina."
        );
        iNeedMedicine.addWord(medicine);

        Expression iHaveAnAppointment = new Expression(
                "health-exp-007",
                "I have an appointment",
                "Tengo una cita."
        );
        iHaveAnAppointment.addWord(appointment);

        Expression areYouOkay = new Expression(
                "health-exp-008",
                "Are you okay?",
                "¿Estás bien?"
        );

        health.addExpression(iFeelSick);
        health.addExpression(iHaveAHeadache);
        health.addExpression(iHaveAFever);
        health.addExpression(iHaveACough);
        health.addExpression(iNeedADoctor);
        health.addExpression(iNeedMedicine);
        health.addExpression(iHaveAnAppointment);
        health.addExpression(areYouOkay);

        // =========================================================
        // ORACIONES
        // =========================================================

        Sentence sentenceSick = new Sentence(
                "health-sentence-001",
                "I feel sick.",
                "Me siento enfermo."
        );
        sentenceSick.addExpression(iFeelSick);

        Sentence sentenceHeadache = new Sentence(
                "health-sentence-002",
                "I have a headache.",
                "Tengo dolor de cabeza."
        );
        sentenceHeadache.addExpression(iHaveAHeadache);

        Sentence sentenceFever = new Sentence(
                "health-sentence-003",
                "I have a fever.",
                "Tengo fiebre."
        );
        sentenceFever.addExpression(iHaveAFever);

        Sentence sentenceCough = new Sentence(
                "health-sentence-004",
                "I have a cough.",
                "Tengo tos."
        );
        sentenceCough.addExpression(iHaveACough);

        Sentence sentenceDoctor = new Sentence(
                "health-sentence-005",
                "I need a doctor.",
                "Necesito un médico."
        );
        sentenceDoctor.addExpression(iNeedADoctor);

        Sentence sentenceMedicine = new Sentence(
                "health-sentence-006",
                "I need medicine.",
                "Necesito medicina."
        );
        sentenceMedicine.addExpression(iNeedMedicine);

        Sentence sentenceAppointment = new Sentence(
                "health-sentence-007",
                "I have an appointment.",
                "Tengo una cita."
        );
        sentenceAppointment.addExpression(iHaveAnAppointment);

        Sentence sentenceOkay = new Sentence(
                "health-sentence-008",
                "Are you okay?",
                "¿Estás bien?"
        );
        sentenceOkay.addExpression(areYouOkay);

        health.addSentence(sentenceSick);
        health.addSentence(sentenceHeadache);
        health.addSentence(sentenceFever);
        health.addSentence(sentenceCough);
        health.addSentence(sentenceDoctor);
        health.addSentence(sentenceMedicine);
        health.addSentence(sentenceAppointment);
        health.addSentence(sentenceOkay);

        // =========================================================
        // SITUACIÓN COMUNICATIVA
        // =========================================================

        CommunicationSituation atTheDoctor =
                new CommunicationSituation(
                        "health-communication-001",
                        "At the doctor's office",
                        "A simple conversation between a patient and a healthcare professional.",
                        "Identify basic health vocabulary and communicate simple information about how you feel."
                );

        atTheDoctor.addSentence(sentenceSick);
        atTheDoctor.addSentence(sentenceHeadache);
        atTheDoctor.addSentence(sentenceFever);
        atTheDoctor.addSentence(sentenceCough);
        atTheDoctor.addSentence(sentenceDoctor);
        atTheDoctor.addSentence(sentenceMedicine);
        atTheDoctor.addSentence(sentenceAppointment);
        atTheDoctor.addSentence(sentenceOkay);

        health.addCommunication(atTheDoctor);

        // =========================================================
        // ETAPAS DEL APRENDIZAJE
        // =========================================================

        Stage discover = new Stage(
                1,
                "DESCUBRIR",
                "Conoce los conceptos y palabras fundamentales relacionados con la salud."
        );

        Stage recognize = new Stage(
                2,
                "RECONOCER",
                "Identifica y reconoce las palabras en inglés y su significado."
        );

        Stage relate = new Stage(
                3,
                "RELACIONAR",
                "Relaciona palabras, conceptos, partes del cuerpo y situaciones de salud."
        );

        Stage understand = new Stage(
                4,
                "COMPRENDER",
                "Comprende expresiones y oraciones sencillas relacionadas con la salud."
        );

        Stage build = new Stage(
                5,
                "CONSTRUIR",
                "Construye expresiones y oraciones utilizando el vocabulario aprendido."
        );

        Stage communicate = new Stage(
                6,
                "COMUNICAR",
                "Utiliza el inglés para comunicarse en una situación relacionada con la salud."
        );

        health.addStage(discover);
        health.addStage(recognize);
        health.addStage(relate);
        health.addStage(understand);
        health.addStage(build);
        health.addStage(communicate);

        // =========================================================
        // ACTIVIDADES
        // =========================================================

        Activity activity01 = new Activity(
                "health-activity-001",
                "EXPLORE",
                "Explora las palabras básicas relacionadas con la salud.",
                discover
        );

        Activity activity02 = new Activity(
                "health-activity-002",
                "MATCH",
                "Relaciona cada palabra en inglés con su significado en español.",
                recognize
        );

        Activity activity03 = new Activity(
                "health-activity-003",
                "RELATE",
                "Relaciona palabras como doctor, patient, headache y medicine con sus conceptos.",
                relate
        );

        Activity activity04 = new Activity(
                "health-activity-004",
                "UNDERSTAND",
                "Comprende expresiones como I have a headache y I feel sick.",
                understand
        );

        Activity activity05 = new Activity(
                "health-activity-005",
                "BUILD",
                "Construye oraciones sencillas utilizando expresiones relacionadas con la salud.",
                build
        );

        Activity activity06 = new Activity(
                "health-activity-006",
                "COMMUNICATE",
                "Participa en una situación comunicativa sencilla en el consultorio médico.",
                communicate
        );

        health.addActivity(activity01);
        health.addActivity(activity02);
        health.addActivity(activity03);
        health.addActivity(activity04);
        health.addActivity(activity05);
        health.addActivity(activity06);

        // =========================================================
        // RETORNAR BLOQUE
        // =========================================================

        return health;
    }
}