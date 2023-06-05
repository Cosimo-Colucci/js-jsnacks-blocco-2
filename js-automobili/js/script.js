/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

let cars = [
    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "tipo",
        gasType: "disel"
    },

    {
        brand: "fiat",
        model: "bravo",
        gasType: "gpl"
    },

    {
        brand: "fiat",
        model: "punto",
        gasType: "eletrico"
    },
    
    {
        brand: "fiat",
        model: "abart",
        gasType: "metano"
    },

    {
        brand: "audi",
        model: "a1",
        gasType: "benzina"
    },

    {
        brand: "audi",
        model: "rs6",
        gasType: "gpl"
    },

    {
        brand: "bmw",
        model: "m3",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    },

    {
        brand: "fiat",
        model: "uno",
        gasType: "benzina"
    }
]

for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    console.log(car.gasType)
    
}

cars.forEach(car => {
    console.log (car.gasType)
});

const car = cars.filter((car) => {
    return car.gasType["disel"]
});
console.log(car)


/**
 * correzione di Riccardo 
 * 
 */
