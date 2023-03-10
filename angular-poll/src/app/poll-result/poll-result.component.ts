import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollForm } from '../new-poll-form/pollform';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.css']
})
export class PollResultComponent implements OnInit {
  pollForm : PollForm;
  selectedOptionId: number = -1;
  allVotes:number = 10;

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
      this.allVotes=0;
      this.pollForm.options.forEach(x => this.allVotes+= x.votes ??=0);
    });

  }


  sendVote(){
    this.pollService.increaseVote(this.selectedOptionId).subscribe(result =>
      console.log(result));
  }
}
