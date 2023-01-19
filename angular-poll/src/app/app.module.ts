import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewPollBtnComponent } from './new-poll-btn/new-poll-btn.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPollFormComponent } from './new-poll-form/new-poll-form.component'
import { FormsModule } from '@angular/forms';

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
    NewPollFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
