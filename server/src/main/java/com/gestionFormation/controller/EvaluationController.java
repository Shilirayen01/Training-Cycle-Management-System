package com.gestionFormation.controller;

import com.gestionFormation.entity.Evaluation;
import com.gestionFormation.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular requests
@RequestMapping("/api/evaluations")
public class EvaluationController {

    @Autowired
    private EvaluationService evaluationService;

    @GetMapping
    public List<Evaluation> getAllEvaluations() {
        return evaluationService.getAllEvaluations();
    }

    @GetMapping("/{id}")
    public Optional<Evaluation> getEvaluationById(@PathVariable Long id) {
        return evaluationService.getEvaluationById(id);
    }

    @PostMapping
    public Evaluation createEvaluation(@RequestBody Evaluation evaluation) {
        System.out.println("Received Evaluation: " + evaluation); // Debugging
        return evaluationService.saveEvaluation(evaluation);
    }

    @PutMapping("/{id}")
    public Evaluation updateEvaluation(@PathVariable Long id, @RequestBody Evaluation evaluation) {
        evaluation.setId(id);
        return evaluationService.saveEvaluation(evaluation);
    }

    @DeleteMapping("/{id}")
    public void deleteEvaluation(@PathVariable Long id) {
        evaluationService.deleteEvaluation(id);
    }
}