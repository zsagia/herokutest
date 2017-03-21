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
}
