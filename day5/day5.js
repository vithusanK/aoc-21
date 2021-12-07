const { getDayInput } = require("../util");
const { filePath } = require("../config.json");

getDayInput(5);

let input = require("fs")
  .readFileSync(`${filePath}/day5/day5.txt`, { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map((x) => {
    return x.split(" -> ").map((coor) => coor.split(",").map(Number));
  });

function part1() {
  let positionVisited = [];
  for (const [[startX, startY], [endX, endY]] of input) {
    let arrX = [Math.min(startX, endX), Math.max(startX, endX)];
    let arrY = [Math.min(startY, endY), Math.max(startY, endY)];
    positionVisited = getPositionVisitedFromStraighttravel(
      arrX,
      arrY,
      positionVisited
    );
  }

  console.log(`Part 1 : ${CountCrosses(positionVisited)}`);
}

function part2() {
  let positionVisited = [];
  for (const [[startX, startY], [endX, endY]] of input) {
    let arrX = [startX, endX];
    let arrY = [startY, endY];
    if (arrX[0] == arrX[1] || arrY[0] == arrY[1]) {
      positionVisited = getPositionVisitedFromStraighttravel(
        arrX,
        arrY,
        positionVisited
      );
    }
    //travels diagonally
    else {
      let diff = Math.abs(arrX[1] - arrX[0]);
      for (let i = 0; i < diff + 1; i++) {
        let xPos = arrX[0] < arrX[1] ? arrX[0] + i : arrX[0] - i;
        let yPos = arrY[0] < arrY[1] ? arrY[0] + i : arrY[0] - i;
        let pos = `${xPos}-${yPos}`;
        positionVisited[pos] = positionVisited[pos]
          ? (positionVisited[pos] += 1)
          : 1;
      }
    }
  }

  console.log(`Part 2 : ${CountCrosses(positionVisited)}`);
}

function getPositionVisitedFromStraighttravel(arrX, arrY, positionVisited) {
  if (arrX[0] == arrX[1]) {
    var startYPos = Math.min(arrY[0], arrY[1]);
    var endYPos = Math.max(arrY[0], arrY[1]);
    for (let i = startYPos; i < endYPos + 1; i++) {
      let pos = `${arrX[0]}-${i}`;
      positionVisited[pos] = positionVisited[pos]
        ? (positionVisited[pos] += 1)
        : 1;
    }
  } else if (arrY[0] == arrY[1]) {
    var startXPos = Math.min(arrX[0], arrX[1]);
    var endXPos = Math.max(arrX[0], arrX[1]);
    for (let i = startXPos; i < endXPos + 1; i++) {
      let pos = `${i}-${arrY[0]}`;

      positionVisited[pos] = positionVisited[pos]
        ? (positionVisited[pos] += 1)
        : 1;
    }
  }
  return positionVisited;
}

function CountCrosses(positionVisited) {
  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  let filtered = Object.filter(positionVisited, (qty) => qty > 1);
  return Object.keys(filtered).length;
}

part1();
part2();
