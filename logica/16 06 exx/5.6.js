let pontuacao

pontuacao = Number(prompt("Qual foi sua pontuação?: "))

if(pontuacao <= 10){
    alert("Deu ruim...")
}
if(pontuacao > 10 && pontuacao <= 100){
    alert("Tá... Talvez na próxima você consiga uma pontuação melhor...")
}
if(pontuacao > 100 && pontuacao <= 200){
    alert("Supimpa!!!")
}
if(pontuacao > 200){
    alert("MITOU!!!")
}
