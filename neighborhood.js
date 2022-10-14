// -------neighborhood page-------

function eatBtn (event) {
    event.preventDefault()

    const place = ["Micky Dee's", "Taco Bell", "Wendy's", "KFC"];
    
    let randomPlace = Math.floor(Math.random() * place.length)
    alert("You should eat at " +place[randomPlace])


}

document.querySelector("form").addEventListener('click', eatBtn)