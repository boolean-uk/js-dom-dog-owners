console.log(data);

// WRITE YOUR CODE BELOW!

const main = document.querySelector('main');
const dogButtons = document.querySelector("ul");
const allDogs = document.querySelectorAll('.dogs-list__button');
console.log(allDogs)
function makeNaveBar() {
    const navButtons = document.querySelector('ul')
    while (navButtons.children.length > 1) {
        navButtons.lastChild.remove();
    }

for (let i = 0; i < data.length; i++) {

    // Dog selector buttons

    const dog = data[i];

    const dogButton = document.createElement("li");
    dogButton.innerText = dog.name;
    dogButtons.append(dogButton);

    dogButton.setAttribute('class', 'dogs-list__button');
    dogButton.addEventListener('click', () => {
        main.innerHTML = '';
        createDogCard(dog);
       
    })
}
}

makeNaveBar()

//  Dog card

let wasDogClicked = false;

const addButton = allDogs[0]

const dogCard = document.querySelector('.main__dog-section');

function createDogCard(dog) {
    // create cardelement
    const card = document.createElement('section');
    card.setAttribute('class', 'main__dog-section');
    // create title
    const title = document.createElement('h2');
    title.innerText = dog.name;
    card.append(title);
    // create img
    const dogImg = document.createElement('img');
    dogImg.setAttribute('src', dog.image);
    card.append(dogImg);
    // create bio
    const bio = document.createElement('h3');
    bio.innerText = 'Bio';
    card.append(bio);

    const dogBio = document.createElement('p');
    dogBio.innerText = dog.bio;
    card.append(dogBio);

    const dogBehave = document.createElement('p')
    const italic = document.createElement('em')
    italic.innerText = 'Is naughty?'
    card.append(dogBehave)
    card.append(italic );

    const behave = document.createTextNode(dog.isGoodDog ? ' Yes!' : ' No!')
    card.append(behave);

    console.log('createDogCard', dog);
    main.append(card)
}

// Add dog form

let doesFormExist = false;


addButton.addEventListener('click', () => {
    dogForm()

})

function dogForm() {

    console.log('dogForm', doesFormExist)

    const section = document.createElement('section')
    section.setAttribute('class', 'main__dog-section')

    const form = document.createElement('form');
    form.setAttribute('class', 'form');

    const h2 = document.createElement('h2')
    h2.innerText = "Add a new Dog"
    h2.setAttribute('class', 'h2')

    const dogFormNameLabel = document.createElement('label');
    dogFormNameLabel.innerText = "Dog's name";
    dogFormNameLabel.setAttribute('for', 'label');

    const dogNameInput = document.createElement('input');
    dogNameInput.setAttribute('class', 'main__dog-section__desc ');
    dogNameInput.id = "name";
    dogNameInput.type = "text";
    dogNameInput.name = "name";
    dogNameInput.style.width = "100%";

    const dogFormImageLabel = document.createElement('label');
    dogFormImageLabel.setAttribute('class', 'label');
    dogFormImageLabel.innerText = "Dog's picture";

    const dogImageURL = document.createElement('input');
    dogImageURL.setAttribute('for', 'input');
    dogImageURL.type = "url";
    dogImageURL.id = "image";
    dogImageURL.name = "image";
    dogImageURL.style.width = "100%";

    const dogFormBioLabel = document.createElement('label')
    dogFormBioLabel.setAttribute('for', 'label')
    dogFormBioLabel.innerText = "Dog's Bio"

    const dogBioTextArea = document.createElement('textArea')
    dogBioTextArea.setAttribute('class', 'textArea')
    dogBioTextArea.rows = "5"
    dogBioTextArea.id = "bio"
    dogBioTextArea.name = "bio"
    dogBioTextArea.style.width = "100%"

    const dogSubmit = document.createElement('input')
    dogSubmit.setAttribute('class', 'form__button')
    dogSubmit.type = "submit"
    dogSubmit.id = "submit"
    dogSubmit.name = "submit"
    dogSubmit.value = "Let's add a dog!"




    dogCard.innerHTML = '';

    dogNameInput.innerText = "Add a New Dog"
    dogFormNameLabel.innerText = "Dog's name"
    dogFormImageLabel.innerText = "Dog's image"
    dogFormBioLabel.innerText = "Dog's Bio"
    doesFormExist = true;

   
    //    createForm();

    form.append(h2, dogFormNameLabel, dogNameInput, dogFormImageLabel, dogImageURL, dogFormBioLabel, dogBioTextArea, dogSubmit);
    dogCard.append(form);

    section.append(form)
    main.innerHTML = ""
    main.append(section)

    // Form data

    const dogData = {
        name: '',
        image: '',
        bio: '',
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userDogName = form.querySelector('input[name="name"]')
        const userDogImage = form.querySelector('input[name="image"]')
        const userDogBio = form.querySelector('textarea[name="bio"]')

        dogData.name = userDogName.value;
        dogData.image = userDogImage.value;
        dogData.bio = userDogBio.value;

        userDogName.value = '';
        userDogImage.value = '';
        userDogBio.value = '';

        const newPup = {
            id: data.length + 1,
            name: dogNameInput.value,
            bio: dogFormBioLabel.value,
            isGoodDog: true, 
            image: dogImageURL.value
        }

        console.log('our new dog', newPup)
        data.unshift(dogData)
        makeNaveBar()
        dogCard.isAddingDog = false
        dogCard.selectedDog = null
        dogCard.append(newPup)

    

    
    })
}
