// Début boutton en savoir plus

let ensavoirplus = document.querySelector(`.lebou`);
let texte = document.querySelector(`#suitetexte`);
console.log(ensavoirplus);
function afficherlereste(){
    console.log('texte.length',texte.innerHTML.length);
    if (texte.innerHTML.length<1){
        texte.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo saepe, doloremque mollitia qui facilis et eum ullam aliquam magni obcaecati harum ab, tenetur animi omnis cum exercitationem ducimus aliquid!Tempora quisquam, voluptatum a consectetur laboriosam id. Quae illum facilis enim est. Repellat, non magnam? Dignissimos officiis obcaecati repudiandae cum eius placeat, dolores est at quo quis nam, aperiam autem!Perferendis deserunt unde assumenda corrupti neque quidem quod numquam quo esse rem, est officia excepturi, quia reprehenderit! Quidem in labore, architecto vel nihil fugiat aspernatur reprehenderit asperiores corporis temporibus provident!Voluptate, quasi adipisci tenetur voluptatibus reiciendis repellat inventore dolore nisi porro doloremque distinctio officia commodi harum enim temporibus velit eum dolores incidunt laudantium. Corrupti assumenda neque totam laboriosam odit dignissimos!";
        document.querySelector(`.lebou`).textContent = "Réduire"
    }
    else{
        texte.innerHTML = ""
        document.querySelector(`.lebou`).textContent = "En savoir plus"
    }
}
ensavoirplus.addEventListener("click", afficherlereste);


// Fin boutton en savoir plus 

// CAROUSEL

document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "carousel1.png",
  "carousel2.png",
  "carousel3.png",
  "carousel4.png",
  "carousel5.png",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();


// Début boutton rechercher


function ouvrir(e){
  e.preventDefault();
  let recherche = document.querySelector('.larecherche input').value
  
    if (recherche === `Grèce` || recherche === `grèce`|| recherche === `grece`|| recherche === `Grece` || recherche === `Artemis` || recherche === `artemis` || recherche === `Poseidon` || recherche === `poseidon` || recherche === `Hades` || recherche === `hades` || recherche === `Zeus`|| recherche === `zeus` || recherche === `Aphrodite`|| recherche === `aphrodite`|| recherche === `Thanatos`|| recherche === `thanatos`|| recherche === `Ephaistos`|| recherche === `ephaistos` || recherche === `Diane`|| recherche === `diane`|| recherche === `Ares`|| recherche === `ares`|| recherche === `Apollon`|| recherche === `apollon`|| recherche === `Dionysos`|| recherche === `Dionysos`|| recherche === `Athéna`|| recherche === `athéna`|| recherche === `Athena`|| recherche === `athena`|| recherche === `Nemesis`|| recherche === `nemesis`|| recherche === `Nike`|| recherche === `nike`|| recherche === `Niké`|| recherche === `niké`){
      window.open(`../Grèce/Grèce.html`,"_self")
    }
    else if (recherche === `Italie` || recherche === `italie` || recherche === `Neptune` || recherche === `neptune` || recherche === `Janus` || recherche === `janus` || recherche === `Bacchus` || recherche === `bacchus` || recherche === `Jupiter`|| recherche === `jupiter`|| recherche === `Venus`|| recherche === `venus`|| recherche === `Mars`|| recherche === `mars`|| recherche === `Saturne`|| recherche === `saturne`|| recherche === `Uranus`|| recherche === `uranus` ){
        window.open(`../Italie/Italie.html`,"_self")
    }
    else if (recherche === `chine` || recherche === `Chine`|| recherche === `Hebo`|| recherche === `hebo`|| recherche === `Mulan`|| recherche === `mulan`|| recherche === `Sun wukong`|| recherche === `sun wukong`|| recherche === `Sun Wukong` || recherche === `Nuwa` || recherche === `nuwa` || recherche === `Chang'e` || recherche === `chang'e` || recherche === `Nezha` || recherche === `nezha`){
        window.open(`../Chine/Chine.html`,"_self")
    }
    else if (recherche === `egypte` || recherche === `Egypte`|| recherche === `Égypte` || recherche === `égypte`||  recherche === `Raa`|| recherche === `raa`|| recherche === `Seth`|| recherche === `seth`|| recherche === `Osiris`|| recherche === `osiris` || recherche === `Isis` || recherche === `isis` || recherche === `Bastet` || recherche === `bastet` || recherche === `Thot` || recherche === `thot` || recherche === `Sekhmet` || recherche === `sekhmet` || recherche === `Horus` || recherche === `horus` || recherche === `ra` || recherche === `Ra` || recherche === `Anubis` || recherche === `anubis` || recherche === `Khepri` || recherche === `khepri` || recherche === `Khépri` || recherche === `khépri`){
        window.open(`../Egypte/Egypte.html`,"_self")
    }
    else if (recherche === `pérou` || recherche === `Pérou`|| recherche === `Perou`|| recherche === `perou` || recherche === `Chaac` || recherche === `chaac` || recherche === `Ah Puch` || recherche === `ah puch` || recherche === `Xbalanque` || recherche === `xbanlanque` || recherche === `Ah Muzen Cab` || recherche === `ah muzen cab` || recherche === `Ah muzen cab` || recherche === `Kukulkan` || recherche === `kukulkan` || recherche === `Quetzalcoatl` || recherche === `quetzalcoatl`){
        window.open(`../Pérou/Pérou.html`,"_self")
    }
    
}
let larecherche=document.querySelector('.larecherche')
larecherche.addEventListener('submit',ouvrir)

// Fin boutton rechercher
