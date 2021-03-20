import { NDArray } from "vectorious";
import { Vector } from "./vector";

export class Point {
  coordinates: NDArray;

  constructor(coordinates: Array<number>) {
    this.coordinates = new NDArray(coordinates);
  }

  get x(): number {
    return this.coordinates.x;
  }

  get y(): number {
    return this.coordinates.y;
  }

  get z(): number {
    return this.coordinates.z;
  }

  toString(): string {
    return `Point(${this.coordinates.x},${this.coordinates.y},${this.coordinates.z})`;
  }

  equals(other: Point): boolean {
    return (
      this.coordinates.x === other.coordinates.x &&
      this.coordinates.y === other.coordinates.y &&
      this.coordinates.z === other.coordinates.z
    );
  }

  isLessThan(other: Point): boolean {
    if (this.coordinates.x < other.coordinates.x) {
      return true;
    } else if (this.coordinates.y < other.coordinates.y) {
      return true;
    } else {
      return this.coordinates.z < other.coordinates.z;
    }
  }

  isGreaterThan(other: Point): boolean {
    return !this.isLessThan(other);
  }

  isLessThanOrEqual(other: Point): boolean {
    if (this.coordinates.x <= other.coordinates.x) {
      return true;
    } else if (this.coordinates.y <= other.coordinates.y) {
      return true;
    } else {
      return this.coordinates.z <= other.coordinates.z;
    }
  }

  isGreaterThanOrEqual(other: Point): boolean {
    return !this.isLessThanOrEqual(other);
  }

  subtract(other: Point): Vector {
    const otherPoint = new Point([other.x, other.y, other.z]);
    return new Vector(
      otherPoint.coordinates.subtract(this.coordinates).toArray()
    );
  }

  add(vector: Vector): Point {
    const thisPoint = new Point([this.x, this.y, this.z]);
    return new Point(thisPoint.coordinates.add(vector.coordinates).toArray());
  }
}
