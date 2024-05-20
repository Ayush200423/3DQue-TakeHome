package com.example.backend.api.repository;

import com.example.backend.api.model.Filament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilamentRepository extends JpaRepository<Filament, Integer> {
}
