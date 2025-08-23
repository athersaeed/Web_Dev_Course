let a = parseInt(prompt("Enter first number"))
let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}


// well finally is used for executing the finally block whether trycatch throws an error or not
// useful in functions when try and catch returns something and finally still executes after returns
let sum = a + parseInt(b)
let x = 1
function main() {
    try {
        console.log("The sum is ", sum * x);
        return true
    } catch (error) {
        alert("error aagaya bhai");
        return true
    } finally {
        console.log("files are being closed and db connection is being closed");
    }
}

main()

