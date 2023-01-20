import { Component, OnInit } from '@angular/core';
import { PollForm, option } from './pollform';

@Component({
  selector: 'app-new-poll-form',
  templateUrl: './new-poll-form.component.html',
  styleUrls: ['./new-poll-form.component.css']
})
export class NewPollFormComponent {
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

    createPoll(){
      console.log(this.pollForm);
    }



}
