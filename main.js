const button = document.querySelector('.btn');
const ball = document.querySelector('.glow-ball');
const form = document.getElementById('form');
const message = document.getElementById('message');

// always remeber you can't use document.getElementByClassName and try to add a event listener to it, it justs doesn't work for some reasons

    button.addEventListener('click' , () =>{
        setInterval(() =>{
            ball.classList.add('animate')
            
        }, 1);
        setTimeout(() =>{           
            form.submit();                        
        }, 3000);
        ball.classList.remove('animate');
        
       }
       );``