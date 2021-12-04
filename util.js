const axios = require("axios");
const { cookie } = require("./config.json");
const fs = require('fs');

function getDayInput(day) {
  var config = {
    headers: {
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "sec-ch-ua":
        '"\\" Not A;Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"96\\", \\"Google Chrome\\";v=\\"96\\""',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '\\"Windows\\"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie: cookie,
      "Content-Type": "text/plain",
    }
  };

  axios.default.get(`https://adventofcode.com/2021/day/${day}/input`, config)
    .then(async function (response) {
      await fs.writeFileSync(`E:/Users/Vithusan/source/repos/aoc-21/day${day}/day${day}.txt`, response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
exports.getDayInput = getDayInput;