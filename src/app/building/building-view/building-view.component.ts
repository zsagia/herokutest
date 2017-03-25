import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

import { Building } from '../building';

@Component ({
    selector: 'building-view',
    templateUrl: './building-view.component.html',
    styleUrls: [
        './building-view.component.css'
        ]
})

export class BuildingViewComponent implements OnInit {
    @Input()building: Building;

    @Input()buildingId: number;

    @Output()countryFilter = new EventEmitter();

     @Output()typeFilter = new EventEmitter();

    public iconUrl: String;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        if (this.buildingId) {
            this.getBuilding();
        }

        this.setIconUrl();
    }

    emitTypeFilter(event) {
        this.typeFilter.emit(this.building.type);
    }

     emitCountryFilter(event) {
        this.countryFilter.emit(this.building.country);
    }

    getBuilding(): void {

    }

    setIconUrl() {
        let iconUrl = 'assets/icons/';

        if (this.building.type === Building.TYPE_CASTLE) {
            iconUrl = iconUrl + 'castle.png';
        } else {
            iconUrl = iconUrl + 'fortress.png';
        }

        this.iconUrl =  iconUrl;
    }

    goToDetail(): void{
        this.router.navigate(['buildingdetailview', this.building._id]);
    }
}