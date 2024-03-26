

// WRITE YOUR CODE BELOW

const dog = data
const dogList = document.querySelector('.dogs-list')
const addDogButton = document.querySelector('.dogs-list__button--add')
const dogHeaderButton = document.querySelector('.dogs-list__button')
const cardSection = document.querySelector('.main__dog-section')



for (let i = 0; i < dog.length; i++) {
    const li = document.createElement('li')
    li.classList.add('dogs-list__button')
    dogList.append(li)
    
    const headerH2 = document.createElement('h2')
    headerH2.innerText = dog[i].name
    li.append(headerH2)


    headerH2.addEventListener('click', () => {
        cardSection.innerHTML = ''
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
    
        const goodOrBadElement = document.createElement('p')
        cardSection.append(goodOrBadElement)
    
        const italics = document.createElement('em')
        italics.innerText = ('Is naughty?')
        goodOrBadElement.append(italics)

        const goodOrBadButton = document.createElement('button')
        const goodOrBad = dog[i].isGoodDog
        if(goodOrBad === true) {
            goodOrBadElement.innerText = ('No!')
            goodOrBadButton.innerText = ('Good Dog')}
            else {
                goodOrBadElement.innerText = ('Yes!')
                goodOrBadButton.innerText = ('Bad Dog')}
        cardSection.append(goodOrBadButton)

    
        
    })

    addDogButton.addEventListener('click', () => {

        cardSection.innerHTML = ''
        const newDogHeading = document.createElement('h2')
        newDogHeading.innerText = ('Add a new Dog')
        cardSection.append(newDogHeading)
        const newDogForm = document.createElement('form')
        newDogForm.classList.add('form')
    })
}
    
