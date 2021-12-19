const listFriends = document.getElementById('searchResults');
const searchFriends = document.getElementById('searchFriends');
//Array with all users Friends
let allFriends = [
    
    {
        "fullName": "Jesper Holmlund",
        "email":"JHolmlund@kyh.se",
        "phone":"072828485",
        "profilePic": "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        "fullName": "Tove Brandt",
        "email":"TBrandt@kyh.se",
        "phone":"0785458548",
        "profilePic": "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
    {
        "fullName": "Karin Lundqvist",
        "email":"KLundqvist@kyh.se",
        "phone":"0724588588",
        "profilePic": "https://bootdey.com/img/Content/avatar/avatar8.png"
    },
    {
        "fullName": "Sebastian Procheus",
        "email":"SProcheus@kyh.se",
        "phone":"072825425",
        "profilePic": "https://bootdey.com/img/Content/avatar/avatar2.png"
    }
];

searchFriends.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredFriends = allFriends.filter((friend) => {
        return(
            friend.fullName.toLowerCase().includes(searchString) || friend.email.toLowerCase().includes(searchString) || friend.phone.toLowerCase().includes(searchString)  ||  friend.profilePic.toLowerCase().includes(searchString)
        );
    
    });
    displayFriends(filteredFriends);
});

//Display function 
const displayFriends=(friends) => {
    const htmlString = friends
    .map((friend) => {
        return`
        <div class="card mb-3 " style="max-width:18rem">
            <div class = "row-g-0">
                <div class = "col-md-4">
                    <img class="img-fluid rounded-start" src="${friend.profilePic}" alt="${friend.profilePic}" />
                </div>
            <div class = "col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Name : ${friend.fullName}</h5>
                    <p class="card-text">Email : ${friend.email}</p>
                    <p class="card-text"><small class="text-muted">Tel : ${friend.phone}</small></p>
                </div>
            </div>
        </div>
    </div>
        `;
        })
        .join('');
        searchResults.innerHTML = htmlString;
};
//Loads all friends
displayFriends(allFriends);