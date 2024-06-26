// TRACCIA ES.
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form

Descrizione
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10

MILESTONE 0: Creare il file README.md

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////
MILESTONE 1:
// CREA DUE INPUT
    - utilizzo due tag input number e assegno un id diverso a entrambi
    - dichiaro una variabile = input per entrambi
// CREA UN BOTTONE
    -  utilizzo il tag button e assegno un id
// CHIEDI ALL'UTENTE LA DISTANZA IN KM.
    - dichiaro una variabile per la distanza in km. = valore aquisito da un'input
// CHIEDI ALL'UTENTE L'ETà DEL PASSEGGERO
    - dichiaro una variabile per l'età del passeggero  = valore aquisito da una seconda input
// CALCOLA IL PREZZO DEL BIGLIETTO IN BASE ALLA DISTANZA IN KM.
    - dichiaro una variabile per il prezzo base = variabile della la distanza in km. * 0.21
// APPLICA UNO SCONTO DEL 20% PER I MINORENNI E DEL 40% PER GLI OVER 65
    - dichiaro una variabile per lo sconto = 0
    - ?SE età < MINORE di 18anni
    - variabile dello sconto = 0.2
    - :ALTRIMENTI ?SE età > MAGGIORE di 65anni
    - variabile dello sconto = 0.4
    - dichiaro una variabile per il prezzo finale = variabile del prezzo base - variabile dello sconto
//MOSTRA IL RISULTATO NELLA CONSOLE DEL BROWSER
    - console.log ( variabile del prezzo finale )






 