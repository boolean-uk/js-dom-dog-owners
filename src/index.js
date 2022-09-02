const ALL_DOG_CARDS = {}
const DOGS_MENU = document.querySelector('.dogs-list')
const MAIN_SECTION = document.querySelector('main')
const ADD_DOG_BUTTON = document.querySelector('.dogs-list__button--add')


function setUp() {
  for (const DOG of data) {
    generateMenu(DOG.id, DOG.name)
    ALL_DOG_CARDS[`dogId#${DOG.id}`] = generateDogCard(DOG.id, DOG.name, DOG.image, DOG.bio, DOG.isGoodDog)
  }
  addEventlistenersToAddDogButton()
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
  document.getElementById(dogMenuId).addEventListener("click", function () {
    replaceCard(this.id)
    addEventListenerToNaughtyButtonOfThisCard(this.id)
  });
}

function addEventlistenersToAddDogButton() {
  ADD_DOG_BUTTON.addEventListener("click", function () {
    document.querySelector('.main__dog-section').remove()
    MAIN_SECTION.appendChild(generateForm())
  });
}

function replaceCard(thisId) {
  document.querySelector('.main__dog-section').remove()
  MAIN_SECTION.appendChild(ALL_DOG_CARDS[thisId])
}

function generateDogCard(dogId, dogName, dogImagePath, dogBio, isGoodDog) {
  const DOG_CARD = document.createElement('section')
  DOG_CARD.setAttribute('class', 'main__dog-section')

  const BOOL_STRING = isGoodDog.toString()

  DOG_CARD.appendChild(generateCardHeading(dogName))
  DOG_CARD.appendChild(generateDogImage(dogImagePath, dogName))
  DOG_CARD.appendChild(generateBioSection(dogBio))
  DOG_CARD.appendChild(generateNaughtyLabel(BOOL_STRING))
  DOG_CARD.appendChild(generateNaughtyButton(dogId, BOOL_STRING))

  return DOG_CARD
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
  NAUGHTY_LABEL.setAttribute('class', 'naughtyGoodStatus')
  const NAUGHTY_TEXT_NODE = document.createTextNode('Is naughty?');
  const NAUGHTY_EM = document.createElement('em')
  const NAUGHTY_STATUS_SPAN = document.createElement('span')
  NAUGHTY_STATUS_SPAN.setAttribute('class', 'naughtyGoodStatus')
  const NAUGHTY_STATUS_NODE = document.createTextNode(naughtyStatus(isGoodDog));
  NAUGHTY_STATUS_SPAN.appendChild(NAUGHTY_STATUS_NODE)
  const NAUGHTY_STATUS_SPACE = document.createTextNode(' ');
  NAUGHTY_EM.appendChild(NAUGHTY_TEXT_NODE)
  NAUGHTY_LABEL.appendChild(NAUGHTY_EM)
  NAUGHTY_LABEL.appendChild(NAUGHTY_STATUS_SPACE)
  NAUGHTY_LABEL.appendChild(NAUGHTY_STATUS_SPAN)

  return NAUGHTY_LABEL
}

function generateNaughtyButton(dogId, isGoodDog) {
  const NAUGHTY_BUTTON = document.createElement('button')
  NAUGHTY_BUTTON.setAttribute('id', `naughtyButtonId#${dogId}`)
  NAUGHTY_BUTTON.setAttribute('data-isgood', isGoodDog)
  const BUTTON_TEXT_NODE = document.createTextNode(naughtyButtonStatus(isGoodDog))
  NAUGHTY_BUTTON.appendChild(BUTTON_TEXT_NODE)

  return NAUGHTY_BUTTON
}

function addEventListenerToNaughtyButtonOfThisCard(dogCardId) {
  const SPLIT_ID = dogCardId.split("#");
  const PURE_ID = SPLIT_ID[1]
  const CONSTRUCTED_BUTTON_ID = 'naughtyButtonId#' + PURE_ID

  document.getElementById(CONSTRUCTED_BUTTON_ID).addEventListener("click", function () {
    changeIsGoodStatus(dogCardId, CONSTRUCTED_BUTTON_ID, PURE_ID)
    replaceCard(dogCardId)

    // The function calls itself because the button with the original
    // eventListener was removed when changing the isGood status on click
    addEventListenerToNaughtyButtonOfThisCard(dogCardId)
  });

}

function changeIsGoodStatus(dogCardId, buttonID, pureID) {
  let currentIsGoodStatus = document.getElementById(buttonID).getAttribute('data-isgood')

  if (currentIsGoodStatus == 'true') {
    currentIsGoodStatus = 'false'
  } else if (currentIsGoodStatus === 'false') {
    currentIsGoodStatus = 'true'
  }

  ALL_DOG_CARDS[dogCardId].querySelector('.naughtyGoodStatus').remove()
  ALL_DOG_CARDS[dogCardId].querySelector('button').remove()

  ALL_DOG_CARDS[dogCardId].appendChild(generateNaughtyLabel(currentIsGoodStatus))
  ALL_DOG_CARDS[dogCardId].appendChild(generateNaughtyButton(pureID, currentIsGoodStatus))
}

