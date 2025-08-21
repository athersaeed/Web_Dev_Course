function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let processedViews
    if (views >= 1000 && views < 1000000){
         processedViews = views/1000 + 'K'
    }else if (views > 1000000){
         processedViews = views/100000 + 'M'
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule"> ${duration}</div>
                    
            </div>
            <div class="text">
                <h1>${title}
                </h1>
                <p>${cName} . ${processedViews} views . ${monthsOld} months ago</p>
            </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w")

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w")