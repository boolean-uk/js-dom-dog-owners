console.log(data);

// WRITE YOUR CODE BELOW!

// for each dog, create a button
const list = document.querySelector('.dogs-list')
function createListItem(currentDogName) {
  const newListItem = document.createElement('li')
  newListItem.innerText = currentDogName
  newListItem.setAttribute('class', 'dogs-list__button')
  list.append(newListItem)
  return newListItem
}

function createDogCard(currentDog) {
  const main = document.querySelector('.main')

  const newCard = document.createElement('section')
  newCard.setAttribute('class', 'main__dog-section')

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
    createListItem(dog.name)
    createDogCard(dog)
  });
}

iterateDogArray()