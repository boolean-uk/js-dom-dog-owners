
const dogsList = document.querySelector('.dogs-list')

data.forEach((dogJSData) => {
  
  const li = document.createElement('li')
  dogsList.appendChild(li)
  li.setAttribute('class', 'dogs-list__button')
  li.innerText = dogJSData.name

  // dogImg = document.createElement('img')
  // bio = document.createElement('h3')
  // desc = document.createElement('p')


  // buttonDiv= document.createElement('div')
  // buttonDiv.setAttribute('class', 'main__dog-section__btn')
  // goodOrNot = document.createElement('p')
  // goodOrNot.setAttribute('style', 'font-style: italic')
  // goodDogButton = document.createElement('button')

  li.addEventListener('click', () => {
    
    // delete section
    const dogCard = document.querySelector('.main__dog-section')
    dogCard.innerHTML = ''
    // change to create and append instead of select and update

    const dogName = document.createElement('h2')
    dogName.innerText = dogJSData.name
    dogCard.appendChild(dogName)

    dogImg = document.createElement('img')
    dogImg.src = dogJSData.image
    dogCard.appendChild(dogImg)
    dogImg.setAttribute('height', '300px')
    dogImg.setAttribute('width', '500px')

    bio = document.createElement('h3')
    bio.innerText = 'Bio'
    dogCard.appendChild(bio)

    desc = document.createElement('p')
    desc.innerText = dogJSData.bio
    dogCard.appendChild(desc)

    buttonDiv= document.createElement('div')
    buttonDiv.setAttribute('class', 'main__dog-section__btn')
    goodOrNot = document.createElement('p')
    goodOrNot.setAttribute('style', 'font-style: italic')
    goodDogButton = document.createElement('button')

    dogCard.appendChild(buttonDiv)

    if (dogJSData.isGoodDog === true){
      goodOrNot.innerText = 'is Naughty?' + ' ' + 'yes!'
      goodDogButton.innerText = 'Good'
    }
    else{
      goodOrNot.innerText = 'is Naughty?' + ' ' + 'no!'
      goodDogButton.innerText = 'Bad'
    }

    buttonDiv.appendChild(goodOrNot)
    buttonDiv.appendChild(goodDogButton)
  })

});

// click on + button and empty form displays
// new dog is created next to + 
// 

const createNewDog = document.querySelector(".dogs-list__button--add")
createNewDog.addEventListener('click', () => {

  const dogCard = document.querySelector('.main__dog-section')
  dogCard.innerHTML = ''
  const newForm = document.createElement('form')
  dogCard.appendChild(newForm)
  newForm.setAttribute('height', '500px')

  const label1 = document.createElement('label')
  label1.innerText = 'Dog name'
  newForm.append(label1)

  const input1 = document.createElement('input')
  newForm.append(input1)

  const label2 = document.createElement('label')
  label2.innerText = 'Dog picture'
  newForm.append(label2)

  const input2 = document.createElement('input')
  input2.setAttribute('type', 'url')
  newForm.append(input2)

  const label3 = document.createElement('label')
  label3.innerText = ('dog bio')
  newForm.append(label3)

  const textarea = document.createElement('textarea')
  textarea.setAttribute('rows', '5')
  newForm.append(textarea)
})