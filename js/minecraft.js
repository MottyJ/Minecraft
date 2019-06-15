$(document).ready(() => {
  // Globals
  let activeToolType = ""; //= "shovel";
  let altTileType = "";
  let activeTileType = ""; //= "dirt";
  let activeTool; //= new Shovel();
  let activeTile; //= new Tile("",false);
  // Modal
  // Modal buttons
  let howToButton = $("#how-to");
  let newGameButton = $("#new-game");
  let themeButton = $("#theme");
  // toggleTheme
  $(themeButton).on("click", () => {
    toggleTheme();
  });
  $(newGameButton).on("click", () => {
    $("#modal-wrapper").toggle();
  });
  $(howToButton).on("click", () => {
    $(".modal-content").toggle();
  });
  //
  //Sounds
  let error = new Audio();
  error.src = "./sounds/error-alert.wav";
  let toolSelect = new Audio();
  toolSelect.src = "./sounds/tool-select.wav";
  let toolSound = new Audio();
  // Tiles
  let tiles = $(".tile");
  Array.from(tiles).forEach(t => {
    $(t).on("mousedown", () => {
      //
      console.log("tile mousedown activeToolType: " + activeToolType);

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

        // Check for tile tool match
        if (
          activeTool.type == activeTile.type ||
          activeTool.type == altTileType
          // activeTool.canOperateTool(activeTile)
        ) {
          // modify inventory counter
          let counterValue = parseInt($("#" + tileType).text());
          counterValue++;
          // set counter value
          $("#" + tileType).text(counterValue);
          $("#" + tileType).css("pointer-events","auto");

          //audio
          toolSound.src = `./sounds/${activeTool.name}.mp3`;
          toolSound.play();
          // Operate tool
          activeTool.harvestTile(activeTile);
          //
          // Update tile to empty
          // activeTile
          activeTile.setEmptyState(true);
          activeTile.setType("");
          // Dom tile
          $(t).removeClass(tileType);
          // debug log
          // console.log(
          //   `Can operate tool ${JSON.stringify(
          //     activeTool
          //   )} on tile ${JSON.stringify(activeTile)}`
          // );
        } else if (activeToolType == "inventory") {
          // Inventory
          // place tile
          if (activeTool.canPlaceTile(activeTile)) {
            console.log("can place tile");
            activeTool.placeTile(activeTile, activeTileType);
            $(t).addClass(activeTile.type);
            // decrease counter
            console.log(activeToolType);
            console.log(activeTileType);
            // modify inventory counter
            let counterValue = parseInt($("#" + activeTileType).text());
            counterValue--;
            // set counter value
            $("#" + activeTileType).text(counterValue);
          } else {
            rejectEffect();
          }
        } else {
          // reject effect
          // audio
          $(`#${activeTool.name}`).css("background-color", "red");
          setInterval(function() {
            $(`#${activeTool.name}`).css("background-color", "");
          }, 600);
          error.play();
          // debug log
          // console.log(
          //   `CANNOT operate tool ${JSON.stringify(
          //     activeTool
          //   )} on tile ${JSON.stringify(activeTile)}`
          // );
        }
        //
      } else {
        // audio
        error.play();
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
      //set activeTool's isActive property to true
      activeTool.setActiveState(true);
      // audio
      toolSelect.play();
      // debug log
      // console.log(`Tool clicked - ${JSON.stringify(activeTool)}`);
      // Change mouse pointer accordingly
      ///
      toggleButton();
    });
  });
  // Inventory
  let inventoryButtons = $(".inv");
  Array.from(inventoryButtons).forEach(inv => {
    // Reset on startup
    $(inv).text("0");
    $(inv).css("pointer-events","none");

    //
    $(inv).on("click", () => {
      let inventoryType = inv.id;
      let inventoryButtonCounter = $(inv).text();
      // create inventory object
      activeTool = new Inventory();
      //
      console.log("inv: " + inv);
      console.log("inventoryType: " + inventoryType);
      console.log("inventoryButtonCounter: " + inventoryButtonCounter);
      if (inventoryButtonCounter == "0") {
        console.log("inv empty");
      } else {
        // else
        // let grassTile = new Tile("grass",false)
        activeTileType = inventoryType;

        // change activeTool to inventory
        // change activeToolType to inventory
        activeToolType = activeTool.type;
        console.log("activeToolType: " + activeToolType);

        // change cursor to tile
        let newToolString = `url("./img/${activeToolType}.png") 26 0 , auto`;
        console.log(newToolString);
        $(".container").css("cursor", newToolString);
      }
    });
  });
  // Auxiliary functions
  // Toggle tool button
  let toggleButton = () => {
    if (this.isActive) {
      // Turn off
      this.isActive = false;
      // remove tool-specific cursor
      resetMouseCursor();
      // change button css accordingly
    } else {
      // Turn on
      // change button css accordingly
      this.isActive = true;
      // set tool-specific cursor
      changeMouseCursor();
    }
  };
  // Change mouse cursor to match tool
  let changeMouseCursor = () => {
    let newToolString = `url("./img/${activeToolType}-c.png") 26 0 , auto`;
    $(".container").css("cursor", newToolString);
  };
  // Reset mouse cursor
  let resetMouseCursor = () => {
    $(".container").css("cursor", "auto");
  };
  //
  // Toggle theme
  let toggleTheme = () => {
    let container = $(".container").css("background-image");
    console.log(container);
    if (container.indexOf("2") > -1) {
      container.replace("2", "");
      $(".container").css("background-image", container);
    } else {
      container.replace(".", "2.");
      $(".container").css("background-image", container);
    }
    // .tile,
    // .tile.dirt,
    // .tile.grass,
    // .tile.wood,
    // .tile.tree,
    // .tile.cloud,
    // .tile.rock,
    // #grass,
    // #dirt,
    // #rock,
    // #wood,
    // #tree
  };
  // Initialize inventory counters
});
