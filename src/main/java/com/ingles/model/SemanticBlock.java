package com.ingles.model;

import java.util.ArrayList;
import java.util.List;

public class SemanticBlock {

    private String id;
    private String name;
    private String title;
    private String description;

    private List<Concept> concepts = new ArrayList<>();
    private List<Word> vocabulary = new ArrayList<>();
    private List<SemanticRelation> relations = new ArrayList<>();
    private List<Expression> expressions = new ArrayList<>();
    private List<Sentence> sentences = new ArrayList<>();
    private List<CommunicationSituation> communication = new ArrayList<>();
    private List<Stage> stages = new ArrayList<>();
    private List<Activity> activities = new ArrayList<>();

    public SemanticBlock() {
    }

    public SemanticBlock(
            String id,
            String name,
            String title,
            String description) {

        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
    }

    public void addConcept(Concept concept) {
        concepts.add(concept);
    }

    public void addWord(Word word) {
        vocabulary.add(word);
    }

    public void addRelation(SemanticRelation relation) {
        relations.add(relation);
    }

    public void addExpression(Expression expression) {
        expressions.add(expression);
    }

    public void addSentence(Sentence sentence) {
        sentences.add(sentence);
    }

    public void addCommunication(CommunicationSituation situation) {
        communication.add(situation);
    }

    public void addStage(Stage stage) {
        stages.add(stage);
    }

    public void addActivity(Activity activity) {
        activities.add(activity);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Concept> getConcepts() {
        return concepts;
    }

    public void setConcepts(List<Concept> concepts) {
        this.concepts = concepts;
    }

    public List<Word> getVocabulary() {
        return vocabulary;
    }

    public void setVocabulary(List<Word> vocabulary) {
        this.vocabulary = vocabulary;
    }

    public List<SemanticRelation> getRelations() {
        return relations;
    }

    public void setRelations(List<SemanticRelation> relations) {
        this.relations = relations;
    }

    public List<Expression> getExpressions() {
        return expressions;
    }

    public void setExpressions(List<Expression> expressions) {
        this.expressions = expressions;
    }

    public List<Sentence> getSentences() {
        return sentences;
    }

    public void setSentences(List<Sentence> sentences) {
        this.sentences = sentences;
    }

    public List<CommunicationSituation> getCommunication() {
        return communication;
    }

    public void setCommunication(List<CommunicationSituation> communication) {
        this.communication = communication;
    }

    public List<Stage> getStages() {
        return stages;
    }

    public void setStages(List<Stage> stages) {
        this.stages = stages;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }
}