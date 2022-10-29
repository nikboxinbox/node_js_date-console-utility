const date = new Date();

const currentDate = () => {
    console.log(date.toLocaleString());
};
const currentYear = () => {
    console.log(date.getFullYear());
};
const currentMonth = () => {
    console.log(date.getMonth() + 1);
};
const currentDay = () => {
    console.log(date.getDate());
};
const addDays = (num) => {
    console.log(new Date(date.setDate(date.getDate() + num)).toLocaleString());
};
const addMonth = (num) => {
    console.log(
        new Date(date.setMonth(date.getMonth() + num)).toLocaleString()
    );
};
const subDays = (num) => {
    console.log(new Date(date.setDate(date.getDate() - num)).toLocaleString());
};
const subMonth = (num) => {
    console.log(
        new Date(date.setMonth(date.getMonth() - num)).toLocaleString()
    );
};

module.exports = {
    currentDate,
    currentYear,
    currentMonth,
    currentDay,
    addDays,
    addMonth,
    subDays,
    subMonth
};
