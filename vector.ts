import { NDArray } from "vectorious";

export class Vector {
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
    return `Vector(${this.coordinates.x},${this.coordinates.y},${this.coordinates.z})`;
  }

  equals(other: Vector): boolean {
    return (
      this.coordinates.x === other.coordinates.x &&
      this.coordinates.y === other.coordinates.y &&
      this.coordinates.z === other.coordinates.z
    );
  }

  cross(other: Vector): Vector {
    const thisVector = new Vector([this.x, this.y, this.z]);
    const otherVector = new Vector([other.x, other.y, other.z]);
    return new Vector(
      thisVector.coordinates.cross(otherVector.coordinates).toArray()
    );
  }
}
