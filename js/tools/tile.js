class Tile {
  constructor(type, isEmpty) {
    // basic tile properties setup
    this.type = type || "";
    this.isEmpty = isEmpty;
  }
  // tile functionality
  getEmptyState() {
    return this.isEmpty;
  }
  setEmptyState(flag) {
    if (typeof flag == "boolean") {
      this.isEmpty = flag;
    }
  }
  getType() {
    return this.type;
  }
  setType(newType) {
    this.type = newType;
  }
}
