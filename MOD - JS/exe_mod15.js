
    // iten 1

    let income = 350 + 180 + 600
    let minimumWage = 1212

    let wage = minimumWage - income
    let salary = minimumWage

    if( income < salary){
    console.log(`Falta R$ ${wage} para atinguir um salário mínimo`)
    }else{
    console.log("Recebe pelo menos um salário mínimo")
    }

    // iten 2

    income = 3596

    if(income >= 4561 ){
    console.log("Classe AB")
    }else if( income <= 4560 && income >= 1064){
    console.log("Classe C")
    }else if( income <= 1063 && income >= 768){
    console.log("Classe D")
    }else{
    console.log("Classe E")
    }

    // iten 3
    let person ={
    Name: "Renara",
    income: 26854,
    employee: true,
    heir: false
    }

    if(person.income >= 4561 && person.employee === true && person.heir === false){
    console.log("Classe AB")
    }else if( person.income <= 4560 && person.income >= 1064 && person.employee === true && person.heir === false ){
    console.log("Classe C")
    }else if( person.income <= 1063 && person.income >= 768 && person.employee === true && person.heir === false){
    console.log("Classe D")
    }else if(person.income <= 768 && person.employee === true && person.heir === false){
    console.log("Classe E")
    }else if( person.employee === false){
    console.log("Você é desempregada")
    }else{
    console.log("Você é herdeira")
    }

    // iten 4
    let vehicle = {
    color: "white",
    brand: "Audi",
    model: "A3",
    type: 'car',
    }

    switch(vehicle.type){
    case 'car' :
    console.log(`O ${vehicle.model}  é um veículo de 4 rodas da marca ${vehicle.brand}.`)
    break
    case 'motocycle' :
    console.log(`O ${vehicle.model}  é um veículo de 2 rodas da marca ${vehicle.brand}.`)
    break
    default:
    console.log(`O ${vehicle.model}  é um veículo de mais de 6 rodas da marca ${vehicle.brand}.`)
    }
