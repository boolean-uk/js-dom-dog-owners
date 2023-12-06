//console.log(data);

// WRITE YOUR CODE BELOW!
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const HeaderUl = document.querySelector('.dogs-list')

data.forEach((dogDetails) => {
    const dogNameButton = document.createElement('li')
    dogNameButton.setAttribute('class', 'dogs-list__button')
    dogNameButton.innerText = dogDetails.name
    HeaderUl.append(dogNameButton)
})

data.forEach((dog) => {
    const dogSection = document.createElement('section')
    dogSection.setAttribute('class', 'main__dog-section')
    main.append(dogSection)

    const dogName = document.createElement('h2')
    dogName.innerText = dog.name
    dogSection.append(dogName)

    const dogImage = document.createElement('img')
    dogImage.src = dog.image
    dogSection.append(dogImage)

    const dogDescription = document.createElement('div')
    dogDescription.setAttribute('class', 'main__dog-section__desc')
    dogSection.append(dogDescription)

    const bio = document.createElement('h3')
    bio.innerText = 'Bio'
    dogDescription.append(bio)

    const aboutDog = document.createElement('p')
    aboutDog.innerText = dog.bio
    dogDescription.append(aboutDog)

    const dogQuestionContainer = document.createElement('p')
    dogSection.append(dogQuestionContainer)

    const dogQuestionEm = document.createElement('em')
    dogQuestionEm.innerText = 'is naughty?'
    dogQuestionContainer.append(dogQuestionEm)

    let dogBehavior = dog.isGoodDog

    const dogAnswer = document.createElement('p')
    dogAnswer.innerText = dogBehavior ? 'No' : 'Yes'
    dogQuestionContainer.append(dogAnswer)

    const button = document.createElement('button')
    button.innerText = dogBehavior ? 'Good Dog' : 'Bad Dog'
    dogSection.append(button)

    button.addEventListener('click', () => {
        dogBehavior = !dogBehavior;
        dogAnswer.innerText = dogBehavior ? 'No' : 'Yes'; 
        button.innerText = dogBehavior ? 'Good Dog' : 'Bad Dog'; 
    })

    main.append(dogSection)

    dogSection.style.display = 'none'
})

const dogNameButtons = document.querySelectorAll('.dogs-list__button')
const dogSections = document.querySelectorAll('.main__dog-section')
const addDog = document.querySelector('.dogs-list__button--add')

dogNameButtons.forEach((dogName, index) => {
    dogName.addEventListener('click', () => {
        if (dogName !== dogNameButtons[0]) {
            formSection.style.display = 'none'
        } else {
            formSection.style.display = 'block'
        }
        dogSections.forEach((section) => {
            section.style.display = 'none'
        })
        // Display the clicked dog's section
        dogSections[index].style.display = 'block'
    })
})

////Form //////

const formSection = document.createElement('section')
formSection.classList.add('main__dog-section')

const form = document.createElement('form')
form.classList.add('form')

const formHeading = document.createElement('h2')
form.append(formHeading)

const labelName = document.createElement('label')
labelName.innerText = "Dog's name"
labelName.setAttribute('for', 'name')
form.append(labelName)

const inputName = document.createElement('input')
inputName.setAttribute('type', 'text')
inputName.setAttribute('id', 'name')
inputName.setAttribute('name', 'name')
form.append(inputName)

const labelImage = document.createElement('label')
labelImage.innerText = "Dog's picture"
form.append(labelImage)

const inputImage = document.createElement('input')
inputImage.setAttribute('type', 'url')
inputImage.setAttribute('id', 'image')
inputImage.setAttribute('name', 'image')
form.append(inputImage)

const labelBio = document.createElement('label')
labelBio.innerText = "Dog's bio"
form.append(labelBio)

const bioTextArea = document.createElement('textarea')
bioTextArea.setAttribute('rows', '5')
bioTextArea.setAttribute('id', 'bio')
bioTextArea.setAttribute('name', 'bio')
form.append(bioTextArea)

const submit = document.createElement('input')
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'submit')
submit.setAttribute('value', "Let's add a dog")
submit.setAttribute('class', 'form__button')
form.append(submit)

formSection.append(form)
main.append(formSection)

const submitForm = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const newDog = {
            id: data.length + 1,
            name: inputName.value,
            bio: bioTextArea.value,
            isGoodDog: false,
            image: inputImage.value
        }

        data.unshift(newDog)

        inputName.value = ''
        inputImage.value = ''
        bioTextArea.value = ''

        firstMainSection.style.display = 'none'
    })
}

submitForm()

const firstMainSection = document.querySelector('main > section:first-of-type')

const firstNameButton = document.querySelector('.dogs-list__button--add')

firstNameButton.addEventListener('click', (e) => {
    firstMainSection.style.display = 'none'
})
