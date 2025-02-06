// BOM 
// Browser Object Model    l'objet   window
//   https://fr.javascript.info/browser-environment

// console.log(window.innerHeight); // hauteur de la fenetre
// console.log(window.innerWidth);  // largeur de la fenetre

//  window.open("https://www.youtube.com/watch?v=bP4e5Kwz8EE&t=8465s" , "height=600, width=800");
// window.close(); pour fermer la fenetre

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const questionContainer = document.querySelector(".click-event");
let answer =""; // declaration d'une variable permettant de recupérer le nom dans le prompt()


    // les événements addossés a window
                                        // alert("salut");
                                
                                        // confirm();
btn1.addEventListener("click" , () =>{
    confirm("voulez vous effacez votre compte"); // le confirm() permet d'avoir le chois de valider ou d'annuler l'action
});                                     

                                        // prompt();

// prompt(); permet de rentrer une information , dans ce cas précis nous lui demandons d'entrer son nom

btn2.addEventListener("click" , () =>{
  answer =   prompt("Entrez votre nom"); // en faisant un console.log(answer) dans la console nous récupérons le nom stocké dans la variable answer

  // avec le innerHTML nous allons pouvoir ecrire dans questionContainer et injecter une balise <h3> ainsi que le nom stocké dans la variable answer
  questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
});

                                    // setTimeout() timer compte a rebours

    setTimeout(() => {
        questionContainer.style.borderRadius = "300px";
    } , 2000); // 2000ms représente 2 secondes et c le parametre du compte a rebours. dans 2 secondes le questionContainer se transformera en borderRadius

   // setInterval(() => {
       // document.body.innerHTML += "<div class='box'><h3>Nouvelle boite</h3></div>"; toutes les 1seconde une div class="box" sera créer . le += permet de ne pas écraser les boites
   // }, 1000);

  //  pour pouvoir arreter le setInterval() il faut le stocké dans une variable

  let interval =  setInterval(() => {
   //  document.body.innerHTML += "<div class='box'><h3>Nouvelle boite</h3></div>"; 
 }, 4000);

 // pour effacer un élément du dom en cliquant il faut le cibler et utiliser remove()
 // dans ce cas nous pourrons supprimer n'importe quel éléments du dom en cliquant dessus

 document.body.addEventListener("click" ,(e) =>{
    e.target.remove();
 });

//  document.body.addEventListener("click" ,(e) =>{
//     clearInterval(interval);
//  })


                            // Location

    // console.log(location.href);  résultat :  https://localhost/evogue/js4/index3.html?
    // console.log(location.host);  résultat :   localhost
    // console.log(location.pathname);  résultat : /evogue/js4/index3.html
    // console.log(location.search); affiche les recherches du navigateur

   // location.replace("http://lequipe.fr"); cela me renvoit sur le site de l'équipe

//    window.onload = () =>{
//     location.href = "http://twitter.fr";
//    };


                                    // navigator

   // console.log(navigator.userAgent); // permet de voir les infos sur le navigateur de user
    
    
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//     exemple 
// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log("Votre position actuelle est :");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);


                            // history

   // console.log(window.history);
     //   window.history.back();