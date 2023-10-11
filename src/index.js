console.log(data);

// WRITE YOUR CODE BELOW!
// ## Learning Objectives
// * Use event listeners to render dynamic content in response to a click event
// * Render dynamic content based on the contents of a submitted form 

// PLAN

// First step - select the ul and li buttons and add an event listener to this. The event listener should display the cards in the middle.

//CARD SECTION
// Second step - select the cards in the middle - main_dog-section

// Third Step - render the h2 (ie the name of the dog)

// Fourth Step - render the img within the card section.

// Fifth Step - render the "bio" for each dog.

// Sixth Step - Render the question, "is the dog naughty?"

// Seventh Step - click on the button - "good dog" / "bad dog"

// Rendering the cards
// Get the name
const firstDogName = data[0].name
console.log("this is the first name:", firstDogName)


const dogList = document.getElementsByClassName("dogs-list")
console.log(dogList)


// Get the image
const firstDogImg = data[0].image
console.log("this is the img:", firstDogImg)

//Get the bio
const firstDogBio = data[0].bio
console.log("this is the first Bio:", firstDogBio)

// Get "is it good/bad?"
const firstGoodOrBad = data[0].isGoodDog
console.log("this is bad/good:", firstGoodOrBad)





// Using forEach

console.log("created the forEach loop")

data.forEach(function () {
    console.log(data)
})

