console.log(data);

// WRITE YOUR CODE BELOW!
// Define your list of dogs
const goodBadDog = (dog) => {
 dog.isGoodDog = !dog.isGoodDog;
};

const isGoodDogText = (dog) => {
 return dog.isGoodDog ? "Yes!" : "No!";
};

const goodBadText = (dog) => {
 return dog.isGoodDog ? "Good Dog!" : "Bad Dog!";
};

const dogButtonList = document.querySelector(".dogs-list");
const main = document.querySelector(".main");

const removeDogs = () => {
 main.innerHTML = ""; // Clear the main section
};

const createDogCard = (dog) => {
 const mainDogSection = document.createElement("section");
 mainDogSection.className = "main__dog-section";
 main.appendChild(mainDogSection);

 const dogName = document.createElement("h2");
 dogName.innerText = dog.name;
 mainDogSection.appendChild(dogName);

 const dogImg = document.createElement("img");
 dogImg.src = dog.image;
 dogImg.alt = dog.name;
 mainDogSection.appendChild(dogImg);

 const dogBioSection = document.createElement("div");
 dogBioSection.className = "main__dog-section__desc";
 mainDogSection.appendChild(dogBioSection);

 const bioHeader = document.createElement("h3");
 bioHeader.innerText = "Bio";
 dogBioSection.appendChild(bioHeader);

 const bioParagraph = document.createElement("p");
 bioParagraph.innerText = dog.bio;
 dogBioSection.appendChild(bioParagraph);

 const naughtyParagraph = document.createElement("p");
 const naughtyEm = document.createElement("em");
 naughtyEm.innerText = "Is naughty?";
 naughtyParagraph.appendChild(naughtyEm);
 naughtyParagraph.innerText = ` ${isGoodDogText(dog)}`;
 mainDogSection.appendChild(naughtyParagraph);

 const toggleButton = document.createElement("button");
 toggleButton.innerText = goodBadText(dog);
 mainDogSection.appendChild(toggleButton);

 toggleButton.addEventListener("click", () => {
     goodBadDog(dog);
     toggleButton.innerText = goodBadText(dog);
     naughtyParagraph.innerText = `Is naughty? ${isGoodDogText(dog)}`;
 });
};

const createDogButton = (dog) => {
 const dogButton = document.createElement("li");
 dogButton.innerText = dog.name;
 dogButton.className = "dogs-list__button";
 dogButton.id = dog.name;
 dogButtonList.appendChild(dogButton);

 dogButton.addEventListener("click", () => {
     removeDogs();
     createDogCard(dog);
 });
};

data.forEach((dog) => {
 createDogButton(dog);
});
