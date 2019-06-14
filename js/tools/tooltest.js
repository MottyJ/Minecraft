let g = new Tile("ground",false);
let s = new Tile("sky", true);
let t = new Tile("tree", false);
let r = new Tile("rock", false);

let shovel = new Shovel();
let axe = new Axe();
let pickaxe = new pickAxe();
let inventory = new Inventory();

shovel.canOperateTool(g);
shovel.canDig(g);