/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserServiceImpl } from './user.service.impl';

describe('UserServiceImpl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceImpl]
    });
  });

  it('should ...', inject([UserServiceImpl], (service: UserServiceImpl) => {
    expect(service).toBeTruthy();
  }));
});
