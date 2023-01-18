import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPollBtnComponent } from './new-poll-btn.component';

describe('NewPollBtnComponent', () => {
  let component: NewPollBtnComponent;
  let fixture: ComponentFixture<NewPollBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPollBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPollBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
