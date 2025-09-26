const liczba_a  = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let suma = a + b;
    let roznica = a - b;
    let iloczyn = a * b;
    let iloraz = Math.floor( a / b);
    let reszta_z_dzielenia = a % b;
    let potega = a ** b;

wynik.innerHTML =
    `
liczba a = ${a} <br>  
liczba b = ${b} <br>
suma = ${suma} <br>
różnica = ${roznica} <br>
iloczyn = ${iloczyn} <br>
iloraz = ${iloraz} <br>
reszta z dzielenia = ${reszta_z_dzielenia} <br>
potęga = ${potega} <br>

    `

})


