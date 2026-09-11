
package com.ingles;

import com.ingles.data.FamilyData;
import com.ingles.model.*;
import com.ingles.service.SemanticNavigator;

public class Main {

    public static void main(String[] args) {

        // =========================================================
        // CREAR BLOQUE FAMILY
        // =========================================================

        SemanticBlock family = FamilyData.create();

        // =========================================================
        // CREAR NAVEGADOR SEMÁNTICO
        // =========================================================

        SemanticNavigator navigator =
                new SemanticNavigator(family);

        // =========================================================
        // INFORMACIÓN GENERAL
        // =========================================================

        System.out.println("==============================================");
        System.out.println("        BLOQUE SEMÁNTICO: FAMILY");
        System.out.println("==============================================");

        System.out.println();
        System.out.println("Nombre: " + family.getName());
        System.out.println("Descripción: " + family.getDescription());

        // =========================================================
        // 1. CONCEPTOS
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("1. CONCEPTOS");
        System.out.println("----------------------------------------------");

        for (Concept concept : family.getConcepts()) {

            System.out.println(
                    concept.getId()
                    + " → "
                    + concept.getName()
                    + " → "
                    + concept.getDescription()
            );
        }

        // =========================================================
        // 2. VOCABULARIO → CONCEPTO
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("2. VOCABULARIO → CONCEPTO");
        System.out.println("----------------------------------------------");

        for (Word word : family.getVocabulary()) {

            System.out.println(
                    word.getEnglish()
                    + " → "
                    + word.getSpanish()
                    + " → concepto: "
                    + word.getConcept().getName()
            );
        }

        // =========================================================
        // 3. RELACIONES SEMÁNTICAS
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("3. RELACIONES SEMÁNTICAS");
        System.out.println("----------------------------------------------");

        for (SemanticRelation relation : family.getRelations()) {

            SemanticReference source =
                    relation.getSource();

            SemanticReference target =
                    relation.getTarget();

            System.out.println(
                    source.getType()
                    + "("
                    + source.getId()
                    + ")"
                    + " → "
                    + relation.getType()
                    + " → "
                    + target.getType()
                    + "("
                    + target.getId()
                    + ")"
                    + " | "
                    + relation.getDescription()
            );
        }

        // =========================================================
        // 4. EXPRESIONES
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("4. EXPRESIONES");
        System.out.println("----------------------------------------------");

        for (Expression expression : family.getExpressions()) {

            System.out.println(
                    expression.getText()
                    + " → "
                    + expression.getMeaning()
            );

            System.out.print("   palabras: ");

            for (Word word : expression.getWords()) {

                System.out.print(
                        word.getEnglish()
                        + " "
                );
            }

            System.out.println();
        }

        // =========================================================
        // 5. ORACIONES
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("5. ORACIONES");
        System.out.println("----------------------------------------------");

        for (Sentence sentence : family.getSentences()) {

            System.out.println(
                    sentence.getText()
                    + " → "
                    + sentence.getTranslation()
            );

            System.out.print("   expresiones: ");

            for (Expression expression :
                    sentence.getExpressions()) {

                System.out.print(
                        "["
                        + expression.getText()
                        + "] "
                );
            }

            System.out.println();
        }

        // =========================================================
        // 6. SITUACIÓN DE COMUNICACIÓN
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("6. SITUACIÓN DE COMUNICACIÓN");
        System.out.println("----------------------------------------------");

        for (CommunicationSituation situation :
                family.getCommunication()) {

            System.out.println(
                    "Situación: "
                    + situation.getTitle()
            );

            System.out.println(
                    "Contexto: "
                    + situation.getContext()
            );

            System.out.println(
                    "Objetivo: "
                    + situation.getObjective()
            );

            System.out.println("Oraciones:");

            for (Sentence sentence :
                    situation.getSentences()) {

                System.out.println(
                        "   → "
                        + sentence.getText()
                );
            }
        }

        // =========================================================
        // 7. ETAPAS
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("7. ETAPAS DE APRENDIZAJE");
        System.out.println("----------------------------------------------");

        for (Stage stage : family.getStages()) {

            System.out.println(
                    stage.getNumber()
                    + ". "
                    + stage.getName()
                    + " → "
                    + stage.getDescription()
            );
        }

        // =========================================================
        // 8. ACTIVIDADES
        // =========================================================

        System.out.println();
        System.out.println("----------------------------------------------");
        System.out.println("8. ACTIVIDADES");
        System.out.println("----------------------------------------------");

        for (Activity activity :
                family.getActivities()) {

            System.out.println(
                    activity.getId()
                    + " → "
                    + activity.getType()
                    + " → etapa "
                    + activity.getStage().getNumber()
                    + " ("
                    + activity.getStage().getName()
                    + ")"
            );

            System.out.println(
                    "   "
                    + activity.getInstruction()
            );
        }

        // =========================================================
        // 9. NAVEGADOR SEMÁNTICO
        // =========================================================

        System.out.println();
        System.out.println("==============================================");
        System.out.println("          NAVEGADOR SEMÁNTICO");
        System.out.println("==============================================");

        // ---------------------------------------------------------
        // RED SEMÁNTICA DE FATHER
        // ---------------------------------------------------------

        navigator.showSemanticNetwork("father");

        // ---------------------------------------------------------
        // RED SEMÁNTICA DE MOTHER
        // ---------------------------------------------------------

        navigator.showSemanticNetwork("mother");

        // ---------------------------------------------------------
        // RED SEMÁNTICA DE BROTHER
        // ---------------------------------------------------------

        navigator.showSemanticNetwork("brother");
        System.out.println();
        System.out.println("==============================================");
        System.out.println("       EXPLORACIÓN COMPLETA DE FAMILY");
        System.out.println("==============================================");

        navigator.explore("WORD", "father");    

        // =========================================================
        // 10. CONSULTA: PALABRAS DEL CONCEPTO PARENT
        // =========================================================

        System.out.println();
        System.out.println("==============================================");
        System.out.println("     CONSULTA: PALABRAS DEL CONCEPTO PARENT");
        System.out.println("==============================================");

        for (Word word :
                navigator.findWordsByConcept("parent")) {

            System.out.println(
                    word.getEnglish()
                    + " → "
                    + word.getSpanish()
            );
        }

        // =========================================================
        // 11. CONSULTA: PALABRAS DEL CONCEPTO SIBLING
        // =========================================================

        System.out.println();
        System.out.println("==============================================");
        System.out.println("     CONSULTA: PALABRAS DEL CONCEPTO SIBLING");
        System.out.println("==============================================");

        for (Word word :
                navigator.findWordsByConcept("sibling")) {

            System.out.println(
                    word.getEnglish()
                    + " → "
                    + word.getSpanish()
            );
        }

        // =========================================================
        // FIN
        // =========================================================

        System.out.println();
        System.out.println("==============================================");
        System.out.println("       MODELO SEMÁNTICO VALIDADO");
        System.out.println("==============================================");
    }
}

