//"use strict"
// var message;

//console.log("text")

// var message = "Hello world";
// var a = 5, b = "qwerty", c = 1.2;
// console.log(b)

// var message = "Hello world";
// // message = "Hello";
// console.log(message);



// // console.log(message); // Дуже цікаво, ніяких помилок.
// const message = "QA pro";
// message = 1;
// console.log(message);

// var n=12; //Це number
// var float=12.345; //І це також Number
// var number = 0x2a; // шістнадцятирічна система
// console.log(n);
// console.log(float);
// console.log(number)

// var text; // За замовчуванням якщо змінна не ініціалізована, її значення Undefined
// console.log(text)
// var number = undefined // Самі можемо вказати
// console.log(number);

// var empty = null;
// console.log(empty)

var user = {
name : "Alex" ,
email: 1,
test: null
}

// // var symbol = Symbol("Alex");
var symbol2 = Symbol("Alex");
var array = [1,2,3,"fdsfd", null];
// // console.log(symbol === symbol2)

// var bigInt = BigInt(8888999999881124);
// var bigInt2 = 8888999999881124n;
// console.log(typeof user);

// var guessWho = 3.14;
// guessWho = 'А тепер тут строка';
// guessWho = false;
// console.log(typeof array);

// var number = 12;
// number = -number;
// console.log(number);

// var number = 7;
// var number2 = 3;
// var number3 = number - number2;
// console.log(number3);

// var result = true + '10';
// console.log(result) // І що ми отримаємо ?
// var boolResult = true + false;
// console.log(boolResult);

// var result = true * 5;
// console.log(result)

// var result = "55a" * 5;
// console.log(result)

// var a = '55';
// console.log(typeof a);
// var c = +a;
// console.log(typeof +c);
// console.log(typeof a)

// var a = '55';
// console.log(typeof a);
// console.log(typeof +a);
// console.log(typeof a)

// var b = +true;
// console.log(b)

// var c = +null;
// console.log(c)

// var result = "Hello" * 5;
// console.log(result)

// console.log(12 % 6);
// console.log(12 % 5);
// console.log(4 % 3);
// console.log(-4 % 3);
// console.log(-6 % 2); // !!!! Дуже цікаво!)
// console.log(NaN / 2)

// var a = 5 + 6 + 7
// console.log(a)

// var a = 5;
// var b = 6;
// var c = a = b;
// console.log(c)

// console.log(2 ** 3);
// console.log(2 ** 3 ** 2); // Ось в такому випадку виконується правоасоціативна операція
// // console.log(-2 ** 2); // Так не підходить
// console.log(-(2 ** 2));
// console.log((-2) ** 2)

// var a = 1;
// console.log(a++);
// console.log(a);
// var b = 2;
// console.log(b--);
// console.log(b)

// var b=1;
// console.log(++b);
// console.log(b);
// var b = 2;
// console.log(--b);
// console.log(b)

// var a = 5;
// var b = 10;
// var c = b;
// c = a = b;
// console.log(c)

// var number = 15;
// number +=10; // Це так само як number = number + 10;
// console.log(number)

// var result = true;
// result +=true;
// console.log(result)

// var number = 5;
// number -=5;
// console.log(number)


// var number = 20;
// number *= 2;
// console.log(number)


// var number = 20;
// number /= 2;
// console.log(number)

// var number = 20;
// number %= 2;
// console.log(number)

// console.log('2' == 1);
// console.log('001'== 1);
// console.log(true == 1);
// console.log(false == 1);
// console.log('' == '0')

// console.log(0 === false);
// console.log('' === false);
// console.log('' === 0);

// console.log(11 != 11);
// console.log(1 != true)
// console.log('' != false)

// console.log(5 > 2);
// console.log(false > true);
// console.log(true > 0)

// console.log('a'>'b');
// console.log('a'>'A'); // малі літери "більше" великих
// console.log('A'>'1'); // великі "більше" цифр
// console.log('1'>'$'); // цифри "більше" спецсимволів*


// console.log('Ба'>'Аяяяяяяяяяя'); // На першій літері переможець
// console.log('ваня'>'вася');
// console.log('Привіт'>'Прив'); //І тільки якщо всі букви рівні - перемагає той, хто довший

// var undef;
// var n = null;
// // console.log(undef == null); //Просто так вирішили. undefined і null рівні один одному і НІ ЩО БІЛЬШЕ!
// console.log(null === null);
// console.log(null === null);


// //А тепер жесть. Наведемо ці значення до number
// console.log('null as number: '+{} );
// console.log('null as number: ',{});
// console.log('undefined as number: '+(+undefined) )

//Наслідки цієї начебто незначної деталі:
// console.log('null > 0: '+(null>0) );
// console.log('null < 0: '+(null<0) );
// console.log('null == 0: '+(null==0) );
// console.log('null >= 0: '+(null>=0) );

// console.log('undefined > 0: ' + (undefined > 0));
// console.log('undefined < 0: ' + (undefined < 0));
// console.log('undefined == 0: ' + (undefined == 0));
// console.log('undefined == 0: ' + (undefined >= 0))

// var a = "Hello" * 3; //Дасть у результаті типовий NaN
// console.log('a=' + a);
// console.log('a === NaN? ' + (a === NaN));
// console.log('a == NaN? ' + (a == NaN));
// console.log('a > NaN ' + (a > NaN));
// console.log('a < NaN ' + (a < NaN));

var a = 3;
console.log('are "a" equal NaN? ' + Number.isNaN(a));