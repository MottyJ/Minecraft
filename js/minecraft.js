$(document).ready(() => {
  // Globals
  let activeToolType = ""; //= "shovel";
  let altTileType = "";
  //let activeTileType = ""; //= "dirt";
  let activeTool; //= new Shovel();
  let activeTile; //= new Tile("",false);
  // Tiles
  let tiles = $(".tile");
  Array.from(tiles).forEach(t => {
    $(t).on("mousedown", () => {
      // Check for active tool
      if (activeToolType !== "") {
        // Set tile object
        let tileType = t.className.replace("tile", "").trim();
        // Exception for multi class elements
        if (tileType == "wood") {
          altTileType = "tree";
        } else if (tileType == "dirt" || tileType == "grass") {
          altTileType = "ground";
        } else {
          altTileType = "";
        }
        let isEmpty = tileType.length == 0;
        activeTile = new Tile(tileType, isEmpty);
        //activeTileType = tileType;
        // Check for tile tool match
        if (
          activeTool.type == activeTile.type ||
          activeTool.type == altTileType
        ) {
          // Operate tool
          console.log(
            `Can operate tool ${JSON.stringify(
              activeTool
            )} on tile ${JSON.stringify(activeTile)}`
          );
        } else {
          // reject effect
          console.log(
            `CANNOT operate tool ${JSON.stringify(
              activeTool
            )} on tile ${JSON.stringify(activeTile)}`
          );
        }
        //
      } else {
        console.log("Pick a tool first!");
      }
    });
  });
  // Tools
  let tools = $(".tool:not(.inv)");
  Array.from(tools).forEach(tool => {
    $(tool).on("click", () => {
      // obtain clicked tool
      let toolType = tool.id;
      activeToolType = toolType;
      switch (activeToolType) {
        case "shovel":
          activeTool = new Shovel();
          break;
        case "axe":
          activeTool = new Axe();
          break;
        case "pickaxe":
          activeTool = new pickAxe();
          break;
      }
      // debug log
      console.log(`Tool clicked - ${JSON.stringify(activeTool)}`);
      // Change mouse pointer accordingly
      changeMouseCursor();
    });
  });
  // Inventory
  let inventoryButtons = $(".inv");
  Array.from(inventoryButtons).forEach(inv => {
    console.log(inv);
    $(inv).on("click", () => {
      let inventoryType = inv.id;
      switch (inventoryType) {
        case "grass":
            // if empty - reject
            // else
            // change cursor to tile
            // change activeTool to inventory
            // change activeToolType to inventory
          break;
      }
    });
  });
  // Auxiliary functions
  let changeMouseCursor = () => {
    let newToolString = `url("./img/${activeToolType}-c.png") 26 0 , auto`;
    $(".container").css("cursor", newToolString);
  };
});
