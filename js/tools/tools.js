class Tool {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    canOperateTool(tile) {
        if (tile.getEmptyState()) {
            rejectEffect();
            return false;
        } else {
            console.log("tile is not empty")
            return true;
        }
    }
    harvestTile(tile) {
        // set tile type to empty
        tile.setType("");
        tile.setEmptyState(true);
        console.log("sucsessfull harvest")
        //places tile in inventory- function call
    }
    placeTileInIventory(){
        //places tile in inventory
    }
}

class InventoryExtractor extends Tool{
    constructor(){
        super();
    }
    canPlaceTile(tile){
        //will return true if tile is empty
        return tile.getEmptyState()
    }
    placeTile(tile, type){
        tile.setType(type);
        tile.setEmptyState(false);
    }
}


class Shovel extends Tool {
    constructor() {
        super("shovel", "ground");
    }
    canDig(tile) {
        // check if tile is not empty &  if tool can operate on tile
        if ((this.canOperateTool(tile)) && tile.type === "ground") {
            console.log("tile matches tool type. Time to dig!")
            this.harvestTile(tile);
            return true;
        }
        else {
            console.log("you can't dig here");
            rejectEffect();
        }
    }

    // dig(e) {
    //     if (this.canOperateTool()) {
    //         if (canDig(tile)) {
    //             $(e.target).removeClass("dirt");
    //             //also store tile in inventory
    //         } else {
    //             rejectEffect();
    //         }
    //     }
    // }
}

function rejectEffect() {
    console.log("you can't do that");
    //css effect changing backround someplace to red to let uer know they did something wrong
}

