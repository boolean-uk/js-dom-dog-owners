// VARIABLES
const dogList = document.querySelector('header > ul');
const dogListButton = document.querySelectorAll(".dogs-list__button")
const dogDisplayCard = document.querySelector('section');
const main = document.querySelector('main')
const ul = document.querySelector('ul')


function render() {
    createDogList()
}

// CREATE A FUNCTION TO CLEAR ALL DETAILS
function clearMainDetails() {
    main.innerHTML = '';
}

function clearUl() {
    ul.innerHTML = ''
}

function renderForm() {
    clearMainDetails()
}

// CREATE HEADER DOGGO LIST
function createDogList() {
    data.forEach(dog => {
        const dogListCard = document.createElement('li');
        dogListCard.innerText = dog.name;
        dogListCard.setAttribute('class', 'dogs-list__button ');

          // APPEND LIST ITEMS TO DOG LIST
          dogList.append(dogListCard);

        // CREATE CLICK EVENT LISTENER
        dogListCard.addEventListener("click", () => {
            clearMainDetails()
            const dogCard = createDogCard(dog)
            main.append(dogCard)
        })
    })
}

// FUNCTION FOR CREATING THE DOG CARD

function createDogCard(dog) {
    const dogCardSection = document.createElement('section')
    dogCardSection.classList.add('main__dog-section')

    // ADD NAME
    const dogDisplayName = document.createElement('h2');
    dogDisplayName.innerText = dog.name;
    dogCardSection.append(dogDisplayName)

    // ADD PHOTO
    const dogDisplayImage = document.createElement('img');
    dogDisplayImage.src = dog.image;
    dogDisplayImage.alt = `${dog.name} photo`;
    dogDisplayImage.width = '420';
    dogDisplayImage.height = '420';
    dogCardSection.append(dogDisplayImage);

    // ADD BIO  
    const bioHeader = document.createElement('h3');
    bioHeader.innerText = 'Bio';
    dogCardSection.append(bioHeader);

    const dogDisplayBio = document.createElement('p');
    dogDisplayBio.innerText = dog.bio;
    dogCardSection.append(dogDisplayBio);

    // MAIN SECTION BOTTOM
    const dogDisplayBottom = document.createElement('div');
    dogDisplayBottom.setAttribute('class', 'main__dog-section__btn');

    // ADD GOOD OR BAD BOI
    const questionString = document.createElement('p');
    questionString.setAttribute('class', 'main__dog-section__desc');

    const em = document.createElement('em'); 
    em.innerText = 'is good boi?';

    let yesOrNo = '';
    if (dog.isGoodDog) {
        yesOrNo = ' Yes!';
    }
    else {
        yesOrNo = ' No';
    }
    const yesNoAnswer = document.createTextNode(yesOrNo)
    questionString.append(em, yesNoAnswer);
    
    dogDisplayBottom.append(questionString);
 
    // ADD GOOD/BAD BUTTON
    const goodBoiButton = document.createElement('button');
    const goodBoiButtonText = document.createElement('p');

    if (dog.isGoodDog) {
        goodBoiButtonText.innerText = 'Bad Doggo';
    }
    else {
        goodBoiButtonText.innerText = 'Good Doggo';
    }
    goodBoiButton.append(goodBoiButtonText);
    dogDisplayBottom.append(goodBoiButton);

    // APPEND BOTTOM DISPLAY TO CARD
    dogCardSection.append(dogDisplayBottom);

    // CHANGE BUTTON DISPLAY ON CLICK
    goodBoiButton.addEventListener('click', () => {
        if (dog.isGoodDog) {
            goodBoiButtonText.innerText = 'Good Doggo';
            dog.isGoodDog = false
            questionString.innerHTML = ''
            questionString.append(em, ' No');


        }       
        else  {
            goodBoiButtonText.innerText = 'Bad Doggo';
            dog.isGoodDog = true      
            questionString.innerHTML = ''
            questionString.append(em, ' Yes!');



        }
    })
    return dogCardSection
}


// CREATING THE FORM
const addDog = document.querySelector(".dogs-list__button--add");

// RENDER FORM
addDog.addEventListener("click", () => {
    clearMainDetails()
    const dogForm = createForm()
    main.append(dogForm)
})

function createForm() {

    // FORM SECTION
    const formSection = document.createElement('section')
    formSection.classList.add('main__dog-section')

    // ADD HEADER
    const formHeader = document.createElement("h2");
    formHeader.innerText = "Add a new Dog";
    formSection.append(formHeader);

    // ADD MAIN FORM
    const form = document.createElement("form");
    form.setAttribute("class", "form");
    formSection.append(form);

    // FORM NAME
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");

    nameLabel.innerText = "Dog's name";
    nameLabel.setAttribute("for", "name");
    form.append(nameLabel);

    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    form.append(nameInput);

    // FORM PHOTO
    const photoLabel = document.createElement("label");
    const photoInput = document.createElement("input");

    photoLabel.innerText = "Dog's photo";
    photoLabel.setAttribute("for", "image");
    form.append(photoLabel);

    photoInput.setAttribute("type", "url");
    photoInput.setAttribute("id", "image");
    photoInput.setAttribute("name", "image");
    form.append(photoInput);

    // FORM BIO
    const bioLabel = document.createElement("label");
    const bioTextarea = document.createElement("textarea");

    bioLabel.innerText = "Dog's Bio";
    bioLabel.setAttribute("for", "bio");
    form.append(bioLabel);

    bioTextarea.setAttribute("rows", "5");
    bioTextarea.setAttribute("id", "bio");
    bioTextarea.setAttribute("name", "bio");
    form.append(bioTextarea);

    // FORM SUBMIT BUTTON
    const submitInput = document.createElement("input");

    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("id", "submit");
    submitInput.setAttribute("name", "submit");
    submitInput.setAttribute("value", "Let's add a dog");
    submitInput.setAttribute("class", "form__button");
    form.append(submitInput);

    // SUBMIT FORM

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const nameInput = document.querySelector('input[name="name"]')
        const urlInput = document.querySelector('input[name="image"]')
        const bioInput = document.querySelector('textarea')
            
        const newDogInfo = {
            id: data.length + 1,
            name: nameInput.value,
            bio: bioInput.value,
            isGoodDog: true,
            image: urlInput.value
        };

        data.unshift(newDogInfo)

        clearUl()

        // CREATE NEW DOG LIST
        const addDogButton = document.createElement('li')
        addDogButton.innerText = '+'
        addDogButton.classList.add('dogs-list__button')
        addDogButton.classList.add('dogs-list__button--add')

        data.forEach(dog => {
            const dogListCard = document.createElement('li');
        dogListCard.innerText = dog.name;
        dogListCard.setAttribute('class', 'dogs-list__button ');

          // APPEND LIST ITEMS TO DOG LIST
          dogList.prepend(addDogButton)
          dogList.append(dogListCard);

        // CREATE CLICK EVENT LISTENER
        // FOR DOG LIST CARDS
        dogListCard.addEventListener("click", () => {
            clearMainDetails()
            const dogCard = createDogCard(dog)
            main.append(dogCard)
        })

        // FOR RENDERING A NEW FORM
        addDogButton.addEventListener("click", () => {
            clearMainDetails()
            const dogForm = createForm()
            main.append(dogForm)
        })
    })
        })
    return formSection
};


render()