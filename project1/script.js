// const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top

//         if(boxTop < triggerBottom) {
//             box.classList.add('show')
//         } else {
//             box.classList.remove('show')
//         }
//     })
// }

const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',showboxes);


function showboxes(){
    const trigger=window.innerHeight/10*10;
    boxes.forEach(box => {
        const boxheight= box.getBoundingClientRect().top;

        if(boxheight<trigger){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show')
        }
    })
}