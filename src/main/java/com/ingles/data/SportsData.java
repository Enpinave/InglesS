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

public class SportsData {

    public static SemanticBlock create() {

        // =========================================================
        // BLOQUE SEMÁNTICO
        // =========================================================

        SemanticBlock sports = new SemanticBlock(
                "sports",
                "Sports",
                "Sports - Los deportes",
                "Bloque semántico para aprender vocabulario, "
                        + "relaciones, expresiones, oraciones y comunicación "
                        + "relacionada con los deportes."
        );

        // =========================================================
        // CONCEPTOS
        // =========================================================

        Concept sportsConcept = new Concept(
                "sports",
                "SPORTS",
                "Physical activities and games that involve skill, movement and competition."
        );

        Concept personConcept = new Concept(
                "person",
                "PERSON",
                "A human being who participates in a sport."
        );

        Concept teamConcept = new Concept(
                "team",
                "TEAM",
                "A group of players who work together in a sport."
        );

        Concept equipmentConcept = new Concept(
                "equipment",
                "EQUIPMENT",
                "Objects and materials used to practice or play a sport."
        );

        Concept competitionConcept = new Concept(
                "competition",
                "COMPETITION",
                "An event in which people or teams compete to achieve a result."
        );

        Concept trainingConcept = new Concept(
                "training",
                "TRAINING",
                "Practice and preparation used to improve performance in a sport."
        );

        sports.addConcept(sportsConcept);
        sports.addConcept(personConcept);
        sports.addConcept(teamConcept);
        sports.addConcept(equipmentConcept);
        sports.addConcept(competitionConcept);
        sports.addConcept(trainingConcept);

        // =========================================================
        // VOCABULARIO
        // =========================================================

        Word sport = new Word(
                "sport",
                "sport",
                "deporte",
                "/spɔːrt/",
                sportsConcept
        );

        Word football = new Word(
                "football",
                "football",
                "fútbol",
                "/ˈfʊtbɔːl/",
                sportsConcept
        );

        Word basketball = new Word(
                "basketball",
                "basketball",
                "baloncesto",
                "/ˈbɑːskɪtbɔːl/",
                sportsConcept
        );

        Word tennis = new Word(
                "tennis",
                "tennis",
                "tenis",
                "/ˈtenɪs/",
                sportsConcept
        );

        Word swimming = new Word(
                "swimming",
                "swimming",
                "natación",
                "/ˈswɪmɪŋ/",
                sportsConcept
        );

        Word running = new Word(
                "running",
                "running",
                "correr / atletismo",
                "/ˈrʌnɪŋ/",
                sportsConcept
        );

        Word cycling = new Word(
                "cycling",
                "cycling",
                "ciclismo",
                "/ˈsaɪklɪŋ/",
                sportsConcept
        );

        Word volleyball = new Word(
                "volleyball",
                "volleyball",
                "voleibol",
                "/ˈvɒlibɔːl/",
                sportsConcept
        );

        Word player = new Word(
                "player",
                "player",
                "jugador / jugadora",
                "/ˈpleɪər/",
                personConcept
        );

        Word team = new Word(
                "team",
                "team",
                "equipo",
                "/tiːm/",
                teamConcept
        );

        Word coach = new Word(
                "coach",
                "coach",
                "entrenador / entrenadora",
                "/koʊtʃ/",
                personConcept
        );

        Word ball = new Word(
                "ball",
                "ball",
                "balón / pelota",
                "/bɔːl/",
                equipmentConcept
        );

        Word game = new Word(
                "game",
                "game",
                "juego",
                "/ɡeɪm/",
                competitionConcept
        );

        Word match = new Word(
                "match",
                "match",
                "partido",
                "/mætʃ/",
                competitionConcept
        );

        Word competition = new Word(
                "competition",
                "competition",
                "competencia / competición",
                "/ˌkɒmpəˈtɪʃən/",
                competitionConcept
        );

        Word winner = new Word(
                "winner",
                "winner",
                "ganador / ganadora",
                "/ˈwɪnər/",
                competitionConcept
        );

        Word training = new Word(
                "training",
                "training",
                "entrenamiento",
                "/ˈtreɪnɪŋ/",
                trainingConcept
        );

        sports.addWord(sport);
        sports.addWord(football);
        sports.addWord(basketball);
        sports.addWord(tennis);
        sports.addWord(swimming);
        sports.addWord(running);
        sports.addWord(cycling);
        sports.addWord(volleyball);
        sports.addWord(player);
        sports.addWord(team);
        sports.addWord(coach);
        sports.addWord(ball);
        sports.addWord(game);
        sports.addWord(match);
        sports.addWord(competition);
        sports.addWord(winner);
        sports.addWord(training);

        // =========================================================
        // RELACIONES SEMÁNTICAS
        // =========================================================

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-001",
                        "is_a",
                        "Football is a sport.",
                        new SemanticReference("WORD", "football"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-002",
                        "is_a",
                        "Basketball is a sport.",
                        new SemanticReference("WORD", "basketball"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-003",
                        "is_a",
                        "Tennis is a sport.",
                        new SemanticReference("WORD", "tennis"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-004",
                        "is_a",
                        "Swimming is a sport.",
                        new SemanticReference("WORD", "swimming"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-005",
                        "is_a",
                        "Running is a sport.",
                        new SemanticReference("WORD", "running"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-006",
                        "is_a",
                        "Cycling is a sport.",
                        new SemanticReference("WORD", "cycling"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-007",
                        "is_a",
                        "Volleyball is a sport.",
                        new SemanticReference("WORD", "volleyball"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-008",
                        "participates_in",
                        "A player participates in a team.",
                        new SemanticReference("WORD", "player"),
                        new SemanticReference("CONCEPT", "team")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-009",
                        "belongs_to",
                        "A player can belong to a team.",
                        new SemanticReference("WORD", "player"),
                        new SemanticReference("WORD", "team")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-010",
                        "leads",
                        "A coach leads and trains players.",
                        new SemanticReference("WORD", "coach"),
                        new SemanticReference("CONCEPT", "training")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-011",
                        "used_in",
                        "A ball is used in many sports and games.",
                        new SemanticReference("WORD", "ball"),
                        new SemanticReference("CONCEPT", "sports")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-012",
                        "is_a",
                        "A match is a competitive game.",
                        new SemanticReference("WORD", "match"),
                        new SemanticReference("WORD", "game")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-013",
                        "part_of",
                        "A match can be part of a competition.",
                        new SemanticReference("WORD", "match"),
                        new SemanticReference("CONCEPT", "competition")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-014",
                        "result_of",
                        "A winner is the person or team that wins a competition.",
                        new SemanticReference("WORD", "winner"),
                        new SemanticReference("CONCEPT", "competition")
                )
        );

        sports.addRelation(
                new SemanticRelation(
                        "sports-rel-015",
                        "improves",
                        "Training helps a player improve performance.",
                        new SemanticReference("WORD", "training"),
                        new SemanticReference("WORD", "player")
                )
        );

        // =========================================================
        // EXPRESIONES
        // =========================================================

        Expression iPlayFootball = new Expression(
                "sports-exp-001",
                "I play football",
                "Juego fútbol."
        );
        iPlayFootball.addWord(football);

        Expression iLikeBasketball = new Expression(
                "sports-exp-002",
                "I like basketball",
                "Me gusta el baloncesto."
        );
        iLikeBasketball.addWord(basketball);

        Expression iPlayTennis = new Expression(
                "sports-exp-003",
                "I play tennis",
                "Juego tenis."
        );
        iPlayTennis.addWord(tennis);

        Expression iLikeSwimming = new Expression(
                "sports-exp-004",
                "I like swimming",
                "Me gusta la natación."
        );
        iLikeSwimming.addWord(swimming);

        Expression iAmAPlayer = new Expression(
                "sports-exp-005",
                "I am a player",
                "Soy jugador / jugadora."
        );
        iAmAPlayer.addWord(player);

        Expression myTeamIsReady = new Expression(
                "sports-exp-006",
                "My team is ready",
                "Mi equipo está listo."
        );
        myTeamIsReady.addWord(team);

        Expression iTrainEveryDay = new Expression(
                "sports-exp-007",
                "I train every day",
                "Entreno todos los días."
        );
        iTrainEveryDay.addWord(training);

        Expression wePlayAMatch = new Expression(
                "sports-exp-008",
                "We play a match",
                "Jugamos un partido."
        );
        wePlayAMatch.addWord(match);

        sports.addExpression(iPlayFootball);
        sports.addExpression(iLikeBasketball);
        sports.addExpression(iPlayTennis);
        sports.addExpression(iLikeSwimming);
        sports.addExpression(iAmAPlayer);
        sports.addExpression(myTeamIsReady);
        sports.addExpression(iTrainEveryDay);
        sports.addExpression(wePlayAMatch);

        // =========================================================
        // ORACIONES
        // =========================================================

        Sentence sentenceFootball = new Sentence(
                "sports-sentence-001",
                "I play football.",
                "Juego fútbol."
        );
        sentenceFootball.addExpression(iPlayFootball);

        Sentence sentenceBasketball = new Sentence(
                "sports-sentence-002",
                "I like basketball.",
                "Me gusta el baloncesto."
        );
        sentenceBasketball.addExpression(iLikeBasketball);

        Sentence sentenceTennis = new Sentence(
                "sports-sentence-003",
                "I play tennis.",
                "Juego tenis."
        );
        sentenceTennis.addExpression(iPlayTennis);

        Sentence sentenceSwimming = new Sentence(
                "sports-sentence-004",
                "I like swimming.",
                "Me gusta la natación."
        );
        sentenceSwimming.addExpression(iLikeSwimming);

        Sentence sentencePlayer = new Sentence(
                "sports-sentence-005",
                "I am a player.",
                "Soy jugador / jugadora."
        );
        sentencePlayer.addExpression(iAmAPlayer);

        Sentence sentenceTeam = new Sentence(
                "sports-sentence-006",
                "My team is ready.",
                "Mi equipo está listo."
        );
        sentenceTeam.addExpression(myTeamIsReady);

        Sentence sentenceTraining = new Sentence(
                "sports-sentence-007",
                "I train every day.",
                "Entreno todos los días."
        );
        sentenceTraining.addExpression(iTrainEveryDay);

        Sentence sentenceMatch = new Sentence(
                "sports-sentence-008",
                "We play a match.",
                "Jugamos un partido."
        );
        sentenceMatch.addExpression(wePlayAMatch);

        sports.addSentence(sentenceFootball);
        sports.addSentence(sentenceBasketball);
        sports.addSentence(sentenceTennis);
        sports.addSentence(sentenceSwimming);
        sports.addSentence(sentencePlayer);
        sports.addSentence(sentenceTeam);
        sports.addSentence(sentenceTraining);
        sports.addSentence(sentenceMatch);

        // =========================================================
        // SITUACIÓN COMUNICATIVA
        // =========================================================

        CommunicationSituation sportsConversation =
                new CommunicationSituation(
                        "sports-communication-001",
                        "Talking about sports",
                        "A simple conversation between people talking about sports and training.",
                        "Identify basic sports vocabulary and communicate simple information about sports activities."
                );

        sportsConversation.addSentence(sentenceFootball);
        sportsConversation.addSentence(sentenceBasketball);
        sportsConversation.addSentence(sentenceTennis);
        sportsConversation.addSentence(sentenceSwimming);
        sportsConversation.addSentence(sentencePlayer);
        sportsConversation.addSentence(sentenceTeam);
        sportsConversation.addSentence(sentenceTraining);
        sportsConversation.addSentence(sentenceMatch);

        sports.addCommunication(sportsConversation);

        // =========================================================
        // ETAPAS DEL APRENDIZAJE
        // =========================================================

        Stage discover = new Stage(
                1,
                "DESCUBRIR",
                "Conoce los conceptos y palabras fundamentales relacionados con los deportes."
        );

        Stage recognize = new Stage(
                2,
                "RECONOCER",
                "Identifica y reconoce las palabras en inglés y su significado en español."
        );

        Stage relate = new Stage(
                3,
                "RELACIONAR",
                "Relaciona deportes, jugadores, equipos, objetos y situaciones deportivas."
        );

        Stage understand = new Stage(
                4,
                "COMPRENDER",
                "Comprende expresiones y oraciones sencillas relacionadas con los deportes."
        );

        Stage build = new Stage(
                5,
                "CONSTRUIR",
                "Construye expresiones y oraciones utilizando el vocabulario deportivo aprendido."
        );

        Stage communicate = new Stage(
                6,
                "COMUNICAR",
                "Utiliza el inglés para comunicar información sencilla sobre deportes y entrenamiento."
        );

        sports.addStage(discover);
        sports.addStage(recognize);
        sports.addStage(relate);
        sports.addStage(understand);
        sports.addStage(build);
        sports.addStage(communicate);

        // =========================================================
        // ACTIVIDADES
        // =========================================================

        Activity activity01 = new Activity(
                "sports-activity-001",
                "EXPLORE",
                "Explora las palabras básicas relacionadas con los deportes.",
                discover
        );

        Activity activity02 = new Activity(
                "sports-activity-002",
                "MATCH",
                "Relaciona cada palabra en inglés con su significado en español.",
                recognize
        );

        Activity activity03 = new Activity(
                "sports-activity-003",
                "RELATE",
                "Relaciona deportes, jugadores, equipos, objetos y competencias.",
                relate
        );

        Activity activity04 = new Activity(
                "sports-activity-004",
                "UNDERSTAND",
                "Comprende expresiones como I play football y I like basketball.",
                understand
        );

        Activity activity05 = new Activity(
                "sports-activity-005",
                "BUILD",
                "Construye oraciones sencillas utilizando expresiones relacionadas con los deportes.",
                build
        );

        Activity activity06 = new Activity(
                "sports-activity-006",
                "COMMUNICATE",
                "Participa en una situación comunicativa sencilla sobre deportes y entrenamiento.",
                communicate
        );

        sports.addActivity(activity01);
        sports.addActivity(activity02);
        sports.addActivity(activity03);
        sports.addActivity(activity04);
        sports.addActivity(activity05);
        sports.addActivity(activity06);

        // =========================================================
        // RETORNAR BLOQUE
        // =========================================================

        return sports;
    }
}