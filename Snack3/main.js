//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

// creo costante array
const arrayNumeri = [55,1005, 5, 1000, 44, 0]

console.log(arrayNumeri)

//creo una varibaile somma e la pongo con valore 0
let sommaNumeri 
sommaNumeri = 0 



//creo un ciclo for
for ( let i = 0; i < arrayNumeri.length; i++){

    //controllo se la posizione è dispari
    if ( i % 2 !== 0 ){
        
        sommaNumeri = sommaNumeri + arrayNumeri[i]
        
    }else{

    }

    console.log(sommaNumeri)
    document.getElementById(`sommaNumeriDispari`).innerHTML= `La somma di numeri in posizione dispari nell'array è : ${sommaNumeri}`
}

