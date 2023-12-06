package com.revati.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revati.model.Meeting;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {
    // Add custom queries if needed
}

