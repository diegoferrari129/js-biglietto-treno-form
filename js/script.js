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
    document.getElementById('message').innerText = message;
    document.getElementById('offerta').innerText = offerta;
    
    // MOSTRA NOME E COGNOME
    document.getElementById('passenger').innerText = passenger;

    // GENERA UN NUMERO CAUSALE PER LA CARROZZA
    let carrozza = Math.random() * 10;
    document.getElementById('carrozza').innerText = carrozza.toFixed(0);

    // GENERA UN NUMERO CASUALE PER IL CODICE CP
    let codice = Math.random() * 90000 + 10000;
    document.getElementById('codice').innerText = codice.toFixed(0);

    // MOSTRA IL PREZZO SIA NELLA CONSOLE CHE NEL DOCUMENTO
    console.log(total_price);
    document.getElementById('total_price').innerText = total_price.toFixed(2);
});

const button_delete = document.getElementById('button_delete');
button_delete.addEventListener('click', function() {
    document.getElementById('name_surname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('offerta').innerText = '';
    document.getElementById('passenger').innerText = '';
    document.getElementById('carrozza').innerText = '';
    document.getElementById('codice').innerText = '';
    document.getElementById('total_price').innerText = '';
});
