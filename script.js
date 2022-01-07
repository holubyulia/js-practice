// 1. Написать функцию, которая принимает высоту прямоугольника и его ширину и возвращает площадь прямоугольника.

// 2. Написать функцию, которая принимает диаметр и возвращает длину окружности.

// 3. Написать функцию, которая принимает высоту и диаметру основания циллиндра и возвращает его объем.

// 4. Реализовать конвертер доллара (доллар-грн и грн-доллар, в зависимости от переданного модификатора). Курс текущий на момент решения задачи


// 5. Выведите все числа в заданном диапазоне, которые делятся на 5. (Функция принимает два числа (от и до) и выводит в консоль всё из этого диапазона, что делится на 5).

// 6. Реализовать игру FizzBuzz (Fizz buzz это групповая детская игра для обучения правилам деления. Начинающий произносит число «1», и каждый следующий игрок прибавляет к предыдущему значению единицу. Когда число делится на три оно заменяется на fizz, если число делится на пять, то произносится buzz. Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. Сделавший ошибку игрок исключается из игры.
// Типичная партия в fizz buzz выглядит так:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...)
// Диапазон игры - 100 чисел.

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


const CHOICE = +prompt(`Если у тебя есть доллары, а нужны гривны - введ 1 /n Если у тебя есть гривны, а нужны доллары - введи 2`)

if (CHOICE === 1) { 
   alert (`Ты получишь ${getConvertToDollar()} гривен`);
} else {
    alert (`Ты получишь ${getConvertToHrivna()} долларов`);
}


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

