import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollForm } from '../new-poll-form/pollform';
import { PollService } from '../services/poll.service';
import {Clipboard} from '@angular/cdk/clipboard';

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
    private _router: Router,
    private clipboard:Clipboard
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
    this.pollService.increaseVote(this.selectedOptionId).subscribe(
      result => this._router.navigate([`/home/poll-result/${this.pollForm.id}`]),
      error => {
        if(error.status === 400){
          alert("Already voted for this poll");
        }
      }
    );
  }
  copyLink(){
    this.clipboard.copy(window.location.href);
  }
}