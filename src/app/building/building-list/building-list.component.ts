import { Component, OnInit } from '@angular/core';

import { Building } from '../building';
import { BuildingService } from '../building.service';
import { BuildingDetailsComponent } from '../building-details/building-details.component';

@Component({
    selector: 'building-list',
    templateUrl: './building-list.component.html',
    styleUrls: ['./building-list.component.css'],
    providers: [BuildingService]
})

export class BuildingListComponent implements OnInit {

    buildings: Building[]
    selectedBuilding: Building

    constructor(private buildingService: BuildingService) { }

    ngOnInit() {
        this.buildingService
            .getBuildings()
            .then((buildings: Building[]) => {
                this.buildings = buildings.map((building) => {

                    return building;
                });
            });
    }

    private getIndexOfBuilding = (buildingId: String) => {
        return this.buildings.findIndex((building) => {
            return building._id === buildingId;
        });
    }

    selectBuilding(building: Building) {
        this.selectedBuilding = building
    }

    createNewBuilding() {
        var building: Building = {
            name: '',
            country: '',
            defaultImage: '',
            description: '',
            history: '',
            type: ''     
        };

        // By default, a newly-created building will have the selected state.
        this.selectBuilding(building);
    }

    deleteBuilding = (buildingId: String) => {
        var idx = this.getIndexOfBuilding(buildingId);

        if (idx !== -1) {
            this.buildings.splice(idx, 1);
            this.selectBuilding(null);
        }

        return this.buildings;
    }

    addBuilding = (building: Building) => {
        this.buildings.push(building);
        this.selectBuilding(building);

        return this.buildings;
    }

    updateBuilding = (building: Building) => {
        var idx = this.getIndexOfBuilding(building._id);

        if (idx !== -1) {
            this.buildings[idx] = building;
            this.selectBuilding(building);
        }

        return this.buildings;
    }
}