import { Point } from "./point";
import { Cuboid } from "./cuboid";

const cv0 = new Point([0, 0, 0]);
const cv1 = new Point([1, 0, 0]);
const cv2 = new Point([1, 1, 0]);
const cv3 = new Point([0, 1, 0]);
const cv4 = new Point([0, 0, 1]);
const cv5 = new Point([1, 0, 1]);
const cv6 = new Point([1, 1, 1]);
const cv7 = new Point([0, 1, 1]);

const cu = new Cuboid([cv0, cv1, cv2, cv3, cv4, cv5, cv6, cv7]);

cu.faces.forEach((face) => {
  console.log(face.toString());
});

console.log(cu.faces.get("top"));
