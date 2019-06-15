$(document).ready(() => {
  //
  let activeToolType 
  let activeTileType 
  //
  let tiles = $(".tile");
  Array.from(tiles).forEach(t => {
    $(t).on("mousedown", () => {
      let tileType = t.className.replace("tile", "").trim();
      let isEmpty = tileType.length == 0;
      let tile = new Tile(tileType, isEmpty);
    //   console.log("tile clicked - " + JSON.stringify(tile));
      activeTileType = tileType
      console.log("activeTileType: " + activeTileType);

    });
  });
  let tools = $(".tool");
  Array.from(tools).forEach(tool => {
    $(tool).on("click", () => {
      let toolType = tool.id;

      activeToolType = toolType
      console.log("activeToolType: " + activeToolType);
    });
  });
});
