function Stack(){
  var itens = [];

  this.push = function(element){
    itens.push(element);
  }

  this.pop = function(){
    return itens.pop();
  }

  this.peek = function(){
    return itens[itens.length-1];
  }

  this.isEmpty = function(){
    return itens.length === 0;
  }

  this.clear = function(){
    itens = [];
  }

  this.size = function(){
    return itens.length;
  }

  this.print = function(){
    console.log(itens.toString());
  }
}

var pilha = new Stack();

pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
pilha.push(50);


console.log(pilha.pop())
//pilha.clear()
console.log(pilha.size())
//pilha.push(15);

console.log(pilha.isEmpty())

pilha.print();



