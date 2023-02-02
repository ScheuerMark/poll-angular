import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PollForm } from '../new-poll-form/pollform';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  createPoll(pollForm: PollForm) {
    return this.http.post('http://localhost:3000/api/new-poll', pollForm);
  }
  getPoll(id: number) {
    return this.http.get(`http://localhost:3000/api/poll/${id}`);
  }
}
