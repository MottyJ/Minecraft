class Tile {
  constructor(type, isEmpty) {
    // basic tile properties setup
    this.type = type || ""; // "ground", "rock" ...
    this.isEmpty = isEmpty; // boolean
  }
  // tile functionality
  // Empty state getter and setter
  getEmptyState() {
    return this.isEmpty;
  }
  setEmptyState(isEmpty) {
    if (typeof isEmpty == "boolean") {
      this.isEmpty = isEmpty;
    }
  }
  // Tile type adder and setter
  getType() {
    return this.type;
  }
  setType(newType) {
    this.type = newType;
  }
}
