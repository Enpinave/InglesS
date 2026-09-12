
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

public class EducationData {

    public static SemanticBlock create() {

        // =========================================================
        // BLOQUE SEMÁNTICO
        // =========================================================

        SemanticBlock block = new SemanticBlock(
                "education",
                "Education",
                "Education - La educación",
                "Vocabulario y expresiones básicas relacionadas con la educación, la escuela y el aprendizaje."
        );

        // =========================================================
        // CONCEPTOS
        // =========================================================

        Concept education = new Concept(
                "education",
                "Education",
                "La educación y el aprendizaje"
        );

        Concept school = new Concept(
                "school",
                "School",
                "La escuela o institución educativa"
        );

        Concept classroom = new Concept(
                "classroom",
                "Classroom",
                "El salón y los elementos del aula"
        );

        Concept people = new Concept(
                "people",
                "People",
                "Personas relacionadas con la educación"
        );

        Concept subjects = new Concept(
                "subjects",
                "Subjects",
                "Asignaturas escolares"
        );

        Concept learning = new Concept(
                "learning",
                "Learning",
                "Acciones y elementos relacionados con el aprendizaje"
        );

        block.addConcept(education);
        block.addConcept(school);
        block.addConcept(classroom);
        block.addConcept(people);
        block.addConcept(subjects);
        block.addConcept(learning);

        // =========================================================
        // VOCABULARIO
        // =========================================================

        Word educationWord = new Word(
                "education-word-001",
                "education",
                "educación",
                "ˌedʒuˈkeɪʃən",
                education
        );

        Word schoolWord = new Word(
                "education-word-002",
                "school",
                "escuela / colegio",
                "skuːl",
                school
        );

        Word classroomWord = new Word(
                "education-word-003",
                "classroom",
                "salón de clase",
                "ˈklæsruːm",
                classroom
        );

        Word teacherWord = new Word(
                "education-word-004",
                "teacher",
                "profesor / profesora",
                "ˈtiːtʃər",
                people
        );

        Word studentWord = new Word(
                "education-word-005",
                "student",
                "estudiante",
                "ˈstuːdənt",
                people
        );

        Word classWord = new Word(
                "education-word-006",
                "class",
                "clase",
                "klæs",
                classroom
        );

        Word bookWord = new Word(
                "education-word-007",
                "book",
                "libro",
                "bʊk",
                learning
        );

        Word notebookWord = new Word(
                "education-word-008",
                "notebook",
                "cuaderno",
                "ˈnoʊtbʊk",
                learning
        );

        Word pencilWord = new Word(
                "education-word-009",
                "pencil",
                "lápiz",
                "ˈpensəl",
                classroom
        );

        Word deskWord = new Word(
                "education-word-010",
                "desk",
                "pupitre / escritorio",
                "desk",
                classroom
        );

        Word lessonWord = new Word(
                "education-word-011",
                "lesson",
                "lección",
                "ˈlesən",
                learning
        );

        Word homeworkWord = new Word(
                "education-word-012",
                "homework",
                "tarea",
                "ˈhoʊmwɜːrk",
                learning
        );

        Word subjectWord = new Word(
                "education-word-013",
                "subject",
                "asignatura",
                "ˈsʌbdʒɪkt",
                subjects
        );

        Word englishWord = new Word(
                "education-word-014",
                "English",
                "inglés",
                "ˈɪŋɡlɪʃ",
                subjects
        );

        Word mathematicsWord = new Word(
                "education-word-015",
                "mathematics",
                "matemáticas",
                "ˌmæθəˈmætɪks",
                subjects
        );

        Word readWord = new Word(
                "education-word-016",
                "read",
                "leer",
                "riːd",
                learning
        );

        Word writeWord = new Word(
                "education-word-017",
                "write",
                "escribir",
                "raɪt",
                learning
        );

        block.addWord(educationWord);
        block.addWord(schoolWord);
        block.addWord(classroomWord);
        block.addWord(teacherWord);
        block.addWord(studentWord);
        block.addWord(classWord);
        block.addWord(bookWord);
        block.addWord(notebookWord);
        block.addWord(pencilWord);
        block.addWord(deskWord);
        block.addWord(lessonWord);
        block.addWord(homeworkWord);
        block.addWord(subjectWord);
        block.addWord(englishWord);
        block.addWord(mathematicsWord);
        block.addWord(readWord);
        block.addWord(writeWord);

        // =========================================================
        // RELACIONES SEMÁNTICAS
        // =========================================================

        block.addRelation(new SemanticRelation(
                "education-rel-001",
                "part_of",
                "A classroom is part of a school.",
                new SemanticReference("word", "education-word-003"),
                new SemanticReference("word", "education-word-002")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-002",
                "person",
                "A teacher is a person in education.",
                new SemanticReference("word", "education-word-004"),
                new SemanticReference("concept", "education")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-003",
                "person",
                "A student is a person in education.",
                new SemanticReference("word", "education-word-005"),
                new SemanticReference("concept", "education")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-004",
                "located_in",
                "A teacher can work in a classroom.",
                new SemanticReference("word", "education-word-004"),
                new SemanticReference("word", "education-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-005",
                "located_in",
                "A student can study in a classroom.",
                new SemanticReference("word", "education-word-005"),
                new SemanticReference("word", "education-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-006",
                "used_for",
                "A book is used for learning.",
                new SemanticReference("word", "education-word-007"),
                new SemanticReference("concept", "learning")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-007",
                "used_for",
                "A notebook is used for learning.",
                new SemanticReference("word", "education-word-008"),
                new SemanticReference("concept", "learning")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-008",
                "used_in",
                "A pencil is used in the classroom.",
                new SemanticReference("word", "education-word-009"),
                new SemanticReference("word", "education-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-009",
                "used_in",
                "A desk is used in the classroom.",
                new SemanticReference("word", "education-word-010"),
                new SemanticReference("word", "education-word-003")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-010",
                "part_of",
                "A lesson is part of learning.",
                new SemanticReference("word", "education-word-011"),
                new SemanticReference("concept", "learning")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-011",
                "part_of",
                "Homework is part of the learning process.",
                new SemanticReference("word", "education-word-012"),
                new SemanticReference("concept", "learning")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-012",
                "type_of",
                "English is a school subject.",
                new SemanticReference("word", "education-word-014"),
                new SemanticReference("word", "education-word-013")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-013",
                "type_of",
                "Mathematics is a school subject.",
                new SemanticReference("word", "education-word-015"),
                new SemanticReference("word", "education-word-013")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-014",
                "action",
                "Students read as part of learning.",
                new SemanticReference("word", "education-word-016"),
                new SemanticReference("concept", "learning")
        ));

        block.addRelation(new SemanticRelation(
                "education-rel-015",
                "action",
                "Students write as part of learning.",
                new SemanticReference("word", "education-word-017"),
                new SemanticReference("concept", "learning")
        ));

        // =========================================================
        // EXPRESIONES
        // =========================================================

        Expression expression1 = new Expression(
                "education-expression-001",
                "I am a student",
                "Soy estudiante"
        );

        expression1.addWord(studentWord);

        Expression expression2 = new Expression(
                "education-expression-002",
                "I go to school",
                "Voy al colegio"
        );

        expression2.addWord(schoolWord);

        Expression expression3 = new Expression(
                "education-expression-003",
                "This is my classroom",
                "Este es mi salón de clase"
        );

        expression3.addWord(classroomWord);

        Expression expression4 = new Expression(
                "education-expression-004",
                "My teacher is here",
                "Mi profesor está aquí"
        );

        expression4.addWord(teacherWord);

        Expression expression5 = new Expression(
                "education-expression-005",
                "I study English",
                "Estudio inglés"
        );

        expression5.addWord(englishWord);

        Expression expression6 = new Expression(
                "education-expression-006",
                "I read a book",
                "Leo un libro"
        );

        expression6.addWord(readWord);
        expression6.addWord(bookWord);

        Expression expression7 = new Expression(
                "education-expression-007",
                "I write in my notebook",
                "Escribo en mi cuaderno"
        );

        expression7.addWord(writeWord);
        expression7.addWord(notebookWord);

        Expression expression8 = new Expression(
                "education-expression-008",
                "I do my homework",
                "Hago mi tarea"
        );

        expression8.addWord(homeworkWord);

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
                "education-sentence-001",
                "I am a student.",
                "Soy estudiante."
        );

        sentence1.addExpression(expression1);

        Sentence sentence2 = new Sentence(
                "education-sentence-002",
                "I go to school.",
                "Voy al colegio."
        );

        sentence2.addExpression(expression2);

        Sentence sentence3 = new Sentence(
                "education-sentence-003",
                "This is my classroom.",
                "Este es mi salón de clase."
        );

        sentence3.addExpression(expression3);

        Sentence sentence4 = new Sentence(
                "education-sentence-004",
                "My teacher is here.",
                "Mi profesor está aquí."
        );

        sentence4.addExpression(expression4);

        Sentence sentence5 = new Sentence(
                "education-sentence-005",
                "I study English.",
                "Estudio inglés."
        );

        sentence5.addExpression(expression5);

        Sentence sentence6 = new Sentence(
                "education-sentence-006",
                "I read a book.",
                "Leo un libro."
        );

        sentence6.addExpression(expression6);

        Sentence sentence7 = new Sentence(
                "education-sentence-007",
                "I write in my notebook.",
                "Escribo en mi cuaderno."
        );

        sentence7.addExpression(expression7);

        Sentence sentence8 = new Sentence(
                "education-sentence-008",
                "I do my homework.",
                "Hago mi tarea."
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
                        "education-communication-001",
                        "Talking about school",
                        "A simple conversation between students talking about school, classes and learning.",
                        "Identify basic education vocabulary and communicate simple information about school and learning."
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
                "Conoce las palabras fundamentales relacionadas con la educación."
        );

        Stage stage2 = new Stage(
                2,
                "Reconocer",
                "Identifica palabras y elementos relacionados con la escuela."
        );

        Stage stage3 = new Stage(
                3,
                "Relacionar",
                "Relaciona personas, objetos, lugares y acciones dentro del contexto educativo."
        );

        Stage stage4 = new Stage(
                4,
                "Comprender",
                "Comprende expresiones y oraciones sencillas relacionadas con la escuela y el aprendizaje."
        );

        Stage stage5 = new Stage(
                5,
                "Construir",
                "Construye expresiones y oraciones utilizando el vocabulario aprendido."
        );

        Stage stage6 = new Stage(
                6,
                "Comunicar",
                "Utiliza el vocabulario de educación para comunicarse en situaciones escolares sencillas."
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
                "education-activity-001",
                "explore",
                "Explora y conoce las palabras fundamentales de la educación.",
                stage1
        ));

        block.addActivity(new Activity(
                "education-activity-002",
                "identify",
                "Identifica correctamente personas, objetos y lugares de la escuela.",
                stage2
        ));

        block.addActivity(new Activity(
                "education-activity-003",
                "relate",
                "Relaciona cada palabra con su concepto, función o contexto.",
                stage3
        ));

        block.addActivity(new Activity(
                "education-activity-004",
                "understand",
                "Comprende expresiones sencillas relacionadas con la escuela y el aprendizaje.",
                stage4
        ));

        block.addActivity(new Activity(
                "education-activity-005",
                "build",
                "Construye oraciones sencillas utilizando el vocabulario aprendido.",
                stage5
        ));

        block.addActivity(new Activity(
                "education-activity-006",
                "communicate",
                "Construye mensajes sencillos para comunicar información sobre la escuela y el aprendizaje.",
                stage6
        ));

        return block;
    }
}
