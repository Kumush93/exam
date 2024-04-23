function removeABC(text) {
    let newtext = "";
    let harflar = ["a", "b", "c"];

    for (let i = 0; i < text.length; i++) {
        let harf = text[i];
        if (harflar.includes(harf)) {
            newtext += " ";
        } else {
            newtext += harf;
        }
    }

    if (newtext === text) {
        return null;
    } else {
        return newtext;
    }
}


let text1 = "abcdef";
let text2 = "Hello World";
let text3="apple";
let natija1 = removeABC(text1);
let natija2 = removeABC(text2);
let natija3=removeABC(text3)
console.log(natija1); 
console.log(natija2); 
console.log(natija3); 
