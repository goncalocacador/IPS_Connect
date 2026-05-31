import { auth }
from "./firebase.js";

import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 sendPasswordResetEmail
}


from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const loginForm =
document.getElementById("loginForm");

if(loginForm){

 loginForm.addEventListener(
 "submit",
 async (e)=>{

   e.preventDefault();

   const email =
   document.getElementById("email").value;

   const password =
   document.getElementById("password").value;

   try{

      await signInWithEmailAndPassword(
         auth,
         email,
         password
      );

      alert("Login efetuado!");

      window.location.href =
      "Home.html";

   }
   catch(error){

      alert(error.message);

   }

 });

}


const registerForm =
document.getElementById("registerForm");

if(registerForm){

 registerForm.addEventListener(
 "submit",
 async (e)=>{

   e.preventDefault();

   const email =
   document.getElementById("email").value;

   const password =
   document.getElementById("password").value;

   try{

      await createUserWithEmailAndPassword(
         auth,
         email,
         password
      );

      alert(
       "Conta criada com sucesso!"
      );

      window.location.href =
      "Login.html";

   }
   catch(error){

      alert(error.message);

   }

 });

}

const forgotForm =
document.getElementById("forgotPasswordForm");

if(forgotForm){

    forgotForm.addEventListener(
    "submit",
    async (e)=>{

        e.preventDefault();

        const email =
        document.getElementById(
        "resetEmail"
        ).value;

        try{

            await sendPasswordResetEmail(
                auth,
                email
            );

            alert(
                "Email de recuperação enviado!"
            );

        }
        catch(error){

            alert(error.message);

        }

    });

}