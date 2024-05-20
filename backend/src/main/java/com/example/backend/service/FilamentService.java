package com.example.backend.service;

import com.example.backend.api.model.Filament;
import com.example.backend.api.repository.FilamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.Iterator;
import java.util.Optional;

@Service
public class FilamentService {
    @Autowired
    private FilamentRepository repository;

    public Optional<Filament> getFilament(Integer id) {
        Optional<Filament> filament = repository.findById(id);
        return filament;
    }

    public Filament updateFilamentRemaining(int id, Filament newFilament) {
        Optional<Filament> filament = repository.findById(id);

        if (filament.isPresent()) {
            Filament updatedFilamentData = filament.get();
            updatedFilamentData.setFilamentRemaining(newFilament.getFilamentRemaining());
            updatedFilamentData.setFilamentTotal(newFilament.getFilamentTotal());

            Filament savedFilament = repository.save(updatedFilamentData);
            return savedFilament;
        }
        return null;
    }
}
