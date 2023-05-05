// //exercitiu 1:

// const booleanNum = (num) => {
//     return num % 10 === 0 ? true : false
// }

// console.log(booleanNum(99))

// //exercitiu 2 : 

// function tellFortune(locMunca , locatieGeografica , numePartener , numarCopii){
//     return `Vei fi un ${locMunca} în ${locatieGeografica}, căsătorit cu ${numePartener} și vei avea ${numarCopii} copii.`
// }

// console.log(tellFortune(`programator` , `spania` , `bob` , 4))

// //exercitiu 3 :

// let dayOfWeek = Math.floor(Math.random()*7) // exemplu cu random number gen

// //let dayOfWeek = 6

// switch(dayOfWeek){
//     case 1 : 
//     console.log('Luni');
//     break;
//     case 2 : 
//     console.log('Marti');
//     break;
//     case 3 : 
//     console.log('Miercuri');
//     break;
//     case 4 : 
//     console.log('Joi');
//     break;
//     case 5 : 
//     console.log('Vineri');
//     break;
//     case 6 : 
//     console.log('Sambata');
//     break;
//     case 7 : 
//     console.log('Duminica');
//     break;
//     default : 
//     console.log('Teapa')
//     break;

// }

// ex1:

// let getEvenNumbers = () => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//   for (num of arr){	
//       if (num % 2 === 0) {       
//           console.log(num);
//       }
//   }
// }

// getEvenNumbers()
 
// // ex2:

// const num = [1,2,3,4,5,6,7,8,9,10];

// const initialValue = 0;
// const sumWithInitial = num.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// // ex3:

// const numere = [1, -5, 20, -34, 16, 29, 36, -4];

// const rezultat = numere.reverse();

// console.log(rezultat)

// // ex4 

// const string = 'string de test';

// function getAge(year) {
//   let currentYear = new Date().getFullYear()  
//   return currentYear - year
// }

// getAge(1998)

// console.log(getAge(1998))


// const users = [
//   { name: 'Victor', age: 19 },
//   { name: 'Gheo', age: 1 },
//   { name: 'Mircea', age: 4 },
//   { name: 'Matei', age: 16 },
// ];

// let users1 = users.sort((a, b) => {
//   console.log(a)
//   console.log(b)
//   return a.age - b.age;
  
// });

// console.log(users1)


// ex1 :

function findSquare(sum) {
  return sum * sum
}

findSquare(5)

// ex2:

function getRandom(start,end){
  let difference = end - start;
    let randNum = Math.random();
    randNum = Math.floor(randNum * difference)
    randNum = randNum + start
    return randNum
}

getRandom(5,10)

// ex3:

let myString = 'kdsladsadsa';
let result = {};
for (let str of myString) {
  result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
}
console.log(result);

////

var string = "abcdevvvdsajldbshadsadnsadseee"


var count = 0;

function apare(str) {
    console.log(str.split("").length-1)
}

apare(string)


// ex4:

function addNumber(...numbers){
  const numArray = [...numbers]
  const initialValue = 0;
  const sumWithInitial = numArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
  console.log(sumWithInitial)
}

addNumber(5,4,6,7,8,9,4)

// tema nush care am pierdut numaratoarea

// ex 1 : 

class masina {
  constructor(marca,model,culoare,kilometraj) {
      this.marca = marca ,
      this.model = model , 
      this.culoare = culoare , 
      this.kilometraj = kilometraj 
          }
      getProprietati() {
          return this
      
      }
}





const listOfCars = () => {
  const car1 = new masina ("Volvo","XC-60","Negru",234000) ;
  const car2 = new masina ("Mazda","CX-5","Verde", 111000) ;
  const car3 = new masina ("Dacia","Sandero","Albastru", 20000);
  const array1 = [car1.getProprietati(), car2.getProprietati() , car3.getProprietati()]
  return array1.forEach(element => console.log(element))
}


listOfCars()

// ex 2 :

class masina {
  constructor(marca,model,culoare,kilometraj) {
      this.marca = marca ,
      this.model = model , 
      this.culoare = culoare , 
      this.kilometraj = kilometraj 
          }
      getProprietati() {
          return this
      
      }
}


class masinaDeCurse extends masina{
    constructor(car,index){
        super(car);
        this.index = index;
    }
    participaLaCampionat(pozitiaInCampionat){
        if(pozitiaInCampionat > 0){
            return `Am castigat locul ${pozitiaInCampionat}`
        }
        else{
            return `Nu am castigat niciun premium`
        }
    }
}

const m1 = new masinaDeCurse("Toyota", "Turbo", "Rosu", 100000);

m1.getProprietati(m1);

m1.participaLaCampionat(0);