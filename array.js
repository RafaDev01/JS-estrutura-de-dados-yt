/*
var avgTemp = []
avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;
*/
/*
var daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"); 

for(var i=0;i<daysOfWeek.length;i++){
  console.log("Dia da semana: "+ daysOfWeek[i]);
}
*/

/*
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(var i = 3; i < 20; i++){
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

for(var i =0; i < fibonacci.length; i++){
  console.log(fibonacci[i])
}
*/

/*
function fibonacci(ate){
  var inicio = 0;
  var anterior = 1;
  var prox = 1;
  console.log(inicio)
  for(var i = 0; i <= ate; i++){
    console.log(anterior);
    console.log(prox);
    anterior += prox;
    prox += anterior;
  }
}
fibonacci(8);
*/

/*
var sequencia = [];
function fibonacci(ate){
  sequencia[0] = 0; 
  sequencia[1] = 1;
  sequencia[2] = 1;
  console.log(sequencia[0])
  console.log(sequencia[1])
  console.log(sequencia[2])
  for(var i=3; i<=ate; i++){
    sequencia[i] = sequencia[i-1] + sequencia[i-2]; 
    console.log(sequencia[i]);
  }
}
fibonacci(20);
console.log(sequencia[10]);
*/

var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers.length] = 10;
numbers[numbers.length] = 11;

numbers.push(12);
numbers.push(13);
numbers.push(14);

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);

numbers.pop();
numbers.pop();
numbers.pop();

numbers.shift();
numbers.shift();
numbers.shift();

//A partir da posição 0 remova 4 elementos
numbers.splice(0,4);

//A partir da posicão 0 remova 0 elementos e insira 0,1,2,3
numbers.splice(0,0,0,1,2,3)

console.log(numbers);