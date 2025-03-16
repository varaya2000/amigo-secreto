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
        alert("nombre sorteado:" + amigoAleatorio);

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
        return true;
    }

}