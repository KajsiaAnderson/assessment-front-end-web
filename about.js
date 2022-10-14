console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("This has been submitted sucessfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function pictureAlert(event){
	event.preventDefault()
	alert("This cat thinks you are amazing!")
}

document.querySelector('img').addEventListener('mouseover', pictureAlert)