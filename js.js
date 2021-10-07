//Ersätter innerhåller i class och byter text i knapp. Kontrollerar state genom en if-sats som byter state villkoret utvärderas till true
function changeMode() {
    let body = document.getElementById("body")
    let jumbo = document.getElementById("jumbo");
    var jumboClass = jumbo.getAttribute("class");

    console.log(jumboClass)
    if (jumboClass == "bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start") {
        jumbo.setAttribute("class", "bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start")
        body.setAttribute("class", "bg-light text-dark")
        document.getElementById('modeButton').innerHTML = "Dark Mode";
    }
    else {
        jumbo.setAttribute("class", "bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start")
        body.setAttribute("class", "bg-dark")
        document.getElementById('modeButton').innerHTML = "Light Mode";

    }

}

function mouseOver() {
    let card = document.getElementById("card")
    card.setAttribute("class", "animate__animated animate__pulse")

}


let i = 0; 			// Räknare 
const images = ["img/undraw_Design_process_re_0dhf.svg", "img/undraw_Thought_process_re_om58.svg"];	// Array för bilder
const time = 5000;	// Tidsintervall för bildbyte i ms


// funktion för bildbyte

function changeImg() {
    document.bildspel.src = images[i]; // Åtkomst för innehåll i src i element döpt till slide

    // If sats som kollar så att slutet av listan inte är nåd. Omslutet är nått resetas countern
    if (i < images.length - 1) {
        // adderar +1 till index: i += 1
        i++;
    } else {
        // Resettar
        i = 0;
    }

    // Kör changeImg varje enligt tidsinervall definerade i time
    setTimeout("changeImg()", time);
}

// Funktionen changeImg körs när fönstret laddas
window.onload = changeImg;
window.onload = mouseOver;
