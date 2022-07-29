const contar=document.querySelector("h2")
const img=document.getElementById("img")

contar.textContent="Contador en 0"
let contador=0
function myFunction(){ 
    contador+=1
    if(contador<10){
    contar.textContent="Contador en "+contador
    }else{
        contar.textContent="Estos son muchos click, me da amsiedad"
        img.src="https://pbs.twimg.com/media/E2QENIqXEAUPSLB.png"
    }
}
function reset(){
    contador=0
    contar.textContent="Contador en "+contador
    img.src="https://ih1.redbubble.net/image.1422566077.1151/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" 
}






/* A partir de la tarea moral agregar lo siguiente:
    -> Mostrar la imagen de cheems happy como parte del diseño
    -> Cuando el contador de clicks llegue a 10 cambiar el texto a "Esos son muchos clicks, me da amsiedad"
    -> Cambiar la imagen de cheems happy por la de cheems con amsiedad
    -> Cambiar el color del contenedor a rojo 
*/
