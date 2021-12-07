const { getDayInput } = require("../util");
const { filePath } = require("../config.json");

let input = require("fs")
  .readFileSync(`${filePath}/day2/day2.txt`, { encoding: "utf-8" })
  .split("\n")
  .map((x) => {
    return x.split(" ").map(String);
  });

function part1(input) {
  let hor = 0;
  let depth = 0;
  for (let i = 0; i < input.length - 1; i++) {
    var direction = input[i][0];
    var mag = parseInt(input[i][1]);
    if (direction == "forward") {
      hor = hor + mag;
    } else if (direction == "down") {
      depth = depth + mag;
    } else if (direction == "up") {
      depth = depth - mag;
    }
  }

  console.log(`Part 1: ${hor * depth}`);
}

function part2(input) {
  var hor = 0;
  var depth = 0;
  var aim = 0;
  for (let i = 0; i < input.length - 1; i++) {
    var direction = input[i][0];
    var mag = parseInt(input[i][1]);

    if (direction == "forward") {
      hor = hor + mag;
      depth = depth + (aim > 0 ? mag * aim : 0);
    } else if (direction == "down") {
      aim = aim + mag;
    } else if (direction == "up") {
      aim = aim - mag;
    }
  }
  console.log(`Part 2: ${hor * depth}`);
}
getDayInput(2);
part1(input);
part2(input);
