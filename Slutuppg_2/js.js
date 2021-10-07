
function darkMode() {
let body = document.getElementById("body")   
let jumbo = document.getElementById("jumbo");
var jumboClass = jumbo.getAttribute("class");

console.log(jumboClass)
if (jumboClass == "bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start") {
    jumbo.setAttribute("class", "bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start")
    body.setAttribute("class", "bg-light text-dark")
    document.getElementById('modeButton').innerHTML = "Dark Mode";
}
else
{
    jumbo.setAttribute("class", "bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start")
    body.setAttribute("class", "bg-dark")
    document.getElementById('modeButton').innerHTML = "Light Mode";

}

}

const images = URL(image)

function carousel() {

}


/*
.innerHTML = "Hejsan världen";


    let color = random.getAttribute("class");
image.setAttribute

function changeImage(width) {
    var image = document.getElementById("bilden");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "bil.jpg") {
        image.setAttribute("src", "annanbil.jpg")
    }
    else
    {
        image.setAttribute("src", "bil.jpg")
    }
}

*/

