console.log(data);

// WRITE YOUR CODE BELOW!
const dogsList = document.querySelector('.dogs-list')
const mainList = document.querySelector('.main')
const dogAddList = document.querySelector('.dogs-list__button.dogs-list__button--add')

for (let i = 0; i < data.length; i++) {
    const dogs = document.createElement('li')
    dogs.classList.add('dogs-list__button')
    
    dogs.innerText = data[i].name
    dogsList.append(dogs)

    dogs.addEventListener('click', () => {
        mainList.innerHTML = ''

        const dogsCards = document.createElement('section')
        dogsCards.classList.add('main__dog-section')
        mainList.append(dogsCards)

        const h2 = document.createElement('h2')
        h2.innerText = data[i].name
        dogsCards.append(h2)

        const image = document.createElement('img')
        image.setAttribute('src', data[i].image)
        dogsCards.append(image)

        const h3Bio = document.createElement('h3')
        h3Bio.innerText = 'Bio'
        dogsCards.append(h3Bio)

        const bio = document.createElement('p')
        bio.innerText = data[i].bio
        dogsCards.append(bio)

        const isNaughty = document.createElement('p')
        isNaughty.style.fontStyle = 'italic'

            if (data[i].isGoodDog === true) {
                isNaughty.innerText = 'Is naughty? Yes'
            } else {
                isNaughty.innerText = 'Is naughty? No'
            }

        dogsCards.append(isNaughty)

        const buttonGoodDog = document.createElement('button')
        buttonGoodDog.classList.add('form__button')

            if (data[i].isGoodDog === true) {
                buttonGoodDog.innerText = 'Good dog!'
            } else {
                buttonGoodDog.innerText = 'Bad dog!'
            }

        dogsCards.append(buttonGoodDog)

        buttonGoodDog.addEventListener('click', () => {
            if (data[i].isGoodDog === true) {
                buttonGoodDog.innerText = 'Bad dog!'
                isNaughty.innerText = 'Is naughty? No'
            } else {
                buttonGoodDog.innerText = 'Good dog!'
                isNaughty.innerText = 'Is naughty? Yes'
            }
        })
    })
}

dogAddList.addEventListener('click', () => {
    mainList.innerHTML = ''

    const sectiondogAddList = document.createElement('section')
    sectiondogAddList.classList.add('main__dog-section')
    mainList.append(sectiondogAddList)

    const h2AddList = document.createElement('h2')
    h2AddList.innerText = 'Add a new Dog'
    sectiondogAddList.append(h2AddList)

    const formAddList = document.createElement('form')
    formAddList.classList.add('form')
    sectiondogAddList.append(formAddList)

    formAddList.addEventListener('submit', (event) => {
        event.preventDefault()
    
        const newDog = document.createElement('li')
        newDog.classList.add('dogs-list__button')

        newDog.innerText = document.querySelector('#name').value
        dogsList.append(newDog)
    })

    const formLabelName = document.createElement('label')
    formLabelName.setAttribute('for', 'name')
    formLabelName.innerText = "Dog's name"
    formAddList.append(formLabelName)

    const formInputText = document.createElement('input')
    formInputText.setAttribute('type', 'text')
    formInputText.setAttribute('id', 'name')
    formInputText.setAttribute('name', 'name')
    formAddList.append(formInputText)

    const formLabelImage = document.createElement('label')
    formLabelImage.setAttribute('for', 'image')
    formLabelImage.innerText = "Dog's picture"
    formAddList.append(formLabelImage)

    const formInputImage = document.createElement('input')
    formInputImage.setAttribute('type', 'url')
    formInputImage.setAttribute('id', 'image')
    formInputImage.setAttribute('name', 'image')
    formAddList.append(formInputImage)

    const formLabelBio = document.createElement('label')
    formLabelBio.setAttribute('for', 'bio')
    formLabelBio.innerText = "Dog's bio"
    formAddList.append(formLabelBio)

    const formTextAreaBio = document.createElement('textarea')
    formTextAreaBio.setAttribute('rows', '5')
    formTextAreaBio.setAttribute('id', 'bio')
    formTextAreaBio.setAttribute('name', 'bio')
    formAddList.append(formTextAreaBio)

    const formInputSubmit = document.createElement('input')
    formInputSubmit.setAttribute('type', 'submit')
    formInputSubmit.setAttribute('id', 'submit')
    formInputSubmit.setAttribute('name', 'submit')
    formInputSubmit.setAttribute('value', "Let's add a dog!")
    formInputSubmit.classList.add('form__button')
    formAddList.append(formInputSubmit)
})