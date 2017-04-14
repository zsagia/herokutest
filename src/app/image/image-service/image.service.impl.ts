import { Injectable } from '@angular/core';

import { Image } from '../model/image.model';
import { ImageServiceBase } from './image.service.base';

@Injectable()
export class ImageServiceImpl extends ImageServiceBase {
    getImage(id: String): Promise<Image> {
        return this.getImages()
            .then(images => images.find(image => image._id === id));
    };

    getImages(): Promise<Array<Image>> {
        let images: Array<Image> = new Array<Image>();

        images.push(
            new Image(
                '1111','catles_and_fortresses/veste-rothenberg-1_wclyhq', 'http://res.cloudinary.com/zsagia/image/upload/v1488779676/catles_and_fortresses/veste-rothenberg-1_wclyhq.jpg',
                'Veste Rothenberg',
                ''
            ),
             new Image(
                '1112','catles_and_fortresses/roquetaillade-1_xpy5go','http://res.cloudinary.com/zsagia/image/upload/v1488779676/catles_and_fortresses/roquetaillade-1_xpy5go.jpg',
                'Roquetaillade',
                ''
            ),
            new Image(
                '1113','catles_and_fortresses/dover-1_z4ht16','http://res.cloudinary.com/zsagia/image/upload/v1488779676/catles_and_fortresses/dover-1_z4ht16.jpg',
                'Dover',
                ''
            )
        );

        return Promise.resolve(images);
    };
}