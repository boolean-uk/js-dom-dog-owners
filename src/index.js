console.log(data);

// WRITE YOUR CODE BELOW!
const main = document.querySelector('main');
const dogButtons = document.querySelector("ul");

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

//  Dog card

let wasDogClicked = false;
const allDogs = document.querySelectorAll('.dogs-list__button');
const bio = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,minima voluptates libero cumque rerum consequatur optio aliquid sinteum maxime illo laborum omnis quo ab rem cupiditate nullaperspiciatis ipsum!"

const addButton = allDogs[0]
const firstDogButton = allDogs[1]
const secondDogButton = allDogs[2]
const thirdDogButton = allDogs[3]
const fourthDogButton = allDogs[4]
const fifthDogButton = allDogs[5]
const sixthDogButton = allDogs[6]
const seventhDogButton = allDogs[7]

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


    console.log('createDogCard', dog);
    main.append(card);
}

// Add dog form

let doesFormExist = false;


const form = document.createElement('form');
form.setAttribute('class', 'form');
dogCard.append(form);
addButton.addEventListener('click', () => {
    form.innerHTML = '';
    dogForm()
})

    function dogForm() {
        if (!doesFormExist) {
            main.innerHTML = '';

            const dogFormNameLabel = document.createElement('label');
            dogFormNameLabel.innerText = "Dog's name";
            dogFormNameLabel.setAttribute('for', 'name');

            const dogNameInput = document.createElement('input');
            dogNameInput.setAttribute('class', 'form');
            dogNameInput.id = "name";
            dogNameInput.type = "text";
            dogNameInput.name = "name";
            dogNameInput.style.width = "100%";

            const dogFormImageLabel = document.createElement('label');
            dogFormImageLabel.setAttribute('class', 'form');
            dogFormImageLabel.innerText = "Dog's picture";

            const dogImageURL = document.createElement('input');
            dogImageURL.setAttribute('for', 'form');
            dogImageURL.type = "url";
            dogImageURL.id = "image";
            dogImageURL.name = "image";
            dogImageURL.style.width = "100%";

            const dogFormBioLabel = document.createElement('label')
            dogFormBioLabel.setAttribute('for', 'bio')
            dogFormBioLabel.innerText = "Dog's Bio"

            const dogBioTextArea = document.createElement('textarea')
            dogBioTextArea.setAttribute('class', 'form')
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

            const card = document.createElement('main__dog-section')
            card.setAttribute('class', 'section')
            card.style.width = "100%";
            dogCard.append(card);    
        

            form.append(dogFormNameLabel, dogNameInput, dogFormImageLabel, dogImageURL, dogFormBioLabel, dogBioTextArea, dogSubmit);

            main.append(form);


            addButton.addEventListener("click", createForm);

            function createForm() {
                if (doesFormExist === true) {
                    dogNameInput.innerText = "Add a New Dog"
                    dogFormNameLabel.innerText = "Dog's name"
                    dogFormImageLabel.innerText = "Dog's image"
                    dogFormBioLabel.innerText = "Dog's Bio"
                    form.append(dogFormNameLabel, dogNameInput, dogFormImageLabel, dogImageURL, dogFormBioLabel, dogBioTextArea, dogSubmit);
                    doesFormExist = false;

                }
            }

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


                console.log(dogData)

                userDogName.value = '';
                userDogImage.value = '';
                userDogBio.value = '';

            })


        }
    }




