import { Building } from '../building';

export interface BuildingService {
    getBuilding(id: String): Promise<Building>;
    getBuildings(): Promise<Array<Building>>;
    createBuilding(newBuilding: Building): Promise<Building>;
    deleteBuilding(delBuildingId: String): Promise<String>;
    updateBuilding(putBuilding: Building): Promise<Building>
    getFilteredBuildingesByType(type: String): Promise<Array<Building>>;
    getFilteredBuildingesByCountry(country: String): Promise<Array<Building>>;
}