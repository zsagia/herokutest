/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuildingDetailViewComponent } from './building-detail-view.component';
import { BuildingServiceImpl } from '../building-service/building.service.impl';

import { RouterTestingModule } from '@angular/router/testing';

describe('DetailedComponent', () => {
  let component: BuildingDetailViewComponent;
  let fixture: ComponentFixture<BuildingDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ BuildingDetailViewComponent ],
        providers: [
            BuildingServiceImpl
        ],
        imports: [
            RouterTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
