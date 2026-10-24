// Topic: Static Methods & Properties

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Static Factory Method
  static origin() {
    return new Point(0, 0);
  }

  // Static Utility Method
  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.hypot(dx, dy);
  }
}

const pointA = Point.origin();
const pointB = new Point(3, 4);

console.log("Point A:", pointA);
console.log("Point B:", pointB);
console.log("Distance between points:", Point.distance(pointA, pointB)); // 5
