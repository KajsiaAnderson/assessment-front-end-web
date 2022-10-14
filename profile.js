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





