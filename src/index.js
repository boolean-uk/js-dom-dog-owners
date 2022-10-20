// console.log(data);

// WRITE YOUR CODE BELOW!

// select the dogs-list UL
const dogsList = document.querySelector('.dogs-list')
const dogsListAdd = document.querySelector('.dogs-list__button--add')
const dogCard = document.querySelector('.main__dog-section')

const body = document.querySelector('body')
body.setAttribute('style', 'font-style: san-serif')

function dog(index) {
  // generate this HTML template: <li class="dogs-list__button">Mr. Bonkers</li>
  // append each generated <li> to the correct part of the page
  const dogListButton = document.createElement('li') // create a list item called dogListButton
  // correct list is <ul class="dogs-list">
  dogsList.appendChild(dogListButton) // Add dogListButton to dogsList
  dogListButton.setAttribute('class', 'dogs-list__button') // Give dogListButton the class dogs-list__button

  dogListButton.innerText = data[index].name // Set dogListButton's text to be the object key 'name' from within the data array, based on the idex given by the for loop on below

  // now add an event listener to listen for user clicks
  dogListButton.addEventListener('click', (event) => {
    // whenever there is a click on the dogListButton trigger the event function
    dogCardName(index)
    dogCardImg(index)
    dogCardBio(index)
    dogCardGood(index)
  })
}

// Create a submission form when the plus button is clicked
dogsListAdd.addEventListener('click', (event) => {
  newDog()
})

// create innerHTML = "" to clear the main area

function newDog() {
  // Create the submission form

  const newDogForm = document.createElement('form')
  // Create input text box for the dog's name

  const newDogFormName = document.createElement('input')
  newDogFormName.setAttribute('type', 'text')

  // Create a submit button to add the dog's name as a dogListButton
  const newDogFormSubmit = document.createElement('button')
  newDogFormSubmit.setAttribute('class', 'form__button')
  // Append the form into dogCard
  dogCard.appendChild(newDogForm)

  // create an element and set attributes and append area to input an image via url
  const newDogImg = document.createElement('input')
  newDogImg.setAttribute('type', 'url')

  // To add text area for the Bio.
  const newDogBio = document.createElement('textarea')
  newDogBio.setAttribute('rows', '5')

  // Append the text box/sumbit button into the form
  newDogForm.appendChild(newDogFormName)
  newDogForm.appendChild(newDogImg)
  newDogForm.appendChild(newDogBio)
  newDogForm.appendChild(newDogFormSubmit)
}

// Create a variable that alters the h2 based on the data array and index number
const dogName = document.querySelector('h2')
dogName.setAttribute('class', 'dog-name')
function dogCardName(index) {
  dogName.innerText = data[index].name
}

// Create a variable that creates and alters an img element based on the data array and index number
const dogImg = document.createElement('img')
function dogCardImg(index) {
  dogImg.setAttribute('src', data[index].image)
  dogImg.setAttribute('style', 'height: 300px')
  dogCard.appendChild(dogImg)
}

// Create a variable that creates and alters a p element based on the data array and index number
const dogBio = document.createElement('p')
function dogCardBio(index) {
  dogBio.innerText = data[index].bio
  dogCard.appendChild(dogBio)
}

// Create a div that will contain the prompt question and "Good or Bad dog button"
// Create a p element and a button element that allows user input to change whether the dog is naughty or nice
const isGoodBoy = document.createElement('div')
const cardQuestion = document.createElement('p')
const cardQuestionButton = document.createElement('button')

function dogCardGood(index) {
  isGoodBoy.setAttribute('style', 'display: inline-flex')
  dogCard.appendChild(isGoodBoy)
  isGoodBoy.appendChild(cardQuestion)
  isGoodBoy.appendChild(cardQuestionButton)
  isNaughty(index)
}

// Create a function that changes whether the dog is naughty or nice based on the data
function isNaughty(index) {
  // Create a boolean that points to the data value, and allows us to alter that for the click event later
  let goodOrBadBoolean = data[index].isGoodDog
  let naughty = ''
  let goodOrBadDog = ''
  // Create an if statement to assign values to the p/button based on the boolean
  if (goodOrBadBoolean === false) {
    naughty = 'Yes!'
    goodOrBadDog = 'Good Dog'
  } else if (goodOrBadBoolean === true) {
    naughty = 'No!'
    goodOrBadDog = 'Bad Dog'
  }
  // Assign the above values to the p/button elements
  cardQuestion.innerText = `Is Naughty? ${naughty}`
  cardQuestionButton.innerText = goodOrBadDog

  // Create a click event that changes the value of the p/button when the buttoon is clicked
  cardQuestionButton.addEventListener('click', (event) => {
    // Create an if statement to flip the previously defined values
    if (goodOrBadBoolean === true) {
      goodOrBadBoolean = false
      naughty = 'Yes!'
      goodOrBadDog = 'Good Dog'
    } else if (goodOrBadBoolean === false) {
      goodOrBadBoolean = true
      naughty = 'No!'
      goodOrBadDog = 'Bad Dog'
    }
    // Change the inner text once the values have been flipped
    cardQuestion.innerText = `Is Naughty? ${naughty}`
    cardQuestionButton.innerText = goodOrBadDog
  })
}

// for each dog JS object in data, generate a li
for (let i = 0; i < data.length; i++) {
  // i = index that is used in line 10, 14 and 16
  dog(i)
}
