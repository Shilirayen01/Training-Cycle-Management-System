package com.gestionFormation.repository;

import com.gestionFormation.entity.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationRepository extends JpaRepository<Evaluation,Long> {
}
