import mongoose from "mongoose";
import express from "express"
import { Employee } from "./models/employee.js";

let conn = await mongoose.connect("mongodb://localhost:27017/CompanyDB");



const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

function handleClick() {


    let names = ['yasser', 'attu', 'bilal', 'muhtashima']
    let langs = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby']
    let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']

    for (let i = 0; i < 10; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomSal = Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000;
    let randomLang = langs[Math.floor(Math.random() * langs.length)];
    let randomCity = cities[Math.floor(Math.random() * cities.length)];
    let ismanager = (Math.random() <= 0.5) ? true : false
    let employee = new Employee({
        name: randomName,
        salary: randomSal,
        language: randomLang,
        city: randomCity,
        isManager: ismanager
    })
    employee.save()
}}

// main.js
app.use(express.urlencoded({ extended: true }));
app.post("/clicked", async (req, res) => {
    await Employee.deleteMany({});
    handleClick();
    res.redirect("/");
});


app.get("/", (req, res) => {
    res.render("index", { root: '__dirname' });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
