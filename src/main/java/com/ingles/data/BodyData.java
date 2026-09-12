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

public class BodyData {

    public static SemanticBlock create() {

        // =========================================================
        // BLOQUE SEMÁNTICO
        // =========================================================

        SemanticBlock block = new SemanticBlock(
                "body",
                "Body",
                "Body - El cuerpo",
                "Vocabulario y expresiones básicas relacionadas con las partes del cuerpo."
        );

        // =========================================================
        // CONCEPTOS
        // =========================================================

        Concept body = new Concept(
                "body",
                "Body",
                "El cuerpo humano"
        );

        Concept head = new Concept(
                "head",
                "Head",
                "Partes de la cabeza"
        );

        Concept face = new Concept(
                "face",
                "Face",
                "Partes de la cara"
        );

        Concept upperBody = new Concept(
                "upper-body",
                "Upper Body",
                "Partes superiores del cuerpo"
        );

        Concept lowerBody = new Concept(
                "lower-body",
                "Lower Body",
                "Partes inferiores del cuerpo"
        );

        Concept movement = new Concept(
                "movement",
                "Movement",
                "Acciones y movimientos del cuerpo"
        );

        block.addConcept(body);
        block.addConcept(head);
        block.addConcept(face);
        block.addConcept(upperBody);
        block.addConcept(lowerBody);
        block.addConcept(movement);

        // =========================================================
        // VOCABULARIO
        // =========================================================

        Word bodyWord = new Word(
                "body-word-001",
                "body",
                "cuerpo",
                "ˈbɑːdi",
                body
        );

        Word headWord = new Word(
                "body-word-002",
                "head",
                "cabeza",
                "hed",
                head
        );

        Word faceWord = new Word(
                "body-word-003",
                "face",
                "cara",
                "feɪs",
                face
        );

        Word eyeWord = new Word(
                "body-word-004",
                "eye",
                "ojo",
                "aɪ",
                face
        );

        Word earWord = new Word(
                "body-word-005",
                "ear",
                "oreja",
                "ɪr",
                head
        );

        Word noseWord = new Word(
                "body-word-006",
                "nose",
                "nariz",
                "noʊz",
                face
        );

        Word mouthWord = new Word(
                "body-word-007",
                "mouth",
                "boca",
                "maʊθ",
                face
        );

        Word handWord = new Word(
                "body-word-008",
                "hand",
                "mano",
                "hænd",
                upperBody
        );

        Word armWord = new Word(
                "body-word-009",
                "arm",
                "brazo",
                "ɑːrm",
                upperBody
        );

        Word shoulderWord = new Word(
                "body-word-010",
                "shoulder",
                "hombro",
                "ˈʃoʊldər",
                upperBody
        );

        Word chestWord = new Word(
                "body-word-011",
                "chest",
                "pecho",
                "tʃest",
                upperBody
        );

        Word legWord = new Word(
                "body-word-012",
                "leg",
                "pierna",
                "leg",
                lowerBody
        );

        Word footWord = new Word(
                "body-word-013",
                "foot",
                "pie",
                "fʊt",
                lowerBody
        );

        Word kneeWord = new Word(
                "body-word-014",
                "knee",
                "rodilla",
                "niː",
                lowerBody
        );

        Word fingerWord = new Word(
                "body-word-015",
                "finger",
                "dedo",
                "ˈfɪŋɡər",
                upperBody
        );

        Word walkWord = new Word(
                "body-word-016",
                "walk",
                "caminar",
                "wɔːk",
                movement
        );

        Word runWord = new Word(
                "body-word-017",
                "run",
                "correr",
                "rʌn",
                movement
        );

        block.addWord(bodyWord);
        block.addWord(headWord);
        block.addWord(faceWord);
        block.addWord(eyeWord);
        block.addWord(earWord);
        block.addWord(noseWord);
        block.addWord(mouthWord);
        block.addWord(handWord);
        block.addWord(armWord);
        block.addWord(shoulderWord);
        block.addWord(chestWord);
        block.addWord(legWord);
        block.addWord(footWord);
        block.addWord(kneeWord);
        block.addWord(fingerWord);
        block.addWord(walkWord);
        block.addWord(runWord);

        // =========================================================
        // RELACIONES SEMÁNTICAS
        // =========================================================

        block.addRelation(new SemanticRelation(
                "body-rel-001",
                "part_of",
                "The head is part of the body.",
                new SemanticReference("word", "body-word-002"),
                new SemanticReference("word", "body-word-001")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-002",
                "part_of",
                "The face is part of the head.",
                new SemanticReference("word", "body-word-003"),
                new SemanticReference("word", "body-word-002")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-003",
                "part_of",
                "The eye is part of the face.",
                new SemanticReference("word", "body-word-004"),
                new SemanticReference("word", "body-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-004",
                "part_of",
                "The ear is part of the head.",
                new SemanticReference("word", "body-word-005"),
                new SemanticReference("word", "body-word-002")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-005",
                "part_of",
                "The nose is part of the face.",
                new SemanticReference("word", "body-word-006"),
                new SemanticReference("word", "body-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-006",
                "part_of",
                "The mouth is part of the face.",
                new SemanticReference("word", "body-word-007"),
                new SemanticReference("word", "body-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-007",
                "part_of",
                "The hand is part of the body.",
                new SemanticReference("word", "body-word-008"),
                new SemanticReference("word", "body-word-001")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-008",
                "part_of",
                "The arm is part of the body.",
                new SemanticReference("word", "body-word-009"),
                new SemanticReference("word", "body-word-001")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-009",
                "part_of",
                "The shoulder is part of the body.",
                new SemanticReference("word", "body-word-010"),
                new SemanticReference("word", "body-word-001")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-010",
                "part_of",
                "The chest is part of the body.",
                new SemanticReference("word", "body-word-011"),
                new SemanticReference("word", "body-word-001")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-011",
                "part_of",
                "The leg is part of the body.",
                new SemanticReference("word", "body-word-012"),
                new SemanticReference("word", "body-word-001")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-012",
                "part_of",
                "The foot is part of the leg.",
                new SemanticReference("word", "body-word-013"),
                new SemanticReference("word", "body-word-012")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-013",
                "part_of",
                "The knee is part of the leg.",
                new SemanticReference("word", "body-word-014"),
                new SemanticReference("word", "body-word-012")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-014",
                "part_of",
                "The finger is part of the hand.",
                new SemanticReference("word", "body-word-015"),
                new SemanticReference("word", "body-word-008")
        ));

        block.addRelation(new SemanticRelation(
                "body-rel-015",
                "action",
                "Walking and running are movements of the body.",
                new SemanticReference("word", "body-word-016"),
                new SemanticReference("concept", "movement")
        ));

        // =========================================================
        // EXPRESIONES
        // =========================================================

        Expression expression1 = new Expression(
                "body-expression-001",
                "This is my body",
                "Este es mi cuerpo"
        );

        expression1.addWord(bodyWord);
        expression1.addWord(headWord);

        Expression expression2 = new Expression(
                "body-expression-002",
                "This is my head",
                "Esta es mi cabeza"
        );

        expression2.addWord(headWord);

        Expression expression3 = new Expression(
                "body-expression-003",
                "This is my face",
                "Esta es mi cara"
        );

        expression3.addWord(faceWord);

        Expression expression4 = new Expression(
                "body-expression-004",
                "These are my eyes",
                "Estos son mis ojos"
        );

        expression4.addWord(eyeWord);

        Expression expression5 = new Expression(
                "body-expression-005",
                "This is my hand",
                "Esta es mi mano"
        );

        expression5.addWord(handWord);

        Expression expression6 = new Expression(
                "body-expression-006",
                "This is my arm",
                "Este es mi brazo"
        );

        expression6.addWord(armWord);

        Expression expression7 = new Expression(
                "body-expression-007",
                "I can walk",
                "Puedo caminar"
        );

        expression7.addWord(walkWord);

        Expression expression8 = new Expression(
                "body-expression-008",
                "I can run",
                "Puedo correr"
        );

        expression8.addWord(runWord);

        block.addExpression(expression1);
        block.addExpression(expression2);
        block.addExpression(expression3);
        block.addExpression(expression4);
        block.addExpression(expression5);
        block.addExpression(expression6);
        block.addExpression(expression7);
        block.addExpression(expression8);

        // =========================================================
        // ORACIONES
        // =========================================================

        Sentence sentence1 = new Sentence(
                "body-sentence-001",
                "This is my body.",
                "Este es mi cuerpo."
        );

        sentence1.addExpression(expression1);

        Sentence sentence2 = new Sentence(
                "body-sentence-002",
                "This is my head.",
                "Esta es mi cabeza."
        );

        sentence2.addExpression(expression2);

        Sentence sentence3 = new Sentence(
                "body-sentence-003",
                "This is my face.",
                "Esta es mi cara."
        );

        sentence3.addExpression(expression3);

        Sentence sentence4 = new Sentence(
                "body-sentence-004",
                "These are my eyes.",
                "Estos son mis ojos."
        );

        sentence4.addExpression(expression4);

        Sentence sentence5 = new Sentence(
                "body-sentence-005",
                "This is my hand.",
                "Esta es mi mano."
        );

        sentence5.addExpression(expression5);

        Sentence sentence6 = new Sentence(
                "body-sentence-006",
                "This is my arm.",
                "Este es mi brazo."
        );

        sentence6.addExpression(expression6);

        Sentence sentence7 = new Sentence(
                "body-sentence-007",
                "I can walk.",
                "Puedo caminar."
        );

        sentence7.addExpression(expression7);

        Sentence sentence8 = new Sentence(
                "body-sentence-008",
                "I can run.",
                "Puedo correr."
        );

        sentence8.addExpression(expression8);

        block.addSentence(sentence1);
        block.addSentence(sentence2);
        block.addSentence(sentence3);
        block.addSentence(sentence4);
        block.addSentence(sentence5);
        block.addSentence(sentence6);
        block.addSentence(sentence7);
        block.addSentence(sentence8);

        // =========================================================
        // SITUACIÓN COMUNICATIVA
        // =========================================================

        CommunicationSituation communication =
                new CommunicationSituation(
                        "body-communication-001",
                        "Talking about the body",
                        "A simple conversation about parts of the body and physical movement.",
                        "Identify basic body vocabulary and communicate simple information about the body."
                );

        communication.addSentence(sentence1);
        communication.addSentence(sentence2);
        communication.addSentence(sentence3);
        communication.addSentence(sentence4);
        communication.addSentence(sentence5);
        communication.addSentence(sentence6);
        communication.addSentence(sentence7);
        communication.addSentence(sentence8);

        block.addCommunication(communication);

        // =========================================================
        // ETAPAS
        // =========================================================

        Stage stage1 = new Stage(
                1,
                "Descubrir",
                "Conoce las palabras fundamentales relacionadas con el cuerpo."
        );

        Stage stage2 = new Stage(
                2,
                "Reconocer",
                "Identifica las partes del cuerpo en diferentes situaciones."
        );

        Stage stage3 = new Stage(
                3,
                "Relacionar",
                "Relaciona las partes del cuerpo con sus conceptos y funciones."
        );

        Stage stage4 = new Stage(
                4,
                "Comprender",
                "Comprende expresiones y oraciones sencillas relacionadas con el cuerpo."
        );

        Stage stage5 = new Stage(
                5,
                "Construir",
                "Construye expresiones y oraciones usando el vocabulario aprendido."
        );

        Stage stage6 = new Stage(
                6,
                "Comunicar",
                "Utiliza el vocabulario del cuerpo para comunicarse en situaciones sencillas."
        );

        block.addStage(stage1);
        block.addStage(stage2);
        block.addStage(stage3);
        block.addStage(stage4);
        block.addStage(stage5);
        block.addStage(stage6);

        // =========================================================
        // ACTIVIDADES
        // =========================================================

        block.addActivity(new Activity(
                "body-activity-001",
                "explore",
                "Explora y conoce las palabras fundamentales del cuerpo.",
                stage1
        ));

        block.addActivity(new Activity(
                "body-activity-002",
                "identify",
                "Identifica correctamente cada parte del cuerpo.",
                stage2
        ));

        block.addActivity(new Activity(
                "body-activity-003",
                "relate",
                "Relaciona cada palabra con su concepto o función.",
                stage3
        ));

        block.addActivity(new Activity(
                "body-activity-004",
                "understand",
                "Comprende el significado de expresiones sencillas sobre el cuerpo.",
                stage4
        ));

        block.addActivity(new Activity(
                "body-activity-005",
                "build",
                "Construye oraciones sencillas utilizando las palabras aprendidas.",
                stage5
        ));

        block.addActivity(new Activity(
                "body-activity-006",
                "communicate",
                "Construye mensajes sencillos para comunicar información sobre el cuerpo.",
                stage6
        ));

        return block;
    }
}