function naughtyStatus(booleanStatus) {
  if (booleanStatus === 'true') {
    return 'No!'
  }
  return 'Yes!'
}

function naughtyButtonStatus(booleanStatus) {
  if (booleanStatus === 'true') {
    return 'Good dog!'
  }
  return 'Naughty Dog!'
}

setUp()

console.log(generateForm())

// Form Section
function generateForm() {
  const FORM_SECTION = document.createElement('section')
  FORM_SECTION.setAttribute('class', 'main__dog-section')

  FORM_SECTION.appendChild(createFormHeading())
  FORM_SECTION.appendChild(createDogForm())

  return FORM_SECTION
}

function createFormHeading() {
  const FORM_HEADING = document.createElement('h2')
  const FORM_HEADING_TEXT_NODE = document.createTextNode('Add a new Dog')
  FORM_HEADING.appendChild(FORM_HEADING_TEXT_NODE)

  return FORM_HEADING
}

function createDogForm() {
  const DOG_FORM = document.createElement('form')
  DOG_FORM.setAttribute('class', 'form')

  DOG_FORM.appendChild(createDogNameLabel())
  DOG_FORM.appendChild(createDogNameInput())
  DOG_FORM.appendChild(createDogImageLabel())
  DOG_FORM.appendChild(createDogImageInput())
  DOG_FORM.appendChild(createDogBioLabel())
  DOG_FORM.appendChild(createDogBioTextArea())
  DOG_FORM.appendChild(createSubmitButton())

  return DOG_FORM
}

function createDogNameLabel() {
  const DOG_NAME_LABEL = document.createElement('label')
  DOG_NAME_LABEL.setAttribute('for', 'name')
  const DOG_NAME_LABEL_TEXT_NODE = document.createTextNode("Dog's name")
  DOG_NAME_LABEL.appendChild(DOG_NAME_LABEL_TEXT_NODE)

  return DOG_NAME_LABEL
}

function createDogNameInput() {
  const DOG_NAME_INPUT = document.createElement('input')
  DOG_NAME_INPUT.setAttribute('type', 'text')
  DOG_NAME_INPUT.setAttribute('id', 'name')
  DOG_NAME_INPUT.setAttribute('name', 'name')

  return DOG_NAME_INPUT
}

function createDogImageLabel() {
  const DOG_IMAGE_LABEL = document.createElement('label')
  DOG_IMAGE_LABEL.setAttribute('for', 'image')
  const DOG_IMAGE_LABEL_TEXT_NODE = document.createTextNode("Dog's picture")
  DOG_IMAGE_LABEL.appendChild(DOG_IMAGE_LABEL_TEXT_NODE)

  return DOG_IMAGE_LABEL
}

function createDogImageInput() {
  const DOG_IMAGE_INPUT = document.createElement('input')
  DOG_IMAGE_INPUT.setAttribute('type', 'url')
  DOG_IMAGE_INPUT.setAttribute('id', 'image')
  DOG_IMAGE_INPUT.setAttribute('name', 'image')

  return DOG_IMAGE_INPUT
}

function createDogBioLabel() {
  const DOG_BIO_LABEL = document.createElement('label')
  DOG_BIO_LABEL.setAttribute('for', 'bio')
  const DOG_BIO_LABEL_TEXT_NODE = document.createTextNode("Dog's bio")
  DOG_BIO_LABEL.appendChild(DOG_BIO_LABEL_TEXT_NODE)

  return DOG_BIO_LABEL
}

function createDogBioTextArea() {
  const DOG_BIO_TEXT_AREA = document.createElement('textarea')
  DOG_BIO_TEXT_AREA.setAttribute('rows', '5')
  DOG_BIO_TEXT_AREA.setAttribute('id', 'bio')
  DOG_BIO_TEXT_AREA.setAttribute('name', 'bio')

  return DOG_BIO_TEXT_AREA
}

function createSubmitButton() {
  const SUBMIT_BUTTON = document.createElement('input')
  SUBMIT_BUTTON.setAttribute('type', 'submit')
  SUBMIT_BUTTON.setAttribute('id', 'submit')
  SUBMIT_BUTTON.setAttribute('name', 'submit')
  SUBMIT_BUTTON.setAttribute('value', "Let's add a dog!")
  SUBMIT_BUTTON.setAttribute('class', "form__button")

  return SUBMIT_BUTTON
}
