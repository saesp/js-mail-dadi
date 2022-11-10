// generare numero random da 1 a 6 per user e pc

let numUser = Math.floor(Math.random() * 5) + 1;
console.log("num user:", numUser);

let numPc = Math.floor(Math.random() * 5) + 1;
console.log("num pc:", numPc);


// stabilire vincitore in base a chi fa n piu grande
if (numUser > numPc) {
    console.log("Hai vinto tu");
} else if (numUser < numPc) {
    console.log("Ha vinto il pc");
} else {
    console.log("Pareggio");
}