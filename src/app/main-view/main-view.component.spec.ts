/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainViewComponent } from './main-view.component';
import { BuildingViewComponent } from '../building/building-view/building-view.component';
import { BuildingServiceImpl } from '../building/building-service/building.service.impl';

import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
    let component: MainViewComponent;
    let fixture: ComponentFixture<MainViewComponent>;

    beforeEach(async(() => {
        let testBed = TestBed.configureTestingModule({
            declarations: [ MainViewComponent, BuildingViewComponent ],
            providers: [ BuildingServiceImpl ],
            imports: [ RouterTestingModule ]
        });
    
        testBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
