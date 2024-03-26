console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const dogSection = document.querySelector('.main__dog-section')
const addDog = document.querySelector('.dogs-list__button--add')
function addDogListItem() {
    data.forEach((dog) => {
        const newDogListItem = document.createElement('li')
        newDogListItem.classList.add('dogs-list__button')
        newDogListItem.innerText = dog.name
        dogList.append(newDogListItem)
        
        newDogListItem.addEventListener('click', () => {
        dogCard(dog)
        })
    })
}
addDogListItem()
function dogCard(dog) {
    const newSection = createDogSection()
    const dogName = document.createElement('h2')
    const image = document.createElement('img')
    const mainDogSection = createMainDogSection()
    const naughty = document.createElement('p')
    const em = document.createElement('em')
    const button = document.createElement('button')
    
    main.innerHTML = ''
    
    dogName.innerText = dog.name
    image.setAttribute('src', dog.image)
    image.setAttribute('alt', " ")
    naughty.innerText = isGoodBoy(dog)
    em.innerText = 'Is naughty? '
    button.innerText = isGoodDogButton(dog)
    newSection.append(dogName)
    newSection.append(image)
    newSection.append(mainDogSection)
    newSection.append(naughty)
    naughty.prepend(em)
    newSection.append(button)
    main.append(newSection)
    button.addEventListener('click', () => {
        dog.isGoodDog = !dog.isGoodDog

        naughty.innerText = isGoodBoy(dog)
        em.innerText = 'Is naughty? '
        button.innerText = isGoodDogButton(dog)
        newSection.append(naughty)
        naughty.prepend(em)
        newSection.append(button)
    })
}
function createDogSection() {
    const newSection = document.createElement('section')
    newSection.classList.add('main__dog-section')
    return newSection
}
function createMainDogSection() {
    const mainDogSection = document.createElement('div')
    const bio = document.createElement('h3')
    const p = document.createElement('p')
    bio.innerText = 'Bio'
    mainDogSection.classList.add('main__dog-section__desc')
    p.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    minima voluptates libero cumque rerum consequatur optio aliquid sint
    eum maxime illo laborum omnis quo ab rem cupiditate nulla
    perspiciatis ipsum!`
    mainDogSection.append(bio)
    mainDogSection.append(p)
    return mainDogSection
}
function isGoodBoy(dog) {
    if (dog.isGoodDog) {
        return 'no!'
    }
    return 'yes!'
}
function isGoodDogButton(dog) {
    if (dog.isGoodDog) {
        return 'Bad dog!'
    }
    return 'Good dog!'
}
addDog.addEventListener('click', () => {
    const addSection = document.createElement('section')
    const h2 = document.createElement('h2')
    const form = dogForm()
    main.innerHTML = ''
    addSection.classList.add('main__dog-section')
    h2.innerText = 'Add a new Dog'
    addSection.append(h2)
    addSection.append(form)
    main.append(addSection)
    
})
function dogForm() {
    const form = document.createElement('form')
    const nameLabel = document.createElement('label')
    const nameInput = document.createElement('input')
    const imageLabel = document.createElement('label')
    const imageInput = document.createElement('input')
    const bioLabel = document.createElement('label')
    const bioInput = document.createElement('textarea')
    const submit = document.createElement('input')
    form.classList.add('form')
    nameLabel.setAttribute('for', "name")
    nameLabel.innerText = "Dog's name"
    nameInput.setAttribute('type', "text")
    nameInput.setAttribute('id', "name")
    nameInput.setAttribute('name', "name")
    imageLabel.setAttribute('for', "image")
    imageLabel.innerText = "Dog's picture"
    imageInput.setAttribute('type', "url")
    imageInput.setAttribute('id', "image")
    imageInput.setAttribute('name', "image")
    bioLabel.setAttribute('for', "bio")
    bioLabel.innerText = "Dog's bio"
    bioInput.setAttribute('rows', "5")
    bioInput.setAttribute('id', "bio")
    bioInput.setAttribute('name', "bio")
    submit.setAttribute('type', "submit")
    submit.setAttribute('id', "submit")
    submit.setAttribute('name', "submit")
    submit.setAttribute('value', "Let's add a dog!")
    submit.classList.add('form__button')
    form.append(nameLabel)
    form.append(nameInput)
    form.append(imageLabel)
    form.append(imageInput)
    form.append(bioLabel)
    form.append(bioInput)
    form.append(submit)
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const newDogListItem = document.createElement('li')
        newDogListItem.classList.add('dogs-list__button')
        newDogListItem.innerText = nameInput.value
        addDog.after(newDogListItem)
        newDogListItem.addEventListener ('click', () => {
            const newSection = createDogSection()
            const dogName = document.createElement('h2')
            const image = document.createElement('img')
            const mainDogSection = document.createElement('div')
            const bio = document.createElement('h3')
            const p = document.createElement('p')
            
            main.innerHTML = ''
            
            dogName.innerText = nameInput.value
        
            image.setAttribute('src', imageInput.value)
            image.setAttribute('alt', " ")
            bio.innerText = 'Bio'
            mainDogSection.classList.add('main__dog-section__desc')
            p.innerText = bioInput.value
        
            newSection.append(dogName)
            newSection.append(image)
            newSection.append(mainDogSection)
            mainDogSection.append(bio)
            mainDogSection.append(p)
        
            main.append(newSection)
        })
    })
    return form
}
