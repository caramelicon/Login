// Hämtar värden
const användarnamn = document.getElementById("användarnamn");
const lösenord = document.getElementById("lösenord");
const loggain = document.getElementById("knapp");

// Fortfarande inloggad
var local = localStorage.getItem("test");
    if (local === "1234"){
        document.body.innerHTML = "Du är fortfarande inloggad";
        var knapp = document.createElement("button");
        knapp.id= "knapp";
        knapp.innerHTML = "Logga ut";
        document.body.appendChild(knapp); 
        knapp.onclick = function(){
            localStorage.clear();
            location.reload();}
        }


// Lyssna på click enbart 
loggain.addEventListener("click", () => 
{
        
    // Lagra värdena från användarnamn och lösenord i const.
    const username = användarnamn.value;
    const password = lösenord.value;
   
    // Användaruppgifter
    const använd = "test"
    const lösen = "1234"

    // Ändrar style på font
    document.body.style.fontSize = "xx-large";
    document.body.style.color = "white";
    
    // Skapa tom knapp och id
    var knapp = document.createElement("button");
    knapp.id= "knapp";


    //Vad som ska göras med värdena
    if ( username === använd && password === lösen) {
           //Lägger in i localstorage
            localStorage.setItem(username, password)
          
            //rensar html lägger in text i body
            document.body.innerHTML = ("Du är inloggad");
            //text i knappen
            knapp.innerHTML = "Logga ut för att logga in";
            //lägger knappen på bodyn
            document.body.appendChild(knapp);
            //Ger knappen en funktion onclick 
            knapp.onclick = function(){
            localStorage.clear();
            location.reload();}

        }   else    {
            //rensar html lägger till text i body
            document.body.innerHTML = ("Fel användarnamn eller lösenord");
            //text i knappen
            knapp.innerHTML = "Tillbaka till Startsidan";
            //lägger knappen på bodyn
            document.body.appendChild(knapp);
            //Ger knappen en funktion onclick 
            knapp.onclick = function(){
            location.reload();} 
        }
})
