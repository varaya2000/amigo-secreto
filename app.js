// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let amigo = '';
    amigo = document.getElementById('amigo').value;
    if (!validarEntrada(amigo)){

        return false;
    }
 //   alert(amigo);
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
        return true;
    }

}