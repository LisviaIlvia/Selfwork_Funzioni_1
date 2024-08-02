
function lanciaDado() {
    
    let num = Math.floor(Math.random() * (6 - 1) + 1);
    let num2 = Math.floor(Math.random() * (6 - 1) + 1);
    let num3 = Math.floor(Math.random() * (6 - 1) + 1);

    console.log('Lancio Uno:', num);
    console.log('Lancio Due:', num2);
    console.log('Lancio Tre:', num3);

    let punteggio = num + num2 + num3;
    console.log('Il tuo punteggio è:', punteggio);

    return punteggio;
}

console.log('Giocatore 1 ecco i tuoi tiri:');
let giocatore1 = lanciaDado();

console.log('Giocatore 2 ecco i tuoi tiri:');
let giocatore2 = lanciaDado();


if (giocatore1 > giocatore2) {
    console.log('Giocatore 1 hai vinto!');
} else if (giocatore1 === giocatore2) {
    console.log('Avete pareggiato!');
} else {
    console.log('Giocatore 2 hai vinto!');
}