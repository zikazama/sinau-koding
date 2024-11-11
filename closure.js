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
            return _todos;
        },
        addTodo: function(todo) {
            _todos.push(todo);
        },
        getTodos: function(index) {
            return _todos[index];
        }
        ,
        updateTodo: function(index, todo) {
            _todos[index] = todo;
        },
        removeTodo: function(index) {
            _todos.splice(index, 1);
        }
    }
}

const todo = todoListFactory();
todo.addTodo('Ini catatan');
todo.addTodo('Ini catatan 2');
console.log(todo.getList());