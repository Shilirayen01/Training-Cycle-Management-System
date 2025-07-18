package com.gestionFormation.controller;

import com.gestionFormation.entity.Cycle;
import com.gestionFormation.service.CycleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Ajustez en fonction du déploiement
@RequestMapping("/api/cycles")
public class CycleController {

    @Autowired
    private CycleService cycleService;

    // Fetch all cycles
    @GetMapping
    public List<Cycle> getAllCycles() {
        return cycleService.getAllCycles();
    }

    // Fetch a specific cycle by ID
    @GetMapping("/{id}")
    public ResponseEntity<Cycle> getCycleById(@PathVariable Long id) {
        Optional<Cycle> cycle = cycleService.getCycleById(id);
        return cycle.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create a new cycle
    @PostMapping
    public ResponseEntity<Cycle> createCycle(@RequestBody Cycle cycle) {
        try {
            Cycle savedCycle = cycleService.saveCycle(cycle);
            return ResponseEntity.ok(savedCycle);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Update an existing cycle
    @PutMapping("/{id}")
    public ResponseEntity<Cycle> updateCycle(@PathVariable Long id, @RequestBody Cycle cycle) {
        Optional<Cycle> existingCycle = cycleService.getCycleById(id);
        if (existingCycle.isPresent()) {
            cycle.setId(id); // Ensure the ID is maintained
            Cycle updatedCycle = cycleService.saveCycle(cycle);
            return ResponseEntity.ok(updatedCycle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a cycle
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCycle(@PathVariable Long id) {
        if (cycleService.getCycleById(id).isPresent()) {
            cycleService.deleteCycle(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
