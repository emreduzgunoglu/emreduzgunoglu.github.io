let timer = document.getElementById("timer");

calculateTime()














function calculateTime() {
    let currentDate = new Date();
    let dateTime = new Date("October 20, 2023"); /* 20 ekim */

    let dateDifference = currentDate.getTime() - dateTime.getTime();
    let result = convertMillisecondsToMonthsAndDays(dateDifference)

    timer.innerHTML = `${result.months} ay ${result.days} gün`
}

function convertMillisecondsToMonthsAndDays(milliseconds) {
    const oneDay = 24 * 60 * 60 * 1000; // Bir günün milisaniye cinsinden değeri
    const oneMonthAverage = 30.44 * oneDay; // Bir ayın ortalama süresi

    // Milisaniyeyi ay ve gün olarak çevir
    const months = Math.floor(milliseconds / oneMonthAverage);
    const days = Math.floor((milliseconds % oneMonthAverage) / oneDay);

    return { months, days };
}







