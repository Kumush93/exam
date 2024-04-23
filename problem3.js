function calculateSum(massiv) {
    let yigindi = 0;
    for (let i = 0; i < massiv.length; i++) {
        yigindi += massiv[i];
    }
    return yigindi;
}

function powSum(massiv) {
    let yigindi = yigindi_berilgan_sonlar(massiv);
    let daraja = massiv.length;
    let natija = Math.pow(yigindi, daraja);
    return natija;
}

let massiv = [1, 2, 3, 4, 5];
let natija = powSum(massiv);
console.log(massiv + " massivining yig'indisi darajaga ko'tarilganida: " + natija);
