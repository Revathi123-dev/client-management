package com.revati.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.revati.model.Client;
import com.revati.repository.ClientRepository;

import java.util.List;
//@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerClient(@RequestBody Client client) {
        // Add validation logic if needed
        clientRepository.save(client);
        return ResponseEntity.ok("Client registered successfully");
    }
}

