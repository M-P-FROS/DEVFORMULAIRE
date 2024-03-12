
// j'accède au formulaire afin de définir le nom des varaiables à contrôler
let form = document.querySelector('form');

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

// si tous les champs sont justes (non vide et <500caratères), j'envoie
//sinon, j'empeche lenvoi et j'emets le message d'erreur
//empecher l'envoi par défaut:


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
//pour iceer une fonction qui va implémenter le nouveau commentaire.
form.addventListener("submit",(event)=>{
event.preventDefault();
})


let commentList = document.querySelector('comment-list')

function cutComment(firstName,lastName,message){
    let div1 = document.createElement('class', "flex space-x-4 text-sm text-gray-500")
    let div2 = document.createElement('class',"flex-1 py-10 border-t border-gray-200")
    let div3 = document.createtexteNode('class', "font-medium text-gray-900")
    let div4 = document.createTextNode('class', "prose prose-sm mt-4 max-w-none text-gray-500")
    let newp = document.createElement("p")
    let user = firstName + lastName

    div1.appendChild(commentList)
    div1.appendChild(div2);
    div2.appendChild(div3)
    div3.appendChild(div4)
    div4.appendChild(p)
    message.appendchild(newp)
    div3.appendChild(user)
   
}

function clearForm()

document.getElementById('first-name').value = "" ;
              document.getElementById ('last-name').value ="" ;
              document.getElementById('message').value = "";
