// create the list items for every dog
// create a function to update card with currentDog's data
// call updateDog(currentDog) when that dog's button is clicked



function createListItems(data) {
  const list = document.querySelector('.dogs-list')
  const addDog = document.querySelector('.dogs-list__button--add')


  data.forEach(dog => {
    const newListItem = document.createElement('li')
    newListItem.innerText = dog.name
    newListItem.setAttribute('id', dog.id)
    newListItem.setAttribute('class', 'dogs-list__button')
    newListItem.addEventListener('click', () => {
      updateCard(dog)
    })
    list.append(newListItem)
  });

  addDog.addEventListener('click', updateForm)
}

function updateListItems(dog) {
  const list = document.querySelector('.dogs-list')
  const newListItem = document.createElement('li')
  newListItem.innerText = dog.name
  newListItem.setAttribute('id', dog.id)
  newListItem.setAttribute('class', 'dogs-list__button')
  newListItem.addEventListener('click', () => {
    updateCard(dog)
  })
  list.append(newListItem)
}

function createCard() {
  const main = document.querySelector('.main')

  const newCard = document.createElement('section')
  newCard.setAttribute('class', 'main__dog-section')

  const dogName = document.createElement('h2')

  const dogImage = document.createElement('img')
  dogImage.setAttribute('src', '')
  dogImage.setAttribute('alt', '')
  dogImage.setAttribute('height', '256')
  dogImage.setAttribute('width', '256')
  dogImage.style.objectFit = 'cover'

  const div = document.createElement('div')
  div.setAttribute('class', 'main__dog-section__desc')

  const dogSubTitle = document.createElement('h3')
  dogSubTitle.innerText = 'Bio'

  const dogBio = document.createElement('p')

  const dogIsNaughty = document.createElement('p')
  dogIsNaughty.innerHTML = '<em>Is naughty?</em> yes!'

  const dogIsGood = document.createElement('button')
  dogIsGood.innerText = 'Good dog!'
  dogIsGood.addEventListener('click', goodDogButton)

  div.append(dogBio, dogSubTitle)
  newCard.append(dogName, dogImage, div, dogIsNaughty, dogIsGood)
  main.append(newCard)
}

function createForm() {
  const main = document.querySelector('.main')

  const newSection = document.createElement('section')
  newSection.setAttribute('class', 'main__dog-section form-section')

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
  newForm.addEventListener('submit', submitForm)

  newForm.append(newLabel, newInput, newLabel1, newInput1, newLabel2, newTextarea, newSubmit)
  newSection.append(newTitle, newForm)
  main.append(newSection)
}

function submitForm(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  updateListItems(formDataObj)
}

function updateCard(currentDog) {
  const baseCard = document.querySelector('.main__dog-section')
  if(baseCard) {
    baseCard.remove()
    createCard()
  }

  const dogName = document.querySelector('.main__dog-section > h2')
  dogName.innerText = currentDog.name

  const dogImage = document.querySelector('.main__dog-section > img')
  dogImage.setAttribute('src', currentDog.image)

  const dogBio = document.querySelector('.main__dog-section__desc > p')
  dogBio.innerText = currentDog.bio

  const isGoodDogParagraph = document.querySelector('.main__dog-section > p')
  const isGoodDogButton = document.querySelector('.main__dog-section > button')
  if(currentDog.isGoodDog === true) {
    isGoodDogButton.innerText = 'Good Dog!'
    isGoodDogParagraph.innerHTML = '<em>Is naughty?</em> no!'
  } else {
    isGoodDogButton.innerText = 'Bad Dog!'
    isGoodDogParagraph.innerHTML = '<em>Is naughty?</em> yes!'

  }
}

function updateForm() {
  const baseCard = document.querySelector('.main__dog-section')
  if(baseCard) {
    baseCard.remove()
    createForm()
  }
}
function goodDogButton() {
  const isGoodDogParagraph = document.querySelector('.main__dog-section > p')
  const button = document.querySelector('.main__dog-section > button')
 
  if(button.innerText === 'Good Dog!') {
    button.innerText = 'Bad Dog!'
    isGoodDogParagraph.innerHTML = '<em>Is naughty?</em> yes!'
  } 
  
  else if(button.innerText === 'Bad Dog!') {
    button.innerText = 'Good Dog!'
    isGoodDogParagraph.innerHTML = '<em>Is naughty?</em> no!'
  }
}

createListItems(data)