package com.ingles.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ingles.data.FamilyData;
import com.ingles.data.HealthData;
import com.ingles.data.SportsData;
import com.ingles.model.SemanticBlock;

@RestController
@RequestMapping("/api/blocks")
public class SemanticBlockController {

    @GetMapping("/{blockId}")
    public SemanticBlock getBlock(
            @PathVariable String blockId) {

        // =========================================================
        // FAMILY
        // =========================================================

        if ("family".equalsIgnoreCase(blockId)) {
            return FamilyData.create();
        }

        // =========================================================
        // HEALTH
        // =========================================================

        if ("health".equalsIgnoreCase(blockId)) {
            return HealthData.create();
        }

        // =========================================================
        // SPORTS
        // =========================================================

        if ("sports".equalsIgnoreCase(blockId)) {
            return SportsData.create();
        }

        // =========================================================
        // BLOQUE NO ENCONTRADO
        // =========================================================

        return null;
    }
}