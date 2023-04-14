// console.log(data);

// Use a for loop to loop through the list of the dogs and creeate a list.
for (let index = 0; index < data.length; index++) {
  createDogListItem(data, index);
}

function createDogListItem(data, index) {
  const dogContainer = document.querySelector(".main");

  // Create new element for the list.
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  ul.append(li);
  li.className = "dogs-list__button";
  li.innerText = data[index].name;

  // Add click event listener
  li.addEventListener("click", () => {
    dogContainer.innerHTML = "";
    createDogCardNamePhoto(data, index, dogContainer);
  });
}

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

// Function to display Bio text and the description.
const createDogCardDescBio = (data, index) => {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  const h3 = document.createElement("h3");
  h3.innerText = "Bio";

  const divP = document.createElement("p");
  divP.innerText = data[index].bio;

  div.append(h3, divP);

  return div;
};

// Function to display Bio text and the description.
function cardButtonSection(data, index) {
  const button = document.createElement("button");
  const text = document.createElement("p");

  const em = document.createElement("em");
  em.innerText = `Is Naughty? ${data[index].isGoodDog ? "No" : "Yes"}`;
  text.append(em);

  const div = document.createElement("div");

  div.className = "main__dog-section__btn";

  if (data[index].isGoodDog) {
    button.innerText = "Good Dog";
  } else {
    button.innerText = "Bad Dog";
  }

  div.append(text, button);
  return div;
}

// Function to display dog name, image and everything inside the section element.
const createDogCardNamePhoto = (data, index, dogContainer) => {
  const section = createSection();
  dogContainer.append(section);
  // Get and display dog name
  const h2 = document.createElement("h2");
  h2.innerText = data[index].name;

  // Fetch and display dog image path
  const image = document.createElement("img");
  image.setAttribute("src", data[index].image);
  image.setAttribute("alt", data[index].name);

  const desc = createDogCardDescBio(data, index);
  const bottomSec = cardButtonSection(data, index);

  section.append(h2, image, desc, bottomSec);
  return section;
};

// - When the plus button is clicked, it should replace the main card with a form to add a new dog to the list. You'll find a template for the form on the HTML page.
// - Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.

function createForm() {
  const form = document.createElement("form");

  const nameInput = createInput("name");
  const imgInput = createInput("image", "url");
  const bioInput = createInput("bio", "textarea");
  const submitInput = createInput("submit", "submit", "Let's add a dog!");

  const nameLabel = createLabel("name", "Dog's name");
  const imgLabel = createLabel("image", "Dog's picture");
  const bioLabel = createLabel("bio", "Dog's bio");

  form.className = "form";
  submitInput.className = "form__button";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dogName = document.querySelector("#name");
    const nameValue = dogName.value;

    const dogImage = document.querySelector("#image");
    const imageValue = dogImage.value;

    const dogBio = document.querySelector("#bio");
    const bioValue = dogBio.value;

    let itemObject = {};
    itemObject.id = data.length + 1;
    itemObject.name = nameValue;
    itemObject.bio = bioValue;

    if (itemObject.id % 2 === 0) {
      itemObject.isGoodDog = true;
    } else {
      itemObject.isGoodDog = false;
    }

    itemObject.image = imageValue;
    data.unshift(itemObject);

    reRender();
  });

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  );

  return form;
}

function reRender() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  const plus = document.createElement("li");
  plus.setAttribute("class", "dogs-list__button dogs-list__button--add");
  plus.innerText = "+";
  ul.append(plus);
  console.log(plus);

  for (let index = 0; index < data.length; index++) {
    createDogListItem(data, index);
  }

  const formButton = document.querySelector(".dogs-list__button--add");
  const dogContainer = document.querySelector(".main");

  formButton.addEventListener("click", () => {
    dogContainer.innerHTML = "";

    const section = renderMainForm();
    dogContainer.append(section);
  });
 -}

function createInput(idName, type = "text", value) {
  let input = null;

  if (type === "textarea") {
    input = document.createElement("textarea");
    input.setAttribute("rows", "5");
  } else {
    input = document.createElement("input");
    input.setAttribute("type", type);
  }

  input.setAttribute("id", idName);
  input.setAttribute("name", idName);

  if (value) input.setAttribute("value", value);

  return input;
}

function createLabel(forAttr, text) {
  const label = document.createElement("label");
  label.attributes.for = forAttr;
  label.innerText = text;

  return label;
}

function renderMainForm() {
  const section = createSection();
  const form = createForm();
  const h2 = document.createElement("h2");

  h2.innerText = "Add a new Dog";

  section.append(h2, form);

  return section;
}

function renderDogList(dogsArr) {
  const listContainer = document.querySelector(".dogs-list");
  for (const dog of dogsArr) {
    console.log(dog);
    const item = createDogListItem(dog, 1);
    console.log(item);
    listContainer.append(item);
  }
}

// renderDogList(data);

const formButton = document.querySelector(".dogs-list__button--add");
const dogContainer = document.querySelector(".main");

formButton.addEventListener("click", () => {
  dogContainer.innerHTML = "";

  const section = renderMainForm();
  dogContainer.append(section);
});
