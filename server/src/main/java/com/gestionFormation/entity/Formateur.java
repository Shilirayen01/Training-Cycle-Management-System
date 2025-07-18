package com.gestionFormation.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity

public class Formateur {
    @ManyToOne
    @JoinColumn(name = "cycle_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Cycle cycle;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String Prenom;
    private String direction;


    public void setId(Long id) {
        this.id = id;
    }

    public Formateur(Long id, String nom, String prenom, String direction, Cycle cycle) {
        this.id = id;
        this.nom = nom;
        this.Prenom = prenom;
        this.direction = direction;
        this.cycle=cycle;
    }

    public Formateur() {
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public Cycle getCycle() {
        return cycle;
    }

    public void setCycle(Cycle cycle) {
        this.cycle = cycle;
    }

}
