$.post( "https://backend.jobtechdev.se", function( data ) {
/*    $('#APIPlatsbanken').addClass("status"+JSON.stringify(data.monitors[0].status)).removeClass('status')
    $('#forecasts').addClass("status"+JSON.stringify(data.monitors[1].status)).removeClass('status')
    $('#ONTOLOGY').addClass("status"+JSON.stringify(data.monitors[5].status)).removeClass('status')
    $('#jobscanner').addClass("status"+JSON.stringify(data.monitors[2].status)).removeClass('status')
    $('#occupationInfo').addClass("status"+JSON.stringify(data.monitors[4].status)).removeClass('status')*/

$('#apiStatusLoding').remove();
    let monitors = data.monitors;
$.each(monitors, function (index, value ) {

    if (this.friendly_name != 'www.jobtechdev.se' && this.friendly_name != 'jobtechdev.se') {
        $('#apiStatus').append('<div class="col-lg-2 col-sm-12 mx-auto">\n' +
            '                        <div class="status text-black text-center wow fadeInUp" >\n' +
            '                            <div>'+this.friendly_name+'</div>\n' +
            '                            <i id="status'+this.status+'" class="status'+this.status+' fas fa-circle"></i>\n' +
            '                        </div>\n' +
            '                   </div>')

    }
});

/*    console.log( data );*/
});

