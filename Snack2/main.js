/*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati,
 dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.*/

//creo un array per il nome e uno per i cognomi
 const nomi = [`gabriele`, `giorgio`, `marco`, `alessandro`, `michele`]
 const cognomi = [`rossi`, `bianchi`, `verdi`, `ferrari`, `motta`]

 //creo una funzione che mi permette di associare un nome con un cognome
 
 function genera(){
    
    //let nomiCognomi = ``

    for (i = 0; i < nomi.length; i++){

        if( ){
        nomiCognomi= nomi + cognomi
    
    console.log(nomiCognomi[i])

    document.getElementById(`output`).innerHTML= `${nomiCognomi}`
        }
}

 }