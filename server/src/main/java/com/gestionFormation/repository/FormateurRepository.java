package com.gestionFormation.repository;

import com.gestionFormation.entity.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormateurRepository extends JpaRepository<Formateur,Long> {
}
