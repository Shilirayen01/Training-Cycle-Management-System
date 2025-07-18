package com.gestionFormation.controller;

import com.gestionFormation.entity.Admin;
import com.gestionFormation.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*") // Allow requests from any origin during development
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    // Endpoint for login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin admin) {
        Admin existingAdmin = adminRepository.findByEmail(admin.getEmail());
        if (existingAdmin != null && existingAdmin.getPassword().equals(admin.getPassword())) {
            // Retourne un objet JSON
            return ResponseEntity.ok(Map.of("message", "Connexion réussie !"));
        }
        return ResponseEntity.status(401).body(Map.of("error", "Identifiants incorrects."));
    }

}
