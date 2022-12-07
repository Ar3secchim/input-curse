
  //--------------------------------- iten 1----------------------
  console.log("Exercise 01")

  const soma = (n1,n2,n3) => {return (n1 + n2) * n3}
  const result = soma(10,2,3)

  console.log(`Resultado da execução é ${result} `)

  // --------------------------item 2'-------------------------
  console.log("Exercise 02")

  function problem (n1,n2,n3,n4){
    return (n1 + n2 + n3 + n4)
  }

  const resultProblem = (problem(10,10,10,10)*3)

  console.log(resultProblem)

  // with arrow function
  const problemSoma = (n1,n2,n3,n4) => {return (n1 + n2 + n3 + n4)}

  const resultProblem02 = (problem(10,10,10,10)*3)

  console.log(resultProblem02)

  // --------------------iten 3-------------------------------
  console.log("Exercise 03")

  function resultError (n1, n2, n3){
    if(n1 == null || n2 == null || n3 == null){
      console.log("Os valores não foram preenchidos corretamente!")
    }else{
      console.log((n1 + n2 + n3) * 4)
    }
  }

  resultError(1)

  // ------------------iten 4---------------------------------
  console.log("Exercise 04")

  let createPerson = function (name, age){
    return {
      name:name,
      age : age,
      dateBirth : 2022 - age
    }
  }

  function person(createPerson){
    console.log(`${createPerson.name} tem ${createPerson.age} pois nasceu em ${createPerson.dateBirth}`)
  }

  person(createPerson('renara' ,25))
