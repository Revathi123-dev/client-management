import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private baseUrl = 'http://localhost:8080/api/meetings';

  constructor(private http: HttpClient) { }

  getAllMeetings(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  scheduleMeeting(meeting: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/schedule`, meeting);
  }
}

