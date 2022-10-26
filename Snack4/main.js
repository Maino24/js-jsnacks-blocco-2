let arrayUno = [1, 2, 3]
let arrayDue = [5]

let arrayMaggiore
let arrayMinore
//trovare array con meno elementi

if (arrayUno.length > arrayDue.length){

    arrayMaggiore = arrayUno;
    arrayMinore = arrayDue;
    console.log(arrayMaggiore);

} else if(arrayUno.length === arrayDue.length){
    console.log(`hanno stessa lunghezza`)
} else{
    arrayMaggiore = arrayDue;
    arrayMinore = arrayUno;
}


//quanti elementi mancano per rendere l'array minore uguale all'array maggiore
let differenzaLunghezza = arrayMaggiore.length - arrayMinore.length;
