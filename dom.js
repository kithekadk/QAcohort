
let suvs = document.getElementById('suvs');

suvs.style.border = '5px red solid';

// let paragraph = document.getElementsByClassName('parag');

// for (i = 0; i<paragraph.length; i++){
//     paragraph[i].style.background = 'yellow';
// }

let para = document.getElementsByTagName('p');

// console.log(para);
for (x = 0; x<para.length; x++){
    para[x].style.border = '5px green dotted'
}

// console.log(typeof(paragraph));

// let title = document.querySelector('.title');
// title.style.color = 'blue';

let title = document.querySelectorAll('#title');

title.forEach(el=>{
    el.style.color ='blue';
})

let clickme = document.querySelector('.btn');

clickme.addEventListener('click', ()=>{
    console.log('clicked');
    document.body.style.background = 'yellow';
})

let myform = document.querySelector('.form1');
let myname = document.getElementById('fname');
let btnsubmit = document.querySelector('.btnsubmit');

myform.addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = myname.value;

    if(name !== ''){
        console.log(name);
    }else{
        myname.style.border = '1px solid red'
    }
    
})

document.addEventListener('keydown', event=>{
// console.log(event);

    let element = document.getElementById('h2');

    let a = 'KeyA'
    let s = 'KeyS'
    let d = 'KeyD'
    let w = 'KeyW'

    console.log(event.code == 'KeyA');

    // if (event.code == 'KeyA') {
    //     element.textContent ='Left';
    // }

    switch (event.code){
        case a:
            element.innerText='Left';
            break;
        case s:
            element.textContent='Down';
            break;
        case d:
            element.textContent='Right';
            break;
        case w:
            element.textContent='Up';
            break;
        default:

    }
})