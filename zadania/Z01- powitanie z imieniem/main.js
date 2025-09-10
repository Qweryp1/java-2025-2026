const imie = document.querySelector("#imie");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function ()  {

    let imie_tekst =imie.value;
    wynik.innerHTML =
        `
        <h1> witaj ${imie_tekst} </h1>
        <h2> miło cię widzieć na naszej sronie.</h2>
        `
})







