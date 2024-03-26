

// WRITE YOUR CODE BELOW

const dog = data
const dogList = document.querySelector('.dogs-list')
const addDogButton = document.querySelector('.dogs-list__button--add')
const dogHeaderButton = document.querySelector('.dogs-list__button')
const cardSection = document.querySelector('.main__dog-section')

const deleteH2 = document.querySelector('.main__dog-section h2')
deleteH2.remove('h2')
cardSection.append(deleteH2)




for (let i = 0; i < dog.length; i++) {
    const li = document.createElement('li')
    li.classList.add('dogs-list__button')
    dogList.append(li)
    
    const headerH2 = document.createElement('h2')
    headerH2.innerText = dog[i].name
    li.append(headerH2)
}

// the event listener must display dogCard when a dog's name is selected in the header
dogHeaderButton.addEventListener('click', () => {
    const openDogCard = createDogCard()

    if(Event.target === true) {
        openDogCard
    }
})



function createDogCard() {

    for (let i = 0; i < dog.length; i++) { 
    const cardH2 = document.createElement('h2')
    cardH2.innerText = dog[i].name
    cardSection.append(cardH2)
    

    const cardImage = document.createElement('img')
    cardImage.setAttribute('src', dog[i].image)
    cardSection.append(cardImage)

    const div = document.createElement('div')
    div.classList.add('main__dog-section__desc')
    cardSection.append(div)

    const cardH3 = document.createElement('h3')
    div.append(cardH3)

    const bio = document.createElement('p')
    bio.innerText = ('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum')
    div.append(bio)

    const goodOrBad = document.createElement('p')
    cardSection.append(goodOrBad)

    const italics = document.createElement('em')
    italics.innerText = ('Is naughty?')
    goodOrBad.innerText = ('yes!')
    goodOrBad.append(italics)
    
    const goodOrBadButton = document.createElement('button')
    goodOrBadButton.setAttribute('src', dog[i].isGoodDog)
    cardSection.append(goodOrBadButton)

    const goodDogButton = document.createElement('button')
    goodDogButton.innerText = ('Good dog!')
    cardSection.append(goodDogButton)
    }
}
