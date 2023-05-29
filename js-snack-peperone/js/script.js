/**
 * Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

Bonus:
crea un peperone con una funzione
 */

const listPeperoni = [
    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "boliviana",
        "peso in grammi": 50,    
        lunghezza: "7cm"
    },

    {
        varietà: "estiva",
        "peso in grammi": 20,    
        lunghezza: "3cm"
    },

    {
        varietà: "invernale",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },

    {
        varietà: "africana",
        "peso in grammi": 60,    
        lunghezza: "6cm"
    },
]

let sommaDelPeso = 0;

for (let index = 0; index < listPeperoni.length; index++) {
    sommaDelPeso += listPeperoni[index]["peso in grammi"]
    
}

console.log(sommaDelPeso)

// FUNZIONA