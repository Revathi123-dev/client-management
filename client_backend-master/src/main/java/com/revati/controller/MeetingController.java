package com.revati.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.revati.model.Meeting;
import com.revati.repository.MeetingRepository;

import java.util.List;

@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    @Autowired
    private MeetingRepository meetingRepository;

    @GetMapping
    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    @PostMapping("/schedule")
    public ResponseEntity<String> scheduleMeeting(@RequestBody Meeting meeting) {
       
        meetingRepository.save(meeting);
        return ResponseEntity.ok("Meeting scheduled successfully");
    }
}

