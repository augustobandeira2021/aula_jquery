function consultaCEP(){
    $(".barra-progresso").show();
    
    var cep = document.getElementById("idCEP").value;

    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function(response){
           console.log(response);
           $("#logradouro").html(response.logradouro);
           $("#bairro").html(response.bairro);
           $("#localidade").html(response.localidade);
           $("#uf").html(response.uf);
           $("#tituloCEP").html("CEP: " + response.cep);
           $(".cep").show();
           $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
           // document.getElementById("cep").innerHTML = response.cep;
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})


