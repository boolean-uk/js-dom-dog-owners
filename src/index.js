console.log(data);

console.log(data[0])

const state = {
    dogs: data,
    selectedDog: null,
    addingDog: false
}

const main = document.querySelector('main') //Identifies main tag

function clearMainSection() { // Removes (refreshes) the main element
    main.innerHTML = ''
}

function render() { // renders 
    console.log('rendering')
    renderNav()
    if (state.addingDog) {
        renderForm()
    } else {
        renderSelectedDog()
    }
}

function renderForm() { //clears the main section and appends form
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

function renderNav() { //creates nav bar and removes old one
    const navBarContainer = document.querySelector('.dogs-list')
    navBarContainer.innerHTML = ''
    const addButton = document.createElement('li')
    addButton.classList.add('dogs-list__button')
    addButton.classList.add('dogs-list__button--add')
    addButton.innerText = '+'
    addButton.addEventListener('click', () => {
        console.log('add button clicked')
        state.addingDog = true
        render()
    })

    navBarContainer.append(addButton)
    state.dogs.forEach((dog) => {
        const buttonLi = createNavbarButton(dog)
        navBarContainer.append(buttonLi)
    })
}

function createNavbarButton(dog) { //makes dog name buttons and clears the main section before making new card
    const buttonList = document.createElement('li')
    buttonList.classList.add('dogs-list__button')
    buttonList.innerText = dog.name

    buttonList.addEventListener('click', () => {
        console.log('clicked')
        clearMainSection()
        state.selectedDog = dog
        render()
    })
    return buttonList
}

function createDogCard(dog) { // makes dog card itself
    const card = document.createElement('section')
    card.classList.add('main__dog-section')

    const title = document.createElement('h2')
    title.innerText = dog.name
    card.append(title)

    const image = document.createElement('img')
    image.setAttribute('src', dog.image)
    card.append(image)

    const bioLabel = document.createElement('h3')
    bioLabel.innerText = 'Bio'
    card.append(bioLabel)

    const bio = document.createElement('p')
    bio.innerText = dog.bio
    card.append(bio)
    return card
}

function createForm() { //Makes the form
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

    form.append()

    const labelPicture = document.createElement('label')
    labelPicture.setAttribute('for', 'image')
    labelPicture.innerText = "Dog's picture"

    const inputPicture = document.createElement('input')
    inputPicture.setAttribute('type', 'url')
    inputPicture.setAttribute('id', 'image')
    inputPicture.setAttribute('name', 'image')

    form.append()

    const labelBio = document.createElement('label')
    labelBio.setAttribute('for', 'bio')
    labelBio.innerText = "Dog's bio"

    const inputBio = document.createElement('textarea')
    inputBio.setAttribute('rows', '5')
    inputBio.setAttribute('id', 'bio')
    inputBio.setAttribute('name', 'bio')

    const inputSubmit = document.createElement('input')
    inputSubmit.setAttribute('type', 'submit')
    inputSubmit.setAttribute('id', 'submit')
    inputSubmit.setAttribute('name', 'submit')
    inputSubmit.setAttribute('value', "Let's add a dog!")
    inputSubmit.classList.add('form__button')

    form.append(labelName, inputName, labelPicture, inputPicture,labelBio, inputBio, inputSubmit) //append all elements to form

    form.addEventListener('submit', (event) => { //after submitting form
        event.preventDefault()
        console.log('form submitted', event)

        const nameInput = document.querySelector('input[name="name"]')
        const urlInput = document.querySelector('input[name="image"]')
        const bioInput = document.querySelector('textarea')

        const newDog = {
            id: data.length + 1,
            name: nameInput.value,
            bio: bioInput.value,
            image: urlInput.value
        }

        console.log('our new dog', newDog)
        data.unshift(newDog)
        state.addingDog = false
        state.selectedDog = null
        render()
    })
    section.append(form)
    return section
}

render()