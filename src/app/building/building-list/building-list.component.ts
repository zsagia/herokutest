import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Building } from '../building';
import { BuildingViewComponent } from '../building-view/building-view.component';
import { BuildingServiceBase } from '../building-service/building.service.base';

@Component({
  selector: 'building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  title: String = 'Buildinges';
    buildings: Array<Building> = [];

    constructor(
        private route: ActivatedRoute,
        private buildingService: BuildingServiceBase) {
    }

    ngOnInit() {
        let filter = null;

        this.route.params.forEach((params: Params) => {
            filter = +params['filter'];
        });
        
        if(filter) {
            if (filter === 'type') {
                this.buildingService.getFilteredBuildingesByType(filter).then(buildings => this.buildings = buildings);
            }
            else if (filter === 'country') {
                this.buildingService.getFilteredBuildingesByCountry(filter).then(buildings => this.buildings = buildings);
            }
        }
        else {
             this.getBuildings();
        }
    }

    getBuildings(): void {
        this.buildingService.getBuildings().then(buildings => this.buildings = buildings);
    }
}
