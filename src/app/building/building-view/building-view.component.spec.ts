/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import { BuildingViewComponent } from './building-view.component';

describe('BuildingComponent', () => {
    let component: BuildingViewComponent;
    let fixture: ComponentFixture<BuildingViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BuildingViewComponent ],
            imports: [RouterTestingModule.withRoutes([])]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BuildingViewComponent);
        component = fixture.componentInstance;

        component.building = {
            _id: '1006',
            name: 'Golconda Fort',
            country: 'India',
            type: 'building',
            defaultImage: 'assets/mock/images/golconda-fort-2.jpg',
            description: '',
            history: ''
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


});
