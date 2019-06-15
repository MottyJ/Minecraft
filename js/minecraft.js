$(document).ready(() => {
  //
  let activeToolType = ""; //= "shovel";
  let activeTileType = ""; //= "dirt";
  let activeTool; //= new Shovel();
  let activeTile; //= new Tile("",false);
  //
  let tiles = $(".tile");
  Array.from(tiles).forEach(t => {
    $(t).on("mousedown", () => {
      // Check for active tool
      if (activeToolType !== "") {
        // Set tile object
        let tileType = t.className.replace("tile", "").trim();
        // Exception for tree wood
        let altTileType = tileType == "wood" ? "tree" : "";
        let isEmpty = tileType.length == 0;
        activeTile = new Tile(tileType, isEmpty);
        activeTileType = tileType;
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
        case "inventory":
          activeTool = new Shovel();
          break;
      }
      // debug log
      console.log(`Tool clicked - ${JSON.stringify(activeTool)}`);
      // Change mouse pointer accordingly
      changeMouseCursor();
    });
  });
  // Auxiliary functions
  let changeMouseCursor = () => {
    let newToolString = `url("./img/${activeToolType}-c.png") 26 0 , auto`;
    $(".container").css("cursor", newToolString);
  };
});
