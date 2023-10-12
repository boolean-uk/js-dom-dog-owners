
//access the mainCard section 
const mainCard= document.querySelector('.main__dog-section')


// render and append a dog button
const dogsList = document.querySelector('.dogs-list')
let dogsListElement

const makeDogButton = (dog) => {
    dogsListElement = document.createElement('li')
    dogsList.append(dogsListElement)
    dogsListElement.innerText = `${dog.name}`
    dogsListElement.setAttribute('class', 'dogs-list__button')
}

//CARD LAYOUT - creates all elements (empty)

// - img element
const dogPic = document.createElement('img')
mainCard.append(dogPic)

// - info section
const infoSection = document.createElement('div')
mainCard.append(infoSection)
infoSection.setAttribute('class', "main__dog-section__desc")

    const dogBioTitle = document.createElement('h3')
    infoSection.append(dogBioTitle)

    const dogBio  = document.createElement('p')
    infoSection.append(dogBio)

// - nice doggo? 
const isDogNaughty = document.createElement('p')
mainCard.append(isDogNaughty)
const question = document.createElement('em')


const chooseIsGoodOrBad = document.createElement('button')


//on click, change button value
const makeDogGood = () => chooseIsGoodOrBad.innerText = 'Good dog!' 
const makeDogBad = () => chooseIsGoodOrBad.innerText = 'Bad dog!' 

chooseIsGoodOrBad.innerText = 'Good dog!'
let currentStatus  = chooseIsGoodOrBad.innerText 


chooseIsGoodOrBad.addEventListener('click', event => {
if (currentStatus === 'Good dog' ) {
    makeDogBad() 
    currentStatus  = chooseIsGoodOrBad.innerText} else { 
        makeDogGood()
        currentStatus  = chooseIsGoodOrBad.innerText
    }  
})




// p.addEventListener(
//   'click',
//   () => {
//     const currentClass = p.getAttribute('class');

//     if (currentClass === 'blue') {
//       makeRed()
//     } else {
//       makeBlue()
//     }
//   }
// )


//CONTENTS - render the contents of each element inside the main card
const renderDogName = (dog) => {
    const dogName = document.querySelector('h2')
    dogName.innerText = `${dog.name}`
}
const renderDogImage = (dog) => {

    dogPic.setAttribute('src', `${dog.image}`)
    
} 
const createDogBioH3 = () => {
    dogBioTitle.innerText = 'Bio'
}

const renderBio = (dog) => {
    dogBio.innerText = `${dog.bio}`
}


const renderIsDogNaughty = (dog) => {
    
    question.innerText = 'Is naughty? '
    isDogNaughty.append(question)

    const text = document.createTextNode(`${dog.isGoodDog === true ? "No!" : "Yes!"}`)
    isDogNaughty.append(text)
    mainCard.append(chooseIsGoodOrBad) 
    
}


//render the main card
const renderDogCardLayout = (dog) => {
    renderDogName(dog)
    renderDogImage(dog)
    createDogBioH3()
    renderBio(dog)
    renderIsDogNaughty(dog)
}


// render and append EACH dog button + on click, render the card matching the select dog
data.forEach(dog => {

    makeDogButton(dog)
    dogsListElement.addEventListener('click', event => renderDogCardLayout(dog))

})


