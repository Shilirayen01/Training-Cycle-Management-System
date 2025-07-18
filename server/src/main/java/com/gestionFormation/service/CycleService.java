package com.gestionFormation.service;

import com.gestionFormation.entity.Cycle;
import com.gestionFormation.repository.CycleRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class CycleService {

    @Autowired
    private CycleRepository cycleRepository;

    public List<Cycle> getAllCycles() {
        return cycleRepository.findAll();
    }

    public Optional<Cycle> getCycleById(Long id) {
        return cycleRepository.findById(id);
    }

    public Cycle saveCycle(Cycle cycle) {
        return cycleRepository.save(cycle);
    }

    public void deleteCycle(Long id) {
        cycleRepository.deleteById(id);
    }
}

