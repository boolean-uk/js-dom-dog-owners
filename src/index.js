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
    dogCard.innerHTML = ''

    // whenever there is a click on the dogListButton trigger the event function
    dogCardName(index)
    dogCardImg(index)
    dogCardBio(index)
    dogCardGood(index)
  })
}

// Create a submission form when the plus button is clicked
dogsListAdd.addEventListener('click', (event) => {
  dogCard.innerHTML = ''
  newDog()
})

function newDog() {
  // Create the submission form
  const newDogForm = document.createElement('form')

  // Append the form into dogCard
  dogCard.appendChild(newDogForm)

  newDogName(newDogForm)
  newDogImg(newDogForm)
  newDogBio(newDogForm)
  newDogSubmit(newDogForm)
}

function newDogName(form) {
  // Create a div to contain the name input
  const wrapperDivName = document.createElement('div')
  wrapperDivName.setAttribute(
    'style',
    'display:flex; flex-direction:column; margin-bottom: 20px'
  )
  // wrapperDivName.setAttribute('style', '')
  // wrapperDivName.setAttribute('style', '')

  // Create label element for the dog's name
  const name = document.createElement('label')
  name.setAttribute('for', 'name')
  name.innerText = 'Dogs name:'

  // Create input element for the dog's name
  const newDogFormName = document.createElement('input')
  newDogFormName.setAttribute('type', 'text')
  newDogFormName.setAttribute('id', 'name')
  newDogFormName.setAttribute('style', 'width: 250px')

  // Append label/input element into div
  form.appendChild(wrapperDivName)
  wrapperDivName.appendChild(name)
  wrapperDivName.appendChild(newDogFormName)
}

function newDogImg(form) {
  // Create a div to contain the image input
  const wrapperDivImg = document.createElement('div')
  wrapperDivImg.setAttribute(
    'style',
    'display:flex; flex-direction:column; margin-bottom: 20px'
  )

  // Create a label element for the image
  const image = document.createElement('label')
  image.setAttribute('for', 'image')
  image.innerText = 'Dogs image URL:'

  // Create an input element for the image
  const newDogFormImg = document.createElement('input')
  newDogFormImg.setAttribute('type', 'url')
  newDogFormImg.setAttribute('id', 'formImg')
  newDogFormImg.setAttribute('style', 'width: 250px')

  // Append the label/input element into the div
  form.appendChild(wrapperDivImg)
  wrapperDivImg.appendChild(image)
  wrapperDivImg.appendChild(newDogFormImg)
}

function newDogBio(form) {
  // Create a div to contain the bio input
  const wrapperDivBio = document.createElement('div')
  wrapperDivBio.setAttribute(
    'style',
    'display:flex; flex-direction:column; margin-bottom: 20px'
  )

  // Create a label element for the bio
  const bio = document.createElement('label')
  bio.setAttribute('for', 'bio')
  bio.innerText = 'Dogs bio:'

  // Create an input element for the bio
  const newDogFormBio = document.createElement('textarea')
  newDogFormBio.setAttribute('rows', '5')
  newDogFormBio.setAttribute('id', 'formBio')

  // Append the label/input element into the div
  form.appendChild(wrapperDivBio)
  wrapperDivBio.appendChild(bio)
  wrapperDivBio.appendChild(newDogFormBio)
}

function newDogSubmit(form) {
  // Create a div to contain the bio input
  const wrapperDivSubmit = document.createElement('div')
  wrapperDivSubmit.setAttribute('style', 'display:grid')

  // Create an input element for the bio
  const newDogFormSubmit = document.createElement('button')
  newDogFormSubmit.setAttribute('class', 'form__button')
  newDogFormSubmit.setAttribute('id', 'formSubmit')
  newDogFormSubmit.innerText = "Let's add a dog!"
  // Create button that will added new dog profile to the exisiting list.

  form__buttom.addEventListener('click', (event) => {
    // Creat a nesw li element for the dogs-list ul
    const newDogList.createElement('li')
    newDogList.setAttribute('class','dogs-list__button')
    dogsList.appendChild(newDogList)
    // Give new profile the name of the name submitted
    // give it the dog-list__button class name
  })
  // Append the label/element into the div
  form.appendChild(wrapperDivSubmit)
  wrapperDivSubmit.appendChild(newDogFormSubmit)
}

// Create a variable that alters the h2 based on the data array and index number
const dogName = document.querySelector('h2')
dogName.setAttribute('class', 'dog-name')
function dogCardName(index) {
  dogCard.appendChild(dogName)
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
