console.log(data);

// WRITE YOUR CODE BELOW!

// for each dog, create a button
const list = document.querySelector('.dogs-list')
function createListItem(currentDog) {
  const newListItem = document.createElement('li')
  newListItem.innerText = currentDog.name
  newListItem.setAttribute('id', currentDog.id)
  newListItem.setAttribute('class', 'dogs-list__button')
  newListItem.addEventListener('click', buttonClick)
  list.append(newListItem)
  return newListItem
}

function buttonClick(event) {
  const id = event.currentTarget.id
  console.log(id)
  toggleCard(id)
}

function toggleCard(id) {
  const currentDog = `#dog${id}`
  const currentCard = document.getElementById(currentDog)

  for (let i = 0; i <= data.length; i++) {
    if (i === id) {}
    else {
      let otherDog = `#dog${i}`
      let current = document.getElementById(otherDog)
      current.style.display = 'none'
    }
  }
  console.log(...data)
  currentCard.style.display = 'block'
  console.log(currentCard)
}

function createDogCard(currentDog) {
  const main = document.querySelector('.main')

  const newCard = document.createElement('section')
  newCard.setAttribute('class', 'main__dog-section')
  newCard.setAttribute('id', `#dog${currentDog.id}`)
  newCard.style.display = 'none'

  const newTitle = document.createElement('h2')
  newTitle.innerText = currentDog.name

  const newImage = document.createElement('img')
  newImage.setAttribute('src', currentDog.image)
  newImage.setAttribute('alt', '')

  const newSection = document.createElement('div')
  newSection.setAttribute('class', 'main__dog-section__desc')

  const newSubTitle = document.createElement('h3')
  newSubTitle.innerText = 'Bio'

  const newParagraph = document.createElement('p')
  newParagraph.innerText = currentDog.bio

  const newParagraph2 = document.createElement('p')
  newParagraph2.innerHTML = '<em>Is naughty?</em> yes!'

  const newButton = document.createElement('button')
  newButton.innerText = 'Good dog!'

  newSection.append(newParagraph, newSubTitle)
  newCard.append(newTitle, newImage, newSection, newParagraph2, newButton)
  main.append(newCard)
}
function iterateDogArray() {
  data.forEach(dog => {
    createListItem(dog)
    createDogCard(dog)
  });
}

iterateDogArray()