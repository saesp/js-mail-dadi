// Chiedere all'utente la sua email e controllare se questa è presente nella lsita email


// chiedere all'utente la sua email
let userEmail = prompt("Inserisci la tua email");
console.log("user email:", userEmail);

//lista email
const emailList = ["gio@gmail.it", "fra@gmail.it", "vin@gmail.it"];
console.log("Email list:", emailList);

let emailTrovata = false;

for (let i = 0; i < emailList.lenght; i++){

    if (userEmail == emailList[i]) {
        emailTrovata = true;
    }
};

// stampare un messaggio per l'utente
if (emailTrovata === false){
    console.log("Non sei invitato");
} else{
    console.log("Sei invitato");
}




