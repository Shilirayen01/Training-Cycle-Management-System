package com.gestionFormation.entity;

import jakarta.persistence.*;

@Entity
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String clariteDesObjectifs;

    @Column(nullable = false)
    private String pertinenceDesSupportsPedagogiques;

    @Column(nullable = false)
    private String competencesDuFormateur;

    @Column(nullable = false)
    private String reponseAuxAttentes;

    @Column(nullable = false)
    private String organisationGenerale;

    @ManyToOne
    @JoinColumn(name = "participant_id")
    private Participant participant;

    @ManyToOne
    @JoinColumn(name = "cycle_id")
    private Cycle cycle;

    // Constructors
    public Evaluation() {}

    public Evaluation(Long id, String clariteDesObjectifs, String pertinenceDesSupportsPedagogiques,
                      String competencesDuFormateur, String reponseAuxAttentes, String organisationGenerale,
                      Participant participant, Cycle cycle) {
        this.id = id;
        this.clariteDesObjectifs = clariteDesObjectifs;
        this.pertinenceDesSupportsPedagogiques = pertinenceDesSupportsPedagogiques;
        this.competencesDuFormateur = competencesDuFormateur;
        this.reponseAuxAttentes = reponseAuxAttentes;
        this.organisationGenerale = organisationGenerale;
        this.participant = participant;
        this.cycle = cycle;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClariteDesObjectifs() { return clariteDesObjectifs; }
    public void setClariteDesObjectifs(String clariteDesObjectifs) { this.clariteDesObjectifs = clariteDesObjectifs; }

    public String getPertinenceDesSupportsPedagogiques() { return pertinenceDesSupportsPedagogiques; }
    public void setPertinenceDesSupportsPedagogiques(String pertinenceDesSupportsPedagogiques) { this.pertinenceDesSupportsPedagogiques = pertinenceDesSupportsPedagogiques; }

    public String getCompetencesDuFormateur() { return competencesDuFormateur; }
    public void setCompetencesDuFormateur(String competencesDuFormateur) { this.competencesDuFormateur = competencesDuFormateur; }

    public String getReponseAuxAttentes() { return reponseAuxAttentes; }
    public void setReponseAuxAttentes(String reponseAuxAttentes) { this.reponseAuxAttentes = reponseAuxAttentes; }

    public String getOrganisationGenerale() { return organisationGenerale; }
    public void setOrganisationGenerale(String organisationGenerale) { this.organisationGenerale = organisationGenerale; }

    public Participant getParticipant() { return participant; }
    public void setParticipant(Participant participant) { this.participant = participant; }

    public Cycle getCycle() { return cycle; }
    public void setCycle(Cycle cycle) { this.cycle = cycle; }
}