class Tool {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    canOperateTool(tile) {
        if (tile.isEmpty()) {
            rejectEffect();
            return false;
        } else {
            return true;
        }
    }
}

class Shovel extends Tool {
    constructor() {
        super("shovel", "ground");
    }
    dig(e) {
        if (this.canOperateTool()) {
            if (e.target.getType() === this.type) {
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

