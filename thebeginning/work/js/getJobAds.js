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
        $('#8206102AnsokSenast').append(result.platsannons.ansokan.sista_ansokningsdag.slice(0,10))
        $('#8206102AntalPlatser').append(result.platsannons.annons.antal_platser)
        $('#8206102Webplats').attr("href",result.platsannons.ansokan.webbplats)
    },
    error: function (error) {

    }
});

