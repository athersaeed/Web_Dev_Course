let btn = document.getElementById("btn")

// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
btn.addEventListener("click", ()=>{
    alert("i was clicked")
    document.querySelector(".box").innerHTML = "<b>yayy you were clicked</b> enjoy your click!"
})

btn.addEventListener("contextmenu", ()=>{
    alert("right clicked")
    document.querySelector(".box").innerHTML = "<b>yayy you were clicked</b> enjoy your click!"
})

document.addEventListener("keydown", (e)=>{
    // alert("right clicked")
    // document.querySelector(".box").innerHTML = "<b>yayy you were clicked</b> enjoy your click!"
    console.log(e)
})