function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    myelement.innerHTML= "Hello " + name + ", it's nice to meet you!";
    console.log("Hello Josh");
}

greetOnLoad();