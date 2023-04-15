console.log(data);

// WRITE YOUR CODE BELOW!
// Render the top list of dogs using the list item template
// you'll find on the HTML file

const dogsListUL = document.querySelector(".dogs-list");
const mainSection = document.querySelector(".main");
const dogSection = document.querySelector(".main__dog-section");

function clearMainSection() {
  mainSection.innerHTML = "";
}

function createDogProfileSection(dog) {
  const section = document.createElement("section");
  section.innerText = dog.name;
  return section;
}

function createDogButton(dog) {
  const li = document.createElement("li");
  li.setAttribute("class", "dogs-list__button");
  li.innerText = dog.name;
  li.addEventListener("click", () => {
    console.log("Clicked dog=", dog.name);
    clearMainSection();
    const section = createDogProfileSection(dog);
    mainSection.append(section);
  });
  return li;
}

for (let i = 0; i < data.length; i++) {
  const dog = data[i];
  const li = createDogButton(dog);
  dogsListUL.append(li);
}

function dogCard(value) {
  const currentDog = data[value];
  const dogSection = document.createElement("section");
  dogSection.setAttribute("class", "main__dog-section");
  dogMain.append(dogSection);

  const cardH2 = document.createElement("h2");
  cardH2.innerText = currentDog.name;
  dogSection.append(cardH2);

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", currentDog.image);
  cardImg.setAttribute("alt", "");
  dogSection.append(cardImg);

  const mainDogDiv = document.createElement("div");
  dogDiv.setAttribute("class", "main__dog-section__desc");
  dogSection.append(dogDiv);

  const mainDogH3 = document.createElement("h3");
  dogH3.innerText = "Bio";
  dogDiv.append(dogH3);

  const mainDogP = document.createElement("p");
  dogP.innerText = currentDog.bio;
  dogDiv.append(dogP);

  const goodButton = document.createElement("button");
  const naughty = document.createElement("p");
}
