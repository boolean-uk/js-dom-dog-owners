console.log(data)
console.log(data[0])

// WRITE YOUR CODE BELOW!


const state = {
  dogs: data,
  selectedDog: null,
  isAddingDog: false
}

// WRITE YOUR CODE BELOW!
const main = document.querySelector('main')

function clearMainSection() {
  main.innerHTML = ''
}

function render() {
  console.log('rendering')
  // add the dog buttons to the nav bar
  renderNavBar()
  if (state.isAddingDog) {
      renderForm()
  } else {
      renderSelectedDog()
  }
}

function renderForm() {
  clearMainSection()
  console.log('lets render a form')
  const form = createForm()
  main.append(form)
}

function renderSelectedDog() {
  if (state.selectedDog === null) {
      return
  }
  console.log('rendering dog')
  const dogCard = createDogCard(state.selectedDog)
  main.append(dogCard)
}

function renderNavBar() {
  // Get the navbar container
  const navBarContainer = document.querySelector('.dogs-list')
  // clear existing buttons
  navBarContainer.innerHTML = ''
  // create add button
  const addButton = document.createElement('li')
  addButton.classList.add('dogs-list__button')
  addButton.classList.add('dogs-list__button--add')
  addButton.innerText = '+'
  addButton.addEventListener('click', () => {
      console.log('add button clicked')
      state.isAddingDog = true
      render()
  })


  navBarContainer.append(addButton)
  // Loop through each dog
  state.dogs.forEach((dog) => {
      const buttonLi = createNavbarButton(dog)
      // add the dog button to the container
      navBarContainer.append(buttonLi)
  })
}

function createNavbarButton(dog) {
  // create the dog button
  const buttonLi = document.createElement('li')
  buttonLi.classList.add('dogs-list__button')
  // add the dog name to the button
  buttonLi.innerText = dog.name

  buttonLi.addEventListener('click', () => {
      console.log('clicked')
      clearMainSection()
      state.selectedDog = dog
      render()
  })

  return buttonLi
}

function createDogCard(dog) {
  // create the card
  const card = document.createElement('section')
  card.classList.add('main__dog-section')

  // create the title
  const title = document.createElement('h2')
  title.innerText = dog.name
  card.append(title)

  // create the image
  const image = document.createElement('img')
  image.setAttribute('src', dog.image)
  card.append(image)

  // create the bio label
  const bioLabel = document.createElement('h3')
  bioLabel.innerText = 'Bio'
  card.append(bioLabel)

  // create the bio
  const bio = document.createElement('p')
  bio.innerText = dog.bio
  card.append(bio)

  // create the good dog text
  const goodDogContainer = document.createElement('p')
  const goodDogLabel = document.createElement('em')
  goodDogLabel.innerText = 'Is naughty?'
  goodDogContainer.append(goodDogLabel)

  // create good dog status
  const status = dog.isGoodDog ? ' Yes!' : ' No!'
  const goodDogStatus = document.createTextNode(status)
  goodDogContainer.append(goodDogStatus)
  card.append(goodDogContainer)

  // create the good dog toggle button
  const goodDogToggle = document.createElement('button')
  const buttonText = dog.isGoodDog ? 'Bad dog!' : 'Good dog'
  goodDogToggle.innerText = buttonText
  card.append(goodDogToggle)

  return card
}


function createForm() {
  const section = document.createElement('form')
  section.classList.add('main__dog-section')

  const title = document.createElement('h2')
  title.innerText = 'Add a new Dog'
  section.append(title)

  const form = document.createElement('form')
  form.classList.add('form')

  const labelName = document.createElement('label')
  labelName.setAttribute('for', 'name')
  labelName.innerText = "Dog's name"

  const inputName = document.createElement('input')
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('id', 'name')
  inputName.setAttribute('name', 'name')

  form.append(labelName, inputName)

  const labelPicture = document.createElement('label')
  labelPicture.setAttribute('for', 'image')
  labelPicture.innerText = "Dog's picture"

  const inputPicture = document.createElement('input')
  inputPicture.setAttribute('type', 'url')
  inputPicture.setAttribute('id', 'image')
  inputPicture.setAttribute('name', 'image')

  form.append(labelPicture, inputPicture)

  const labelBio = document.createElement('label')
  labelBio.setAttribute('for', 'bio')
  labelBio.innerText = "Dog's bio"

  const inputBio = document.createElement('textarea')
  inputBio.setAttribute('rows', '5')
  inputBio.setAttribute('id', 'bio')
  inputBio.setAttribute('name', 'bio')

  form.append(labelBio, inputBio)

  const inputSubmit = document.createElement('input')
  inputSubmit.setAttribute('type', 'submit')
  inputSubmit.setAttribute('id', 'submit')
  inputSubmit.setAttribute('name', 'submit')
  inputSubmit.setAttribute('value', "Let's add a dog!")
  inputSubmit.classList.add('form__button')

  form.append(inputSubmit)

  form.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log('form submitted', event)

      const nameInput = document.querySelector('input[name="name"]')
      const urlInput = document.querySelector('input[name="image"]')
      const bioInput = document.querySelector('textarea')

      const newDog = {
          id: data.length + 1,
          name: nameInput.value,
          bio: bioInput.value,
          isGoodDog: true,
          image: urlInput.value
      }

      console.log('our new dog', newDog)
      data.unshift(newDog)
      state.isAddingDog = false
      state.selectedDog = null
      render()
  })

  section.append(form)

  return section
}

render()