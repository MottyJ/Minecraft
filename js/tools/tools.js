class Tool {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    canOperateTool(tile) {
        if (tile.isEmptyTile()) {
            rejectEffect();
            return false;
        } else {
            console.log("tile is not empty")
            return true;
        }
    }
}

class Shovel extends Tool {
    constructor() {
        super("shovel", "ground");
    }
    canDig(tile) {
        // check if tile is not empty
        if (!tile.isEmptyTile()) {
            // check if tool can operate on tile
            if (t.getType() == this.type) {
                console.log("tile matches tool type")
            }
        }
    }
    digDirt(tile){
        
    }
    dig(e) {
        if (this.canOperateTool()) {
            if (canDig(tile)) {
                $(e.target).removeClass("dirt");
                //also store tile in inventory
            } else {
                rejectEffect();
            }
        }
    }
}

function rejectEffect() {
    console.log("you can't do that");
    //css effect changing backround someplace to red to let uer know they did something wrong
}

