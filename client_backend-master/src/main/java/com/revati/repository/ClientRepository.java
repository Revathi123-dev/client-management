package com.revati.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.revati.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

	Object findByEmail(String email);
    
}
