const button = document.querySelector('.btn');
const ball = document.querySelector('.glow-ball');
const form = document.getElementById('form');


// always remeber you can't use document.getElementByClassName and try to add a event listener to it, it justs doesn't work for some reasons

button.addEventListener('click' , () =>{
    ball.classList.add('animate');  
    
    
    setTimeout( () =>{ 
        // Name.value && Email.value && Message.value
        if(form.checkValidity()) {
            form.submit();
        }else{
            alert('Please fill form correctly before submitting'); 
        }
        
            ball.classList.remove('animate');
        }, 3000);
    });``