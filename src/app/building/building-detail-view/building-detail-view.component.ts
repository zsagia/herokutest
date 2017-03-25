import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Building } from '../building';
import { BuildingServiceBase } from '../building-service/building.service.base';

@Component({
    selector: 'building-detail-view',
    templateUrl: './building-detail-view.component.html',
    styleUrls: ['./building-detail-view.component.css']
})

export class BuildingDetailViewComponent implements OnInit {
    @Input()
    building: Building;

    constructor(
        private buildingService: BuildingServiceBase,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id: String = params['id'];

            this.buildingService.getBuilding(id)
                .then(building => this.building = building);
        });
    }

    goBack(): void {
        this.location.back();
    }

}
