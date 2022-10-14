function favColor (event) {
    event.preventDefault()
    alert("My favorite color is green.")
}

document.getElementById("color").addEventListener('click', favColor)

function favPlace (event) {
    event.preventDefault()
    alert("My favorite place is nature.")
}

document.getElementById("place").addEventListener('click', favPlace)

function favRitual (event) {
    event.preventDefault()
    alert("My favorite ritual is hiking on the first day of summer.")
}

document.getElementById("ritual").addEventListener('click', favRitual)




// -------neighborhood page-------

function eatBtn(event) {
    event.preventDefault()

    const place = ["micky dee's", "taco bell", "wendy's", "KFC"];

    let randomPlace = Math.floor(Math.random() * place.length)
    console.log(randomPlace, place[randomPlace])
   


}

document.getElementById("eat").addEventListener('click', eatBtn)
