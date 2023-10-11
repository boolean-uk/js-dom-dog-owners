const dogsData = data

// WRITE YOUR CODE BELOW!

// populate .dogs-list with dog buttons
  //access dogs = data
  //do a forEach((dog) => {}):
    //for each dog we want dog.name
    //append li item with class "dogs-list__button"





data.forEach(dog => {
  const navListItem = document.createElement("li")
  const dogName=dog.name
  navListItem.innerText=dogName
  navListItem.className= "dogs-list__button"
  const dogsList = document.querySelector(".dogs-list")
  dogsList.append(navListItem)

});


