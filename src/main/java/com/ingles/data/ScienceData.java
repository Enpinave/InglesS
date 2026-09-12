
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

public class ScienceData {

    public static SemanticBlock create() {

        // =========================================================
        // BLOQUE SEMÁNTICO
        // =========================================================

        SemanticBlock block = new SemanticBlock(
                "science",
                "Science",
                "Science - La ciencia",
                "Vocabulario y expresiones básicas relacionadas con la ciencia, la naturaleza, los experimentos y la tecnología."
        );

        // =========================================================
        // CONCEPTOS
        // =========================================================

        Concept science = new Concept(
                "science",
                "Science",
                "La ciencia y el conocimiento científico"
        );

        Concept laboratory = new Concept(
                "laboratory",
                "Laboratory",
                "El laboratorio y los espacios científicos"
        );

        Concept nature = new Concept(
                "nature",
                "Nature",
                "La naturaleza y los seres vivos"
        );

        Concept experiment = new Concept(
                "experiment",
                "Experiment",
                "Los experimentos y la investigación"
        );

        Concept matter = new Concept(
                "matter",
                "Matter",
                "La materia y sus estados"
        );

        Concept technology = new Concept(
                "technology",
                "Technology",
                "La tecnología y las herramientas científicas"
        );

        block.addConcept(science);
        block.addConcept(laboratory);
        block.addConcept(nature);
        block.addConcept(experiment);
        block.addConcept(matter);
        block.addConcept(technology);

        // =========================================================
        // VOCABULARIO
        // =========================================================

        Word scienceWord = new Word(
                "science-word-001",
                "science",
                "ciencia",
                "ˈsaɪəns",
                science
        );

        Word scientistWord = new Word(
                "science-word-002",
                "scientist",
                "científico / científica",
                "ˈsaɪəntɪst",
                science
        );

        Word laboratoryWord = new Word(
                "science-word-003",
                "laboratory",
                "laboratorio",
                "ˈlæbrətɔːri",
                laboratory
        );

        Word experimentWord = new Word(
                "science-word-004",
                "experiment",
                "experimento",
                "ɪkˈsperɪmənt",
                experiment
        );

        Word natureWord = new Word(
                "science-word-005",
                "nature",
                "naturaleza",
                "ˈneɪtʃər",
                nature
        );

        Word plantWord = new Word(
                "science-word-006",
                "plant",
                "planta",
                "plænt",
                nature
        );

        Word animalWord = new Word(
                "science-word-007",
                "animal",
                "animal",
                "ˈænɪməl",
                nature
        );

        Word waterWord = new Word(
                "science-word-008",
                "water",
                "agua",
                "ˈwɔːtər",
                matter
        );

        Word airWord = new Word(
                "science-word-009",
                "air",
                "aire",
                "er",
                matter
        );

        Word energyWord = new Word(
                "science-word-010",
                "energy",
                "energía",
                "ˈenərdʒi",
                science
        );

        Word matterWord = new Word(
                "science-word-011",
                "matter",
                "materia",
                "ˈmætər",
                matter
        );

        Word solidWord = new Word(
                "science-word-012",
                "solid",
                "sólido",
                "ˈsɑːlɪd",
                matter
        );

        Word liquidWord = new Word(
                "science-word-013",
                "liquid",
                "líquido",
                "ˈlɪkwɪd",
                matter
        );

        Word gasWord = new Word(
                "science-word-014",
                "gas",
                "gas",
                "ɡæs",
                matter
        );

        Word microscopeWord = new Word(
                "science-word-015",
                "microscope",
                "microscopio",
                "ˈmaɪkrəskoʊp",
                laboratory
        );

        Word computerWord = new Word(
                "science-word-016",
                "computer",
                "computador",
                "kəmˈpjuːtər",
                technology
        );

        Word discoverWord = new Word(
                "science-word-017",
                "discover",
                "descubrir",
                "dɪˈskʌvər",
                science
        );

        block.addWord(scienceWord);
        block.addWord(scientistWord);
        block.addWord(laboratoryWord);
        block.addWord(experimentWord);
        block.addWord(natureWord);
        block.addWord(plantWord);
        block.addWord(animalWord);
        block.addWord(waterWord);
        block.addWord(airWord);
        block.addWord(energyWord);
        block.addWord(matterWord);
        block.addWord(solidWord);
        block.addWord(liquidWord);
        block.addWord(gasWord);
        block.addWord(microscopeWord);
        block.addWord(computerWord);
        block.addWord(discoverWord);

        // =========================================================
        // RELACIONES SEMÁNTICAS
        // =========================================================

        block.addRelation(new SemanticRelation(
                "science-rel-001",
                "person",
                "A scientist is a person who works with science.",
                new SemanticReference("word", "science-word-002"),
                new SemanticReference("concept", "science")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-002",
                "located_in",
                "A laboratory is a place where scientists work.",
                new SemanticReference("word", "science-word-003"),
                new SemanticReference("concept", "laboratory")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-003",
                "used_for",
                "An experiment is used to investigate or discover something.",
                new SemanticReference("word", "science-word-004"),
                new SemanticReference("concept", "experiment")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-004",
                "part_of",
                "Plants are part of nature.",
                new SemanticReference("word", "science-word-006"),
                new SemanticReference("concept", "nature")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-005",
                "part_of",
                "Animals are part of nature.",
                new SemanticReference("word", "science-word-007"),
                new SemanticReference("concept", "nature")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-006",
                "type_of",
                "Water is a form of matter.",
                new SemanticReference("word", "science-word-008"),
                new SemanticReference("concept", "matter")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-007",
                "type_of",
                "Air is a form of matter.",
                new SemanticReference("word", "science-word-009"),
                new SemanticReference("concept", "matter")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-008",
                "related_to",
                "Energy is an important concept in science.",
                new SemanticReference("word", "science-word-010"),
                new SemanticReference("concept", "science")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-009",
                "type_of",
                "A solid is a state of matter.",
                new SemanticReference("word", "science-word-012"),
                new SemanticReference("word", "science-word-011")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-010",
                "type_of",
                "A liquid is a state of matter.",
                new SemanticReference("word", "science-word-013"),
                new SemanticReference("word", "science-word-011")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-011",
                "type_of",
                "A gas is a state of matter.",
                new SemanticReference("word", "science-word-014"),
                new SemanticReference("word", "science-word-011")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-012",
                "used_in",
                "A microscope is used in scientific work.",
                new SemanticReference("word", "science-word-015"),
                new SemanticReference("concept", "laboratory")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-013",
                "used_in",
                "A computer can be used in science and technology.",
                new SemanticReference("word", "science-word-016"),
                new SemanticReference("concept", "technology")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-014",
                "action",
                "Scientists discover new information through research.",
                new SemanticReference("word", "science-word-017"),
                new SemanticReference("concept", "science")
        ));

        block.addRelation(new SemanticRelation(
                "science-rel-015",
                "related_to",
                "Experiments help scientists discover new knowledge.",
                new SemanticReference("word", "science-word-004"),
                new SemanticReference("word", "science-word-017")
        ));

        // =========================================================
        // EXPRESIONES
        // =========================================================

        Expression expression1 = new Expression(
                "science-expression-001",
                "I study science",
                "Estudio ciencias"
        );

        expression1.addWord(scienceWord);

        Expression expression2 = new Expression(
                "science-expression-002",
                "This is a laboratory",
                "Este es un laboratorio"
        );

        expression2.addWord(laboratoryWord);

        Expression expression3 = new Expression(
                "science-expression-003",
                "This is an experiment",
                "Este es un experimento"
        );

        expression3.addWord(experimentWord);

        Expression expression4 = new Expression(
                "science-expression-004",
                "I study nature",
                "Estudio la naturaleza"
        );

        expression4.addWord(natureWord);

        Expression expression5 = new Expression(
                "science-expression-005",
                "Water is a liquid",
                "El agua es un líquido"
        );

        expression5.addWord(waterWord);
        expression5.addWord(liquidWord);

        Expression expression6 = new Expression(
                "science-expression-006",
                "Air is everywhere",
                "El aire está en todas partes"
        );

        expression6.addWord(airWord);

        Expression expression7 = new Expression(
                "science-expression-007",
                "I use a microscope",
                "Uso un microscopio"
        );

        expression7.addWord(microscopeWord);

        Expression expression8 = new Expression(
                "science-expression-008",
                "Scientists discover new things",
                "Los científicos descubren cosas nuevas"
        );

        expression8.addWord(scientistWord);
        expression8.addWord(discoverWord);

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
                "science-sentence-001",
                "I study science.",
                "Estudio ciencias."
        );

