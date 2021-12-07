const { getDayInput } = require("../util");
const { filePath } = require("../config.json");

getDayInput(1);

let input = require("fs")
  .readFileSync(`${filePath}/day1/day1.txt`, { encoding: "utf-8" })
  .split("\n")
  .map(Number);

function part1() {
  var ans = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i + 1] > input[i]) {
      ans++;
    }
  }
  console.log(`Part 1: ${ans}`);
}

function part2() {
  var ans = 0;
  for (let i = 0; i < input.length - 2; i++) {
    var sum1 = input[i] + input[i + 1] + input[i + 2];
    var sum3 = input[i + 1] + input[i + 2] + input[i + 3];
    if (sum3 > sum1) {
      ans++;
    }
  }
  console.log(`Part 2: ${ans}`);
}

part1();
part2();
