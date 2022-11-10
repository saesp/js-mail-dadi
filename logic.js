// Chiedere all'utente la sua email e controllare se questa è presente nella lsita email



// creare lista email
const emailList = ["gio@gmail.it", "fra@gmail.it", "vin@gmail.it"];
console.log(emailList);

// chiedere all'utente la sua email
let userEmail = prompt("Inserisci la tua email");
console.log("user email:", userEmail);

for (let i; i < emailList.lenght; i++){
    let elementList = emailList[i];
    
    // stampare un messaggio per l'utente
    if (userEmail === elementList){
        console.log("Sei invitato");
    } else{
        console.log("Non sei invitato");
    }
}



