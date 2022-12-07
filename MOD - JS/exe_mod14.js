
    // item 01
    let name = "Renara"
    let age = 25
    let city = "Belém"
    let height = 1.86
    let birthDate = "04/04/1997"

    console.log(name)
    console.log(age)
    console.log(city)
    console.log(height)
    console.log(birthDate)

    // item 02

    const cities = [
    "Florianópolis", "São Paulo", "Rio de janeiro", "Goiânia", "Vitória", "Belém"
    ]

    console.log(cities[5])

    //item 03

    city = cities[5]

    console.log(city)

    // item 04

    let yearsCurrent = 2022
    let yearsBirthDate = 1997

    age =  yearsCurrent -yearsBirthDate
    console.log(age)

    // item 05

    let studentHTML = "Marcos"
    let studentJS = "Flávia"

    console.log("O aluno que estuda Javascript é " + studentJS)
    console.log(`O aluno que estuda HTML é ${studentHTML}`)

    // item 06
    const students = [
    {
    name: "Marcos",
    nameCourse: "arquitetura",
    courseProgress: 90,
    courseCompletion: false,
    favoriteSubject : ["Projeto arquitetônico", "Urbanismo"]
    },
    {
    name: "Flávia",
    nameCourse: "Moda",
    courseProgress: 40,
    courseCompletion: false,
    favoriteSubject : ["Estilo", "Corte e costura"]
    },
    {
    name: "Renata",
    nameCourse: "Odontólogia",
    courseProgress: 70,
    courseCompletion: false,
    favoriteSubject : ["Protese", "Endo"]
    },
    {
    name: "Jessica",
    nameCourse: "Direito",
    courseProgress: 100,
    courseCompletion: true,
    favoriteSubject : ["Direito trabalhista", "Criminal"]
    },
    {
    name: "Lucas",
    nameCourse: "Engenharia Ambiental",
    courseProgress: 100,
    courseCompletion: true,
    favoriteSubject : ["Ecologia Aplicada", "Ciência e Tecnologia dos Materiais"]
    }
    ]
    console.log(students[4].nameCourse)
