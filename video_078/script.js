

//   function blinker()
//   {
//     if(document.getElementById("blink"))
//     {
//         var d = document.getElementById("blink") ;
//         d.style.color= (d.style.color=='blue'?'white':'blue');
//         setTimeout('blinker()', 900);
//     }
// }


async function result(jk_flip_flop) {
    let num1 = Math.ceil(Math.random() * (6001) + 1000)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let html = `<div class="text"><span>${jk_flip_flop}<span class="dot"></span></span></div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
            resolve(404)
        }, num1);
    }
    )
}

async function main() {

    let data1 = await result('Initialing Hacking');

    let data2 = await result('Reading your files');

    let data3 = await result('Password files Detected');

    let data4 = await result('Sending all passwords and personal files to server');

    let data5 = await result('Cleaning up');

}

main()


// <span class="dot1">...</span>