// 1.
/*
const value1 = Number(prompt('Введіть перше число: '));
const value2 = Number(prompt('Введіть друге число: '));
const result = value1 + value2;

if((value1 + value2) % 5 === 0) {
    alert('Сума кратна 5');
} else {
    alert('Сума не кратна 5');
}

console.log(result);
*/


// 2.
/*
const value1 = Number(prompt('Введіть число: '));

function area(num1) {
    alert(num1 * num1);
}

area(value1)
*/


// 3.
/*
const menuList = Number(prompt('Меню: \n1-Чай \n2-Кава \n3-Сік \n4-Вода'));

function menu() {
    switch (menuList) {
        case 1: {
            alert('Ви обрали чай');
            break;
        }
        case 2: {
            alert('Ви обрали каву');
            break;
        }
        case 3: {
            alert('Ви обрали сік');
            break;
        }
        case 4: {
            alert('Ви обрали воду');
            break;
        }
        default: {
            alert('Такого напою у нас нема')
        }
    }
}

menu()
*/


// 4.
/*
const value1 = Number(prompt('Введіть суму покупки: '));

const discountThree = value1 >= 500 ? 'Сумма зі знижкою 3% складає: ' + (value1 - (value1 * 0.03)) : 'Ваша сума покупки менша за 500, тому Вам скидка не надається';
const discountFive = value1 >= 800 ? 'Сумма зі знижкою 5% складає: ' + (value1 - (value1 * 0.05)) : 'Ваша сума покупки менша за 800, тому Вам скидка не надається';

if(value1 >= 800) {
    console.log(discountFive);
} else {
    console.log(discountThree);
}
*/


// 5.
/*
const value1 = Number(prompt('Введіть перше число: '));
const value2 = Number(prompt('Введіть друге число: '));

function division(num1, num2) {
    return(num1 % num2 === 0 ? true : false);
}

console.log(division(value1, value2));
*/


// 6. 
const value1 = Number(prompt('Введіть перше число: '));
const value2 = Number(prompt('Введіть друге число: '));
const value3 = Number(prompt('Введіть третє число: '));

function discriminant(num1, num2, num3) {
    return((num2 ** 2) - 4 * num1 * num3);
}

console.log(discriminant(value1, value2, value3));