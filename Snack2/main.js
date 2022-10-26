/*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati,
 dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.*/

//creo un array per il nome e uno per i cognomi
 const nomi = [`gabriele`, `giorgio`, `marco`, `alessandro`, `michele`]
 const cognomi = [`rossi`, `bianchi`, `verdi`, `ferrari`, `motta`]
 const nomiCognomi = []


for ( let i = 0; i < cognomi.length; i++){//25 perchè è il numero massimo di possibili combinzzioni senza ripetizioni

//creo due varibaili che hanno come valore un "numero" casuale
 let nomiCasuale = Math.floor(Math.random() * nomi.length);
 let cognomiCasuale = Math.floor(Math.random() * cognomi.length);

 console.log(`${nomi[nomiCasuale]} ${cognomi[cognomiCasuale]}`);
 //document.getElementById(`output`).innerHTML= `${nomi[nomiCasuale]} ${cognomi[cognomiCasuale]}`

 nomiCognomi.push( `${nomi[nomiCasuale]} ${[cognomi[cognomiCasuale]]}` )
 }

 console.log(nomiCognomi)
 document.getElementById(`output`).innerHTML= `${nomiCognomi}`

 //estrarre un dato da un array
 //nomeArray[posizioneElemento] -> nomeArray[2] -> estrarre il dato dell'array in posizione 2