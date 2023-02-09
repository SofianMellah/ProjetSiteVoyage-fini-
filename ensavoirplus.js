let ensavoirplus = document.querySelector(`.lebou`);
let texte = document.querySelector(`#suitetexte`);
console.log(ensavoirplus);
function afficherlereste(){
    console.log('texte.length',texte.innerHTML.length);
    if (texte.innerHTML.length<1){
        texte.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo saepe, doloremque mollitia qui facilis et eum ullam aliquam magni obcaecati harum ab, tenetur animi omnis cum exercitationem ducimus aliquid!Tempora quisquam, voluptatum a consectetur laboriosam id. Quae illum facilis enim est. Repellat, non magnam? Dignissimos officiis obcaecati repudiandae cum eius placeat, dolores est at quo quis nam, aperiam autem!Perferendis deserunt unde assumenda corrupti neque quidem quod numquam quo esse rem, est officia excepturi, quia reprehenderit! Quidem in labore, architecto vel nihil fugiat aspernatur reprehenderit asperiores corporis temporibus provident!Voluptate, quasi adipisci tenetur voluptatibus reiciendis repellat inventore dolore nisi porro doloremque distinctio officia commodi harum enim temporibus velit eum dolores incidunt laudantium. Corrupti assumenda neque totam laboriosam odit dignissimos!";
        document.querySelector(`.lebou`).textContent = "Réduire"
    }
    else{
        texte.innerHTML = ""
        document.querySelector(`.lebou`).textContent = "En savoir plus"
    }
}
ensavoirplus.addEventListener("click", afficherlereste);







