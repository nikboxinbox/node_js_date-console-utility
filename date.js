#!/usr/bin/env node
const yargs = require("yargs");
const getDate = require("./getDate");

yargs
    .command({
        command: "current",
        describe: "Текущая дата",
        handler(opt) {
            if (opt.y) {
                getDate.currentYear();
            }
            if (opt.m) {
                getDate.currentMonth();
            }
            if (opt.d) {
                getDate.currentDay();
            }
            if (!opt.y && !opt.m) {
                getDate.currentDate();
            }
        }
    })
    .option("year", {
        alias: "y",
        type: "boolean",
        description: "Текущий год"
    })
    .option("month", {
        alias: "m",
        type: "boolean",
        description: "Текущий месяц"
    })
    .option("day", {
        alias: "d",
        type: "boolean",
        description: "Текущий день"
    });

yargs.command({
    command: "add",
    describe: "Текущая дата",
    handler() {
        console.log(new Date());
    }
});
yargs.command({
    command: "sub",
    describe: "Текущая дата",
    handler() {
        console.log(new Date());
    }
});

yargs.parse();
