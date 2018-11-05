

function loadArea(areaToLoad) {
    console.log(areaToLoad);

    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("menu").style.display = "none";

    document.getElementById("selectedHome").classList.remove("active");
    document.getElementById("selectedAbout").classList.remove("active");
    document.getElementById("selectedContact").classList.remove("active");
    document.getElementById("selectedMenu").classList.remove("active");
    
    if (areaToLoad == "home") { 
        document.getElementById("home").style.display = "block"; 
        document.getElementById("selectedHome").classList.add("active");

    } else if (areaToLoad == "about") { 
        document.getElementById("about").style.display = "block"; 
        document.getElementById("selectedAbout").classList.add("active");

    } else if(areaToLoad == "contact"){ 
        document.getElementById("contact").style.display = "block"; 
        document.getElementById("selectedContact").classList.add("active");
    } else {
        document.getElementById("menu").style.display = "block"; 
        document.getElementById("selectedMenu").classList.add("active");
    }
}



