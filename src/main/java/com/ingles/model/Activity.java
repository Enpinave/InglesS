package com.ingles.model;

public class Activity {

    private String id;
    private String type;
    private String instruction;
    private Stage stage;

    public Activity() {
    }

    public Activity(
            String id,
            String type,
            String instruction,
            Stage stage) {

        this.id = id;
        this.type = type;
        this.instruction = instruction;
        this.stage = stage;
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

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public Stage getStage() {
        return stage;
    }

    public void setStage(Stage stage) {
        this.stage = stage;
    }
}