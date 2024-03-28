// WRITE YOUR CODE BELOW

const dogs = data;
const dogList = document.querySelector(".dogs-list");
const addDogButton = document.querySelector(".dogs-list__button--add");
const dogHeaderButton = document.querySelector(".dogs-list__button");
const mainSection = document.querySelector(".main");
const cardSection = document.querySelector(".main__dog-section");

function createDogButtons() {
  for (let i = 0; i < dogs.length; i++) {
    const li = document.createElement("li");
    addDogButton.addEventListener("click", newDogForm);

    li.classList.add("dogs-list__button");
    dogList.append(li);

    const headerH2 = document.createElement("h2");
    headerH2.innerText = dogs[i].name;
    headerH2.addEventListener("click", (event) => {
      createDogCard(event.target.innerText);
    });

    li.append(headerH2);
  }
}

createDogButtons();

function createDogCard(dogName) {
  console.log(dogName);
  const foundDog = dogs.find(({ name }) => name === dogName);
  if (!foundDog) {
    return
  }

  cardSection.innerHTML = ''
  const cardH2 = document.createElement("h2");
  cardH2.innerText = foundDog.name;

  cardSection.append(cardH2);

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", foundDog.image);
  cardSection.append(cardImage);

  const div = document.createElement("div");
  div.classList.add("main__dog-section__desc");
  cardSection.append(div);

  const cardH3 = document.createElement("h3");
  div.append(cardH3);

  const bio = document.createElement("p");
  bio.innerText = foundDog.bio;
  div.append(bio);

  const goodOrBadElement = document.createElement("p");

  const italics = document.createElement("em")
  italics.innerText = "Is naughty?"

  goodOrBadElement.append(italics);

  const goodOrBadButton = document.createElement("button");
  if (foundDog.isGoodDog) {
    goodOrBadElement.innerText = "No!";
    goodOrBadButton.innerText = "Good Dog";
  } else {
    goodOrBadElement.innerText = "Yes!";
    goodOrBadButton.innerText = "Bad Dog";
  }

  
  cardSection.append(goodOrBadElement);
  cardSection.append(goodOrBadButton);
}

function newDogForm() {
  cardSection.innerHTML = "";
  const newDogHeading = document.createElement("h2");
  newDogHeading.innerText = "Add a new Dog";
  cardSection.append(newDogHeading);

  const newDogForm = document.createElement("form");
  newDogForm.classList.add("form");
  cardSection.append(newDogForm);

  const dogNameLabel = document.createElement("label");
  dogNameLabel.setAttribute("for", "name");
  dogNameLabel.innerText = "Dog's Name";
  newDogForm.append(dogNameLabel);

  const dogNameInput = document.createElement("input");
  dogNameInput.setAttribute("type", "text");
  dogNameInput.setAttribute("id", "name");
  dogNameInput.setAttribute("name", "name");
  newDogForm.append(dogNameInput);

  const dogImageLabel = document.createElement("label");
  dogImageLabel.setAttribute("for", "image");
  dogImageLabel.innerText = "Dog's picture";
  newDogForm.append(dogImageLabel);

  const dogImageInput = document.createElement("input");
  dogImageInput.setAttribute("type", "url");
  dogImageInput.setAttribute("id", "image");
  dogImageInput.setAttribute("name", "image");
  newDogForm.append(dogImageInput);

  const dogBioLabel = document.createElement("label");
  dogBioLabel.setAttribute("for", "bio");
  dogBioLabel.innerText = "Dog's bio";
  newDogForm.append(dogBioLabel);

  const dogBioTextArea = document.createElement("textarea");
  dogBioTextArea.setAttribute("rows", "5");
  dogBioTextArea.setAttribute("id", "bio");
  dogBioTextArea.setAttribute("name", "bio");
  newDogForm.append(dogBioTextArea);

  const submitNewDog = document.createElement("input");
  submitNewDog.setAttribute("type", "submit");
  submitNewDog.setAttribute("id", "submit");
  submitNewDog.setAttribute("name", "submit");
  submitNewDog.setAttribute("value", "Let's add a dog!");
  submitNewDog.setAttribute("class", "form__button");
  newDogForm.append(submitNewDog);

  newDogForm.addEventListener("submit", () => {
    event.preventDefault();

    cardSection.innerHTML = "";
    const li = document.createElement("li");
    li.classList.add("dogs-list__button");
    dogList.append(li);

    const newDog = document.createElement("h2");
    newDog.innerText = `${dogNameInput.value}`;
    li.append(newDog);
    const secondIndexDogHeadr = dogList.children[1]
    dogList.insertBefore(li, secondIndexDogHeadr)
    
  });
}
