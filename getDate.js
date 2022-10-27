const currentDate = () => {
    console.log(new Date().toLocaleString());
};

const currentYear = () => {
    console.log(new Date().getFullYear());
};

const currentMonth = () => {
    console.log(new Date().getMonth() + 1);
};
// TODO: сделать текущий день месяца
const currentDay = () => {
    console.log(new Date().getDay());
};
module.exports = {
    currentDate,
    currentYear,
    currentMonth,
    currentDay
};
