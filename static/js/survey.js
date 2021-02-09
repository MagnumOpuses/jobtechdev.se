function speachBubblePopup (){

};

function speachBubblePopupClose (){
var element = document.getElementById("webropolpopup");
element.classList.add("hidden");
document.cookie = 'surveypopup=dissmiss'

};
console.log(document.cookie)
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname,cvalue) {
    document.cookie = cname + "=" + cvalue;
  }

window.onload = function() {
  document.getElementById("survey-close").addEventListener("click", speachBubblePopupClose);
   
   if (getCookie("surveypopup") != "dissmiss") {
    var element = document.getElementById("webropolpopup");
    element.classList.remove("hidden");
       
   }
  };

