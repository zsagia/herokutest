import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { Building } from '../building';
import { BuildingServiceBase } from '../building-service/building.service.base';
import { BuildingDetailsComponent } from '../building-details/building-details.component';

@Component({
    selector: 'building-admin',
    templateUrl: './building-admin.component.html',
    styleUrls: ['./building-admin.component.css']
})

export class BuildingAdminComponent implements OnInit {

    buildings: Building[]
    selectedBuilding: Building

    constructor(
        private buildingService: BuildingServiceBase,
        private notificationsService: NotificationsService) {
    }

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

        this.notificationsService.info('Success', 'Building is deleted.' );

        return this.buildings;
    }

    addBuilding = (building: Building) => {
        this.buildings.push(building);
        this.selectBuilding(building);

        this.notificationsService.info('Success', building.name + ' is added.' );

        return this.buildings;
    }

    updateBuilding = (building: Building) => {
        var idx = this.getIndexOfBuilding(building._id);

        if (idx !== -1) {
            this.buildings[idx] = building;
            this.selectBuilding(building);
        }

        this.notificationsService.info('Success', building.name + ' is updated.' );

        return this.buildings;
    }

    updateDefaultImage = (building: Building, response: string, status: number) => {
        let image = JSON.parse(response);

        building.defaultImage = image.public_id;

        this.notificationsService.info('Success', 'The new default image name is ' + image.original_filename );
    }
}