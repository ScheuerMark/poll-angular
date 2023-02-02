import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PollForm } from '../new-poll-form/pollform';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  baseUrl = "https://poll-backend.onrender.com"

  constructor(private http: HttpClient) { }

  createPoll(pollForm: PollForm) {
    return this.http.post(`${this.baseUrl}/api/new-poll`, pollForm);
  }
  getPoll(id: number) {
    return this.http.get(`${this.baseUrl}/api/poll/${id}`);
  }
  increaseVote(optionId: number) {
    return this.http.put(`${this.baseUrl}/api/poll/${optionId}/vote`, {});
  }
}
