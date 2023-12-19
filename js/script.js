// function replaceName(){
//     let name = prompt("Hi, what is your name?", "");
//     document.getElementById("name").innerHTML = name;
// }

// document.getElementById("change").addEventListener("click", function(){
//     replaceName();
// });


//TDK PAKAI FORM
// let nameInput = document.getElementById("name-input");

// document.getElementById("submit").addEventListener("click", function() {
//     let name = nameInput.value;
//     document.getElementById("name").innerHTML = name;
// });


//PAKAI FORM
function validateForm(){
    const name = document.forms['message-form']['name-input'].value;

    if(name == ""){
        document.getElementById("error-name").innerHTML = "Name Required";

        return false;
    } else{
        setName(name);
    }
}

function setName(name){
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}