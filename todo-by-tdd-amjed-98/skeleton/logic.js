// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

const todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function () {
        let idCounter = 0;

        function incrementCounter() {
            return (idCounter += 1);
        }

        return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function (todos) {
        return todos.map(function (todo) {
            return JSON.parse(JSON.stringify(todo));
        });
    },

    addTodo: function (todos, newTodo) {
        // hint: array.concat
        const id = todoFunctions.generateId();
        const done = false;
        const description = newTodo;

        const newTodoObject = { id, done, description };
        return todos.concat(newTodoObject);
    },

    deleteTodo: function (todos, idToDelete) {
        return todos.filter((todo) => todo.id !== idToDelete);
    },

    markTodo: function (todos, idToMark) {
        return todos.map((todo) =>
            todo.id === idToMark ? { ...todo, done: !todo.done } : todo
        );
    },
    sortTodos: function (todos, sortFunction) {
        // stretch goal! Do this last
        // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
        // sortFunction will have same signature as the sort function in array.sort
        // hint: array.slice, array.sort

        return todos.sort(sortFunction);
    },
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
    module.exports = todoFunctions;
}