        sentence1.addExpression(expression1);

        Sentence sentence2 = new Sentence(
                "science-sentence-002",
                "This is a laboratory.",
                "Este es un laboratorio."
        );

        sentence2.addExpression(expression2);

        Sentence sentence3 = new Sentence(
                "science-sentence-003",
                "This is an experiment.",
                "Este es un experimento."
        );

        sentence3.addExpression(expression3);

        Sentence sentence4 = new Sentence(
                "science-sentence-004",
                "I study nature.",
                "Estudio la naturaleza."
        );

        sentence4.addExpression(expression4);

        Sentence sentence5 = new Sentence(
                "science-sentence-005",
                "Water is a liquid.",
                "El agua es un líquido."
        );

        sentence5.addExpression(expression5);

        Sentence sentence6 = new Sentence(
                "science-sentence-006",
                "Air is everywhere.",
                "El aire está en todas partes."
        );

        sentence6.addExpression(expression6);

        Sentence sentence7 = new Sentence(
                "science-sentence-007",
                "I use a microscope.",
                "Uso un microscopio."
        );

        sentence7.addExpression(expression7);

        Sentence sentence8 = new Sentence(
                "science-sentence-008",
                "Scientists discover new things.",
                "Los científicos descubren cosas nuevas."
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
                        "science-communication-001",
                        "Talking about science",
                        "A simple conversation between students talking about science, experiments, nature and technology.",
                        "Identify basic science vocabulary and communicate simple information about science and experiments."
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
                "Conoce las palabras fundamentales relacionadas con la ciencia."
        );

