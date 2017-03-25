import { TestBed, inject } from '@angular/core/testing';

import { Image } from './image.model';

describe('Image model', () => {
    let image: Image;

    beforeEach(() => {
        TestBed.configureTestingModule({
        });

        image = new Image('2001', 'http://res.cloudinary.com/zsagia/image/upload/v1488779676/catles_and_fortresses/veste-rothenberg-1_wclyhq.jpg', 'Caption test', 'Description');
    });

    it('id should be ', () => {
         expect(image._id).toEqual(2001);
    });

    it('url should be ', () => {
         expect(image.url).toEqual('http://res.cloudinary.com/zsagia/image/upload/v1488779676/catles_and_fortresses/veste-rothenberg-1_wclyhq.jpg');
    });

    it('caption should be ', () => {
         expect(image.caption).toEqual('Caption test');
    });

    it('description should be ', () => {
         expect(image.caption).toEqual('Description');
    });
});
