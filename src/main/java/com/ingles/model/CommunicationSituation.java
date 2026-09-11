package com.ingles.model;

import java.util.ArrayList;
import java.util.List;

public class CommunicationSituation {

    private String id;
    private String title;
    private String context;
    private String objective;

    private List<Sentence> sentences = new ArrayList<>();

    public CommunicationSituation() {
    }

    public CommunicationSituation(
            String id,
            String title,
            String context,
            String objective) {

        this.id = id;
        this.title = title;
        this.context = context;
        this.objective = objective;
    }

    public void addSentence(Sentence sentence) {
        sentences.add(sentence);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public List<Sentence> getSentences() {
        return sentences;
    }

    public void setSentences(List<Sentence> sentences) {
        this.sentences = sentences;
    }
}