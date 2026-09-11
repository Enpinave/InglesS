package com.ingles.model;

import java.util.ArrayList;
import java.util.List;

public class Expression {

    private String id;
    private String text;
    private String meaning;
    private String audio;

    private List<Word> words = new ArrayList<>();

    public Expression() {
    }

    public Expression(String id, String text, String meaning) {
        this.id = id;
        this.text = text;
        this.meaning = meaning;
    }

    public void addWord(Word word) {
        words.add(word);
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

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public List<Word> getWords() {
        return words;
    }

    public void setWords(List<Word> words) {
        this.words = words;
    }
}