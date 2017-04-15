import { Image } from '../model/image.model';

export interface ImageService {
    getImage(id: String): Promise<Image>;
    getImages(): Promise<Array<Image>>;
}