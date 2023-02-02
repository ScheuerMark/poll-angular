import { Component, OnInit } from '@angular/core';
import { PollForm, option, PollResponse } from './pollform';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-poll-form',
  templateUrl: './new-poll-form.component.html',
  styleUrls: ['./new-poll-form.component.css']
})
export class NewPollFormComponent {
  constructor(
    private pollService: PollService,
    private _router: Router
    ) {}

  pollForm : PollForm = {
    title : "",
    options: [
      {value: ""},
      {value: ""},
      {value: ""}
  ]
  }

  addOption() { 
    this.pollForm.options.push({value: ""});
  }
  removeOption(index : number){
    this.pollForm.options.splice(index,1);
  }

  createPoll() {
    this.pollService.createPoll(this.pollForm).subscribe(
      (response) => {     
        let pollId =(response as PollResponse).pollId           
        console.log('Poll created successfully with id:', pollId);
        this._router.navigate([`/home/poll/${pollId}`]);
      },
      (error) => {
        console.error('Error creating poll:', error);
      }
    );
  }



}
