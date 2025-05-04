console.log("Hi, I am a tuts on JS Functions");


function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

nice(5)
nice("Rohaan")
nice("Shayaan")


function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c
}
res1 = sum(1, 2)
res2 = sum(3, 2)
res3 = sum(1, 4, 1)

console.log("the sum of these numbers is: ", res1);
console.log("the sum of these numbers is: ", res2);
console.log("the sum of these numbers is: ", res3);



const func1 = (x) => {
    console.log("i am an arrow functions", x);

}

func1(34)
func1(66)
func1(87)
