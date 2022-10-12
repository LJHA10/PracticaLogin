//Declaracion de variables para vincular los objetos del formulario
const usuario= document.getElementById('user');
const password= document.getElementById('pass');
const formulario=document.getElementById('forLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//Funciones
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
    return;
    }
    console.log('EL valor para user es: '+ usuarioVal);
    console.log('EL valor para password es: '+ passwordVal);
    
}