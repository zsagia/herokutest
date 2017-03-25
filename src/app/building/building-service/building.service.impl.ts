import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Building } from '../building';
import { BuildingServiceBase } from './building.service.base';

@Injectable()
export class BuildingServiceImpl extends BuildingServiceBase {
    private buildingsUrl = '/api/buildings';

    constructor(private http: Http) {
        super();
     }

    getBuilding(id: String): Promise<Building> {
        return this.getBuildings()
            .then(buildinges => buildinges.find(building => building._id === id));
    }

     // get("/api/buildings")
    getBuildings(): Promise<Building[]> {
        return this.http.get(this.buildingsUrl)
            .toPromise()
            .then(response => response.json() as Building[])
            .catch(this.handleError);
    }

    // post("/api/buildings")
    createBuilding(newBuilding: Building): Promise<Building> {
        return this.http.post(this.buildingsUrl, newBuilding)
            .toPromise()
            .then(response => response.json() as Building)
            .catch(this.handleError);
    }

    // delete("/api/buildings/:id")
    deleteBuilding(delBuildingId: String): Promise<String> {
        return this.http.delete(this.buildingsUrl + '/' + delBuildingId)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
    }

    // put("/api/buildings/:id")
    updateBuilding(putBuilding: Building): Promise<Building> {
        var putUrl = this.buildingsUrl + '/' + putBuilding._id;
        return this.http.put(putUrl, putBuilding)
            .toPromise()
            .then(response => response.json() as Building)
            .catch(this.handleError);
    }

    getFilteredBuildingesByType(type: String): Promise<Array<Building>> {
         let buildinges: Promise<Array<Building>> = this.getBuildings();

         return buildinges.then(
            buildinges => buildinges.filter(
                 building => building.type === type
            )
         );
    }

    getFilteredBuildingesByCountry(country: String): Promise<Array<Building>> {
         let buildinges: Promise<Array<Building>> = this.getBuildings();

         return buildinges.then(
            buildinges => buildinges.filter(
                 building => building.country === country
            )
         );
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}

