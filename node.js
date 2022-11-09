let textoVentana = document.querySelectorAll('button');
let textoNum = document.querySelector('.texto-ventana--number');
let boton = document.querySelector('.boton');
let contenedorStar = document.querySelector ('.contenedor-star');
let contventana2 = document.querySelector('.contenedor-ventana2');

textoVentana.forEach(e=>{ 
    e.addEventListener('click', evento=>{
        let numberselected= evento.target.innerText;
        textoNum.innerText = numberselected;
        if(numberselected >0 || numberselected <=5){
            
            boton.addEventListener('click', ()=>{
                contenedorStar.style.display ='none';
                contventana2.style.display ='flex';
                
            
            
            });
            
    
    
        }   
        
    
    
    }
    )
})

let numBoton 

/*textoVentana.forEach(boton =>{
console.log(boton);
boton.addEventListener((e)=>{
   numBoton=e.target.innerText 
})
*/


//numBoton=boton.target.innerText

/*boton.addEventListener('click' , ()=> {
console.log(numBoton);
})*/

console.log(textoVentana);




