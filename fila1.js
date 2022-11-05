function Queue(){
  var items = []

  this.enqueue = function(elemento){
    items.push(elemento)
  }

  this.dequeue = function(){
    return items.shift()
  }

  this.front = function(){
    return items[0]
  }

  this.isEmpty = function(){
    return items.length === 0
  }

  this.size = function(){
    return items.length
  }

  this.print = function(){
    console.log(items.toString())
  }
}

var fila = new Queue();

fila.enqueue(10)
fila.enqueue(20)
fila.enqueue(30)
fila.enqueue(40)

fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()

console.log(fila.isEmpty())
console.log(fila.size())
fila.print()