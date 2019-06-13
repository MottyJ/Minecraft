class Tile {
    constructor(type, isEmpty){
        // basic tile properties setup
        this.type = type || ""
        this.isEmpty = isEmpty 
    }
    // tile functionality
    isEmptyTile(){
        return this.isEmpty
    }
    getType(){
        return this.type
    }
    setType(newType){
        this.type = newType
    }
}