package com.ingles.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.ingles.model.CommunicationSituation;
import com.ingles.model.Concept;
import com.ingles.model.Expression;
import com.ingles.model.SemanticBlock;
import com.ingles.model.SemanticReference;
import com.ingles.model.SemanticRelation;
import com.ingles.model.Sentence;
import com.ingles.model.Stage;
import com.ingles.model.Word;

public class SemanticNavigator {

    private SemanticBlock block;

    // =========================================================
    // CONSTRUCTOR
    // =========================================================

    public SemanticNavigator(SemanticBlock block) {
        this.block = block;
    }

    // =========================================================
    // BLOQUE SEMÁNTICO
    // =========================================================

    public SemanticBlock getBlock() {
        return block;
    }

    public void setBlock(SemanticBlock block) {
        this.block = block;
    }

    // =========================================================
    // CONCEPTOS
    // =========================================================

    public Concept findConcept(String conceptId) {

        for (Concept concept : block.getConcepts()) {

            if (concept.getId().equals(conceptId)) {
                return concept;
            }
        }

        return null;
    }

    // =========================================================
    // VOCABULARIO
    // =========================================================

    public Word findWord(String wordId) {

        for (Word word : block.getVocabulary()) {

            if (word.getId().equals(wordId)) {
                return word;
            }
        }

        return null;
    }

    public List<Word> findWordsByConcept(
            String conceptId) {

        List<Word> result = new ArrayList<>();

        for (Word word : block.getVocabulary()) {

            if (word.getConcept() != null
                    && word.getConcept().getId().equals(conceptId)) {

                result.add(word);
            }
        }

        return result;
    }

    // =========================================================
    // RELACIONES SEMÁNTICAS
    // =========================================================

    public List<SemanticRelation> findRelations(
            String type,
            String id) {

        List<SemanticRelation> result =
                new ArrayList<>();

        for (SemanticRelation relation :
                block.getRelations()) {

            SemanticReference source =
                    relation.getSource();

            SemanticReference target =
                    relation.getTarget();

            boolean sourceMatch =
                    isSameReference(
                            source,
                            type,
                            id
                    );

            boolean targetMatch =
                    isSameReference(
                            target,
                            type,
                            id
                    );

            if (sourceMatch || targetMatch) {
                result.add(relation);
            }
        }

        return result;
    }

    public List<SemanticRelation> findRelations(
            String wordId) {

        return findRelations(
                "WORD",
                wordId
        );
    }

    private boolean isSameReference(
            SemanticReference reference,
            String type,
            String id) {

        if (reference == null) {
            return false;
        }

        return type.equals(reference.getType())
                && id.equals(reference.getId());
    }

    // =========================================================
    // EXPRESIONES
    // =========================================================

    public List<Expression> findExpressionsByWord(
            String wordId) {

        List<Expression> result =
                new ArrayList<>();

        for (Expression expression :
                block.getExpressions()) {

            for (Word word :
                    expression.getWords()) {

                if (word.getId().equals(wordId)) {

                    result.add(expression);
                    break;
                }
            }
        }

        return result;
    }

    // =========================================================
    // ORACIONES
    // =========================================================

    public List<Sentence> findSentencesByExpression(
            String expressionId) {

        List<Sentence> result =
                new ArrayList<>();

        for (Sentence sentence :
                block.getSentences()) {

            for (Expression expression :
                    sentence.getExpressions()) {

                if (expression.getId()
                        .equals(expressionId)) {

                    result.add(sentence);
                    break;
                }
            }
        }

        return result;
    }

    public List<Sentence> findSentencesByWord(
            String wordId) {

        List<Sentence> result =
                new ArrayList<>();

        List<Expression> expressions =
                findExpressionsByWord(wordId);

        for (Expression expression :
                expressions) {

            List<Sentence> sentences =
                    findSentencesByExpression(
                            expression.getId()
                    );

            for (Sentence sentence :
                    sentences) {

                if (!result.contains(sentence)) {
                    result.add(sentence);
                }
            }
        }

        return result;
    }

    // =========================================================
    // COMUNICACIÓN
    // =========================================================

