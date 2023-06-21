let dias, diaria, total_diaria, desconto, multa, conta

multa = 150
desconto = 25
dias = Number(prompt("Quantos dias você ficou hospedado?: "))

if(dias <= 5){
    diaria = 100
    alert("Diária = " + diaria)
}
if(dias > 5 && dias <= 10){
    diaria = 90
    alert("Diária = " + diaria)
}
if(dias >= 11){
    diaria = 80
    alert("Diária = " + diaria)
}

total_diaria = dias * diaria

desconto = ( total_diaria * desconto ) / 100

conta = (total_diaria - desconto) + multa

alert("Sua conta é de R$" + conta)