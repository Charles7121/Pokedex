export class Pokemon{
    //Propriété d'un pokemon
    id;
    name;
    taille;
    weight;
    type;
    gif;

    constructor(anId, aName, aHeight, aWeight, aType, aGif ) {
        //Constructeur de la classe pokemon
        this.id = anId
        this.name = aName
        this.taille = aHeight
        this.weight = aWeight
        this.type = aType
        this.gif = aGif
    }
}