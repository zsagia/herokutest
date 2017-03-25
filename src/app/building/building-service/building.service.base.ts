import { Injectable } from '@angular/core';

import { Building } from '../building';
import { BuildingService } from './building.service';

@Injectable()
export abstract class BuildingServiceBase implements BuildingService {
    abstract getBuilding(id: String): Promise<Building>;
    abstract getBuildings(): Promise<Array<Building>>;
    abstract createBuilding(newBuilding: Building): Promise<Building>;
    abstract deleteBuilding(delBuildingId: String): Promise<String>;
    abstract updateBuilding(putBuilding: Building): Promise<Building>
    abstract getFilteredBuildingesByType(type: String): Promise<Array<Building>>;
    abstract getFilteredBuildingesByCountry(country: String): Promise<Array<Building>>;
}