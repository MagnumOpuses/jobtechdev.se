var request = new XMLHttpRequest();
request.open("GET", "../content.json", false);
request.send(null)
var my_JSON_object = JSON.parse(request.responseText);

console.log(my_JSON_object)

$("#slide-3042-layer-4").html(my_JSON_object.start.text1.sv)
$("#startbutton").html(my_JSON_object.start.button.sv)

$("#api").html(my_JSON_object.apis.text2.sv)
$("#apicards").html("")
for (i=0; i < my_JSON_object.apis.cards.length; i++){
    $("#apicards").append("<div class=\"col-lg-4 col-sm-6 m-b30\">\n" +
        "    <div class=\"icon-bx-wraper icon-size center p-a30 draw wow fadeInUp\" data-wow-duration=\"1.80s\" data-wow-delay=\"0.80s\">\n" +
        "\n" +
        "    <div class=\"icon-md  text-primary m-b20\"> <span class=\"icon-cell\"><i class=\"fas fa-robot\"></i></span> </div>\n" +
        "<div class=\"icon-content\">\n" +
        "    <div class=\"w3-separator  bg-primary\"></div>\n" +
        "    <h3 class=\"w3-tilte\">"+my_JSON_object.apis.cards[i].sv.name+"</h3>\n" +
        "\n" +
        "<p>"+my_JSON_object.apis.cards[i].sv.text+"</p>\n" +
        "<div class=\"links\">\n" +
        "<a href=\""+my_JSON_object.apis.cards[i].sv.button.url+"\" class=\"site-button outline white m-r15\">"+my_JSON_object.apis.cards[i].sv.button.name+"</a>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>")
}

$("#buttonapi").html(my_JSON_object.apis.buttonAPI.sv)


$("#statustext").html(my_JSON_object.status.text1.sv)



$("#opentext").html(my_JSON_object.opensource.text3.sv)

$("#buttonproj").html(my_JSON_object.opensource.buttonproj.sv)

$("#projcards").html("")
for (i=0; i < my_JSON_object.opensource.projcards.length; i++){
    $("#projcards").append("<div class=\"col-lg-4 col-sm-8 m-b30 mx-auto\">\n" +
        "\t\t\t\t\t<div class=\"icon-bx-wraper icon-size center p-a30 draw wow fadeInUp bg-dark-black\" data-wow-duration=\"1.80s\" data-wow-delay=\"0.50s\" style=\"visibility: visible; animation-duration: 1.8s; animation-delay: 0.5s; animation-name: fadeInUp;\">\n" +
        "\t\t\t\t\t\t<div class=\"icon-md  text-primary m-b20\"> <span class=\"icon-cell\"><i class=\"fas fa-hand-holding-heart\"></i></span> </div>\n" +
        "\n" +
        "\t\t\t\t\t\t<div class=\"icon-content\">\n" +
        "\t\t\t\t\t\t\t<div class=\"w3-separator  bg-primary\"></div>\n" +
        "\t\t\t\t\t\t\t<h3 class=\"w3-tilte\">"+my_JSON_object.opensource.projcards[i].sv.name+"</h3>\n" +
        "\t\t\t\t\t\t\t<p>"+my_JSON_object.opensource.projcards[i].sv.text+"</p>\n" +
        "\t\t\t\t\t\t\t<div  class=\"button-code\">\n" +
        "\t\t\t\t\t\t\t\t<a href=\"http://historik.azurewebsites.net/\" class=\"site-button outline white m-r15\">"+my_JSON_object.opensource.projcards[i].sv.button.name+"</a>\n" +
        "\t\t\t\t\t\t\t\t<a href=\"/doc/open_source/showcases/#historical\" class=\"site-button outline white m-r15\">"+my_JSON_object.opensource.projcards[i].sv.button2.name+"</a>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>")


}



$("#rubrik").html(my_JSON_object.metrics.header.sv)
$("#text").html(my_JSON_object.metrics.text4.sv)

$("#dev").html(my_JSON_object.dev.text.sv)
$("#text5").html(my_JSON_object.prop.text.sv)
$("#buttonprop").html(my_JSON_object.opensource.buttonAPI.sv)

$("#text7").html(my_JSON_object.prop.text2.sv)
$("#text8").html(my_JSON_object.prop.text3.sv)

$("#budgetrubrik").html(my_JSON_object.budget.header.sv)
$("#budgettext").html(my_JSON_object.budget.text.sv)

$("#comrubrik").html(my_JSON_object.community.header.sv)
$("#comtext1").html(my_JSON_object.community.text.sv)
$("#comtext2").html(my_JSON_object.community.text2.sv)
$("#comtext3").html(my_JSON_object.community.text3.sv)
$("#buttoncom").html(my_JSON_object.community.buttonCOM.sv)





