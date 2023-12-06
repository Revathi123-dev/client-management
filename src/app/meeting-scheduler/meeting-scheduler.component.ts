import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meeting-scheduler',
  templateUrl: './meeting-scheduler.component.html',
  styleUrls: ['./meeting-scheduler.component.css']
})
export class MeetingSchedulerComponent implements OnInit {

  meetings: any[];
  newMeeting: any = {};

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    this.loadMeetings();
  }

  loadMeetings() {
    this.meetingService.getAllMeetings().subscribe(
      (response: any[]) => {
        this.meetings = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  scheduleMeeting() {
    this.meetingService.scheduleMeeting(this.newMeeting).subscribe(
      (response: any) => {
        console.log(response);
        this.loadMeetings(); // Reload the list after scheduling
        this.newMeeting = {}; // Clear the form
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

