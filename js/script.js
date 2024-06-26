const button = document.getElementById('calc_total_price');
button.addEventListener('click', function() {
    // CHIEDI ALL'UTENTE LA DISTANZA IN KM.
    let distance = document.getElementById('distance').value;

    // CHIEDI ALL'UTENTE L'ETà DEL PASSEGGERO
    let age = document.getElementById('age').value;

    // CALCOLA IL PREZZO DEL BIGLIETTO IN BASE ALLA DISTANZA IN KM.
    let base_price = distance * 0.21;

    // APPLICA UNO SCONTO DEL 20% PER I MINORENNI E DEL 40% PER GLI OVER 65
    let discount = 0;
    if (age < 18) {
        discount = base_price * 0.2
    } 
    else if (age > 65) {
        discount = base_price * 0.4
    }
    let total_price = base_price - discount;

    //MOSTRA IL RISULTATO NELLA CONSOLE DEL BROWSER
    console.log(total_price);
});

