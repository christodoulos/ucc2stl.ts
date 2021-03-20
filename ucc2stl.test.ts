import { random } from "vectorious";
import { Vector, Point } from "./ucc2stl";

describe("Tests for Vector class", () => {
  const v1 = new Vector([1, 2, 3]);
  it("Vector(1,2,3).x should be 1", () => {
    expect(v1.x).toStrictEqual(1);
  });
  it("Vector(1,2,3).y should be 2", () => {
    expect(v1.y).toStrictEqual(2);
  });
  it("Vector(1,2,3).z should be 3", () => {
    expect(v1.z).toStrictEqual(3);
  });
  it("Vector(1,2,3).toString() should be 'Vector(1,2,3)'", () => {
    expect(v1.toString()).toStrictEqual("Vector(1,2,3)");
  });
  const v2 = new Vector([Math.random(), Math.random(), Math.random()]);
  it(`${v2} should be equal to ${v2}`, () => {
    expect(v2.equals(v2)).toBeTruthy();
  });
  const v3 = new Vector([1, 2, 3]);
  const v4 = new Vector([4, 5, 6]);
  const v5 = new Vector([-3, 6, -3]);
  const v6 = new Vector([3, -6, 3]);
  it(`${v3}.cross(${v4}) should be Vector(-3,6,-3)`, () => {
    expect(v3.cross(v4).equals(v5)).toBeTruthy();
  });
  it(`${v4}.cross(${v3}) should be Vector(3,-6,3)`, () => {
    expect(v4.cross(v3).equals(v6)).toBeTruthy();
  });
});

describe("test Point class", () => {
  const p1 = new Point([1, 2, 3]);
  const p2 = new Point([1, 2, 1]);
  const p3 = new Point([0, 2, 3]);
  const p4 = new Point([1, 0, 3]);
  it("Point(1,2,3).toString() should be 'Point(1,2,3)'", () => {
    expect(p1.toString()).toStrictEqual("Point(1,2,3)");
  });
  it(`${p1.toString()} should be bigger than ${p2.toString()}`, () => {
    expect(p1.isGreaterThan(p2)).toBe(true);
  });
  it(`${p2.toString()} should be less than ${p1.toString()}`, () => {
    expect(p2.isLessThan(p1)).toBe(true);
  });
  it(`${p3.toString()} should be less than ${p1.toString()}`, () => {
    expect(p3.isLessThan(p1)).toBe(true);
  });
  it(`${p4.toString()} should be less than ${p1.toString()}`, () => {
    expect(p4.isLessThan(p1)).toBe(true);
  });
  it(`${p2.toString()} should be less than ${p1.toString()}`, () => {
    expect(p2.isLessThanOrEqual(p1)).toBe(true);
  });
  it(`${p3.toString()} should be less than ${p1.toString()}`, () => {
    expect(p3.isLessThanOrEqual(p1)).toBe(true);
  });
  it(`${p4.toString()} should be less than ${p1.toString()}`, () => {
    expect(p4.isLessThanOrEqual(p1)).toBe(true);
  });
  const c = new Point([Math.random(), Math.random(), Math.random()]);
  const d = new Point([Math.random(), Math.random(), Math.random()]);
  const e = c.subtract(d);
  const f = d.subtract(c);
  it("c + e shoud give d", () => {
    expect(c.add(e).equals(d)).toBe(true);
  });
  it("d + f should give c", () => {
    expect(d.add(f).equals(c)).toBe(true);
  });
});
