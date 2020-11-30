$(function () {
    var row = document.getElementsById("afTableRow");

    if (row.length === 0){
        document.getElementById("afWidgetContainer").hidden = true;
        adsElement = document.getElementById("infoJobs")
        adsElement.innerText = "";
        if (document.documentElement.lang == "en") {
            adsElement.innerText = "Unfortunately, there are no vacancies at the moment";
        }else{
            adsElement.innerText = "Tyvärr finns det inga lediga tjänster för tillfället";
        }
    }
})