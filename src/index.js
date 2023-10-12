console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list");

const mainDogSection = document.querySelector(".main__dog-section");

function renderDogList() {
  data.forEach((dog) => {
    const listItem = document.createElement("li");
    listItem.textContent = dog.name;
    listItem.className = "dogs-list__button";

    listItem.addEventListener("click", () => {
      renderMainDog(dog);
    });

    dogList.appendChild(listItem);
  });
}

function renderMainDog(dog) {
  while (mainDogSection.firstChild) {
    mainDogSection.removeChild(mainDogSection.firstChild);
  }

  const dogInfo = document.createElement("div");
  dogInfo.className = "dog-info";

  const image = document.createElement("img");
  image.src = dog.image;
  image.alt = dog.name;

  const name = document.createElement("h2");
  name.textContent = dog.name;

  const bio = document.createElement("p");
  bio.textContent = dog.bio;

  const isGoodDog = document.createElement("p");
  isGoodDog.textContent = dog.isGoodDog ? "Good Dog" : "Not a Good Dog";

  dogInfo.appendChild(image);
  dogInfo.appendChild(name);
  dogInfo.appendChild(bio);
  dogInfo.appendChild(isGoodDog);

  mainDogSection.appendChild(dogInfo);
}

renderDogList();


const plusButton = document.querySelector(".dogs-list__button--add");

// Get the form and input elements for adding a new dog
const addDogForm = document.querySelector(".add-dog-form");
const nameInput = document.querySelector("#dog-name");
const bioInput = document.querySelector("#dog-bio");
const isGoodDogInput = document.querySelector("#is-good-dog");

