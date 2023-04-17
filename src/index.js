console.log(data);

// WRITE YOUR CODE BELOW!
// Query Selectors

const dogMainSection = document.querySelector(".main");
const dogSection = document.querySelector(".main__dog-section");
const dogListUL = document.querySelector(".dogs-list");
const plusButton = document.querySelector(".dogs-list__button--add");

// Creating Top Buttons from Data
// Creating for Loop for Data

function renderDogButtons() {
  for (let i = 0; i < data.length; i++) {
    const dogList = document.createElement("li");
    dogList.innerText = data[i].name;
    dogList.setAttribute("class", "dogs-list__button");
    dogList.setAttribute("id", i);
    dogListUL.append(dogList);

    dogList.addEventListener("click", function (eventOBJ) {
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
  dogP.innerText = currentDog.bio;
  dogDiv.append(dogP);

  // Naughty Dog Text
  const p = document.createElement("p");
  const em = document.createElement("em");
  const button = document.createElement("button");
  p.innerText = "Is naughty?";

  function changeButton() {
    if (data[i].isGoodDog === true) {
      em.innerText = " No!";
      button.innerText = "Bad dog!";
      data[i].isGoodDog = false;
    } else if (data[i].isGoodDog === false) {
      em.innerText = " Yes!";
      button.innerText = "Good dog!";
      data[i].isGoodDog = true;
    }
  }

  button.addEventListener("click", changeButton);

  if (data[i].isGoodDog === true) {
    em.innerText = " Yes!";
    button.innerText = "Good dog!";
  } else if (data[i].isGoodDog === false) {
    em.innerText = " No!";
    button.innerText = "Bad dog!";
  }

  p.append(em);
  dogSection.append(p);
  dogSection.append(button);
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

  function dogForm() {}

  plusButton.addEventListener("click", () => {
    dogMainSection.innerHTML = "";

    const dogSection = document.createElement("section");
    dogSection.setAttribute("class", "main__dog-section");
    dogMainSection.append(dogSection);

    const newCardH2 = document.createElement("h2");
    newCardH2.innerText = "Add a new Dog";
    dogSection.append(newCardH2);

    const newDogForm = document.createElement("form");
    newDogForm.setAttribute("class", "form");
    dogSection.append(doggyForm);

    const dogLabel = document.createElement("label");
    dogLabel.setAttribute = ("form", "name");
    newDogdogForm.append(dogLabel);

    const dogLabelName = document.createElement("input");
    dogInputName.setAttribute("form", "name");
    dogInputName.innerText = "Dog's name";
    newDogForm.append(dogInputName);

    const dogInputName = document.createElement("label");
    dogInputName.setAttribute("type", "text");
    dogInputName.setAttribute("id", "name");
    dogInputName.setAttribute("name", "name");
    newDogForm.append(dogInputName);

    const dogImgLabel = document.createElement("label");
    dogBioLabel.setAttribute("for", "image");
    dogBioLabel.innerText("Dog's picture");
    newDogForm.append(dogImgLabel);

    const dogImgInput = document.createElement("input");
    dogImgInput.setAttribute("type", "url");
    dogImgInput.setAttribute("id", "image");
    dogImgInput.setAttribute("name", "image");
    newDogForm.append(dogImgInput);

    const dogLabelBio = document.createElement("label");
    dogLabelBio.setAttribute("for", "bio");
    dogLabelBio.innerText = "Dog's Bio";
    newDogForm.append(dogLabelBio);

    const dogTextArea = document.createElement("textarea");
    dogTextArea.setAttribute("rows", "5");
    dogTextArea.setAttribute("id", "bio");
    dogTextArea.setAttribute("name", "bio");
    newDogForm.append(dogTextArea);

    const dogInputSubmit = document.createElement("input");
    dogInputSubmit.setAttribute("type", "submit");
    dogInputSubmit.setAttribute("id", "submit");
    dogInputSubmit.setAttribute("name", "submit");
    dogInputSubmit.setAttribute("value", "Let's add a dog!");
    dogInputSubmit.setAttribute("class", "form__button");
    newDogForm.append(dogInputSubmit);

    const dogForm = document.querySelector(".form");
  });
}
renderDogButtons();
