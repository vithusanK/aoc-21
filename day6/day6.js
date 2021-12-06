const { getDayInput } = require("../util");
const { filePath } = require("../config.json");

// var input = [3,4,3,1,2]; //test data

getDayInput(6);

let input = require("fs")
  .readFileSync(`${filePath}/day6/day6.txt`, { encoding: "utf-8" })
  .trim()
  .split(",")
  .map(Number);

function part1() {
  temp = input;
  temp = MakeArrayOfCountEachGen(input);
  temp = countNumberOfFishInEachGen(80, temp);
  console.log("Part 1: " + temp.reduce((acc, v) => acc + v, 0));
}

function part2() {
  input = MakeArrayOfCountEachGen(input);
  input = countNumberOfFishInEachGen(256, input);
  console.log("Part 2: " + input.reduce((acc, v) => acc + v, 0));
}

function countNumberOfFishInEachGen(day, input) {
  if (day == 0) return input;
  //remove count of 0s and shift all previous counts since the fish decrease by 1 each day
  zeroCounts = input.shift();
  //add number of 0s that turn into 6s
  input[6] += zeroCounts;
  //add new number of 8s which is just the count of 0s
  input.push(zeroCounts);
  return countNumberOfFishInEachGen(day - 1, input);
}

function MakeArrayOfCountEachGen(input) {
  var newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  input.forEach((fish) => {
    //inc count of the gen the fish belongs to, start each with 1
    var genc = newArray[fish];
    newArray[fish] = ++genc;
  });
  return newArray;
}

part1();
part2();
