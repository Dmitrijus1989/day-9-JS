let kaina = prompt("iveskite prekes kaina");
let pristatymas = prompt("Ar reikalingas pristatymas?(taip/ne)");
let = miestas;

if (pristatymas == "taip") {
    miestas = prompt("I kuri miesta pristatyti?")
    if (kaina >= 50 || miestas == "vilnius") {
      console.log(`Prekės kaina : ${kaina} €\n
    Prekę nemokamai pristatysime į ${miestas} per 1-3 dienas.`
        );
    } else if (kaina < 50) {
      console.log(`Prekės kaina : xx.xx €\n
      Pristatymas: xx.xx €\n
      Iš viso: xx.xx €\n
      Prekę pristatysime į "įvestas miestas" per 1-3 dienas.`);
    }
} else {
  console.log(`Prekės kaina: ${kaina} €\n
Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`);
}
