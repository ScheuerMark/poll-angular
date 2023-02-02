import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVoteFormComponent } from './poll-vote-form.component';

describe('PollVoteFormComponent', () => {
  let component: PollVoteFormComponent;
  let fixture: ComponentFixture<PollVoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollVoteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollVoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
