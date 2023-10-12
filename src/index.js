console.log(data);

// WRITE YOUR CODE BELOW!
const body = document.querySelector('.body');
const container = document.querySelector('.main');
const dogList = document.querySelector('.dogs-list');

function dogID(dog) {
    const dogID = document.createElement('h2');
    dogID.setAttribute('class', 'main__dog-id');
    dogID.setAttribute('id', `${dog.id}`);
    dogID.innerText = "";
    return dogID;
}

function dogName(dog) {
    const dogName = document.createElement('h2');
    dogName.setAttribute('class', 'main__dog-name');
    dogName.innerText = `${dog.name}`;
    return dogName;
};

function dogImage(dog) {
    const dogImage = document.createElement('img');
    dogImage.setAttribute('class', 'main__dog-image');
    dogImage.src = `${dog.image}`;
    return dogImage;
};

function dogBio(dog) {
    const dogBio = document.createElement('p');
    dogBio.setAttribute('class', 'main__dog-p');
    dogBio.innerText = `${dog.bio}`;
    return dogBio;
};

function isGoodDog(dog) {
    const dogGood = document.createElement('p');
    dogGood.setAttribute('class', 'main__dog-p');
    if (dog.isGoodDog === true) {
        dogGood.innerText = 'Good Dog!';
    } else {
        dogGood.innerText = 'Bad Dog!';
    }
    return dogGood;
};

function dogButton(dog) {
    const dogButton = document.createElement('button');
    dogButton.setAttribute('class', 'main__dog-section button');
    if (dog.isGoodDog === true) {
        dogButton.innerText = 'Set Bad Dog!';
    } else {
        dogButton.innerText = 'Set Good Dog!';
    }
    dogButton.addEventListener('click', () => {
        dog.isGoodDog = !dog.isGoodDog
        container.innerHTML = ''
        createDogCard(dog)
        console.log(dog.isGoodDog);
    });
    return dogButton;
};

function createDogCard(dog) {
    const dogDiv = document.createElement('div');
    dogDiv.setAttribute('class', 'main__dog-section');
    dogDiv.append(dogID(dog))
    dogDiv.append(dogName(dog))
    dogDiv.append(dogImage(dog))
    dogDiv.append(dogBio(dog))
    dogDiv.append(isGoodDog(dog))
    dogDiv.append(dogButton(dog))
    container.append(dogDiv);
}

function createNavButtons () {
    data.forEach(dog => {
        const dogs = document.createElement('li');
        dogs.setAttribute('class', 'dogs-list__button');
        dogs.innerText = `${dog.name}`;
        dogList.append(dogs);
        dogs.addEventListener('click', () => {
            console.log('dog clicked')
            container.innerHTML = ''
            createDogCard(dog)
        })
    });
}

createNavButtons()

function formName() {
    const formName = document.createElement('input');
    formName.setAttribute('type', 'text');
    formName.setAttribute('placeholder', 'Enter your dog\'s name');
    formName.setAttribute('class', 'form__input');
    return formName;
};

function formImage() {
    const formImage = document.createElement('input');
    formImage.setAttribute('type', 'text');
    formImage.setAttribute('placeholder', 'Enter an Image URL');
    formImage.setAttribute('class', 'form__input');
    return formImage;
};

function formBio() {
    const formBio = document.createElement('textarea');
    formBio.setAttribute('placeholder', 'Tell us about your dog...');
    formBio.setAttribute('class', 'form__input');
    return formBio;
};

function formSubmit() {
    const formSubmit = document.createElement('input');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.setAttribute('value', 'Submit');
    formSubmit.setAttribute('class', 'form__submit');
    return formSubmit;
};

function createForm() {
    container.innerHTML = ''
    const form = document.createElement('form');
    const formHeader = document.createElement('h2');
    formHeader.setAttribute('class', 'form__header');
    formHeader.innerText = 'Add a Dog';
    form.append(formHeader)
    form.setAttribute('class', 'form');
    form.append(formName())
    form.append(formImage())
    form.append(formBio())
    form.append(formSubmit())
    container.append(form);
};

createForm()