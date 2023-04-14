// console.log(data);

// WRITE YOUR CODE BELOW!

// for each dog, create a button
const list = document.querySelector('.dogs-list')

function createListItem(currentDog) {
  const newListItem = document.createElement('li')
  newListItem.innerText = currentDog.name
  newListItem.setAttribute('id', currentDog.id)
  newListItem.setAttribute('class', 'dogs-list__button')
  newListItem.addEventListener('click', buttonClick)
  list.append(newListItem)
  return newListItem
}

function createDogCard(currentDog) {
  const main = document.querySelector('.main')

  const newCard = document.createElement('section')
  newCard.setAttribute('class', 'main__dog-section')
  newCard.setAttribute('id', `#dog${currentDog.id}`)
  newCard.style.display = 'none'

  const newTitle = document.createElement('h2')
  newTitle.innerText = currentDog.name

  const newImage = document.createElement('img')
  newImage.setAttribute('src', currentDog.image)
  newImage.setAttribute('alt', '')

  const newSection = document.createElement('div')
  newSection.setAttribute('class', 'main__dog-section__desc')

  const newSubTitle = document.createElement('h3')
  newSubTitle.innerText = 'Bio'

  const newParagraph = document.createElement('p')
  newParagraph.innerText = currentDog.bio

  const newParagraph2 = document.createElement('p')
  newParagraph2.innerHTML = '<em>Is naughty?</em> yes!'

  const newButton = document.createElement('button')
  newButton.innerText = 'Good dog!'

  newSection.append(newParagraph, newSubTitle)
  newCard.append(newTitle, newImage, newSection, newParagraph2, newButton)
  main.append(newCard)
}

function createForm() {
  const main = document.querySelector('.main')

  const newSection = document.createElement('section')
  newSection.setAttribute('class', 'main__dog-section form-section')
  newSection.style.display = 'none'

  const newTitle = document.createElement('h2')
  newTitle.innerText = 'Add a new Dog'

  const newForm = document.createElement('form')
  newForm.setAttribute('class', 'form')

  const newLabel = document.createElement('label')
  newLabel.setAttribute('for', 'name')
  newLabel.innerText = "Dog's name"

  const newInput = document.createElement('input')
  newInput.setAttribute('type', 'text')
  newInput.setAttribute('id', 'name')
  newInput.setAttribute('name', 'name')

  const newLabel1 = document.createElement('label')
  newLabel1.setAttribute('for', 'image')
  newLabel1.innerText = "Dog's picture"

  const newInput1 = document.createElement('input')
  newInput1.setAttribute('type', 'url')
  newInput1.setAttribute('id', 'image')
  newInput1.setAttribute('name', 'image')

  const newLabel2 = document.createElement('label')
  newLabel2.setAttribute('for', 'bio')
  newLabel2.innerText = "Dog's bio"

  const newTextarea = document.createElement('textarea')
  newTextarea.setAttribute('rows', '5')
  newTextarea.setAttribute('id', 'bio')
  newTextarea.setAttribute('name', 'bio')

  const newSubmit = document.createElement('input')
  newSubmit.setAttribute('type', 'submit')
  newSubmit.setAttribute('id', 'submit')
  newSubmit.setAttribute('name', 'submit')
  newSubmit.setAttribute('value', "Let's add a dog!")
  newSubmit.setAttribute('class', 'form__button')
  newForm.addEventListener('submit', formSubmit)

  newForm.append(newLabel, newInput, newLabel1, newInput1, newLabel2, newTextarea, newSubmit)
  newSection.append(newTitle, newForm)
  main.append(newSection)
  formButtonListen()
}

function formSubmit(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  console.log('myformdata', myFormData)
  console.log('event.target', event.target)
  console.log('event', event)

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
  createListItem(formDataObj)
  createDogCard(formDataObj)
  
}
function buttonClick(event) {
  const id = event.currentTarget.id
  toggleCard(id)
}

function toggleCard(id) {
  const currentDog = `#dog${id}`
  const currentCard = document.getElementById(currentDog)

  for (let i = 0; i <= data.length; i++) {
    if (i === id) {}
    else {
      let otherDog = `#dog${i}`
      let current = document.getElementById(otherDog)
      let form = document.querySelector('.form-section')
      console.log(form)
      current.style.display = 'none'
      form.style.display = 'none'
    }
  }
  currentCard.style.display = 'block'
}

function formButtonListen() {
  const formButton = document.querySelector('.dogs-list__button--add')
  formButton.addEventListener('click', formButtonClicked)
}

function formButtonClicked() {
  const form = document.querySelector('.form-section')
  for (let i = 0; i <= data.length; i++) {
    let otherDog = `#dog${i}`
    let current = document.getElementById(otherDog)
    current.style.display = 'none'
  }
  form.style.display = 'block'
  
}
function createDogs() {
  data.forEach(dog => {
    createListItem(dog)
    createDogCard(dog)
  });
  createForm()
}

createDogs()