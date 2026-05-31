import { auth } from "../Database/firebase.js";

import {
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const userName =
document.getElementById("userName");

const userEmail =
document.getElementById("userEmail");

const notificationsToggle =
document.getElementById("notificationsToggle");

const logoutButton =
document.getElementById("logoutBtn");




if(localStorage.getItem("notifications") === "true"){

    notificationsToggle.checked = true;

}

notificationsToggle.addEventListener(
"change",
() => {

    localStorage.setItem(
        "notifications",
        notificationsToggle.checked
    );

});
    

logoutButton.addEventListener(
"click",
async () => {

    const confirmar =
    confirm(
    "Pretende terminar sessão?"
    );

    if(!confirmar){

        return;

    }

    try{

        await signOut(auth);

        alert(
        "Sessão terminada com sucesso."
        );

        window.location.href =
        "Login.html";

    }
    catch(error){

        console.error(error);

        alert(
        "Erro ao terminar sessão."
        );

    }

});