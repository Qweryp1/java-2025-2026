const licznik = document.querySelector('#licznik');
const mianownik = document.querySelector('#mianownik');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let licznik_wartosc = licznik.value;
    let mianownik_wartosc = mianownik.value;
    let iloraz = licznik_wartosc / mianownik_wartosc;


    wynik.innerHTML =
        `
    podaj licznik: ${licznik_wartosc}<br>
    podaj mianownik: ${mianownik_wartosc}<br>
    iloraz: <b>${iloraz.toFixed(2)}</b><br>
    
    
    `





})