//TODO: render the navbar (dog list) : DONE
//TODO: break down the problem: DONE
//TODO: draft overal code structure, name functions: DONE
//TODO: write the functions to render the image and info for dog[0]: DONE
//TODO: Make dog[0] main card render only on click: DONE
//TODO: figure out how to make this apply to all other dogs and their corresponding buttons : DONE
//TODO: find out how to reset things after each click so that only the card for the last selected dog is displayed: DONE
//TODO: refactor, so that the forEach() loop only apply to the assignement of certain content or attributes (eg. img src, innerText, ...) and NOT to the creation of the elements containing those: DONE

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
    isDogNaughty.innerText = `Is naughty? ${
        dog.isGoodDog === true ? "No!" : "Yes!"
    }`
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

//extension
const createIsGoodOrBad = () => {}
