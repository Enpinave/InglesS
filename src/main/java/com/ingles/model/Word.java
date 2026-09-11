package com.ingles.model;

public class Word {

    private String id;
    private String english;
    private String spanish;
    private String pronunciation;
    private String audio;
    private String image;
    private Concept concept;

    public Word() {
    }

    public Word(
            String id,
            String english,
            String spanish,
            String pronunciation,
            Concept concept) {

        this.id = id;
        this.english = english;
        this.spanish = spanish;
        this.pronunciation = pronunciation;
        this.concept = concept;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public String getSpanish() {
        return spanish;
    }

    public void setSpanish(String spanish) {
        this.spanish = spanish;
    }

    public String getPronunciation() {
        return pronunciation;
    }

    public void setPronunciation(String pronunciation) {
        this.pronunciation = pronunciation;
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Concept getConcept() {
        return concept;
    }

    public void setConcept(Concept concept) {
        this.concept = concept;
    }
}