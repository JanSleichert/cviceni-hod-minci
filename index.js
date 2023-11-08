
const padlOrel = Math.random() < 0.5;
let vysledek = document.querySelector (".vysledek")
let mince = document.querySelector (".mince")

if (padlOrel == true) {
vysledek = document.getElementsByClassName("vysledek")[0].innerHTML = "Padla panna"
mince.classList.add("mince--panna")
} 
else {
    vysledek = document.getElementsByClassName("vysledek")[0].innerHTML = "Padl orel"
    mince.classList.add("mince--orel")
}
