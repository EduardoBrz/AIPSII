
let senha_sistema, senha_usuario

senha_sistema = Number(1234)

senha_usuario = Number(prompt("digite sua senha"))

if(senha_sistema == senha_usuario){
    alert("você pode entrar")
}
else{
    alert("voce não pode entrar")
}