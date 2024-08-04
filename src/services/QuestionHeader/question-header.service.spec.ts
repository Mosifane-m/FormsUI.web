import { TestBed } from '@angular/core/testing';

import { QuestionHeaderService } from './question-header.service';

describe('QuestionHeaderService', () => {
  let service: QuestionHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
