const cal = new CalHeatMap();
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();

let twitterUser = "";

function fillHeatmap(twitterUser) {
    let endpoint = 'api/v1/?user=' + twitterUser;
    fetch(endpoint).then(function (response) {
        return response.json();
    }).then(function (json) {
        cal.update(json);
    });
};

$('#user').on('click', function () {
    twitterUser = $('input#userid').val();
    fillHeatmap(twitterUser);
})

cal.init({
    itemSelector: "#cal-heatmap",
    domain: "month",
    subdomain: "day",
    minDate: new Date(2019, 1),
    maxDate: new Date(2019, 12),
    itemName: ["tweet", "tweets"],
    subDomainTextFormat: "%d",
});