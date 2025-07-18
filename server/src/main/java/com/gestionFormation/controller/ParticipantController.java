package com.gestionFormation.controller;

import com.gestionFormation.entity.Cycle;
import com.gestionFormation.entity.Participant;
import com.gestionFormation.service.CycleService;
import com.gestionFormation.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Ajustez en fonction du déploiement
@RequestMapping("/api/participants")
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @Autowired
    private CycleService cycleService;

    @GetMapping
    public List<Participant> getAllParticipants() {
        return participantService.getAllParticipants();
    }

    @GetMapping("/{id}")
    public Optional<Participant> getParticipantById(@PathVariable Long id) {
        return participantService.getParticipantById(id);
    }

    @PostMapping("/{id}")
    public Participant createParticipant(@PathVariable Long id, @RequestBody Participant participant) {
        Optional<Cycle> cycle =cycleService.getCycleById(id);
        participant.setCycle(cycle.get());

        return participantService.saveParticipant(participant);
    }

    @PutMapping("/{id}")
    public Participant updateParticipant(@PathVariable Long id, @RequestBody Participant participant) {
        participant.setId(id); // Assuming the Participant entity has a `setId` method
        return participantService.saveParticipant(participant);
    }

    @DeleteMapping("/{id}")
    public void deleteParticipant(@PathVariable Long id) {
        participantService.deleteParticipant(id);
    }
}

