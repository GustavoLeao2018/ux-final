$(document).ready(() => {
    let titulo = "Eagle Store";
    let subtitulo = "Welcome!!!";

    $("#titulo-subtitulo").append(titulo + " - " + subtitulo);
    $("#titulo").append(titulo);
    $("#subtitulo").append(subtitulo);

    let pessoas = [];

    for (let i = 0; i < randomizar_inteiro(20, 15); i++) {
        pessoas.push(new Pessoa());
    }

    $("#quantidade-mensagens").append(pessoas.length);

    for (let i = 0; i < pessoas.length; i++) {
        $("#mensagens")
            .append(
                "<p>"+
                    '<a href="#" onclick="document.getElementById(\'id'+i+"').style.display='block'\">"+
                        pessoas[i].nome +
                    "</a>" +
                    " " +
                    '<span class="w3-badge w3-red">'+randomizar_inteiro(50, 2)+"</span>" +
                "</p>"
            )
            .append(
                '<div id="id'+i+'" class="w3-modal" style="display:none">' +
                    '<div class="w3-modal-content w3-container">' +
                        "<span onclick=\"document.getElementById('id"+i+"').style.display='none'\"" +
                             ' class="w3-button w3-xlarge w3-transaparent w3-display-topright">' +
                                "&times;" +
                        "</span>" +
                        "<div class='w3-container  w3-panel w3-teal'><p><b>"+pessoas[i].nome+"</b></p></div>"+
                        "<p class='w3-container w3-pale-yellow'>"+pessoas[i].mensagem.tamanho+"</p>" +
                        '<div class="w3-panel">' +
                            '<input type="text" class="w3-input w3-border w3-border-teal w3-round" placeholder="Enter your message">' +
                        "</div>" +
                        '<div class="w3-panel">' +
                            '<button class="w3-btn w3-teal w3-right">'+"Submit"+"</button>" +
                        "</div>" +
                    "</div>" +
                "</div>"
            );
        

       
    }

    let andares = 10;
    let apartamentos_quantidade = andares * 5;
    let apartamentos = [];

    function acrescenta_apartamento(apartamentos, cont, id){
        if(apartamentos.length == apartamentos_quantidade){
            return apartamentos;
        }
        else {
            apartamento = new Apartamento(id);
            if(apartamento.tipo == 'Presidential'){
                for(let i = 0; i < apartamentos.length; i++){
                    if(apartamentos[i].tipo == 'Presidential'){
                        cont++;
                    }
                }
                if(cont == 0){
                    apartamentos.push(apartamento);
                    id++;
                    acrescenta_apartamento(apartamentos, cont, id);
                }
                else {
                    id++;
                    acrescenta_apartamento(apartamentos, cont, id);
                }
            }
            else{
                apartamentos.push(apartamento);
                id++;
                acrescenta_apartamento(apartamentos, cont, id);
            }
            
        }
    }

    acrescenta_apartamento(apartamentos, 0, 0);

    for(let  i = 0; i <= apartamentos.length; i++){
        console.log(apartamentos[i]);
    }

    for(let  i = 0; i <= apartamentos.length; i++){
        if(apartamentos[i].tipo == 'Presidential' ){
            $("#status-hotel").append(
                '<div class="w3-col l12 m12 sm12 w3-margin w3-border">'+
                    '<div class="w3-margin w3-display-container" style="height: 50px">'+
                        '<span class="w3-display-left">'+
                            apartamentos[i].numero+
                        '</span>'+
                        '<span class="w3-display-middle">'+
                            '<h4>'+apartamentos[i].tipo+'</h4>'+
                        '</span>'+
                        '<span class="w3-display-right">'+
                            apartamentos[i].status+
                        '</span>'+
                    '</div>'+
                '</div>'
            );
        }
        else{
            $("#status-hotel").append(
                '<div class="w3-col l2 m2 sm12 w3-border w3-margin">'+
                    '<div class="w3-margin w3-display-container" style="height: 50px">'+
                        '<span class="w3-display-topleft">'+
                            apartamentos[i].numero+
                        '</span>'+
                        '<span class="w3-display-bottomleft">'+
                            '<h4>'+apartamentos[i].tipo+'</h4>'+
                        '</span>'+
                        '<span class="w3-display-bottomright">'+
                            apartamentos[i].status+
                        '</span>'+
                    '</div>'+
                '</div>'
            );
        }
    }
       

});