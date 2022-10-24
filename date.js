#!/usr/bin/env node
var argv = require("yargs/yargs")(process.argv.slice(2)).alias(
    "y",
    "year"
).argv;
if (argv._[0] === "current") {
    // Текущая дата и время в формате ISO:
    console.log(new Date());
}
if (argv.y) {
    console.log("asss");
}
console.log(argv);
console.log(argv._[0]);
