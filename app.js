// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let amigo = '';
    amigo = document.getElementById('amigo').value;
    if (!validarEntrada(amigo)){

        //error de entrada se trunca proceso
        return false;
    }else{

        amigos.push(amigo);
        document.getElementById('amigo').value ='';
        document.getElementById('amigo').focus();
        console.log(amigos);
    }
 //   alert(amigo);
}
function sortearAmigo(){
    //valida primero la lista no este vacia
    if (amigos.length>0){
        // continua la logica
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoAleatorio = amigos[indiceAleatorio];
       // alert("nombre sorteado:" + amigoAleatorio);
        document.getElementById('resultado').innerHTML = "Amigo Secreto es:" + amigoAleatorio;

        return true;
    }else{
        alert('Aun no a ha agregado ningun amigo al listado');
        document.getElementById('amigo').focus();
        return false;
    }

}
/*
Funcion permite validar entrada de nombre    
*/
function validarEntrada(entrada){
    
    if (entrada==''){
        alert('Por favor, inserte un nombre');
        document.getElementById('amigo'). focus();
        return false;
    }else{
        if (!validarNombre(entrada)){
            document.getElementById('amigo').focus();
            return false;
        }else{
            return true;
        }
       
    }

}
/* mejoras adicioanles
validacion mas robusta de nombres, estos no pueden contener numero
, ni ser menos de 2 caracteres ni menos ser mayora a 50 carcateres */

function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombre) {
        alert( "El nombre no puede estar vacío.");
        return false;

    } else if (nombre.length < 2 || nombre.length > 50) {
        alert("El nombre debe tener entre 2 y 50 caracteres.");
        return false;
    } else if (!regex.test(nombre)) {
        alert( "El nombre solo puede contener letras y espacios.");
        return false;
    }
    return true;
}