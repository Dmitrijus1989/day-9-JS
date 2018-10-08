let kaina = prompt("Iveskite prekes kaina?");
let pristatymas = prompt("Ar reikalingas pristatymas į namus?");
let miestas = "nowhere";
 if (pristatymas=="taip") {
   miestas = prompt("Į kurį miestą reiks pristatyti?");
 }
  if (pristatymas=="taip" && kaina>= 50 || (miestas == "Vilnius" || miestas == "vilnius")){
   console.log("Prekės kaina: "+kaina+" €");
   console.log("Prekę nemokamai pristatysime į "+miestas+" per 1-3 dienas.");
 }else if (pristatymas=="taip" && kaina <50 && (miestas!="vilnius" || miestas!="Vilnius")) {
 console.log("Prekės kaina: "+kaina+" €");
 console.log("Pristatymas: 20 €");
 kaina=Number(kaina)+20
 console.log("Is viso: "+kaina+" €");
 console.log("Prekę pristatysime į "+miestas+" per 1-3 dienas.");
}else if (pristatymas="ne") {
console.log("Prekės kaina: "+kaina+" €")
console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
}
