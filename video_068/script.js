console.log("Hello World!");

// let bjs = document.getElementsByClassName("box")

// console.log(bjs);

// bjs[2].style.backgroundColor = "red"

// bjs[2].style.color = "blue"


// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
// // console.log(document.querySelectorAll(".box").style.backgroundColor = "green")
// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "green"
// });


e = document.getElementsByTagName("div")
e[3].matches("#red") //# for id, regular or .box for class returns true

e[3].closest(".container")

document.querySelector(".container").contains("#red")