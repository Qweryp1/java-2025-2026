const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const liczba_c = document.querySelector('#liczba_c');
const liczba_d = document.querySelector('#liczba_d');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector(`button`)


btn.addEventListener( 'click', function () {
    let a = parseFloat( liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let d = parseFloat(liczba_d.value);

    let iloczyn = a * b * c * d;
    let sredniaGeom = Math.pow(iloczyn, 0.25);

    wynik.innerHTML = `
        a = ${a} <br>
            b = ${b} <br>
            c = ${c} <br>
            d = ${d} <br>
           
 Średnia geometryczna (bez zaokrąglenia) = ${sredniaGeom} <br>
       Średnia geometryczna (zaokrąglona) = ${sredniaGeom.toFixed(3)} <br>
            `




})