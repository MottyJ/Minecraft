class Tile {
    constructor(type, isEmpty){
        // basic tile properties setup
        this.type = type || ""
        this.isEmpty = isEmpty || true
    }
    // tile functionality
    isEmpty(){
        return this.isEmpty
    }
    getType(){
        return this.type
    }
}