import { Point } from "./point";
import { Face } from "./face";

export class Cuboid {
  vertices: Array<Point>;
  faces = this.facegenerator();
  constructor(vertices: Array<Point>) {
    this.vertices = vertices.sort();
  }
  get north(): Face {
    const v = this.vertices;
    return new Face([v[0], v[2], v[6], v[4]]);
  }
  get south(): Face {
    const v = this.vertices;
    return new Face([v[1], v[5], v[7], v[3]]);
  }
  get east(): Face {
    const v = this.vertices;
    return new Face([v[5], v[4], v[6], v[7]]);
  }
  get west(): Face {
    const v = this.vertices;
    return new Face([v[0], v[1], v[3], v[2]]);
  }
  get top(): Face {
    const v = this.vertices;
    return new Face([v[6], v[2], v[3], v[7]]);
  }
  get bottom(): Face {
    const v = this.vertices;
    return new Face([v[0], v[4], v[5], v[1]]);
  }
  get centroid(): Point {
    let x = 0,
      y = 0,
      z = 0;
    this.vertices.forEach((vertex) => {
      x += vertex.x;
      y += vertex.y;
      z += vertex.z;
    });
    return new Point([x / 8, y / 8, z / 8]);
  }
  *facegenerator(): IterableIterator<Face> {
    yield thxis.top;
    yield this.bottom;
    yield this.south;
    yield this.west;
    yield this.north;
    yield this.east;
  }
  equals(other: Cuboid): boolean {
    return this.centroid.equals(other.centroid);
  }
  isLessThan(other: Cuboid): boolean {
    return this.centroid.isLessThan(other.centroid);
  }
  isLessThanOrEqual(other: Cuboid): boolean {
    return this.centroid.isGreaterThanOrEqual(other.centroid);
  }
  isGreaterThan(other: Cuboid): boolean {
    return this.centroid.isGreaterThan(other.centroid);
  }
  isGreaterThanOrEqual(other: Cuboid): boolean {
    return this.centroid.isGreaterThanOrEqual(other.centroid);
  }
}
