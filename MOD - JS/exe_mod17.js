
    /*
    ADD ITEM A LIST
    lista.push()
    list.unshift()
    -When I add something the return is the new list

    REMOVE ITEM A LIST
    list.pop()
    list.shift()
    -when you remove something the return is the item removed
    */

// ----------------------------------------exercise 01 -------------------------------------
  console.log("Exercise 01")
    let listNumber =[1,2,3,4,5,6,7]

    const novoArr = listNumber.forEach(number => {
      if(number % 2 === 0){
        console.log(`O ${number} é par`)
      }else{
        console.log(`O ${number} é impar`)
      }
    })

// ----------------------------------------exercise 02 -------------------------------------
  console.log("Exercise 02")

    const pair = listNumber.filter(number =>{
      return number % 2 === 0 ? true : false
    })

    const odd = listNumber.filter((number) =>{
      return number % 2 === 1 ? true : false
    })

    console.log(pair, odd)
// ----------------------------------------exercise 03 -------------------------------------
  console.log("Exercise 03")

    let pairDouble = pair.map(number => {return number * 2})

    let oddDouble = odd.map(number => {return number * 3})

    console.log(pairDouble, oddDouble)

// ----------------------------------------exercise 04 -------------------------------------
  console.log("Exercise 04")

//callback is nothing more than receiving a function as a parameter
  function forEach(callback){
    for (let i = 0; i < listNumber.length; i++) {
      callback(listNumber[i])
    }
  }

  forEach((item) =>{
    if(item % 2 === 0){
      console.log(`O número ${item} é par` )
    }else{
      console.log(`O número ${item} é impar` )
    }
  })

// ----------------------------------------exercise 05 -------------------------------------
  console.log("Exercise 05")
    let listNumber2 = [1,3,2,9,4,8,6]

    const pair2 = listNumber2.filter(number =>{return number % 2 === 0 ? true : false})
    const odd2 = listNumber2.filter(number =>{return number % 2 === 1 ? true : false})

    function reducePair(a,b){
      return a + b
    }

    function reduceOdd(a,b){
      return a * b
    }

    const somaPairOdd = pair2.reduce(reducePair) + odd2.reduce(reduceOdd)
    console.log(somaPairOdd)

// ----------------------------------------exercise 06 -------------------------------------
  console.log("Exercise 06")

    // A  B  C  D  E  F  G  H  I  J  K   L   M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
    // 0  1  2  3  4  5  6  7  8  9  10  11 12 13 14  15 16 17 18 19 20 21 22 23 24 25

    function cesarCipher(string){
      let cripto ="" //return also
      string = string.toUpperCase() //convert all letters to uppercase

      for(var i = 0; i < string.length; i++){ //Go through each character in the string
        let strCode = string[i].charCodeAt() //find the ASCII code of the letter

        if (strCode >= 65 && strCode <= 90){ //constrain code loop
          cripto += String.fromCharCode(((strCode - 65 + string.length) % 26) + 65) //returns a string created using a specific sequence of Unicode values.
          //  addition atr            (((codeLetterASC - 1letterCode + displacement) % alphabet size) + 1letterCode)
          //                  turns the alphabet into code from 0 to 25    (loop in alphabet)  (turns the letter in code ASCII)
        }
      }
    return cripto
    }

    console.log(cesarCipher("renara"))




//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

let A = 1
let B = 2

//TODO: Imprima se os valores numéricos passados são iguais ou não.
let number = 7

function search (number){

  let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

  if(elementos.indexOf(number)>=0)
  return `Achei ${number} na posicao `+ elementos.indexOf(number)
 else
  return `Numero ${number} nao encontrado!`
}

console.log(search(number))
