
/* Mobile Menu */

var ul = document.querySelector("nav ul");
var li = document.querySelector("li a");

function menuShow(){
    if (ul.classList.contains("open")){
        ul.classList.remove("open");

    }
    else{
        ul.classList.add("open");
    }
}

/* Gerador */

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const largura = document.querySelector("#idlargura");
    const altura = document.querySelector("#idaltura");

    const valueLarg = largura.value;
    const valueAlt = altura.value;

    document.querySelector("img").setAttribute("src", "http://placekitten.com/" + valueLarg + "/" + valueAlt);
    
});

