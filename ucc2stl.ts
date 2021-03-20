import { Point } from "./point";
import { Cuboid } from "./cuboid";
import * as fs from "fs";
import * as readline from "readline";

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

function csv2list(afile: string): number[][] {
  const data = fs.readFileSync(afile, "utf8");
  const lines = data.split(/\r?\n/);
  const alist: number[][] = [];
  lines.forEach((line) => {
    const p: number[] = [];
    line
      .trim()
      .split(",")
      .forEach((e) => {
        p.push(parseInt(e));
      });
    alist.push(p);
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

const lala = csv2list("Node.txt");
console.log(lala[0], lala[lala.length]);
