<script>


$(window).scroll(function(){
    $("#scrollArrow").css("opacity", 1 - $(window).scrollTop() / 400);
    $("#scrollArrow").css("bottom", 1 - $(window).scrollTop());


});

</script>