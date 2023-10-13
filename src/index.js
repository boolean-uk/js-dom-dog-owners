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

function createForm() {
    container.innerHTML = ''
    const section = document.createElement('form');
    section.classList.add('main__dog-section');

    const title = document.createElement('h2');
    title.innerText = 'Add a New Dog';
    section.append(title);

    const form = document.createElement('form');
    form.classList.add('form');
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.innerText = "Dog's Name";
    form.append(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    form.append(nameInput);

    const imageLabel = document.createElement('label');
    imageLabel.setAttribute('for', 'image');
    imageLabel.innerText = "Dog's Image";
    form.append(imageLabel);

    const imageInput = document.createElement('input');
    imageInput.setAttribute('type', 'url');
    imageInput.setAttribute('id', 'image');
    imageInput.setAttribute('name', 'image');
    form.append(imageInput);

    const bioLabel = document.createElement('label');
    bioLabel.setAttribute('for', 'bio');
    bioLabel.innerText = "Dog's Bio";
    form.append(bioLabel);

    const bioInput = document.createElement('textarea');
    bioInput.setAttribute('rows', '5')
    bioInput.setAttribute('id', 'bio');
    bioInput.setAttribute('name', 'bio');
    form.append(bioInput);

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
    submitButton.setAttribute('name', 'submit');
    submitButton.setAttribute('value', "Let's Add a Dog!");
    submitButton.classList.add('form__button');
    form.append(submitButton);

    form.addEventListener('submit', (e) => {
        dogList.innerHTML = ''
        container.innerHTML = ''
        e.preventDefault();
        const dog = {
            id: data.length + 1,
            name: e.target.name.value,
            image: e.target.image.value,
            bio: e.target.bio.value,
            isGoodDog: true
        }
        data.push(dog);
        console.log(data);
        createDogCard(dog);
        createNavButtons(dog);
    });
    section.append(form);
    container.append(section);
}

function addDog() {
    // targeting the plus button to add a new dog
    const addNewDog = document.querySelector('.dogs-list__button.dogs-list__button--add');
    addNewDog.addEventListener('click', () => {
        console.log('add dog clicked')
        createForm()
    });
}

addDog()




