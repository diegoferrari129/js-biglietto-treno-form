const button = document.getElementById('calc_total_price');
button.addEventListener('click', function() {
    
    //CHIEDI ALL'UTENTE NOME E COGNOME
    let passenger = document.getElementById('name_surname').value;

    // CHIEDI ALL'UTENTE L'ETà DEL PASSEGGERO
    const age = document.getElementById('age').value;

    // CHIEDI ALL'UTENTE LA DISTANZA IN KM.
    const distance = document.getElementById('distance').value;

    // CALCOLA IL PREZZO DEL BIGLIETTO IN BASE ALLA DISTANZA IN KM.
    let total_price = distance * 0.21;
    
    // APPLICA UNO SCONTO DEL 20% PER I MINORENNI E DEL 40% PER GLI OVER 65
    let message = '';
    let offerta = 'Adulto';

    if (age == 1) {
        total_price *= 0.8
        message = 'Hai ricevuto uno sconto del 20% in quanto minorenne'
        offerta = 'Minorenne'
    } 
    else if (age == 3) {
        total_price *= 0.6
        message = 'Hai ricevuto uno sconto del 40% in quanto anziano'
        offerta = 'Over 65'
    }

    // MOSTRA NOME E COGNOME
    document.getElementById('passenger').innerText = passenger;

    

    // MOSTRA IL PREZZO SIA NELLA CONSOLE CHE NEL DOCUMENTO
    console.log(total_price);
    document.getElementById('total_price').innerText = total_price.toFixed(2);
    document.getElementById('message').innerText = message;
    document.getElementById('offerta').innerText = offerta;

});

