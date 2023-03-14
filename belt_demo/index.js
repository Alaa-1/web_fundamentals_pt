function signIn(element){
    // console.log("Hellooo");
    if (element.innerText === "Register"){
        var userName = prompt("Please Enter You Name")
        var userEmail = prompt("Please Enter You Email")
        var userPassword = prompt("Please Enter You Password")
        alert("Thank you " + userName)
        // target the login button
        var login = document.getElementById("login") 
        login.innerHTML = "Logout"
        // change the inner text of the register button to show the "username"
        element.innerText = userName

    }
    if(element.innerText === "Login"){
        alert("Try to Register Please 👈⏮◀⬅↩")
    }
}

// remove the card when clicking the buy button
function hide(el){
  //TODO
}


function changeImage(element) {
    element.src = "/images/6.png"
}

function changeImage2(element){
    element.src = "/images/2.jpg"
}


function like(el){
    document.getElementById(el).innerText ++;
}


function hideCookie(id){
    var element = document.getElementById(id)
    alert("Thank You for accepting our privacy terms 😉😊")
    element.remove()
}