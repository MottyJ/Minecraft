class Board {
  boardMatrixSetup() {
    this.boardTiles = [];
    let rows = $(".row");
    for (let i = 0; i < rows.length; i++) {
      let row = [];
      let columns = $(rows[i]).find(".tile");
      for (let j = 0; j < columns.length; j++) {
        const tileDiv = columns[j];
        let tileType = tileDiv.className.replace("tile","").trim()
        let isEmpty = tileType.length == 0
        let t = new Tile(tileType, isEmpty)
        row.push(t)
      }
      this.boardTiles.push(row)
    }
  }
  // obtain board object
  //  set into parameters
  getTools(){
      this.shovel = $("#shovel")
      this.axe = $("#axe")
      this.pickaxe = $("#pickaxe")
      this.inventory = $("#inventory")
  }
  // active tool

  // auxiliary functions
  // read board divs
}
