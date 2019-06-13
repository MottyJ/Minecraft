class Tile {
    constructor(type, isEmpty){
        // basic tile properties setup
        this.type = type || ""
        this.isEmpty = isEmpty 
    }
    // tile functionality
    getEmptyState(){
        return this.isEmpty
    }
    getType(){
        return this.type
    }
    setType(newType){
        this.type = newType
    }
}