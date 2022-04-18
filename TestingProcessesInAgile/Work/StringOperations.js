const users = [{email: "existingemail@mail.com", password: "12345678"}];

const signUpUsingEmailAndPassword = ({email, password}) => {
    if (password.length < 8) {
        return "La contraseña debe contener al menos 8 caracteres";
    }
 
    if (validateEmail(email)==null) {
        console.log(validateEmail(email));
        return "Formato mail incorrecto";
    }


    for (let index = 0; index < users.length; index++){
        if(email === users[index].email){
            return "El correo ya se encuentra registrado";
        }
    }

    users.push({email, password});
    return "Registro exitoso";
}


const validateEmail = (email) => {

    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  };


module.exports = {signUpUsingEmailAndPassword};


//correo no mayor a 20 caracteres


//Verificar que sí sea un correo