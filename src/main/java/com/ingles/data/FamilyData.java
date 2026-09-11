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

public class FamilyData {

    public static SemanticBlock create() {

        // =========================================================
        // 1. BLOQUE SEMÁNTICO
        // =========================================================

        SemanticBlock family = new SemanticBlock(
                "family",
                "Family",
                "Family - La familia",
                "Bloque semántico para aprender vocabulario, "
                        + "relaciones, expresiones, oraciones y comunicación "
                        + "relacionada con la familia."
        );

        // =========================================================
        // 2. CONCEPTOS
        // =========================================================

        Concept familyConcept = new Concept(
                "family",
                "FAMILY",
                "A group of people related to each other."
        );

        Concept personConcept = new Concept(
                "person",
                "PERSON",
                "A human being."
        );

        Concept parentConcept = new Concept(
                "parent",
                "PARENT",
                "A father or mother."
        );

        Concept childConcept = new Concept(
                "child",
                "CHILD",
                "A son or daughter."
        );

        Concept siblingConcept = new Concept(
                "sibling",
                "SIBLING",
                "A brother or sister."
        );

        family.addConcept(familyConcept);
        family.addConcept(personConcept);
        family.addConcept(parentConcept);
        family.addConcept(childConcept);
        family.addConcept(siblingConcept);

        // =========================================================
        // 3. VOCABULARIO
        // =========================================================

        Word father = new Word(
                "father",
                "father",
                "padre",
                "/ˈfɑːðər/",
                parentConcept
        );

        Word mother = new Word(
                "mother",
                "mother",
                "madre",
                "/ˈmʌðər/",
                parentConcept
        );

        Word brother = new Word(
                "brother",
                "brother",
                "hermano",
                "/ˈbrʌðər/",
                siblingConcept
        );

        Word sister = new Word(
                "sister",
                "sister",
                "hermana",
                "/ˈsɪstər/",
                siblingConcept
        );

        Word son = new Word(
                "son",
                "son",
                "hijo",
                "/sʌn/",
                childConcept
        );

        Word daughter = new Word(
                "daughter",
                "daughter",
                "hija",
                "/ˈdɔːtər/",
                childConcept
        );

        family.addWord(father);
        family.addWord(mother);
        family.addWord(brother);
        family.addWord(sister);
        family.addWord(son);
        family.addWord(daughter);

        // =========================================================
        // 4. RELACIONES SEMÁNTICAS
        // =========================================================

        family.addRelation(
                new SemanticRelation(
                        "rel-001",
                        "is_a",
                        "Father is a parent.",
                        new SemanticReference("WORD", "father"),
                        new SemanticReference("CONCEPT", "parent")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-002",
                        "is_a",
                        "Mother is a parent.",
                        new SemanticReference("WORD", "mother"),
                        new SemanticReference("CONCEPT", "parent")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-003",
                        "is_a",
                        "Brother is a sibling.",
                        new SemanticReference("WORD", "brother"),
                        new SemanticReference("CONCEPT", "sibling")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-004",
                        "is_a",
                        "Sister is a sibling.",
                        new SemanticReference("WORD", "sister"),
                        new SemanticReference("CONCEPT", "sibling")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-005",
                        "is_a",
                        "Son is a child.",
                        new SemanticReference("WORD", "son"),
                        new SemanticReference("CONCEPT", "child")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-006",
                        "is_a",
                        "Daughter is a child.",
                        new SemanticReference("WORD", "daughter"),
                        new SemanticReference("CONCEPT", "child")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-007",
                        "related_to",
                        "Parents are related to children.",
                        new SemanticReference("CONCEPT", "parent"),
                        new SemanticReference("CONCEPT", "child")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-008",
                        "related_to",
                        "Father and mother are related as parents.",
                        new SemanticReference("WORD", "father"),
                        new SemanticReference("WORD", "mother")
                )
        );

        family.addRelation(
                new SemanticRelation(
                        "rel-009",
                        "related_to",
                        "Brother and sister are siblings.",
                        new SemanticReference("WORD", "brother"),
                        new SemanticReference("WORD", "sister")
                )
        );

        // =========================================================
        // 5. EXPRESIONES
        // =========================================================

        Expression myFather = new Expression(
                "exp-001",
                "my father",
                "mi padre"
        );

        myFather.addWord(father);

        Expression myMother = new Expression(
                "exp-002",
                "my mother",
                "mi madre"
        );

        myMother.addWord(mother);

        Expression myBrother = new Expression(
                "exp-003",
                "my brother",
                "mi hermano"
        );

        myBrother.addWord(brother);

        Expression mySister = new Expression(
                "exp-004",
                "my sister",
                "mi hermana"
        );

        mySister.addWord(sister);

        Expression mySon = new Expression(
                "exp-005",
                "my son",
                "mi hijo"
        );

        mySon.addWord(son);

        Expression myDaughter = new Expression(
                "exp-006",
                "my daughter",
                "mi hija"
        );

        myDaughter.addWord(daughter);

        family.addExpression(myFather);
        family.addExpression(myMother);
        family.addExpression(myBrother);
        family.addExpression(mySister);
        family.addExpression(mySon);
        family.addExpression(myDaughter);

        // =========================================================
        // 6. ORACIONES
        // =========================================================

        Sentence sentenceFather = new Sentence(
                "sentence-001",
                "This is my father.",
                "Este es mi padre."
        );

        sentenceFather.addExpression(myFather);

        Sentence sentenceMother = new Sentence(
                "sentence-002",
                "This is my mother.",
                "Esta es mi madre."
        );

        sentenceMother.addExpression(myMother);

        Sentence sentenceBrother = new Sentence(
                "sentence-003",
                "This is my brother.",
                "Este es mi hermano."
        );

        sentenceBrother.addExpression(myBrother);

        Sentence sentenceSister = new Sentence(
                "sentence-004",
                "This is my sister.",
                "Esta es mi hermana."
        );

        sentenceSister.addExpression(mySister);

        Sentence sentenceSon = new Sentence(
                "sentence-005",
                "This is my son.",
                "Este es mi hijo."
        );

        sentenceSon.addExpression(mySon);

        Sentence sentenceDaughter = new Sentence(
                "sentence-006",
                "This is my daughter.",
                "Esta es mi hija."
        );

        sentenceDaughter.addExpression(myDaughter);

        family.addSentence(sentenceFather);
        family.addSentence(sentenceMother);
        family.addSentence(sentenceBrother);
        family.addSentence(sentenceSister);
        family.addSentence(sentenceSon);
        family.addSentence(sentenceDaughter);

        // =========================================================
        // 7. SITUACIÓN DE COMUNICACIÓN
        // =========================================================

        CommunicationSituation talkingAboutFamily =
                new CommunicationSituation(
                        "communication-001",
                        "Talking about your family",
                        "A conversation where you introduce members of your family.",
                        "Identify and talk about family members using simple English."
                );

        talkingAboutFamily.addSentence(sentenceFather);
        talkingAboutFamily.addSentence(sentenceMother);
        talkingAboutFamily.addSentence(sentenceBrother);
        talkingAboutFamily.addSentence(sentenceSister);
        talkingAboutFamily.addSentence(sentenceSon);
        talkingAboutFamily.addSentence(sentenceDaughter);

        family.addCommunication(talkingAboutFamily);

        // =========================================================
        // 8. ETAPAS DE APRENDIZAJE
        // =========================================================

        Stage discover = new Stage(
                1,
                "DESCUBRIR",
                "Conoce los conceptos y palabras fundamentales del bloque."
        );

        Stage recognize = new Stage(
                2,
                "RECONOCER",
                "Identifica y reconoce las palabras en inglés y su significado."
        );

        Stage relate = new Stage(
                3,
                "RELACIONAR",
                "Relaciona las palabras con conceptos y otras palabras."
        );

        Stage understand = new Stage(
                4,
                "COMPRENDER",
                "Comprende expresiones y oraciones sencillas en contexto."
        );

        Stage build = new Stage(
                5,
                "CONSTRUIR",
                "Construye expresiones y oraciones utilizando lo aprendido."
        );

        Stage communicate = new Stage(
                6,
                "COMUNICAR",
                "Utiliza el inglés para comunicarse en una situación real."
        );

        family.addStage(discover);
        family.addStage(recognize);
        family.addStage(relate);
        family.addStage(understand);
        family.addStage(build);
        family.addStage(communicate);

        // =========================================================
        // 9. ACTIVIDADES
        // =========================================================

        Activity activity01 = new Activity(
                "activity-001",
                "EXPLORE",
                "Explora las palabras básicas relacionadas con la familia.",
                discover
        );

        Activity activity02 = new Activity(
                "activity-002",
                "MATCH",
                "Relaciona cada palabra en inglés con su significado en español.",
                recognize
        );

        Activity activity03 = new Activity(
                "activity-003",
                "RELATE",
                "Relaciona mother y father con el concepto PARENT.",
                relate
        );

        Activity activity04 = new Activity(
                "activity-004",
                "UNDERSTAND",
                "Comprende la pregunta: Who is she?",
                understand
        );

        Activity activity05 = new Activity(
                "activity-005",
                "BUILD",
                "Construye la oración: This is my mother.",
                build
        );

        Activity activity06 = new Activity(
                "activity-006",
                "COMMUNICATE",
                "Responde en inglés cuando alguien pregunta por un miembro de tu familia.",
                communicate
        );

        family.addActivity(activity01);
        family.addActivity(activity02);
        family.addActivity(activity03);
        family.addActivity(activity04);
        family.addActivity(activity05);
        family.addActivity(activity06);

        // =========================================================
        // 10. RETORNAR EL BLOQUE COMPLETO
        // =========================================================

        return family;
    }
}