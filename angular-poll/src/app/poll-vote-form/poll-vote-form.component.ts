import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollForm } from '../new-poll-form/pollform';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll-vote-form',
  templateUrl: './poll-vote-form.component.html',
  styleUrls: ['./poll-vote-form.component.css']
})
export class PollVoteFormComponent implements OnInit {
  pollForm : PollForm;
  selectedOptionId: number = -1;

  constructor(
    private pollService: PollService,
    private route: ActivatedRoute,
    ) 
    {
      this.pollForm = {
        title: '',
        options: [
          {value: ''},
          {value: ''}
        ]
      };
    }

  

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.pollService.getPoll(id).subscribe(poll => {
      this.pollForm = poll as PollForm;
    });
  }

  sendVote(){
    this.pollService.increaseVote(this.selectedOptionId).subscribe(result =>
      console.log(result));
  }
}
