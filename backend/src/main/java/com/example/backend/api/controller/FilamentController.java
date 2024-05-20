package com.example.backend.api.controller;

import com.example.backend.api.model.Filament;
import com.example.backend.api.repository.FilamentRepository;
import com.example.backend.service.FilamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FilamentController {

    private FilamentService filamentService;

    @Autowired
    public FilamentController(FilamentService filamentService) {
        this.filamentService = filamentService;
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping("/getFilamentById/{id}")
    public ResponseEntity<Filament> getFilament(@PathVariable Integer id) {
        Optional<Filament> filament = filamentService.getFilament(id);

        if (filament.isPresent()) {
            return new ResponseEntity<>(filament.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PutMapping("/updateFilament/{id}")
    public ResponseEntity<Filament> updateFilament(@PathVariable Integer id, @RequestBody Filament filament) {
        Filament savedFilament = filamentService.updateFilamentRemaining(id, filament);
        return new ResponseEntity<>(savedFilament, HttpStatus.OK);
    }
}
