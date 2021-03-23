import { Point } from "./point";
import { Cuboid } from "./cuboid";
import { CuboidComplex } from "./complex";
import * as fs from "fs";
import * as readline from "readline";

const EPSILON = 1.0e-5;

// function csv2list(afile: string, atype: string, prepend_dummy: boolean) {
function csv2list0(afile: string) {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(afile),
  });
  const alist: number[][] = [];
  readInterface.on("line", (line) => {
    const p: number[] = [];
    line
      .trim()
      .split(",")
      .forEach((e) => {
        p.push(parseInt(e));
      });
    alist.push(p);
  });
  readInterface.on("close", () => {
    return alist;
  });
}

function csv2list(
  afile: string,
  atype: string,
  prepend_dummy = false
): number[][] {
  const data = fs.readFileSync(afile, "utf8");
  const lines = data.split(/\r?\n/);
  const alist: number[][] = [];
  if (prepend_dummy) alist.push([0, 0, 0]);
  lines.forEach((line) => {
    const p: number[] = [];
    line
      .trim()
      .split(",")
      .forEach((e) => {
        if (atype === "int") {
          p.push(parseInt(e));
        } else {
          p.push(parseFloat(e));
        }
      });
    alist.push(p);
  });
  return alist;
}

function dense_cuboids(
  nodes_file: string,
  connectivity_file: string,
  density_file: string,
  threshhold: number
): Cuboid[] {
  const alist: Cuboid[] = [];
  const nodes = csv2list(nodes_file, "int", true);
  const connectivity = csv2list(connectivity_file, "int");
  const density = csv2list(density_file, "float");
  const zip = density.map((cdensity, index) => [cdensity, connectivity[index]]);
  zip.forEach((element) => {
    if (element[0][0] - threshhold > EPSILON) {
      const vertices: Point[] = [];
      element[1].forEach((p) => vertices.push(new Point(nodes[p])));
      alist.push(new Cuboid(vertices));
    }
  });
  return alist;
}

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

// const nodes = csv2list("Node.txt", "int", true);
// const connectivity = csv2list("Connectivity.txt", "int");
// const density = csv2list("density.txt", "float");
// const zip = density.map((cdensity, index) => [cdensity, connectivity[index]]);

// console.log(zip);

const cuboids = dense_cuboids(
  "Node.txt",
  "Connectivity.txt",
  "density.txt",
  0.3
);
console.log(cuboids.length);
const complex = new CuboidComplex(cuboids);
console.log(complex.cuboids.size);
complex.shell();
console.log(complex.vertices.size);
console.log(complex.triangles.length);
