const ALL_DOG_CARDS = {}
const DOGS_MENU = document.querySelector('.dogs-list')
const MAIN_SECTION = document.querySelector('main')

function setUp() {
  for (const DOG of data) {
    generateMenu(DOG.id, DOG.name)
    generateStackOfDogCard(DOG.id, DOG.name, DOG.image, DOG.bio, DOG.isGoodDog)
  }
}

function generateMenu(dogId, dogName) {
  const MENU_ITEM = document.createElement('li')
  const DOG_ID = `dogId#${dogId}`
  MENU_ITEM.setAttribute('id', DOG_ID)
  MENU_ITEM.setAttribute('class', 'dogs-list__button')
  MENU_ITEM.innerText = dogName
  DOGS_MENU.appendChild(MENU_ITEM)
  addEventlistenersToMenuItem(`dogId#${dogId}`)
}

function addEventlistenersToMenuItem(dogMenuId) {
  const MENU_ITEM_CLICK = document.getElementById(dogMenuId)

  MENU_ITEM_CLICK.addEventListener("click", function () {
    console.log(ALL_DOG_CARDS[this.id])
    document.querySelector('.main__dog-section').remove()
    MAIN_SECTION.appendChild(ALL_DOG_CARDS[this.id])
  });
}

function generateStackOfDogCard(dogId, dogName, dogImagePath, dogBio, isGoodDog) {
  const DOG_CARD = document.createElement('section')
  DOG_CARD.setAttribute('class', 'main__dog-section')

  DOG_CARD.appendChild(generateCardHeading(dogName))
  DOG_CARD.appendChild(generateDogImage(dogImagePath, dogName))
  DOG_CARD.appendChild(generateBioSection(dogBio))
  DOG_CARD.appendChild(generateNaughtyLabel(isGoodDog))
  DOG_CARD.appendChild(generateNaughtyButton(dogId, isGoodDog))

  ALL_DOG_CARDS[`dogId#${dogId}`] = DOG_CARD
}

function generateCardHeading(dogName) {
  const DOG_HEADING = document.createElement('h2')
  const DOG_HEADING_TITLE_NODE = document.createTextNode(dogName);
  DOG_HEADING.appendChild(DOG_HEADING_TITLE_NODE)

  return DOG_HEADING
}

function generateDogImage(dogImagePath, dogName) {
  const DOG_IMAGE = document.createElement('img')
  DOG_IMAGE.setAttribute('alt', dogName)
  DOG_IMAGE.setAttribute('src', dogImagePath)

  return DOG_IMAGE
}

function generateBioSection(dogBio) {
  const DOG_BIO_SECTION = document.createElement('div')
  DOG_BIO_SECTION.setAttribute('class', 'main__dog-section__desc')

  const DOG_BIO_TITLE = document.createElement('h3')
  const BIO_TITLE_NODE = document.createTextNode('Bio');
  DOG_BIO_TITLE.appendChild(BIO_TITLE_NODE)

  const DOG_BIO_MAIN_TEXT = document.createElement('p')
  const BIO_TEXT_NODE = document.createTextNode(dogBio);
  DOG_BIO_MAIN_TEXT.appendChild(BIO_TEXT_NODE)

  DOG_BIO_SECTION.appendChild(DOG_BIO_TITLE)
  DOG_BIO_SECTION.appendChild(DOG_BIO_MAIN_TEXT)

  return DOG_BIO_SECTION
}

function generateNaughtyLabel(isGoodDog) {
  const NAUGHTY_LABEL = document.createElement('p')
  const NAUGHTY_TEXT_NODE = document.createTextNode('Is naughty?');
  const NAUGHTY_EM = document.createElement('em')
  const NAUGHTY_STATUS_NODE = document.createTextNode(naughtyStatus(isGoodDog));
  const NAUGHTY_STATUS_SPACE = document.createTextNode(' ');
  NAUGHTY_EM.appendChild(NAUGHTY_TEXT_NODE)
  NAUGHTY_LABEL.appendChild(NAUGHTY_EM)
  NAUGHTY_LABEL.appendChild(NAUGHTY_STATUS_SPACE)
  NAUGHTY_LABEL.appendChild(NAUGHTY_STATUS_NODE)

  return NAUGHTY_LABEL
}

function generateNaughtyButton(dogId, isGoodDog) {
  const NAUGHTY_BUTTON = document.createElement('button')
  NAUGHTY_BUTTON.setAttribute('class', 'main__dog-section__btn')
  NAUGHTY_BUTTON.setAttribute('id', `naughtyButtonId#${dogId}`)
  const BUTTON_TEXT_NODE = document.createTextNode(naughtyButtonStatus(isGoodDog))
  NAUGHTY_BUTTON.appendChild(BUTTON_TEXT_NODE)

  return NAUGHTY_BUTTON
}

function naughtyStatus(booleanStatus) {
  if (booleanStatus) {
    return 'No!'
  }
  return 'Yes!'
}

function naughtyButtonStatus(booleanStatus) {
  if (booleanStatus) {
    return 'Good dog!'
  }
  return 'Naughty Dog!'
}

setUp()
