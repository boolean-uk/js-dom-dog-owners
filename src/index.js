const dogsList = document.querySelector('.dogs-list');
const mainDogSection = document.querySelector('.main__dog-section');

function renderDogList(data) {
    dogsList.innerHTML = '<li class="dogs-list__button dogs-list__button--add">+</li>'
    const addDogListItem = document.querySelector('.dogs-list__button--add');
    addDogListItem.addEventListener('click', () => handleForm());
    data.forEach(dog => {
        const dogListItem = document.createElement('li');
        dogListItem.classList.add('dogs-list__button');
        dogListItem.innerText = dog.name;
        dogsList.appendChild(dogListItem);
        dogListItem.addEventListener('click', () => mainDogCard(dog));
    });
}

function mainDogCard(dog) {
    mainDogSection.innerHTML = `
    <h2>${dog.name}</h2>
    <img src="${dog.image}" alt="${dog.name}">
    <h3>Bio</h3>
    <p class="main__dog-section__desc">${dog.bio}</p>
    <p><em>Is naughty?</em>  ${dog.isGoodDog ? "No!" : "Yes!"}</p>
    <button class="main__dog-section__button">${dog.isGoodDog ? "Bad Dog!" : "Good Dog!"}</button>
    `;
    const dogButton = document.querySelector('.main__dog-section__button');
    dogButton.addEventListener('click', () => {
        dog.isGoodDog = !dog.isGoodDog;
        dogButton.innerText = dog.isGoodDog ? "Bad Dog!" : "Good Dog!";
        dogButton.previousElementSibling.innerText = `Is naughty? ${dog.isGoodDog ? "No!" : "Yes!"}`;
    });
}

function handleForm(){
    mainDogSection.innerHTML = `
        <h2>Add a new Dog</h2>
        <form class="form">
            <label for="name">Dog's name:</label>
            <input type="text" id="name" name="name">

            <label for="image">Dog's picture:</label>
            <input type="url" id="image" name="image">

            <label for="bio">Dog's bio:</label>
            <textarea rows="5" id="bio" name="bio"></textarea>

            <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
        </form>
    `;
    const form = document.querySelector('.form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        dogsList.innerHTML = '';
        const newDog = {
            name: form.name.value,
            image: form.image.value,
            bio: form.bio.value,
            isGoodDog: true
        };
        data.unshift(newDog);
        renderDogList(data);
        form.reset();
    });
}


renderDogList(data);
