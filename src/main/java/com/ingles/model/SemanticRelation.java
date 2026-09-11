package com.ingles.model;

public class SemanticRelation {

    private String id;
    private String type;
    private String description;

    private SemanticReference source;
    private SemanticReference target;

    public SemanticRelation() {
    }

    public SemanticRelation(
            String id,
            String type,
            String description,
            SemanticReference source,
            SemanticReference target) {

        this.id = id;
        this.type = type;
        this.description = description;
        this.source = source;
        this.target = target;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SemanticReference getSource() {
        return source;
    }

    public void setSource(SemanticReference source) {
        this.source = source;
    }

    public SemanticReference getTarget() {
        return target;
    }

    public void setTarget(SemanticReference target) {
        this.target = target;
    }
}