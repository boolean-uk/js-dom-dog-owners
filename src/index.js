console.log(data);

// WRITE YOUR CODE BELOW!

const main = document.querySelector('.main')
const dogsList = document.querySelector('.dogs-list')
const mainDogSection = document.querySelector('.main__dog-section')

// Main

function createButton() {
    for (let i = 0; i < data.length; i++) {
        const dogLi = document.createElement('li');
        dogLi.setAttribute('class','dogs-list__button');
        dogLi.setAttribute('id', i);
        dogLi.innerText = data[i].name
        dogsList.append(dogLi);

        // dogid
    }
}

// Dog Cards

function createCard(dogID) {

    main.innerHTML = ``

    const currentDog = data[dogID]
    const dogSection = document.createElement(`section`)
    dogSection.setAttribute(`class`, `main__dog-section`)

    const dogName = document.createElement(`h2`)
    dogName.innerText = currentDog.name
    dogSection.append(dogName)

    const dogImage = document.createElement(`img`)
    dogImage.setAttribute(`src`, currentDog.image)
    dogImage.setAttribute(`alt`, ``)
    dogSection.append(dogImage)

    const dogDiv = document.createElement(`div`)
    dogDiv.setAttribute(`class`, `main__dog-section__desc`)

    const dogH3 = document.createElement(`h3`);
    dogH3.innerText = `Bio`
    dogDiv.append(dogH3)
    
    const dogDivP = document.createElement(`p`);
    dogDivP.innerText = currentDog.bio
    dogDiv.append(dogDivP)
    
    dogSection.append(dogDiv)

    const dogP = document.createElement(`p`);
    const dogButton = document.createElement('button')

    if (currentDog.isGoodDog) {
        dogP.innerHTML = `<em>Is naughty?</em> no!`
        dogButton.innerText = `Good dog!`
    }
        else {
        dogP.innerHTML = `<em>Is naughty?</em> yes!`
        dogButton.innerText = `Bad dog!`
        }

        dogSection.append(dogP)
        dogSection.append(dogButton)
    
// if currentDog.isGoodDog = true
// else
    main.append(dogSection)


}

// Dogs List



// Main-Dog-Section

// create a constant for the "li"
// set attributes of the "li"
// set the innerText of the "li"
// append in to the "ul" constant

createButton()
createCard(1)
