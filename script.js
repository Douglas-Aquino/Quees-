// Crie um array que receba 5 itens e exiba no console.

let cantoras = ["Anitta","Lexa","Rebecca","Ludmila","Pocah","Isa"]
console.log(`${cantoras} a cima delas só a coroa`)

// Utilize um método para adicionar um nome ao inicio do array.

cantoras.splice(0,0,"Douglas")
console.log(cantoras)

// Utilize um método para remover o último nome do array.

cantoras.pop()
console.log(cantoras)

// Utilize um método para adicionar dois nomes ao fim do array.

cantoras.push("Simone","Simaria")
console.log(cantoras)

// Utilize um método para remover o primeiro nome do array.

cantoras.splice(0,1)
console.log(cantoras)

// Utilize um método para organizar em ordem crescente o seguinte array:

const numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort(function(a,b){
return(a-b)
}))