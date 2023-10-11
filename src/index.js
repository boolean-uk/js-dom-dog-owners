const dogsData = data

// WRITE YOUR CODE BELOW!

// populate .dogs-list with dog buttons
  //access dogs = data
  //do a forEach((dog) => {}):
    //for each dog we want dog.name
    //append li item with class "dogs-list__button"


const navListItem = document.createElement("li")
navListItem.innerText = "Hello"

const dogsList = document.querySelector(".dogs-list")

dogsList.append(navListItem)