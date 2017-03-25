export class Image {
    _id: String;
    url: String;
    caption: String;
    description: String;

    constructor(id: String, url: String, caption: String, description: String) {
        this._id = id;
        this.url = url;
        this.caption = caption;
        this.description = description;
    }
}