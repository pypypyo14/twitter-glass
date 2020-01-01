const cal = new CalHeatMap();
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();

const aYearAgo = new Date(now.getFullYear() - 1, now.getMonth());

cal.init({
    itemSelector: "#cal-heatmap",
    domain: "month",
    subdomain: "day",
    start: aYearAgo,
    minDate: new Date(2017, 1),
    maxDate: new Date(),
    itemName: ["tweet", "tweets"],
    subDomainTextFormat: "%d",
    previousSelector: "#previous",
    nextSelector: "#next",
    data: {
        "1577861405": 30
    }
});