    public List<CommunicationSituation>
    findCommunicationBySentence(
            String sentenceId) {

        List<CommunicationSituation> result =
                new ArrayList<>();

        for (CommunicationSituation situation :
                block.getCommunication()) {

            for (Sentence sentence :
                    situation.getSentences()) {

                if (sentence.getId()
                        .equals(sentenceId)) {

                    result.add(situation);
                    break;
                }
            }
        }

        return result;
    }

    // =========================================================
    // ETAPAS
    // =========================================================

    public Stage findStage(int number) {

        for (Stage stage :
                block.getStages()) {

            if (stage.getNumber() == number) {
                return stage;
            }
        }

        return null;
    }

    // =========================================================
    // RED SEMÁNTICA DE UNA PALABRA
    // =========================================================

    public void showSemanticNetwork(
            String wordId) {

        Word word = findWord(wordId);

        if (word == null) {

            System.out.println(
                    "No se encontró la palabra: "
                    + wordId
            );

            return;
        }

        System.out.println();
        System.out.println(
                "=============================================="
        );

        System.out.println(
                "             RED SEMÁNTICA"
        );

        System.out.println(
                "=============================================="
        );

        // -----------------------------------------------------
        // PALABRA
        // -----------------------------------------------------

        System.out.println();
        System.out.println("PALABRA");

        System.out.println(
                "  "
                + word.getEnglish()
                + " → "
                + word.getSpanish()
        );

        // -----------------------------------------------------
        // CONCEPTO
        // -----------------------------------------------------

        if (word.getConcept() != null) {

            System.out.println();
            System.out.println("CONCEPTO");

            System.out.println(
                    "  "
                    + word.getConcept().getId()
                    + " → "
                    + word.getConcept().getName()
            );
        }

        // -----------------------------------------------------
        // RELACIONES
        // -----------------------------------------------------

        System.out.println();
        System.out.println("RELACIONES");

        List<SemanticRelation> relations =
                findRelations(
                        "WORD",
                        wordId
                );

        if (relations.isEmpty()) {

            System.out.println(
                    "  No tiene relaciones."
            );

        } else {

            for (SemanticRelation relation :
                    relations) {

                printRelationFromNode(
                        relation,
                        "WORD",
                        wordId
                );
            }
        }

        // -----------------------------------------------------
        // EXPRESIONES
        // -----------------------------------------------------

        System.out.println();
        System.out.println("EXPRESIONES");

        List<Expression> expressions =
                findExpressionsByWord(wordId);

        if (expressions.isEmpty()) {

            System.out.println(
                    "  No aparece en expresiones."
            );

        } else {

            for (Expression expression :
                    expressions) {

                System.out.println(
                        "  "
                        + expression.getText()
                        + " → "
                        + expression.getMeaning()
                );
            }
        }

        // -----------------------------------------------------
        // ORACIONES
        // -----------------------------------------------------

        System.out.println();
        System.out.println("ORACIONES");

        List<Sentence> sentences =
                findSentencesByWord(wordId);

        if (sentences.isEmpty()) {

            System.out.println(
                    "  No aparece en oraciones."
            );

        } else {

            for (Sentence sentence :
                    sentences) {

                System.out.println(
                        "  "
                        + sentence.getText()
                        + " → "
                        + sentence.getTranslation()
                );
            }
        }

        // -----------------------------------------------------
        // COMUNICACIÓN
        // -----------------------------------------------------

        System.out.println();
        System.out.println("COMUNICACIÓN");

        boolean foundCommunication = false;

        for (Sentence sentence :
                sentences) {

            List<CommunicationSituation>
                    situations =
                    findCommunicationBySentence(
                            sentence.getId()
                    );

            for (CommunicationSituation situation :
                    situations) {

                System.out.println(
                        "  "
                        + situation.getTitle()
                );

                System.out.println(
                        "     "
                        + situation.getObjective()
                );

                foundCommunication = true;
            }
        }

        if (!foundCommunication) {

            System.out.println(
                    "  No existe situación comunicativa."
            );
        }

        System.out.println();
        System.out.println(
                "=============================================="
        );
    }

    // =========================================================
    // EXPLORACIÓN COMPLETA
    // =========================================================

