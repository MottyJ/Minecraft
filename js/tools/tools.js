class Tool {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.tilesArray = [];
    this.isActive = true;
  }
  getActiveState() {
    return this.isActive;
  }
  setActiveState(activeState) {
    if (typeof activeState == "boolean") {
      this.isActive = activeState;
    }
  }
  canOperateTool(tile) {
    if (tile.getEmptyState()) {
      rejectEffect();
      return false;
    } else {
      console.log("tile is not empty");
      return true;
    }
  }
  harvestTile(tile) {
    /*this allows each tool to have its own seperate tileArray so that we can display
         multiple inventores and increase the count according to the array length*/
    this.tilesArray.push(tile.type);
    // set tile type to empty
    tile.setType("");
    tile.setEmptyState(true);
    console.log("sucsessfull harvest");
  }
}

class Inventory extends Tool {
  constructor() {
    super();
  }
  canPlaceTile(tile) {
    //will return true if tile is empty
    return tile.getEmptyState();
  }
  placeTile(tile, type) {
    //maybe get rid of the paramater type and pass this.type in the setType argument-motty
    tile.setType(type);
    tile.setEmptyState(false);
    //pop tile from array
  }
}

class Shovel extends Tool {
  constructor() {
    super("shovel", "ground");
  }
  canDig(tile) {
    // check if tile is not empty &  if tool can operate on tile
    if (
      this.canOperateTool(tile) &&
      (tile.type === "ground" || tile.type === "grass")
    ) {
      console.log("tile matches tool type. Time to dig dirt!");
      this.harvestTile(tile);
      return true;
    } else {
      console.log("you can't dig here");
      rejectEffect();
    }
  }
}

class Axe extends Tool {
  constructor() {
    super("axe", "tree");
  }
  canChop(tile) {
    // check if tile is not empty &  if tool can operate on tile
    if (
      this.canOperateTool(tile) &&
      (tile.type === "tree" || tile.type === "wood")
    ) {
      console.log("tile matches tool type. Time to chop trees!");
      this.harvestTile(tile);
      return true;
    } else {
      console.log("you can't chop here");
      rejectEffect();
    }
  }
}

class pickAxe extends Tool {
  constructor() {
    super("pickaxe", "rock");
  }
  canMine(tile) {
    // check if tile is not empty &  if tool can operate on tile
    if (this.canOperateTool(tile) && tile.type === "rock") {
      console.log("tile matches tool type. Time to mine rocks!");
      this.harvestTile(tile);
      return true;
    } else {
      console.log("you can't mine here");
      rejectEffect();
    }
  }
}

function rejectEffect() {
  error.play();
  console.log("you can't do that");
  //css effect changing backround someplace to red to let uer know they did something wrong
}
