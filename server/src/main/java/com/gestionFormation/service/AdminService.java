package com.gestionFormation.service;

import com.gestionFormation.entity.Admin;
import com.gestionFormation.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private com.gestionFormation.repository.AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    public Admin saveAdmin(Admin Admin) {
        return adminRepository.save(Admin);
    }

    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}

