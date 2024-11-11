// Global Scope
const global = 'ini global';
function luar() {
    console.log(global);
    const luar = 'ini luar';
    const dalam = function() {
        const dalamVar = 'ini dalam';
        console.log(luar)
    }
    return dalam;
}

// luar()();


function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        show: function() {
            console.log(count);
        }
    }
}

// const counterImp = counter();
// counterImp.show();
// counterImp.increment();
// counterImp.show();

function carFactory (brand, year) {
    let _brand = brand;
    let _year = year;
    return {
        getBrand: function() {
            return _brand;
        },
        setBrand: function(brand) {
            _brand = brand;
        },
        getYear: function() {
            return _year;
        },
        setYear: function(year) {
            _year = year;
        }
    }
}

// const car = carFactory('Toyota', 2020);
// console.log(car.setBrand('Suzuki'));
// console.log(car.getBrand());
// console.log(car.getYear());

function showSomething(callback, kata){
    return callback('<'+kata+'/>');
}

// showSomething((kata) => {
//     console.log(kata);
// }, 'Hello World');

function todoListFactory() {
    let _todos = [];
    return {
        getList: function() {
            return _todos.map((item, key) => {
                return {
                    index: key,
                    ...item,
                }
            });
        },
        addTodo: function(note, status) {
            _todos.push({
                note, status
            });
        },
        getTodos: function(index) {
            return _todos[index];
        }
        ,
        updateTodo: function(index, note) {
            _todos[index] = {
                ..._todos[index],
                note: note
            };
        },
        removeTodo: function(index) {
            _todos.splice(index, 1);
        },
        checkTodo: function(index) {
            _todos[index] = {
                ..._todos[index],
                status: true
            };
        },
        uncheckTodo: function(index) {
            _todos[index] = {
                ..._todos[index],
                status: false
            };
        }
    }
}

// Silahkan tambahkan fungsi untuk check dan uncheck

const todo = todoListFactory();
todo.addTodo('Makan', false);
todo.addTodo('Mandi', false);
todo.addTodo('Belajar', false);
todo.checkTodo(0);
// console.log({
//     status: true,
//     code: 200,
//     data: {
//         todo: todo.getList(),
//     }
// })

const angka1 = [1,2,3,4,5];
const angka2 = [4,5];
// const angkaBaru = [angka[0], angka[1], angka[2], angka[3], angka[4]];
const angkaBaru = [...angka1, ...angka2];
console.log(new Set(angkaBaru));

function check({name, status, ...object}) {
    console.log(name);
    console.log(status);
    console.log(object.lain);
    console.log(object.dunia);
}

check({
    name: 'taylor',
    status: true,
    lain: 'gas',
    dunia: 'lagi',
})