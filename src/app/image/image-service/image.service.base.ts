import { Injectable } from '@angular/core';

import { Image } from '../model/image.model';
import { ImageService } from './image.service';

@Injectable()
export abstract class ImageServiceBase implements ImageService {
    abstract getImage(id: String): Promise<Image>;
    abstract getImages(): Promise<Array<Image>>;
} 