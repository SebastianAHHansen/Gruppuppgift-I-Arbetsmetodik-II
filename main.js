

let userAccount = []; // Empty array where inputs pushes into

//Function Create Account
function createAccount(name, email, password) {
    var account = {
        // Collect value from inputs
        name: document.getElementById('fullName').value,
        email: document.getElementById('emailAdress').value,
        password: document.getElementById('createPassword').value
        // user: "",
        // userPassword: "",
        // loggain: false,
        
    }

        // if (account.user === account.name && account.userPassword === account.password) {
        //     loggain = true;
        //}



    // console.log(account);
    //Pushes in value in array

    userAccount.push(account);
    // console.log(userAccount);

    //Delete inputs
    // document.forms[0].reset();

}; 


//Sign In Function
function logIn() {


    //Validate inputs
    if () {
        alert ("Du har skrivit in rätt användaruppgifter! :D")
        

        //Proceed Login
    } else {
        alert ("Wrong username or Password. Try again!");

    }

}




/* const createAccount = {
    //ev.preventDefault();
    let account = {
        // Collect value from inputs
        name: document.getElementById('fullName').value,
        email: document.getElementById('emailAdress').value,
        password: document.getElementById('createPassword').value,
        
    }

    console.log(account);
    //Pushes in value in array
    userAccount.push(account);

    //Delete inputs
    document.forms[0].reset();
}

document.getElementById('signup').addEventListener('click', createAccount()); */

//Function Log in


// document.getElementById('submit').addEventListener('click', logIn());
//         console.log(djur);
//         allaDjur.push(djur);
//         document.forms[0].reset();

//Buttons
// signin
// signup

// //Log in
// id="username"
// id="password"

// //Create ACC
// id="fullName"
// id="emailAdress"
// id="createPassword"
