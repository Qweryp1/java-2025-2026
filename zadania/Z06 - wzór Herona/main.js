const bok_a  = document.querySelector('#bok_a');
const bok_b = document.querySelector('#bok_b');
const bok_c = document.querySelector('#bok_c');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){

   let a = parseFloat(bok_a.value);
   let b = parseFloat(bok_b.value);
   let c = parseFloat(bok_c.value);

   let p = 0.5*(a+b+c);
   let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

   wynik.innerHTML = `
   bok a = <b>${a}</b> <br>
   bok b = <b>${b}</b> <br>
   bok c = <b>${c}</b> <br>

   pole trjkąta = <b>${S}</b> <br>
   
   `

})
