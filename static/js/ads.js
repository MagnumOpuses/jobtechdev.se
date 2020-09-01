$(function () {
    var row = document.getElementsByClassName("afTableRow");

    if (row.length === 0){
        document.getElementById("afWidgetContainer").hidden = true;
        document.getElementById("infoJobs").innerText = "";
    }
})