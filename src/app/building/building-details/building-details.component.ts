import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular';

import { Building } from '../building';
import { BuildingServiceBase } from '../building-service/building.service.base';

@Component({
    selector: 'building-details',
    templateUrl: './building-details.component.html',
    styleUrls: ['./building-details.component.css']
})

export class BuildingDetailsComponent implements OnInit {
    private _building: Building;

    get building(): Building {
        return this._building;
    }

    @Input('building')
    set building(building: Building) {
        this._building = building;
        this.submitted = false;
    }

    @Input()
    createHandler: Function;
    @Input()
    updateHandler: Function;
    @Input()
    deleteHandler: Function;
    @Input()
    updateDefaultImageHandler: Function;

    buildingForm: FormGroup;

    submitted: boolean = false;

    private uploader: FileUploader;

    private TYPE_CASTLE: String = Building.TYPE_CASTLE;
    private TYPE_FORTRESS: String = Building.TYPE_FORTRESS;

    constructor(
        private formBuilder: FormBuilder,
        private buildingService: BuildingServiceBase,
        private cloudinary: Cloudinary
    ) { }

    ngOnInit() {
        this.buildingForm = this.formBuilder.group({
            _id: '',
            name: ['', Validators.required],
            country: ['', Validators.required],
            type: ['', Validators.required],
            defaultImage: '',
            description: '',
            history: ''
        });

        const uploaderOptions: FileUploaderOptions = {
            url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
            autoUpload: true,
            isHTML5: true,
            removeAfterUpload: true,
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest'
                }
            ]
        };

        this.uploader = new FileUploader(uploaderOptions);

        this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
            form.append('upload_preset', this.cloudinary.config().upload_preset);

            fileItem.withCredentials = false;

            return { fileItem, form };
        };

        this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) => {
            this.updateDefaultImageHandler(this._building, response, status);
        }
    }

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

    onSubmit(building): void {
        this.submitted = true;

        if (this.building._id) {
            this.updateBuilding(building);
        }
        else {
            this.createBuilding(building);
        }
    }
            
}