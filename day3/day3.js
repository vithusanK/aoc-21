const { filePath } = require("../config.json");
const { getDayInput } = require("../util");

getDayInput(3);

let input = require("fs")
  .readFileSync(`${filePath}/day3/day3.txt`, { encoding: "utf-8" })
  .split("\n");

function part1() {
  var gamma = "";
  let length = input[0].length;
  for (let j = 0; j < length; j++) {
    gamma += getMostCommonBit(j, input).toString();
  }
  gamma = parseInt(gamma, 2);
  let epsilon = Math.pow(2, length) - gamma - 1;
  console.log("Part 1: " + gamma * epsilon);
}
function part2() {
  let binaryOxy = getOxy(input, 0);
  let decimalOxy = parseInt(binaryOxy, 2);
  let binaryCO2 = getCO2(input, 0);
  let decimalCO2 = parseInt(binaryCO2, 2);
  console.log("Part 2: " + decimalOxy * decimalCO2);
}

function getOxy(values, position) {
  let cmb = getMostCommonBit(position, values);
  let part2Ans = values.filter((x) => x.charAt(position) == cmb);
  if (part2Ans.length == 1) return part2Ans;
  return getOxy(part2Ans, position + 1);
}

function getCO2(values, position) {
  let lcb = getMostCommonBit(position, values) === 1 ? 0 : 1;
  let part2CO2Ans = values.filter((x) => x.charAt(position) == lcb);
  if (part2CO2Ans.length == 1) return part2CO2Ans;
  return getCO2(part2CO2Ans, position + 1);
}

function getMostCommonBit(position, values) {
  var zeroC = 0;
  var oneC = 0;
  for (let i = 0; i < values.length; i++) {
    values[i].charAt(position) == "0" ? zeroC++ : oneC++;
  }
  return zeroC > oneC ? 0 : 1;
}

part1();
part2();
