console.log(data);

// WRITE YOUR CODE BELOW!
// Query Selectors

const dogListUL = document.querySelector(".dogs-list");
const dogMainSection = document.querySelector(".main");
const dogSection = document.querySelector(".main__dog-section");

function clearTopButton() {
  dogListUL.innerHTML =
    '<li class="dogs-list__button dogs-list__button--add">+</li>';

  const addButton = document.querySelector(".dogs-list__button--add");

  addButton.addEventListener("click", function (eventOBJ) {
    newForm();
  });
}

// Creating Top Buttons from Data
function renderDogButtons() {
  clearTopButton();

  for (let i = 0; i < data.length; i++) {
    const dogLI = document.createElement("li");
    dogLI.innerText = data[i].name;
    dogLI.setAttribute("class", "dogs-list__button");
    dogLI.setAttribute("id", i);
    dogListUL.append(dogLI);

    dogLI.addEventListener("click", function (eventOBJ) {
      dogCard(eventOBJ.target.id);
    });
  }
}

function dogCard(value) {
  dogMain.innerHTML = "";

  const selectedCurrentDog = data[value];
  const dogSection = document.createElement("section");
  dogSection.setAttribute("class", "main__dog-section");
  dogMain.append(dogSection);

  const cardH2 = document.createElement("h2");
  cardH2.innerText = selectedCurrentDog.name;
  dogSection.append(cardH2);

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", selectedCurrentDog.image);
  cardImg.setAttribute("alt", "");
  dogSection.append(cardImg);

  const dogDiv = document.createElement("div");
  dogDiv.setAttribute("class", "main__dog-section__desc");
  dogSection.append(dogDiv);

  const dogH3 = document.createElement("h3");
  dogH3.innerText = "Bio";
  dogDiv.append(dogH3);

  const dogP = document.createElement("p");
  dogP.innerText = selectedCurrentDog.bio;
  dogDiv.append(dogP);
}

function dogCard(value) {
  dogMainSection.innerHTML = "";

  const selectedCurrentDog = data[value];
  const dogSection = document.createElement("section");
  dogSection.setAttribute("class", "main__dog-section");
  dogMainSection.append(dogSection);

  const cardH2 = document.createElement("h2");
  cardH2.innerText = selectedCurrentDog.name;
  dogSection.append(cardH2);

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", selectedCurrentDog.image);
  cardImg.setAttribute("alt", "");
  dogSection.append(cardImg);

  const dogDiv = document.createElement("div");
  dogDiv.setAttribute("class", "main__dog-section__desc");
  dogSection.append(dogDiv);

  const dogH3 = document.createElement("h3");
  dogH3.innerText = "Bio";
  dogDiv.append(dogH3);

  const dogP = document.createElement("p");
  dogP.innerText = selectedCurrentDog.bio;
  dogDiv.append(dogP);
}

function dogForm() {
  dogMainSection.innerHTML = "";

  const dogSection = document.createElement("section");
  dogSection.setAttribute("class", "main__dog-section");
  dogMainSection.append(dogSection);

  const newCardH2 = document.createElement("h2");
  newCardH2.innerText = "Add a new Dog";
  dogSection.append(newCardH2);

  const doggyForm = document.createElement("form");
  doggyForm.setAttribute("class", "form");
  dogSection.append(doggyForm);

  const dogLabel = document.createElement("label");
  dogLabel.setAttribute = ("form", "name");
  dogForm.append(dogLabel);

  const dogLabelName = document.createElement("input");
  dogInputName.setAttribute("form", "name");
  dogInputName.innerText = "Dog's name";
  dogForm.append(dogInputName);

  const dogInputName = document.createElement("label");
  dogInputName.setAttribute("type", "text");
  dogInputName.setAttribute("id", "name");
  dogInputName.setAttribute("name", "name");
  dogForm.append(dogInputName);

  const dogImgLabel = document.createElement("label");
  dogBioLabel.setAttribute("for", "image");
  dogBioLabel.innerText("Dog's picture");
  dogForm.append(dogImgLabel);

  const dogImgInput = document.createElement("input");
  dogImgInput.setAttribute("type", "url");
  dogImgInput.setAttribute("id", "image");
  dogImgInput.setAttribute("name", "image");
  dogForm.append(dogImgInput);

  const dogLabelBio = document.createElement("label");
  dogLabelBio.setAttribute("for", "bio");
  dogLabelBio.innerText = "Dog's Bio";
  dogForm.append(dogLabelBio);

  const dogTextArea = document.createElement("textarea");
  dogTextArea.setAttribute("rows", "5");
  dogTextArea.setAttribute("id", "bio");
  dogTextArea.setAttribute("name", "bio");
  dogForm.append(dogTextArea);

  const dogInputSubmit = document.createElement("input");
  dogInputSubmit.setAttribute("type", "submit");
  dogInputSubmit.setAttribute("id", "submit");
  dogInputSubmit.setAttribute("name", "submit");
  dogInputSubmit.setAttribute("value", "Let's add a dog!");
  dogInputSubmit.setAttribute("class", "form__button");
  dogForm.append(dogInputSubmit);

  const dogForm = document.querySelector(".form");

  dogForm.addEventListener("submit", (eventOBJ) => {
    eventOBJ.preventDefault();

    const dogOBJ = {
      id: data.length + 1,
      name: nameInput.value,
      image: imgInput.value,
      isGoodDog: true,
      bio: bioTextArea.value,
    };

    data.unshift(dogOBJ);

    renderDogButtons();
    dogSection.innerHTML = "<h2>No dogs ?!?</h2>";
  });
}
renderDogButtons();
