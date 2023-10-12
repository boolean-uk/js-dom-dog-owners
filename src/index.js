console.log(data);

// WRITE YOUR CODE BELOW!
const dogButtons = document.querySelector("ul");

for (let i = 0; i < data.length; i++) {

    // Dog selector buttons

    const dogs = data[i];

    const dogList = document.createElement("li");
    dogList.innerText = dogs.name
    dogButtons.append(dogList)

    dogList.setAttribute('class', 'dogs-list__button');
}

    //  Dog card

let wasDogClicked = false
const allDogs = document.querySelectorAll('.dogs-list__button')
const bio = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,minima voluptates libero cumque rerum consequatur optio aliquid sinteum maxime illo laborum omnis quo ab rem cupiditate nullaperspiciatis ipsum!"

const addButton = allDogs[0]
const firstDogButton = allDogs[1]
const secondDogButton = allDogs[2]
const thirdDogButton = allDogs[3]
const fourthDogButton = allDogs[4]
const fifthDogButton = allDogs[5]
const sixthDogButton = allDogs[6]
const seventhDogButton = allDogs[7]

const firstDog = data[0]
const secondDog = data[1]
const thirdDog = data[2]
const fourthDog = data[3]
const fifthDog = data[4]
const sixthDog = data[5]
const seventhDog = data[6]

const dogCard = document.querySelector('.main__dog-section')
const dogName = document.querySelector('h2');

const dogImg = document.createElement('img')

const dogTitle = document.createElement('h3')

const dogBio = document.createElement('p')

firstDogButton.addEventListener("click", mrBonkers);

function mrBonkers() {
    dogName.innerText = firstDog.name
    dogTitle.innerText = 'Bio'
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = firstDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

secondDogButton.addEventListener("click", nugget);

function nugget() {
    dogName.innerText = secondDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = secondDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

thirdDogButton.addEventListener("click", skittles);

function skittles() {
    dogName.innerText = thirdDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = thirdDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

fourthDogButton.addEventListener("click", buttercup);

function buttercup() {
    dogName.innerText = fourthDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = fourthDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

fifthDogButton.addEventListener("click", lucipher);

function lucipher() {
    dogName.innerText = fifthDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = fifthDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

sixthDogButton.addEventListener("click", snooper);

function snooper() {
    dogName.innerText = sixthDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = sixthDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

seventhDogButton.addEventListener("click", puddles);

function puddles() {
    dogName.innerText = seventhDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = seventhDog.image
    wasDogClicked = true
    dogCard.append(dogImg, dogTitle, dogBio)
    dogFormName.remove()
    dogTitle.remove()
    dogNameInput.remove()
    dogFormImage.remove()
    dogImageURL.remove()
    dogFormBio.remove()
    dogBioTextArea.remove()
    dogSubmit.remove()
    doesFormExist = false
}

    // Add dog form
    //
let doesFormExist = false
const form = document.createElement('form')
dogCard.append(form)
form.setAttribute('class', 'form')

const dogFormName = document.createElement('label')
dogFormName.for = "name"

const dogNameInput = document.createElement('input')
dogNameInput.id = "name"
dogNameInput.type = "text"
dogNameInput.name = "name"
dogNameInput.setAttribute('class', 'form')
dogNameInput.style.width = "100%"

const dogFormImage = document.createElement('label')
dogFormImage.for = "image"
dogFormImage.setAttribute('class', 'form')

const dogImageURL = document.createElement('input')
dogImageURL.type = "url"
dogImageURL.id = "image"
dogImageURL.name = "image"
dogImageURL.setAttribute('class', 'form')
dogImageURL.style.width = "100%"

const dogFormBio = document.createElement('label')
dogFormBio.for = "bio"
dogFormBio.setAttribute('class', 'form')

const dogBioTextArea = document.createElement('textarea')
dogBioTextArea.rows = "5"
dogBioTextArea.id = "bio"
dogBioTextArea.name = "bio"
dogBioTextArea.setAttribute('class', 'form')
dogBioTextArea.style.width = "100%"

const dogSubmit = document.createElement('input')
dogSubmit.type="submit"
dogSubmit.id="submit"
dogSubmit.name="submit"
dogSubmit.value="Let's add a dog!"
dogSubmit.setAttribute('class', 'form__button')

const section = document.createElement('main__dog-selection')
section.setAttribute('class', 'section')
section.style.width = "100%"
dogCard.append(section);

addButton.addEventListener("click", createForm);

function createForm() {
    if (doesFormExist === false) {
        dogName.innerText = "Add a New Dog"
        dogFormName.innerText = "Dog's name"
        dogFormImage.innerText = "Dog's image"
        dogFormBio.innerText = "Dog's Bio"
        form.append(dogFormName, dogNameInput, dogFormImage, dogImageURL, dogFormBio, dogBioTextArea, dogSubmit)
        doesFormExist = true
        dogBio.remove();
        dogImg.remove();
        dogTitle.remove();
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
    console.log(event.target.value)
    dogData.bio = userDogBio.value;
    
    
    console.log(dogData)
  
    userDogName.value = '';
    userDogImage.value = '';
    userDogBio.value = '';
  })















 // <!-- 
   

 // <section class="main__dog-section">
 //   <h2>Add a new Dog</h2>
 //   <form class="form">
//
 //     <label for="name">Dog's name</label>
 //     <input type="text" id="name" name="name">
//
 //     <label for="image">Dog's picture</label>
 //     <input type="url" id="image" name="image">
//
 //     <label for="bio">Dog's bio</label>
 //     <textarea rows="5" id="bio" name="bio"></textarea>
//
 //     <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
 //   </form>
///<section>
 //-->
//
 //   