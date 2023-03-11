const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progress=document.querySelector('.progress')


let num=1

next.addEventListener("click",()=>{
    num++;
    if(num>circles.length){
        num=circles.length;
    }
    update();
})


prev.addEventListener("click",()=>{
    num--;
    if(num<1){
        num=1;
    }
    update();
})


function update(){
    for(let index = 0; index < circles.length; index++) {
        const element = circles[index];
        if(index<num){
            element.classList.add('active');
        }
        else{
            element.classList.remove('active');
        }
    }

    progress.style.width=(num-1)/(circles.length-1)*100+'%';

    if(num===1){
        prev.disabled=true;
    }
    else if(num===circles.length){
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}