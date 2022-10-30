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
            if (!opt.y && !opt.m && !opt.d) {
                getDate.currentDate();
            }
        }
    })
    .command({
        command: "add",
        describe: "Будущая дата",
        handler(opt) {
            if (opt.d && opt._[1]) {
                getDate.addDays(opt._[1]);
            }
            if (opt.m && opt._[1]) {
                getDate.addMonth(opt._[1]);
            }
            if (opt.y && opt._[1]) {
                getDate.addYears(opt._[1]);
            }
        }
    })
    .command({
        command: "sub",
        describe: "Прошедшая дата",
        handler(opt) {
            if (opt.d && opt._[1]) {
                getDate.subDays(opt._[1]);
            }
            if (opt.m && opt._[1]) {
                getDate.subMonth(opt._[1]);
            }
            if (opt.y && opt._[1]) {
                getDate.subYears(opt._[1]);
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

yargs.parse();
