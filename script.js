const button=document.querySelectorAll(".boxColor");
const body=document.querySelector("body");

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        if(color.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
        if(color.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }
        if(color.target.id === 'red'){
            body.style.backgroundColor = 'red';
        }
        if(color.target.id === 'violet'){
            body.style.backgroundColor = 'violet';
        }
    })
})