import { TestBed } from '@angular/core/testing';

import { VerticalComponentsService } from './vertical-components.service';

describe('VerticalComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerticalComponentsService = TestBed.get(VerticalComponentsService);
    expect(service).toBeTruthy();
  });
});
