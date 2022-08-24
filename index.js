/**
 * EL metodo deve verificar si una palabra puede ser palindromo
 * Osea
 * la palabra abab puede ser reorganizada como abba o baab
 * la palabra aarener puede ser reorganizada como arenera
 * 
 * @param {string} palabra 
 * @returns {string}
 */
const puedeSerPalindromo = ( palabra ) => {

    //Su respuesta

    return false
}

const tests = async () => {
    let tests = await fetch("https://raw.githubusercontent.com/JohanLeonardoIbarra/SapoQL/master/test.json");
    tests = await tests.json(); 
    const palindromo = tests.palindromo.reduce((x, y)=> x && (puedeSerPalindromo(y[0])==y[1]), true);
    document.body.innerHTML+=`<h1><span style="color: red">Palindromo: </span>${palindromo}</h1>`
}

tests();
