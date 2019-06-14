let g = new Tile("ground",false);
let s = new Tile("sky", true);
let t = new Tile("tree", false);
let shovel = new Shovel();
let extractor1 = new InventoryExtractor();

shovel.canOperateTool(g);
shovel.canDig(g);