const todos = [{
        id: "1",
        todo: "lorem text",
        createdAt: new Date(),
        isCompleted: false,
    },
    {
        id: "2",
        todo: "lorem text 2",
        createdAt: new Date(),
        isCompleted: false,
    },
];

// To add new item to todo
todos.push({
    id: "3",
    todo: "lorem text 3",
    createdAt: new Date(),
    isCompleted: false,
});

// To Delete from todo application
todos.splice(index, 1);

// To update the Todo Item
todos[index] = {
    id: "2",
    todo: "lorem text 2 updated text",
    isCompleted: false,
}