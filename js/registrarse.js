// Validacion de datos por espacios vacios del formulario de registro
const nombre = document.getElementById('name');
const surname = document.getElementById('surname');
const birthday = document.getElementById('birthday');
const email2 = document.getElementById('email2');
const password2 = document.getElementById('password2');
const repeat_pass = document.getElementById('repeat-password2');
const checkbox = document.getElementById('checkbox');
const error = document.getElementById('error');
error.style.color = 'red';


function enviarRegistro() {
    console.log('Ha sido registrado con exito');

    let mensajeError = [];

    if(nombre.value === null || nombre.value === '') {
        mensajeError.push('Ingresa tu nombre');
    }

    if(surname.value === null || surname.value === '') {
        mensajeError.push('Ingresa tu apellido');
    }

    if(birthday.value === null || birthday.value === '') {
        mensajeError.push('Ingresa tu fecha de nacimiento');
    }

    if(email2.value === null || email2.value === '') {
        mensajeError.push('Ingresa tu correo electronico');
    }

    if(password2.value === null || password2.value === '') {
        mensajeError.push('Ingresa la contraseña');
    }

    if(repeat_pass.value === null || repeat_pass.value === '') {
        mensajeError.push('Repite la contraseña');
    }

    if(checkbox.value === null || checkbox.value === '') {
        mensajeError.push('Acepta los terminos y condiciones');
    }

    error.innerHTML = mensajeError.join(', ');

    return false;
}