console.log(data);
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
    addEventlistenersToMenuItems(`dogId#${dogId}`)
}

function addEventlistenersToMenuItems(dogMenuId) {
    const MENU_ITEM_CLICK = document.getElementById(dogMenuId)

    MENU_ITEM_CLICK.addEventListener("click", function () {
      console.log(ALL_DOG_CARDS[this.id])
      document.querySelector('.main__dog-section').remove()
      MAIN_SECTION.appendChild(ALL_DOG_CARDS[this.id])
    });
}

function generateStackOfDogCard(dogId, dogName, dogImagePath, dogBio, isGoodDog) {

    const DOG_HEADING = document.createElement('h2')
    const DOG_HEADING_TITLE_NODE = document.createTextNode(dogName);
    DOG_HEADING.appendChild(DOG_HEADING_TITLE_NODE)

    const DOG_IMAGE = document.createElement('img')
    // Set alt tag 
    DOG_IMAGE.src = dogImagePath

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

    const NAUGHTY_LABEL = document.createElement('p')
    const NAUGHTY_TEXT_NODE = document.createTextNode('Is naughty?');
    // Make 'Is naughty' <em>
    const NAUGHTY_EM = document.createElement('em')
    const NAUGHTY_STATUS_NODE = document.createTextNode(naughtyStatus(isGoodDog));
    const NAUGHTY_STATUS_SPACE = document.createTextNode(' ');
    NAUGHTY_EM.appendChild(NAUGHTY_TEXT_NODE)
    NAUGHTY_LABEL.appendChild(NAUGHTY_EM)
    NAUGHTY_LABEL.appendChild(NAUGHTY_STATUS_SPACE)
    NAUGHTY_LABEL.appendChild(NAUGHTY_STATUS_NODE)

    const NAUGHTY_BUTTON = document.createElement('button')
    NAUGHTY_BUTTON.setAttribute('class', 'main__dog-section__btn')
    NAUGHTY_BUTTON.setAttribute('id', `naughtyButtonId#${dogId}`)
    const BUTTON_TEXT_NODE = document.createTextNode(naughtyButtonStatus(isGoodDog))
    NAUGHTY_BUTTON.appendChild(BUTTON_TEXT_NODE)

    // Assembles main card
    const DOG_CARD = document.createElement('section')
    DOG_CARD.setAttribute('class', 'main__dog-section')

    DOG_CARD.appendChild(DOG_HEADING)
    DOG_CARD.appendChild(DOG_IMAGE)
    DOG_CARD.appendChild(DOG_BIO_SECTION)
    DOG_CARD.appendChild(NAUGHTY_LABEL)
    DOG_CARD.appendChild(NAUGHTY_BUTTON)

    ALL_DOG_CARDS[`dogId#${dogId}`] = DOG_CARD
}

function naughtyStatus(booleanStatus) {
  if ( booleanStatus ) {
    return 'Yes!'
  }
  return 'No!'
} 

function naughtyButtonStatus(booleanStatus) {
  if ( booleanStatus ) {
    return 'Good dog!'
  }
  return 'Naughty Dog!'
} 

setUp()
