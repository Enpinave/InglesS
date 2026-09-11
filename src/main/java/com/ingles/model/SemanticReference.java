package com.ingles.model;

public class SemanticReference {

    private String type;
    private String id;

    public SemanticReference() {
    }

    public SemanticReference(String type, String id) {
        this.type = type;
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}