    public void explore(
            String type,
            String id) {

        Set<String> visited =
                new HashSet<>();

        System.out.println();
        System.out.println(
                "=============================================="
        );

        System.out.println(
                "          EXPLORACIÓN SEMÁNTICA"
        );

        System.out.println(
                "=============================================="
        );

        System.out.println();

        exploreNode(
                type,
                id,
                0,
                visited
        );

        System.out.println();
        System.out.println(
                "=============================================="
        );
    }

    // =========================================================
    // EXPLORACIÓN DE NODOS
    // =========================================================

    private void exploreNode(
            String type,
            String id,
            int level,
            Set<String> visited) {

        String key =
                type + ":" + id;

        if (visited.contains(key)) {
            return;
        }

        visited.add(key);

        printIndent(level);

        System.out.println(
                "["
                + type
                + "] "
                + getNodeName(type, id)
        );

        // =====================================================
        // WORD
        // =====================================================

        if (type.equals("WORD")) {

            Word word = findWord(id);

            if (word == null) {
                return;
            }

            // ---------------------------------------------
            // PALABRA → CONCEPTO
            // ---------------------------------------------

            if (word.getConcept() != null) {

                printIndent(level + 1);

                System.out.println(
                        "└─ belongs_to → CONCEPT("
                        + word.getConcept().getId()
                        + ")"
                );

                exploreNode(
                        "CONCEPT",
                        word.getConcept().getId(),
                        level + 2,
                        visited
                );
            }

            // ---------------------------------------------
            // RELACIONES
            // ---------------------------------------------

            List<SemanticRelation> relations =
                    findRelations(
                            "WORD",
                            id
                    );

            for (SemanticRelation relation :
                    relations) {

                exploreRelation(
                        relation,
                        type,
                        id,
                        level + 1,
                        visited
                );
            }

            // ---------------------------------------------
            // EXPRESIONES
            // ---------------------------------------------

            List<Expression> expressions =
                    findExpressionsByWord(id);

            for (Expression expression :
                    expressions) {

                printIndent(level + 1);

                System.out.println(
                        "└─ appears_in → EXPRESSION"
                );

                exploreNode(
                        "EXPRESSION",
                        expression.getId(),
                        level + 2,
                        visited
                );
            }

            return;
        }

        // =====================================================
        // CONCEPT
        // =====================================================

        if (type.equals("CONCEPT")) {

            // ---------------------------------------------
            // CONCEPTO → PALABRAS
            // ---------------------------------------------

            List<Word> words =
                    findWordsByConcept(id);

            for (Word word :
                    words) {

                printIndent(level + 1);

                System.out.println(
                        "└─ contains → WORD("
                        + word.getId()
                        + ")"
                );

                exploreNode(
                        "WORD",
                        word.getId(),
                        level + 2,
                        visited
                );
            }

            // ---------------------------------------------
            // RELACIONES DEL CONCEPTO
            // ---------------------------------------------

            List<SemanticRelation> relations =
                    findRelations(
                            "CONCEPT",
                            id
                    );

            for (SemanticRelation relation :
                    relations) {

                exploreRelation(
                        relation,
                        type,
                        id,
                        level + 1,
                        visited
                );
            }

            return;
        }

        // =====================================================
        // EXPRESSION
        // =====================================================

        if (type.equals("EXPRESSION")) {

            List<Sentence> sentences =
                    findSentencesByExpression(id);

            for (Sentence sentence :
                    sentences) {

                printIndent(level + 1);

                System.out.println(
                        "└─ appears_in → SENTENCE"
                );

                exploreNode(
                        "SENTENCE",
                        sentence.getId(),
                        level + 2,
                        visited
                );
            }

            return;
        }

        // =====================================================
        // SENTENCE
        // =====================================================

        if (type.equals("SENTENCE")) {

            List<CommunicationSituation>
                    situations =
                    findCommunicationBySentence(id);

            for (CommunicationSituation situation :
                    situations) {

                printIndent(level + 1);

                System.out.println(
                        "└─ used_in → COMMUNICATION"
                );

                exploreNode(
                        "COMMUNICATION",
                        situation.getId(),
                        level + 2,
                        visited
                );
            }
        }
    }

    // =========================================================
    // EXPLORAR RELACIÓN CONSERVANDO SU DIRECCIÓN
    // =========================================================

