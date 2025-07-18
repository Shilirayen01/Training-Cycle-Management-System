package com.gestionFormation.entity;
import jakarta.persistence.*;
import java.time.LocalDate;
@Entity
public class Cycle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String entreprise;
    private String numAction;
    private String theme;
    private String creditImpot;
    private String droitTirage;
    private String modeFormation;
    private String lieuDeroulement;
    private String gouvernorat;
    private String dateDebut;
    private String dateFin;
    private String horaireDebut;
    private String horaireFin;
    private String pauseDebut;
    private String pauseFin;
    private String numSalle;
    public void setId(Long id) {
        this.id = id;
    }
    public Cycle(Long id, String entreprise, String numAction, String theme, String creditImpot, String droitTirage, String modeFormation, String lieuDeroulement, String gouvernorat, String dateDebut, String dateFin, String horaireDebut, String horaireFin, String pauseDebut, String pauseFin, String numSalle) {
        this.id = id;
        this.entreprise = entreprise;
        this.numAction = numAction;
        this.theme = theme;
        this.creditImpot = creditImpot;
        this.droitTirage = droitTirage;
        this.modeFormation = modeFormation;
        this.lieuDeroulement = lieuDeroulement;
        this.gouvernorat = gouvernorat;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.horaireDebut = horaireDebut;
        this.horaireFin = horaireFin;
        this.pauseDebut = pauseDebut;
        this.pauseFin = pauseFin;
        this.numSalle = numSalle;
    }

    public Cycle() {
    }

    public Long getId() {
        return id;
    }

    public String getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(String entreprise) {
        this.entreprise = entreprise;
    }

    public String getNumAction() {
        return numAction;
    }

    public void setNumAction(String numAction) {
        this.numAction = numAction;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getCreditImpot() {
        return creditImpot;
    }

    public void setCreditImpot(String creditImpot) {
        this.creditImpot = creditImpot;
    }

    public String getDroitTirage() {
        return droitTirage;
    }

    public void setDroitTirage(String droitTirage) {
        this.droitTirage = droitTirage;
    }

    public String getModeFormation() {
        return modeFormation;
    }

    public void setModeFormation(String modeFormation) {
        this.modeFormation = modeFormation;
    }

    public String getLieuDeroulement() {
        return lieuDeroulement;
    }

    public void setLieuDeroulement(String lieuDeroulement) {
        this.lieuDeroulement = lieuDeroulement;
    }

    public String getGouvernorat() {
        return gouvernorat;
    }

    public void setGouvernorat(String gouvernorat) {
        this.gouvernorat = gouvernorat;
    }

    public String getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(String dateDebut) {
        this.dateDebut = dateDebut;
    }

    public String getDateFin() {
        return dateFin;
    }

    public void setDateFin(String dateFin) {
        this.dateFin = dateFin;
    }

    public String getHoraireDebut() {
        return horaireDebut;
    }

    public void setHoraireDebut(String horaireDebut) {
        this.horaireDebut = horaireDebut;
    }

    public String getHoraireFin() {
        return horaireFin;
    }

    public void setHoraireFin(String horaireFin) {
        this.horaireFin = horaireFin;
    }

    public String getPauseDebut() {
        return pauseDebut;
    }

    public void setPauseDebut(String pauseDebut) {
        this.pauseDebut = pauseDebut;
    }

    public String getPauseFin() {
        return pauseFin;
    }

    public void setPauseFin(String pauseFin) {
        this.pauseFin = pauseFin;
    }

    public String getNumSalle() {
        return numSalle;
    }

    public void setNumSalle(String numSalle) {
        this.numSalle = numSalle;
    }
}