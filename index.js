let form = document.querySelector('form');
// recherche de l'espace commentaire

// recherche des variabales à tester
let baliseFirstName = document.getElementById("firt-name")
let firstName = baliseFirstName.value

let baliseLastName = document.getElementById("last-name")
let lastName = baliseLastName.value

let baliseMessage = document.getElementById("message")
let message= baliseMessage.value

let baliseErrorMessage = document.getElementById("error-message").textContent
let errorMessage= baliseErrorMessage.textContent

let baliseMessageMax= document.getElementById("message-max)").textContent
let messageMax=baliseMessageMax.textContent

let baliseEnvoyer = document.getElementById("submit")
let envoyer = baliseEnvoyer.send

// test du formulaire (nom, prenom et commentaire)
// En cas d'erreur, envoi du message d'erreur (2 messages #)
// si tous les champs sont justes (non vide et <500caratères), je poursuis


if (firstName==""){
    console.log(errorMessage);
    firstName.focus()
    return false;
}

else if (lastName==""){
    console.log(errorMessage);
    lastName.focus()
    return false;
}
else if (message==""){
    console.log(errorMessage);
    message.focus()
    return false;
    }

else if (message.length>500){
console.log(messageMax)
return false;
}
else

// l'évenement submit recharge automatiquement la page, donc il faut bloquer cette instruction
//pour creer une fonction qui va implémenter le nouveau commentaire.
form.addventListener("submit",(event)=>{
event.preventDefault();
})

// recherche de l'espace commentaire
let commentList = document.querySelector('comment-list')


// creation des nouveaux espace et introduction des contenus
function moveComment(firstName,lastName,message){
    let div1 = document.createElement('class', "flex space-x-4 text-sm text-gray-500")
    let div2 = document.createElement('class',"flex-1 py-10")
    let h3 = document.createTexteNode('class', "font-medium text-gray-900")
    let div4 = document.createElement('class', "prose prose-sm mt-4 max-w-none text-gray-500")
    let newP = document.createTexteNode("p")
    let userName = firstName+" " + lastName;

    commentList.appendChild(div1)
    div1.appendChild(div2);
    div2.appendChild(h3)
    h3.appendChild(userName)
    div2.appendChild(div4)
    div4.appendChild(newP)
    newP.appendchild(message)
   
   
}

// je reinitialise les champs du formulaire

document.getElementById('first-name').remove();
document.getElementById ('last-name').remove();
document.getElementById('message').remove();