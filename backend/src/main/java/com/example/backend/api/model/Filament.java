package com.example.backend.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="mock_printer")
public class Filament {
    @Id
    private int id;
    private int filamentRemaining;
    private int filamentTotal;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFilamentRemaining() {
        return filamentRemaining;
    }

    public void setFilamentRemaining(int filamentRemaining) {
        this.filamentRemaining = filamentRemaining;
    }

    public int getFilamentTotal() {
        return filamentTotal;
    }

    public void setFilamentTotal(int filamentTotal) {
        this.filamentTotal = filamentTotal;
    }
}
