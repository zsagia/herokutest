import { Component } from '@angular/core';

import { Image } from '../image/model/image.model';
import { ImageServiceBase } from '../image/image-service/image.service.base';

@Component({
  selector: 'main-display',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent {
    title: String = 'Fortresses';
    images: Array<Image> = [];

    constructor(private imageService: ImageServiceBase) {
       this.getImages();  
    }

    getImages() {
        this.imageService.getImages().then(images => this.images = images);
    }
}