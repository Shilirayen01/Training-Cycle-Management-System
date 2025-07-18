package com.gestionFormation.controller;

import com.gestionFormation.entity.Formateur;
import com.gestionFormation.service.FormateurService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/formateurs")
@CrossOrigin(origins = "http://localhost:4200") // Ajustez en fonction du déploiement
public class FormateurController {

    private final FormateurService formateurService;

    public FormateurController(FormateurService formateurService) {
        this.formateurService = formateurService;
    }

    @GetMapping
    public List<Formateur> getAllFormateurs() {
        return formateurService.getAllFormateurs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Formateur> getFormateurById(@PathVariable Long id) {
        return formateurService.getFormateurById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Formateur createFormateur(@Valid @RequestBody Formateur formateur) {
        return formateurService.saveFormateur(formateur);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Formateur> updateFormateur(@PathVariable Long id, @Valid @RequestBody Formateur formateur) {
        if (!formateurService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        formateur.setId(id);
        Formateur updatedFormateur = formateurService.saveFormateur(formateur);
        return ResponseEntity.ok(updatedFormateur);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormateur(@PathVariable Long id) {
        if (!formateurService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        formateurService.deleteFormateur(id);
        return ResponseEntity.noContent().build();
    }

}
