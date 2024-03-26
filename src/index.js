console.log(data);
const dogList = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const dogSection = document.querySelector('.main__dog-section')

// WRITE YOUR CODE BELOW!
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
    const button = goodDogButton(dog)
    
    main.innerHTML = ''
    
    dogName.innerText = dog.name

    image.setAttribute('src', dog.image)
    image.setAttribute('alt', " ")

    naughty.innerText = isGoodBoy(dog)
    em.innerText = 'Is naughty? '

    newSection.append(dogName)
    newSection.append(image)
    newSection.append(mainDogSection)
    newSection.append(naughty)
    naughty.prepend(em)
    newSection.append(button)

    main.append(newSection)
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

function goodDogButton(dog) {
    const button = document.createElement('button')
    button.innerText = isGoodDogButton(dog)
    return button
}