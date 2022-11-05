//fiz esse código pra convecer minha mãe a não jogar no blaze

var criador = 0;
var jogador = 0;
var jogadorEscolhido = 0;

console.log("Saldo Jubileu R$: "+ jogadorEscolhido + ", 1 hora da tarde");

for(var i=0; i<1000; i++){
  var numeroGerado = Math.floor(Math.random() * 100);
  if(numeroGerado <= 50){
    jogador += 1000;
    console.log(numeroGerado.toLocaleString("PT-br") + " jogador ganhou")
  }else{
    criador += 1000;
    console.log(numeroGerado + " MÁQUINA GANHOU")
  }
}

var jogadorEscolhido = 1000000;


console.log("Voce ganhou R$" + jogador);
console.log("A maquina ganhou R$" + criador.toLocaleString("Pt-br") + ",00");
console.log("Saldo Jubileu R$: "+jogadorEscolhido + ", 8 horas da noite")