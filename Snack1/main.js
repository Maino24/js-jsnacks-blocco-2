//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

let inputNumero = parseInt(prompt(`inserisci un numero`));
//let inputNumero = document.getElementById(`inputNumero`)

//function inserisci(){
if (inputNumero % 2 !== 0){

    inputNumero = inputNumero + 1
    
    document.getElementById(`output`).innerHTML= `${inputNumero}`
}else {
    document.getElementById(`output`).innerHTML= `${inputNumero}`
}
//}