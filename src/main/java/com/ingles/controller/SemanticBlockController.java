package com.ingles.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ingles.data.FamilyData;
import com.ingles.model.SemanticBlock;

@RestController
@RequestMapping("/api/blocks")
public class SemanticBlockController {

    @GetMapping("/{blockId}")
    public SemanticBlock getBlock(
            @PathVariable String blockId) {

        if ("family".equalsIgnoreCase(blockId)) {

            return FamilyData.create();
        }

        return null;
    }
}