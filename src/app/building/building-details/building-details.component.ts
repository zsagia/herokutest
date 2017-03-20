import { Component, Input } from '@angular/core';
import { Building } from '../building';
import { BuildingService } from '../building.service';

@Component({
  selector: 'building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})

export class BuildingDetailsComponent {
  @Input()
  building: Building;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  private TYPE_CASTLE: String = Building.TYPE_CASTLE;
  private TYPE_FORTRESS: String = Building.TYPE_FORTRESS;

  constructor (private buildingService: BuildingService) {}

  createBuilding(building: Building) {
    this.buildingService.createBuilding(building).then((newBuilding: Building) => {
      this.createHandler(newBuilding);
    });
  }

  updateBuilding(building: Building): void {
    this.buildingService.updateBuilding(building).then((updatedBuilding: Building) => {
      this.updateHandler(updatedBuilding);
    });
  }

  deleteBuilding(buildingId: String): void {
    this.buildingService.deleteBuilding(buildingId).then((deletedBuildingId: String) => {
      this.deleteHandler(deletedBuildingId);
    });
  }
}