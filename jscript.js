const h1 = document.querySelector('h1');
const contenedor =document.querySelectorAll('input');
const input1=document.querySelector('#nombre');
const input2=document.querySelector('#apellido');
const boton=document.querySelector('.boton');
const form=document.querySelector('.formulario');
const p=document.querySelector('.p-form');



form.addEventListener('submit', saludar);

function saludar(event){
 //console.log({event});
 event.preventDefault();
//p.innerText= "Enviado!!";
alert('enviado');
};
//h1.innerText="Inicio"
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','final');

//h1.classList.add('rojo');
//h1.classList.remove('inicio');

//const img = document.createElement('img');
//img.setAttribute('src' ,'https://images.pexels.com/photos/9660968/pexels-photo-9660968.jpeg');

//h1.append(img);

/*
function onclickBtn(){
    const suma =Number(input1.value) + parseInt(input2.value);
    resultado.innerText = "resultado " + suma;
}
*/