import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPollFormComponent } from './new-poll-form.component';

describe('NewPollFormComponent', () => {
  let component: NewPollFormComponent;
  let fixture: ComponentFixture<NewPollFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPollFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