        Stage stage2 = new Stage(
                2,
                "Reconocer",
                "Identifica personas, lugares, objetos y elementos relacionados con la ciencia."
        );

        Stage stage3 = new Stage(
                3,
                "Relacionar",
                "Relaciona conceptos científicos con objetos, acciones, lugares y situaciones."
        );

        Stage stage4 = new Stage(
                4,
                "Comprender",
                "Comprende expresiones y oraciones sencillas relacionadas con la ciencia."
        );

        Stage stage5 = new Stage(
                5,
                "Construir",
                "Construye expresiones y oraciones utilizando el vocabulario científico aprendido."
        );

        Stage stage6 = new Stage(
                6,
                "Comunicar",
                "Utiliza el vocabulario de ciencia para comunicarse en situaciones sencillas."
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
                "science-activity-001",
                "explore",
                "Explora y conoce las palabras fundamentales de la ciencia.",
                stage1
        ));

        block.addActivity(new Activity(
                "science-activity-002",
                "identify",
                "Identifica correctamente personas, objetos y elementos científicos.",
                stage2
        ));

        block.addActivity(new Activity(
                "science-activity-003",
                "relate",
                "Relaciona cada palabra con su concepto, función o contexto científico.",
                stage3
        ));

        block.addActivity(new Activity(
                "science-activity-004",
                "understand",
                "Comprende expresiones sencillas relacionadas con la ciencia, la naturaleza y los experimentos.",
                stage4
        ));

        block.addActivity(new Activity(
                "science-activity-005",
                "build",
                "Construye oraciones sencillas utilizando el vocabulario científico aprendido.",
                stage5
        ));

        block.addActivity(new Activity(
                "science-activity-006",
                "communicate",
                "Construye mensajes sencillos para comunicar información sobre ciencia y experimentos.",
                stage6
        ));

        return block;
    }
}
