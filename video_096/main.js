import mongoose from "mongoose";
import express from "express"
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")



const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const todo = new Todo({
        desc: 'desc of this first todo',
        isDone: false, 
        days: 3
    })
    todo.save()
    res.send("Hello, world!");
});
app.get("/a", async (req, res) => {
    let todo_new = await Todo.findOne({})
    res.json({title: todo_new.title,
        desc: todo_new.desc
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
