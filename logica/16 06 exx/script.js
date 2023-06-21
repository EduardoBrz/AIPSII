let nota1, nota2, media

nota1 = Number(prompt("Qual sua primeira nota?: "))
nota2 = Number(prompt("Qual sua segunda nota?: "))

media = ( nota1 + nota2 ) / 2

if(media >= 7){
    alert("Você passou, parabéns!!!")
}
else{
    alert("Você reprovou, burro do caralho!!!")
}