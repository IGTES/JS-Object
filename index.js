//1
/*
Task 1 Создайте объект ноутбука 
1 Серийный номер 3V5E7EA
2 Модель HP 255 G8
3 Экран:
Тип экрана IPS
Разрешение 1920x1080
4 Процессор Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)
5 Оперативная память 8 ГБ
6 Накопители данных:
Объём HDD 256 ГБ SSD
Видеокарта AMD Radeon Graphics
7 Корпус: 
Цвет Серебристый
Вес 1,7
Габариты (Ш х Г х В) 358 x 242 x 19
*/

/*
let noteBook = {
    serialNumber: '3V5E7EA',
    model:'HP 255 GB',
    display: {
        typeOfScreen: 'IPS',
        resolutionDisplay: {h:1920, w:1080},
    },
    cpu: {
        core: 8,
        name: 'AMD Ryzen 7 5700U',  
        gigahertz: '1.8 - 4.3',
    },
    memory: '8 Gb',
    dataDrives: {
        capacity: 'HDD 256 Gb SSD',
        storageDevice: 'SSD',
        graphicsCard:'AMD Radeon ',
    },
    case:{
        color: 'silver',
        weight: '1.7',
        dimensions: {w:358, d:242, h:19},
    }
}
console.log(noteBook);
*/




//2 - Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)


/*
class User {
    constructor(login, password){
        this.login=login;
        this.password=password;
    }
};

const arrObject=[
    user1 = new User ('Superman','QWERTY'),
    user2 = new User ('Badman','QAZ123'),
    user3 = new User ('Spiderman','PlOIk098'),
    user4 = new User ('Robocop','NjumK0909'),
];

console.log(arrObject);
*/



//Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

/*
let userMap = new Map();
for (let i=0; i<arrObject.length, i++){
    userMap.set(arrObject.login,arrObject);
}
console.log(userMap);
*/



//Task 4* разными способами решите вопрос соединения двух массивов без повторов

// - не смог сделать(
/*
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5,6,7,8,9,10];
*/