    private void exploreRelation(
            SemanticRelation relation,
            String currentType,
            String currentId,
            int level,
            Set<String> visited) {

        SemanticReference source =
                relation.getSource();

        SemanticReference target =
                relation.getTarget();

        // -----------------------------------------------------
        // EL NODO ACTUAL ES EL ORIGEN
        // -----------------------------------------------------

        if (isSameReference(
                source,
                currentType,
                currentId)) {

            printIndent(level);

            System.out.println(
                    "└─ "
                    + relation.getType()
                    + " → "
                    + referenceText(target)
            );

            if (target != null) {

                exploreNode(
                        target.getType(),
                        target.getId(),
                        level + 1,
                        visited
                );
            }

            return;
        }

        // -----------------------------------------------------
        // EL NODO ACTUAL ES EL DESTINO
        // -----------------------------------------------------

        if (isSameReference(
                target,
                currentType,
                currentId)) {

            printIndent(level);

            System.out.println(
                    "└─ ← "
                    + relation.getType()
                    + " ← "
                    + referenceText(source)
            );

            if (source != null) {

                exploreNode(
                        source.getType(),
                        source.getId(),
                        level + 1,
                        visited
                );
            }
        }
    }

    // =========================================================
    // MOSTRAR RELACIÓN DESDE UN NODO
    // =========================================================

    private void printRelationFromNode(
            SemanticRelation relation,
            String currentType,
            String currentId) {

        SemanticReference source =
                relation.getSource();

        SemanticReference target =
                relation.getTarget();

        System.out.print("  ");

        // -----------------------------------------------------
        // RELACIÓN SALIENTE
        // -----------------------------------------------------

        if (isSameReference(
                source,
                currentType,
                currentId)) {

            System.out.println(
                    referenceText(source)
                    + " --"
                    + relation.getType()
                    + "--> "
                    + referenceText(target)
            );

            return;
        }

        // -----------------------------------------------------
        // RELACIÓN ENTRANTE
        // -----------------------------------------------------

        if (isSameReference(
                target,
                currentType,
                currentId)) {

            System.out.println(
                    referenceText(source)
                    + " <--"
                    + relation.getType()
                    + "-- "
                    + referenceText(target)
            );
        }
    }

    // =========================================================
    // NOMBRE DEL NODO
    // =========================================================

    private String getNodeName(
            String type,
            String id) {

        // -----------------------------------------------------
        // WORD
        // -----------------------------------------------------

        if (type.equals("WORD")) {

            Word word = findWord(id);

            if (word != null) {

                return word.getEnglish()
                        + " → "
                        + word.getSpanish();
            }
        }

        // -----------------------------------------------------
        // CONCEPT
        // -----------------------------------------------------

        if (type.equals("CONCEPT")) {

            Concept concept =
                    findConcept(id);

            if (concept != null) {

                return concept.getName();
            }
        }

        // -----------------------------------------------------
        // EXPRESSION
        // -----------------------------------------------------

        if (type.equals("EXPRESSION")) {

            for (Expression expression :
                    block.getExpressions()) {

                if (expression.getId()
                        .equals(id)) {

                    return expression.getText()
                            + " → "
                            + expression.getMeaning();
                }
            }
        }

        // -----------------------------------------------------
        // SENTENCE
        // -----------------------------------------------------

        if (type.equals("SENTENCE")) {

            for (Sentence sentence :
                    block.getSentences()) {

                if (sentence.getId()
                        .equals(id)) {

                    return sentence.getText();
                }
            }
        }

        // -----------------------------------------------------
        // COMMUNICATION
        // -----------------------------------------------------

        if (type.equals("COMMUNICATION")) {

            for (CommunicationSituation situation :
                    block.getCommunication()) {

                if (situation.getId()
                        .equals(id)) {

                    return situation.getTitle();
                }
            }
        }

        return id;
    }

    // =========================================================
    // TEXTO DE REFERENCIA
    // =========================================================

    private String referenceText(
            SemanticReference reference) {

        if (reference == null) {
            return "null";
        }

        return reference.getType()
                + "("
                + reference.getId()
                + ")";
    }

    // =========================================================
    // INDENTACIÓN
    // =========================================================

    private void printIndent(int level) {

        for (int i = 0; i < level; i++) {

            System.out.print("   ");
        }
    }
}