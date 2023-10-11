// WRITE YOUR CODE BELOW!

// LIST OF DOGGOS
const dogList = document.querySelector('header > ul')

// CREATE HEADER DOGGO LIST
const dogListItem = data.forEach(dog => {
    const dogListCard = document.createElement('li')
    dogListCard.innerText = dog.name
    dogList.append(dogListCard)

    dogListCard.setAttribute('class', 'dogs-list__button ')

    // CLICK EVENT LISTENER FUNCTION
    dogListCard.addEventListener('click', () => {

        // DEFINE SECTION TO APPEND TO
        const dogDisplayCard = document.querySelector('section')

        // REMOVE PREVIOUS DETAILS ON CLICK
        const dogDisplayDetails = document.querySelectorAll('section > *')
        dogDisplayDetails.forEach((element) => element.remove())
        
        // ADD NAME
        const dogDisplayName = document.createElement('h2')
        dogDisplayName.innerText = dog.name
        dogDisplayCard.append(dogDisplayName)
           
        // ADD PHOTO
        const dogDisplayImage = document.createElement('img')
        dogDisplayImage.src = dog.image
        dogDisplayImage.alt = `${dog.name} photo`
        dogDisplayImage.width = '420'
        dogDisplayImage.height = '420'
        dogDisplayCard.append(dogDisplayImage)

        // ADD BIO  
        const bioHeader = document.createElement('h3')
        bioHeader.innerText = 'Bio'
        dogDisplayCard.append(bioHeader)

        const dogDisplayBio = document.createElement('p')
        dogDisplayBio.innerText = dog.bio
        dogDisplayCard.append(dogDisplayBio)

        // MAIN SECTION BOTTOM
        const dogDisplayBottom = document.createElement('div')
        dogDisplayBottom.setAttribute('class', 'main__dog-section__btn')
        
        // ADD GOOD OR BAD BOI
        const dogDisplayGoodBad = document.createElement('p')
        dogDisplayGoodBad.setAttribute('class', 'main__dog-section__desc')

        if (dog.isGoodDog === true) {
            dogDisplayGoodBad.innerHTML = `<em>is good boi?</em> Yes!`
        }
        else {
            dogDisplayGoodBad.innerHTML = `<em>is good boi?</em> No:(`
        }
        dogDisplayBottom.append(dogDisplayGoodBad)
        dogDisplayCard.append(dogDisplayBottom)


        // ADD GOOD/BAD BOI BUTTON
        const goodBoiButton = document.createElement('button')
        const goodBoiButtonText = document.createElement('p')

        if (dog.isGoodDog === true) {
            goodBoiButtonText.innerText = 'Bad Doggo'
        }
        else {
            goodBoiButtonText.innerText = 'Good Doggo'
        }

        goodBoiButton.append(goodBoiButtonText)
        dogDisplayBottom.append(goodBoiButton)
        dogDisplayCard.append(dogDisplayBottom)

        // CHANGE BUTTON DISPLAY ON CLICK
        goodBoiButton.addEventListener('click', () => {

            if (goodBoiButtonText.innerText === 'Bad Doggo') {
                goodBoiButtonText.innerText = 'Good Doggo'
                dogDisplayGoodBad.innerHTML = `<em>is good boi?</em> No:(`   
            }       
            else  {
                goodBoiButtonText.innerText = 'Bad Doggo'
                dogDisplayGoodBad.innerHTML = `<em>is good boi?</em> Yes!`             
            }
        })
    })
})
