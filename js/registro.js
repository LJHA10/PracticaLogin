//Declaracion de variables de referencia a objetos
const nombre= document.getElementById('name');
const email = document.getElementById('email');
const user = document.getAnimations('user');
const pass = document.getAnimations('pass');
const formulario = document.getElementById('formRegistro')

//
formulario.addEventListener('submit', registro);

// 
function registro(e){
    e.preventDefault();
    
    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passVal = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passVal == ''){
        creaMensaje('Verifica tus campos', 'danger');
        return;
    }
    const usuario = {
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passVal
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));

        nombre.value= '';
        email.value= '';
        user.value='';
        pass.value='';

    creaMensaje('Usuario Registrado', 'success');
}

function creaMensaje(texto, tipo){
    const nuevoElemeto=document.createElement('div');
    nuevoElemeto.innerText = texto;
    nuevoElemeto.classList.add('alert', 'alert-' + tipo);
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemeto);
}