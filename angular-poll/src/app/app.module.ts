import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewPollBtnComponent } from './new-poll-btn/new-poll-btn.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPollFormComponent } from './new-poll-form/new-poll-form.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PollVoteFormComponent } from './poll-vote-form/poll-vote-form.component';
import { PollResultComponent } from './poll-result/poll-result.component';

const routes: Routes = [
  { path: 'home',
    children: [
        {
          path:'',
          component: NewPollBtnComponent
        },
        {
          path:'new-poll',
          component: NewPollFormComponent
        },
        {
          path:'poll/:id',
          component: PollVoteFormComponent
        },
        {
          path:'poll-result/:id',
          component: PollResultComponent
        }
    ] ,
    component:HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    NewPollBtnComponent,
    HomeComponent,
    NewPollFormComponent,
    PollVoteFormComponent,
    PollResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
