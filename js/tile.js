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
    // set tile to empty
    // todo
    getType(){
        return this.type
    }
    setType(newType){
        this.type = newType
    }
}