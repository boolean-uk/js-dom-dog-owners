
//Build doggy card

const buildDogCard = (data) => {
  const section = buildSection();
  const sectionWithName = addH2(section, data.name);
  const sectionWithImg = addImg(sectionWithName, data.image);
  const sectionWithDiv = addDiv(sectionWithImg);
  const sectionWithBio = addBio(sectionWithDiv, data.bio);
  const sectionWithNaughty = addNaughty(sectionWithBio, data.isGoodDog);
  const finalCard = addButton(sectionWithNaughty);
  return finalCard;
};

const buildSection = () => {
  const newSection = document.createElement("section");
  newSection.setAttribute("class", "main__dog-section");
  return newSection;
};

const addH2 = (section, input) => {
  const newH2 = document.createElement("h2");
  newH2.innerText = input;
  section.append(newH2);
  return section;
};

const addImg = (section, img) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", img);
  section.append(newImg);
  return section;
};

const addDiv = (section) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "main__dog-section__desc");
  section.append(newDiv);
  return section;
};

const addBio = (section, bio) => {
  const newH3 = document.createElement("h3");
  const newP = document.createElement("p");
  const div = section.querySelector("div");
  newH3.innerText = "Bio";
  newP.innerText = bio;
  div.append(newH3);
  div.append(newP);
  return section;
};

const addNaughty = (section, isGoodDog) => {
  const newP = document.createElement("p");
  const newEm = document.createElement("em");
  isGoodDog ? (newP.innerText = " Yes") : (newP.innerText = " No");
  newEm.innerText = "Is naughty?";
  newP.prepend(newEm);
  section.append(newP);

  return section;
};

const addButton = (section) => {
  const newButton = document.createElement("button");
  newButton.innerText = "Good Dog!";
  section.append(newButton);
  return section;
};

//Build header Buttons

const buildHeaderButtons = (data) => {
  const newLi = document.createElement("li");
  newLi.setAttribute("class", "dogs-list__button");
  newLi.innerText = data.name;
  addEventListener(newLi, data);
  return newLi;
};

const populateHeader = () => {
  const header = document.querySelector(".dogs-list");
  for (let i = 0; i < data.length; i++) {
    let newButton = buildHeaderButtons(data[i]);
    header.append(newButton);
  }
};

//Adds functionality to buttons

const addEventListener = (li, data) => {
  li.addEventListener("click", () => {
    let newDog = buildDogCard(data);
    let dogSection = document.querySelector("main");
    dogSection.innerHTML = "";
    dogSection.appendChild(newDog);
  });
};

//Populates Header!
populateHeader();

//Builds form
const buildForm = () => {
  const section = buildSection();
  const formWithH2 = addH2(section, "Add a New Dog");
  const finalForm = addForm(formWithH2);
  const sectionForm = section.querySelector("form");
  const formWithInputs = addInputs(sectionForm);
  finalForm.appendChild(formWithInputs);
  return finalForm;
};

const addForm = (input) => {
  const newForm = document.createElement("form");
  newForm.setAttribute("class", "form");
  input.appendChild(newForm);
  return input;
};

const addInputs = (input) => {
  const form = input;
  const nameLabel = getNewLabel("name", "Dog's Name");
  form.appendChild(nameLabel);
  const nameInput = getNewInput("text", "name");
  form.appendChild(nameInput);
  const imgLabel = getNewLabel("image", "Dog's Picture");
  form.appendChild(imgLabel);
  const imgInput = getNewInput("url", "image");
  form.appendChild(imgInput);
  const bioLabel = getNewLabel("bio", "Dog's Bio");
  form.appendChild(bioLabel);
  const bioTextArea = getNewTextArea(5, "bio");
  form.appendChild(bioTextArea);
  const submitInput = getNewInput(
    "submit",
    "submit",
    "Let's add a dog!",
    "form__button"
  );
  form.appendChild(submitInput);
  return form;
};

const getNewLabel = (labelFor, text) => {
  const newLabel = document.createElement("label");
  newLabel.setAttribute("for", labelFor);
  newLabel.innerText = text;
  return newLabel;
};

const getNewInput = (type, name, value, classX) => {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", type);
  newInput.setAttribute("id", name);
  newInput.setAttribute("name", name);
  if (value) {
    newInput.setAttribute("value", value);
  }
  if (classX) {
    newInput.setAttribute("class", classX);
  }
  return newInput;
};

const getNewTextArea = (rows, name) => {
  const newTextArea = document.createElement("textarea");
  newTextArea.setAttribute("rows", rows);
  newTextArea.setAttribute("id", name);
  newTextArea.setAttribute("name", name);
  return newTextArea;
};

// Adds listener to + button and builds and appends form

const addDogButton = document.querySelector(".dogs-list__button--add");
addDogButton.addEventListener("click", () => {
  let dogSection = document.querySelector("main");
  dogSection.innerHTML = "";
  dogSection.appendChild(buildForm());
  const formSection = document.querySelector(".form");
  addFormListener(formSection);
});

// adds listener to form

const addFormListener = (formSection) => {
  formSection.addEventListener("submit", (event) => {

    event.preventDefault();
    const newDogName = formSection.querySelector("#name").value;
    const newDogPic = formSection.querySelector("#image").value;
    const newDogBio = formSection.querySelector("#bio").value;
    pushData(newDogName, newDogPic, newDogBio);
  });
};

const pushData = (name, pic, bio) => {
  const newDogObj = {};
  newDogObj.id = data.length;
  newDogObj.name = name;
  newDogObj.image = pic;
  newDogObj.bio = bio;

  data.push(newDogObj);
  console.log(data);
  populateHeader();
};


