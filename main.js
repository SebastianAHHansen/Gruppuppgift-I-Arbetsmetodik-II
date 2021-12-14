var account;
var userAccountString = localStorage.getItem('account');

var userAccountObj = JSON.parse(userAccountString);
console.log(userAccountObj);

function createAccount() {

    account = {
        
        name: document.getElementById('fullName').value,
        email: document.getElementById('emailAdress').value,
        password: document.getElementById('createPassword').value        
        
    }
    
    
    window.localStorage.setItem('account', JSON.stringify(account));
    userAccountString = window.localStorage.getItem('account');
    userAccountObj = JSON.parse(userAccountString);

    console.log(userAccountObj);
    
}

function logIn() {

    console.log(userAccountObj);
    let tempoArray = [];
    tempoArray.push(userAccountObj);

    // Kollar om du har skapat ett konto 
    if (tempoArray.length === 0) {
     alert("Vänligen skapa ett konto.");
    }

     //Om du har det går den vidare
     else if (tempoArray.length !== 0) {

        let tempoArray = [];
        tempoArray.push(userAccountObj);

            tempoArray.forEach(element => {

        //Kollar om ditt användarnamn och lösenord stämmer
        if (document.getElementById("user").value == element.email 
        && document.getElementById("password").value == element.password) {
        
            //Om du gör det får du en alert, följt av att du dirigeras till index-sidan
        //alert("Du är inloggad. Du kommer nu tas till huvudsidan.");
            window.location.href = "index.html";
        alert("Tjena");

            //Om du skrivit fel så får du en alert som berättar detta för dig
        } else if (document.getElementById("user").value != element.email || null
        || document.getElementById("password").value != element.password || null) {
            alert("Du har inte skrivit in rätt uppgifter."); 
        }
      });  
    }
}

//Onload funktion
function skrivUt2() {

    //Hämtar ditt kontos uppgifter
    userAccountString = window.localStorage.getItem('account');
    userAccountObj = JSON.parse(userAccountString);

    //Du får åtkomst till userAccountObj genom en temporär array eftersom JSON är mer komplicerat
    var tempoArray = [];
        tempoArray.push(userAccountObj);

        //Välkomnar dig på nya sidan
        tempoArray.forEach(element => {
            document.getElementById("welcome").innerHTML = "Welcome, " + element.name;
        });
}


// Publicera ett inlägg

// const commentContainer = document.getElementById('allComments');
//     document.getElementById('addComments').addEventListener('click', function (ev) {
//     addComment(ev);
//     });


//     function addComment(ev) {
//     let commentText;
//     const textBox = document.createElement('div');
    
    
//     commentText = document.getElementById('newComment').value;
//     document.getElementById('newComment').value = '';
//     textBox.innerHTML = commentText;
// } 

//     function setOnLocalStorage () {
//         localStorage.setItem('template', document.getElementById('allComments').innerHTML);
//     } 


// Friends Search Friends



// Function LogOut

