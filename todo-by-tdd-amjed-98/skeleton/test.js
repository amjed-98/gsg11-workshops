const { addTodo, deleteTodo, markTodo, sortTodos } = require("./logic");

// test("Testing Jest is working", function () {
//     expect(2 + 2).toBe(4);
// });

// make sure to test all functions in logic.js below

const dummyTodoList = [
    { id: 0, description: "buy some grocery", done: false },
    { id: 2, description: "grap some clothed", done: true },
    { id: 3, description: "buy some stuff", done: true },
    { id: 4, description: "pay the pills", done: false },
];

describe("crud operations", () => {
    //* Add Todo
    test("should add a todo to todoList", () => {
        const newDummyTodoList = addTodo(dummyTodoList, "do the dishes");

        const expected = { id: 1, description: "do the dishes", done: false };

        expect(newDummyTodoList.length).toBe(5);
        expect(newDummyTodoList.at(-1)).toEqual(expected);
    });

    //* Delete A todo
    test("should delete a todo from todoList", () => {
        const deletedTodo = deleteTodo(dummyTodoList, 5);

        expect(dummyTodoList.length).toBe(4);

        expect(dummyTodoList.includes(deletedTodo)).toBeFalsy();
    });

    //* Mark A todo
    test("should mark a todo in todolist", () => {
        const newDummyTodoList = markTodo(dummyTodoList, 0);
        expect(newDummyTodoList[0].done).toEqual(true);
    });

    // sort A todo
    test("should sort finished  todos list", () => {
        const sorteddummyTodoList = [
            { id: 4, description: "pay the pills", done: false },
            { id: 0, description: "buy some grocery", done: false },
            { id: 3, description: "buy some stuff", done: true },
            { id: 2, description: "grap some clothed", done: true },
        ];
        const sortFunction = (a, b) => a.done - b.done;
        const sortedTodos = sortTodos(dummyTodoList, sortFunction);
        expect(sortedTodos).toEqual(sorteddummyTodoList);
    });

    // test("should sor unfinished todos list", () => {
    //     const sortFunction = (a, b) => b.done - a.done;
    //     const sortedTodos = sortTodos(dummyTodoList, sortFunction);
    //     expect(sortedTodos);
    // });
});

// const sorteddummyTodoList = [
//     { id: 2, description: "grap some clothed", done: true },
//     { id: 3, description: "buy some stuff", done: true },
//     { id: 0, description: "buy some grocery", done: false },
//     { id: 4, description: "pay the pills", done: false },
// ];
