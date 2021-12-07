const { getDayInput } = require("../util");
const { filePath } = require("../config.json");

// getDayInput(7);

let input = require("fs")
  .readFileSync(`${filePath}/day7/day7.txt`, { encoding: "utf-8" })
  .split(",")
  .map(Number);

// let input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]; //test data

function part1() {
  var nums = [];
  input.forEach((crab) => {
    if (!nums.includes(crab)) nums.push(crab);
  });
  let lowest = Number.MAX_VALUE;
  nums.forEach((x) => {
    var currentCost = 0;
    for (let i = 0; i < input.length; i++) {
      currentCost += Math.abs(input[i] - x);
    }
    lowest = Math.min(lowest, currentCost);
  });
  console.log("Part 1:" + lowest);
}

function part2() {
  var max = Math.max(...input);
  var min = Math.min(...input);

  let lowest = Number.MAX_VALUE;
  for (let j = min; j < max; j++) {
    var currentCost = 0;
    for (let i = 0; i < input.length; i++) {
      currentCost += getCost(input[i], j);
    }
    lowest = Math.min(lowest, currentCost);
  }
  console.log("Part2: " + lowest);
}

function getCost(num1, num2) {
  let diff = Math.abs(num1 - num2);
  if (diff == 0) return 0;
  return (diff * (diff + 1)) / 2;
}

part1();
part2();
