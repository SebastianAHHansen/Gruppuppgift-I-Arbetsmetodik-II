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
            //Funkar på alla webbläsare om du lägger en setTimeout innan man skickas till index.html
        setTimeout(function () {window.location.href = "index.html";}, 0);

        alert("Du har skrivit in rätt uppgifter. Nu loggas du in!");

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

//===================================================================== Log Out Function
// const handleLogout = () => {
//     window.localStorage.clear();
//     window.location.reload(true);
//     window.location.replace('/');
//   };
//==============================================================================================


//================================================================= Publicera ett inlägg

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
//=================================================================================================


//================================================================== Search Friends
// const listFriends = document.getElementById('allFriends');
// const searchBar = document.getElementById('searchBar');
// //Array with all users Friends
// let allFriends = [
    
//     {
//         "fullName": "",
//         "email":"",
//         "phone":"",
//         "profilePic": ""
//     },
// ];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredFriends = allFriends.filter((friends) => {
//         return(
//             friends.fullName.toLowerCase().includes(searchString) || friends.email.toLowerCase().includes(searchString) || friends.phone.toLowerCase().includes(searchString)  ||  friends.profilePic.toLowerCase().includes(searchString)
//         );
    
//     });
//     displayFriends(filteredFriends);
// });

// //Display function 
// const displayFriends=(friends) => {
//     const htmlString = friends
//     .map((friends) => {
//         return`
//         <div class="card lg-3 my-3 mx-3" style="width: 18rem">
//           <img class="card-img-top" src="${friends.profilePic}" alt="${friends.profilePic}" />
//           <div class="card-body">
//             <h5 class="mt-1">${friends.fullName}</h5>
//             <h3 class="mt-2">${friends.email}</h3>
//             <h3 class="mt-1">${friends.phone}</h3>
//             <a href="#" class="btn bi bi-heart"></a>
//           </div>
//         </div>
//         `;
//         })
//         .join('');
//         friendsList.innerHTML = htmlString;
// };
// //Loads all friends
// displayFriends(allFriends);


