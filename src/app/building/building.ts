export class Building {
    public static readonly TYPE_CASTLE = "castle";
    public static readonly TYPE_FORTRESS = "fortress";

    public _id?: String;
    public name: String;
    public country: String;
    public defaultImage: String;
    public description: String;
    public history: String;
    public type: String;

    constructor(
        id: String, name: String, country: String,
        defaultImage: String, description: String, history: String,
        type: String) {

        this._id = id;
        this.name = name;
        this.country = country;
        this.defaultImage = defaultImage;
        this.description = description;
        this.history = history;
        this.type = type;
    }
}
