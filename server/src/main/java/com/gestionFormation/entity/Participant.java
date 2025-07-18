package com.gestionFormation.entity;

import jakarta.persistence.*;

@Entity
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomPrenom;
    private String nomPrenomArabe;
    private String numCin;
    private String directionService;
    private String entreprise;
    private String engagement;

    @ManyToOne
    @JoinColumn(name = "cycle_id")
    private Cycle cycle;
    public void setId(Long id) {
        this.id = id;
    }

    public Participant(Long id, String nomPrenom, String nomPrenomArabe, String numCin, String directionService, String entreprise, String engagement, Cycle cycle) {
        this.id = id;
        this.nomPrenom = nomPrenom;
        this.nomPrenomArabe = nomPrenomArabe;
        this.numCin = numCin;
        this.directionService = directionService;
        this.entreprise = entreprise;
        this.engagement = engagement;
        this.cycle = cycle;
    }

    public Participant() {
    }

    public Long getId() {
        return id;
    }

    public String getNomPrenom() {
        return nomPrenom;
    }

    public String getNomPrenomArabe() {
        return nomPrenomArabe;
    }

    public String getNumCin() {
        return numCin;
    }

    public String getDirectionService() {
        return directionService;
    }

    public String getEntreprise() {
        return entreprise;
    }

    public String getEngagement() {
        return engagement;
    }

    public Cycle getCycle() {
        return cycle;
    }

    public void setNomPrenom(String nomPrenom) {
        this.nomPrenom = nomPrenom;
    }

    public void setNomPrenomArabe(String nomPrenomArabe) {
        this.nomPrenomArabe = nomPrenomArabe;
    }

    public void setNumCin(String numCin) {
        this.numCin = numCin;
    }

    public void setDirectionService(String directionService) {
        this.directionService = directionService;
    }

    public void setEntreprise(String entreprise) {
        this.entreprise = entreprise;
    }

    public void setEngagement(String engagement) {
        this.engagement = engagement;
    }

    public void setCycle(Cycle cycle) {
        this.cycle = cycle;
    }
}

