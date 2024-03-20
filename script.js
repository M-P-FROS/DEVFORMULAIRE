// recheche du formulaire

let myForm=document.querySelector("form");
console.log("myForm");

//neutralisation de la reinitialisation du bouton submit
myForm.addEventListener("submit",function(infoEvent){
infoEvent.preventDefault()
})
console.log("event.preventDefault")

//recherche et nomination des 3 champs du formulaire à contrôler
let fieldFirstName=document.getElementById("first-name").value.trim();
console.log("prénom:",fieldFirstName);

let fieldLastName=document.getElementById("last-name").value.trim();
console.log("nom:",fieldLastName);

let fieldMessage=document.getElementById("message").value.trim();
console.log("commentaire:",fieldMessage);

// si ces champs sont nuls ==> message d'erreur
// la boite commentaire est bloquée à 500 caractèeres et ne nécéssite donc pas de message d'erreur
//puisque l'usager ne peut saisir plus de 500 caractères
if(fieldFirstName===''||fieldLastName===''||message===''){

let errorMessage=document.getElementById("error-message").style.display ='block';
}

else {
//création de la fonction pour dépalcer les contenus des champs
// la div "comment-list" reste toujour null, impossibilité d'y rattacher un objet???????

function newComment(){

let div1 = document.createElement("div");
div1.className="flex space-x-4 text-sm text-gray-500";
console.log("div1",div1);


let div2=document.createElement("div");
div2.className="flex-1 py-10 border-t border-gray-200";
div1.append(div2);
console.log("div2",div2)

let tittleH3=document.createElement("h3");
tittleH3.className="font-medium text-gray-900";
div2.append(tittleH3);

let newUser=document.createTextNode(fieldFirstName+' '+fieldLastName);
newUser.textContent=fieldFirstName+' '+fieldLastName
tittleH3.appendChild(newUser);
console.log("nom complet",newUser);

let div3=document.createElement("div");
div3.className="prose prose-sm mt-4 max-w-none text-gray-500"
div2.append(div3)
console.log("div3",div3)


let newMessage=document.createTextNode(fieldMessage) 
newMessage.textContent.innerHTML="<p>"+fieldMessage.textContent+"</p>"
div3.append(newMessage)
console.log("newmessage",newMessage)
}
newComment()
}
// reinitialisation du formulaire
myForm.reset();

