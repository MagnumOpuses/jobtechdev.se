$.ajax({
    url: 'https://api.arbetsformedlingen.se/af/v0/platsannonser/8206102',
    type: 'GET',
    dataType: 'json',
    headers: {
        'Accept': 'application/json',
        'Accept-language': 'SV'
    },
    contentType: 'application/json; charset=utf-8',
    success: function (result) {
      /* console.log(result)*/
        $('#8206102Title').text(result.platsannons.annons.annonsrubrik.replace('/', '/ '))
        $('#8206102Year').append(result.platsannons.ansokan.sista_ansokningsdag.slice(0,4))
        let month = result.platsannons.ansokan.sista_ansokningsdag.slice(5,7)

        if (month[0] == 0){
            $('#8206102MonthIf0').text(0)
            month = result.platsannons.ansokan.sista_ansokningsdag.slice(6,7)
        }
        $('#8206102Month').append(month)
        let day = result.platsannons.ansokan.sista_ansokningsdag.slice(8,10)

        if (day[0] == 0){
            $('#8206102DayIf0').text(0)
            day = result.platsannons.ansokan.sista_ansokningsdag.slice(9,10)
        }
        $('#8206102Day').append(day)

        $('#8206102AntalPlatser').append(result.platsannons.annons.antal_platser)
        $('#8206102Webplats').attr("href",result.platsannons.ansokan.webbplats)
        $('#8206102AntalPlatser').addClass('counter')

        $('#8206102Year').addClass('counter')
        $('#8206102Month').addClass('counter')
        $('#8206102Day').addClass('counter')
    },
    error: function (error) {

    }
});

