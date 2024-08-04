import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionHeaderFormComponent } from './question-header-form.component';

describe('QuestionHeaderFormComponent', () => {
  let component: QuestionHeaderFormComponent;
  let fixture: ComponentFixture<QuestionHeaderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionHeaderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionHeaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
