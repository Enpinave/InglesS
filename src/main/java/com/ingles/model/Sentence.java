package com.ingles.model;

import java.util.ArrayList;
import java.util.List;

public class Sentence {

    private String id;
    private String text;
    private String translation;
    private String audio;

    private List<Expression> expressions = new ArrayList<>();

    public Sentence() {
    }

    public Sentence(String id, String text, String translation) {
        this.id = id;
        this.text = text;
        this.translation = translation;
    }

    public void addExpression(Expression expression) {
        expressions.add(expression);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public List<Expression> getExpressions() {
        return expressions;
    }

    public void setExpressions(List<Expression> expressions) {
        this.expressions = expressions;
    }
}