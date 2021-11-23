function retornarJogo(){
    return location = ("../menu.html")
}

function iniciarJogo(){
    return location = ("../index.html")
}

function escolhaPrimeiraEtapa(decide){
    var decide = prompt("SIM ou NÃO")
    if (decide == "SIM"){
        return location = ("./gameover_primeira_etapa.html")
    }else if(decide == "NÃO"){
        return location = ("./segunda_etapa.html")
    }else{
        alert("Resposta inválida! Responda SIM ou NÃO!")
        escolhaPrimeiraEtapa()
    }
}

function escolhaSegundaEtapa(decide){
    var decide = prompt("SIM ou NÃO")
    if (decide == "SIM"){
        return location = ("./gameover_segunda_etapa.html")
    }else if(decide == "NÃO"){
        return location = ("./terceira_etapa.html")
    }else{
        alert("Resposta inválida! Responda SIM ou NÃO!")
        escolhaSegundaEtapa()
    }
}

function escolhaTerceiraEtapa(decide){
    var decide = prompt("SIM ou NÃO")
    if (decide == "SIM"){
        return location = ("./gameover_terceira_etapa.html")
    }else if(decide == "NÃO"){
        return location = ("./ultima_etapa.html")
    }else{
        alert("Resposta inválida! Responda SIM ou NÃO!")
        escolhaTerceiraEtapa()
    }
}

function escolhaUltimaEtapa(decide){
    var decide = prompt("SIM ou NÃO")
    if (decide == "SIM"){
        return location = ("./vitoria.html")
    }else if(decide == "NÃO"){
        return location = ("./gameover_ultima_etapa.html")
    }else{
        alert("Resposta inválida! Responda SIM ou NÃO!")
        escolhaUltimaEtapa()
    }
}