// queria fazer um component separado, mas eu demorei mt pra começar o projeto, então pra poupar tempo decidi fazer no componente Login mesmo :'(

// const login = {
//   email: false,
//   password: false,
// };

// function validarEmail(email) {
//   const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   return regexEmail.test(email);
// }

// function validarPassWord(password) {
//   const numeroMinimoDeCaracteres = 6;
//   if (password.length < numeroMinimoDeCaracteres) {
//     return false;
//   }
//   return true;
// }

// function validarLogin({ target }) {
//   if (target.name === 'email') {
//     const email = validarEmail(target.value);

//     if (email) {
//       login.email = true;
//     }
//   }

//   if (target.name === 'password') {
//     const password = validarPassWord(target.value);

//     if (password) {
//       login.password = true;
//     }
//   }

//   if(target.name === 'button') {
//     return()
//   }
// }

// export default validarLogin;
