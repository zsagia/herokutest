export class Image {
    _id: string;
    cloudinaryPublicId: string;
    cloudinaryPublicUrl: string;
    caption: string;
    description: string;

    constructor(id: string, cloudinaryPublicId: string, cloudinaryPublicUrl: string, caption: string, description: string) {
        this._id = id;
        this.cloudinaryPublicUrl = cloudinaryPublicUrl;
        this.cloudinaryPublicId = cloudinaryPublicId;
        this.caption = caption;
        this.description = description;
    }
}