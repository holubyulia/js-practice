// 1. Написать функцию, которая принимает высоту прямоугольника и его ширину и возвращает площадь прямоугольника.

// 2. Написать функцию, которая принимает диаметр и возвращает длину окружности.

// 3. Написать функцию, которая принимает высоту и диаметру основания циллиндра и возвращает его объем.

// 4. Реализовать конвертер доллара (доллар-грн и грн-доллар, в зависимости от переданного модификатора). Курс текущий на момент решения задачи

// 5. Выведите все числа в заданном диапазоне, которые делятся на 5. (Функция принимает два числа (от и до) и выводит в консоль всё из этого диапазона, что делится на 5).

// 6. Реализовать игру FizzBuzz 

const P_NUMBER = 3.1415;
//Task 1

function Area(height, width) {
   
    if (isNaN(height || width) === true) {
        return 'Something wrong';
    }
    
    const AREA=  height * width;;

    return AREA;
}

const result = Area(4,5);
console.log(result);

//Task 2

function Length(diameter) {
    if (isNaN(diameter) === true) {
        return 'Something wrong';
    }


    const LENGTH = P_NUMBER * diameter;
    return LENGTH;
}

console.log(Length(7));

//Task 3

function Capacity(height, diameter) {
    if (isNaN (diameter || height) === true) {
        return 'Something wrong';
    }

    const CAPACITY = P_NUMBER * diameter * height;
    return CAPACITY;
}

console.log(Capacity(5,8));


// Task 4

function getConvert () {
    const CHOICE = +prompt(`Если у тебя есть доллары, а нужны гривны - введи 1 /n Если у тебя есть гривны, а нужны доллары - введи 2`);
    if (CHOICE >= 3) {
        return 'Что-то пошло не так - введи пожалуйста число';
    }

      if (CHOICE == 1) {
        const AMOUNT_DOLLAR = +prompt('Введи сколько у тебя есть гривен, которые ты хочешь перевести в доллар, чтобы я мог посчитать');
        let exchange_rate_buy = 0.0362; // 1 грн стоит долларов

        if (isNaN(AMOUNT_DOLLAR) === 1) {
            return 'Что-то пошло не так - введи пожалуйста число';
        }

         const RESULT = AMOUNT_DOLLAR * exchange_rate_buy;
         return alert (`Ты получишь ${RESULT} долларов`) 
        
      }  else {
        const AMOUNT_HRIVNIA = +prompt('Введи сумму долларов, которые ты хочешь перевести в гривну, чтобы я мог посчитать');
        let exchange_rate_sale = 27.40; //1 доллар стоит гривен
        if (isNaN(AMOUNT_HRIVNIA) === 1) {
            return 'Что-то пошло не так - введи пожалуйста число';
        }
       
            const RESULT = AMOUNT_HRIVNIA * exchange_rate_sale;
         
        return alert(`Ты получишь ${RESULT} гривен`);
      }
      
  }
  getConvert();

//Еще один вариант решения

const CHOICE = +prompt(`Если у тебя есть доллары, а нужны гривны - введ 1 /n Если у тебя есть гривны, а нужны доллары - введи 2`);
const RESULT = CHOICE === 1 ? alert (`Ты получишь ${getConvertToDollar()} гривен`) : alert (`Ты получишь ${getConvertToHrivna()} долларов`);
function getConvertFromHrivna(){
    const AMOUNT_DOLLAR = +prompt('Введи сколько у тебя есть гривен, которые ты хочешь перевести в доллар, чтобы я мог посчитать')
    
    if (isNaN(AMOUNT_DOLLAR) === 1) {
        return 'Что-то пошло не так - введи пожалуйста число';
    }

    const exchange_rate_buy = 0.0362; // 1 грн стоит долларов
    return result = AMOUNT_DOLLAR * exchange_rate_buy;
}

function getConvertFromDollar() {
    
    const AMOUNT_HRIVNIA = +prompt('Введи сумму долларов, которые ты хочешь перевести в гривну, чтобы я мог посчитать');

    if (isNaN(AMOUNT_HRIVNIA) === 1) {
        return 'Что-то пошло не так - введи пожалуйста число';
    }
    const exchange_rate_sale = 27.40; //1 доллар стоит гривен
    return result = AMOUNT_HRIVNIA * exchange_rate_sale;
}

// Task 5
function Numbers(from, to) {
    for (let i = from; i <= to ; i++) {
        i = from;

        if (i % 5 === 0) {
            console.log(i);}
    }
}       

Numbers(1, 15);



//Task 6

function FizzBuzz () {
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizz buzz');  
        } else if (i % 5 === 0){
            console.log('buzz');
        } else if (i % 3 === 0){
            console.log ('fizz');
        } else {
            console.log(i);
        }
    }
};
FizzBuzz();
