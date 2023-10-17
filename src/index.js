// cored done ... sort of 



//TODO: refactor larger variables into smaller ones
//TODO: stop form from being created each time a dog nav button is clicked
//TODO: extension - get the toggle function on good dog!/ bad dog! working 


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

//h2 title
const dogName = document.querySelector('h2')

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
isDogNaughty.append(question)
let text = document.createTextNode('')
isDogNaughty.append(text)


//CONTENTS - render the contents of each element inside the main card

const renderDogName = (dog) => {
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
    

    //question and answer
    question.innerText = 'Is naughty? '
    text.textContent = `${dog.isGoodDog === true ? "No!" : "Yes!"}`


    let currentStatus = 'Good dog!'
    const chooseIsGoodOrBad = document.createElement('button')
    chooseIsGoodOrBad.innerText = currentStatus
    mainCard.append(chooseIsGoodOrBad)
    
    


    //toggle button
    const makeDogGood = () => {
        chooseIsGoodOrBad.innerText = 'Bad dog!' 
        text.textContent= 'No!' 
    }

    const makeDogBad = () => {
        chooseIsGoodOrBad.innerText = 'Good dog!' 
        text.textContent= 'Yes!' 
    }

    chooseIsGoodOrBad.addEventListener('click', () => {
        if (currentStatus === 'Good dog!' ) {
            makeDogGood() 
            currentStatus = chooseIsGoodOrBad.innerText 
        } else { 
            makeDogBad()
            currentStatus = chooseIsGoodOrBad.innerText 
        }  
    })
 
    
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
    dogsListElement.addEventListener('click', () => {
        
        if(dogName.innerText === 'Add a new dog') {
            mainCard.replaceChildren(dogName,
                dogPic,
                dogBioTitle,
                dogBio,
                isDogNaughty)
        }
        renderDogCardLayout(dog)
    })
})


// FORM
const form = document.createElement('form')
form.setAttribute('class', 'form')

const renderForm = () => {
    mainCard.append(form)
    renderFormTitle()
    createFormInput()
    createTextArea()
    createSubmitButton()
}

//FORM layout

//title
const renderFormTitle = () => {
    form.append(dogName)
    dogName.innerText = 'Add a new dog'
}
//input
const createFormInput = () => {
    const dogLabelsNames = ['name', 'image']
    dogLabelsNames.forEach(e => {
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    form.append(label)
    form.append(input)
    
    label.setAttribute('for', e)
    label.setAttribute('id', e.toUpperCase())
    input.setAttribute('id', e)
    input.setAttribute('name', e)
    
    })

    document.querySelector('#NAME').innerText = 'Dog\'s name'
    document.querySelector('#IMAGE').innerText = 'Dog\'s picture'
}

//textarea (bio)
const createTextArea = () => {
    const label = document.createElement('label')
    label.setAttribute('for', 'bio')
    label.setAttribute('id', 'BIO')
    const textArea = document.createElement('textarea')
    textArea.setAttribute('rows', '5')
    textArea.setAttribute('id', 'bio')
    textArea.setAttribute('name', 'bio')
    
    form.append(label)
    form.append(textArea)
    
    
    document.querySelector('#BIO').innerText = 'Dog\'s bio'
}

//submit
const createSubmitButton = () => { 
    const submit = document.createElement('input')
    form.append(submit)
    submit.setAttribute('type', 'submit')
    submit.setAttribute('id', 'submit') 
    submit.setAttribute('name', 'sbmit')
    submit.setAttribute('value', 'Let\'s add a dog!')
    submit.setAttribute('class', 'form__button')
}



// display form when click on +
const newForm = document.querySelector('.dogs-list__button--add')
newForm.addEventListener('click', event => {
    if(dogName.innerText === 'Add a new dog') {
    } else {
        mainCard.replaceChildren(form)
        renderForm()
    }
   
})

// this temporarily saves our newDog data into the data array

  form.addEventListener('submit', event => {

    event.preventDefault();

    const newDog =   {
        id: 0,
        name: "",
        bio: ``,
        isGoodDog: true,
        image: ""
      }
    data.unshift(newDog)

    newDog.name = form.querySelector('input[id="name"]').value
    newDog.image = form.querySelector('input[id="image"]').value
    newDog.bio = form.querySelector('textarea[id="bio"]').value

    //clean the slate
    dogsList.replaceChildren()
    

    // put a + button back
    const add = document.createElement('li')
    dogsList.append(add)
    add.innerText = `+`
    add.setAttribute('class', 'dogs-list__button dogs-list__button--add')
    
    //make sure it's functional
    add.addEventListener('click', event => {
        if(dogName.innerText === 'Add a new dog') {
        } else {
            mainCard.replaceChildren(form)
            renderForm()
        }
       
    })

    data.forEach(dog => {
        

        makeDogButton(dog)
        dogsListElement.addEventListener('click', event => {
            
            if(dogName.innerText === 'Add a new dog') {
                mainCard.replaceChildren(dogName,
                    dogPic,
                    dogBioTitle,
                    dogBio,
                    isDogNaughty)
            }
            renderDogCardLayout(dog)
        })
    })

})

