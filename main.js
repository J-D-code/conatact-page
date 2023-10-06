const button = document.querySelector('.btn');
const ball = document.querySelector('.glow-ball');
const form = document.getElementById('form');
const Message = document.getElementById('message');
const Name = document.getElementById('name');
const Email = document.getElementById('email');

// always remeber you can't use document.getElementByClassName and try to add a event listener to it, it justs doesn't work for some reasons


    button.addEventListener('click' , () =>{
            ball.classList.add('animate');  
            setTimeout( () =>{ 
            if(Name.value && Email.value && Message.value){
                form.submit();
            }else{
                alert('Please fill form before submitting'); 
                
            }
          
                
        ball.classList.remove('animate');
        }, 3000);
    });``
