function createDogNav(dogs) {
  const dogsList = document.querySelector(".dogs-list");
  clearNavBarList(dogsList);
  dogs.forEach((dog) => {
    const navListItem = document.createElement("li");
    const dogName = dog.name;
    navListItem.innerText = dogName;
    navListItem.className = "dogs-list__button";

    navListItem.addEventListener("click", () => createDogCardPix(dog));
    dogsList.append(navListItem);
  });
}

function clearNavBarList(dogsList) {
  while (dogsList.childElementCount > 1) {
    dogsList.lastChild.remove();
  }
}

function createDogCardPix(dog) {
  const main = selectMain();
  removeChildren();

  const section = createSection();

  const h2 = createHtwo(dog);

  const img = createImage(dog);

  const divDogSection = createDivDogSection(dog);

  const p = createParagraph(dog);

  const button = createButton(dog);

  main.append(section);

  section.append(h2);
  section.append(img);
  section.append(divDogSection);
  section.append(p);
  section.append(button);
}

function selectMain() {
  return document.querySelector("main.main");
}

function removeChildren() {
  const main = selectMain();
  Array.from(main.children).forEach((child) => {
    child.remove();
  });
}

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

function createHtwo(dog) {
  const h2 = document.createElement("h2");
  h2.innerText = dog.name;
  return h2;
}

function createImage(dog) {
  const img = document.createElement("img");
  img.src = dog.image;
  img.alt = `picture of ${dog.name}`;
  return img;
}

function createDivDogSection(dog) {
  const divDogSection = document.createElement("div");
  divDogSection.className = "main__dog-section__desc";

  const h3 = document.createElement("h3");
  h3.innerText = "Bio";

  const p = document.createElement("p");
  p.innerText = dog.bio;

  console.log("dog :>> ", dog);
  divDogSection.append(h3);
  divDogSection.append(p);

  console.log("divDogSection :>> ", divDogSection);
  return divDogSection;
}

function createParagraph(dog) {
  const p = document.createElement("p");
  const em = document.createElement("em");

  em.innerText = "Is naughty?";

  p.append(em);

  dog.isGoodDog
    ? (p.innerHTML = `${em.outerHTML} yes!`)
    : (p.innerHTML = `${em.outerHTML} no!`);

  return p;
}

function createButton(dog) {
  const button = document.createElement("button");
  button.addEventListener("click", (e) => flipTheGoodDog(e, dog));

  dog.isGoodDog
    ? (button.innerText = `Good dog!`)
    : (button.innerText = `Bad dog!`);

  return button;
}

function flipTheGoodDog(e, dog) {
  dog.isGoodDog = !dog.isGoodDog;

  const parent = e.target.parentElement;
  const p = parent.children[3];

  e.target.remove();
  p.remove();

  parent.append(createParagraph(dog));
  parent.append(createButton(dog));
}

function createForm() {
  const main = selectMain();
  removeChildren();

  const formSection = createSection();

  const h2 = createH2NewDog();

  const form = document.createElement("form");
  form.className = "form";

  const formElements = [];

  formElements.push(createLabel("name", "name"));
  formElements.push(createInput("input", "text", "name"));

  formElements.push(createLabel("image", "picture"));
  formElements.push(createInput("input", "url", "image"));

  formElements.push(createLabel("bio", "bio"));
  formElements.push(createInput("textarea", null, "bio", null, null, 5));

  formElements.push(
    createInput(
      "input",
      "submit",
      "submit",
      "form__button",
      "Let's add a dog!",
      5
    )
  );

  formElements[6].addEventListener("click", (e) => {
    e.preventDefault();
    const completedForm = e.target.form;
    console.log("form :>> ", form);
    const completedName = completedForm.querySelector("#name");
    const completedImage = completedForm.querySelector("#image");
    const completedBio = completedForm.querySelector("#bio");

    const output = {
      [completedName.id]: completedName.value,
      [completedImage.id]: completedImage.value,
      [completedBio.id]: completedBio.value,
      isGoodDog: true,
    };

    dogs.unshift(output);
    createDogNav(dogs);
  });

  formSection.append(h2);
  formSection.append(form);

  formElements.forEach((element) => {
    form.append(element);
  });

  main.append(formSection);
}

function createLabel(inputId, dogText) {
  const label = document.createElement("label");
  label.innerText = `Dog's ${dogText}`;
  label.setAttribute("for", inputId);
  return label;
}

function createInput(element, type, inputId, className, value, rowCount) {
  const input = document.createElement(element);
  input.type = type;
  input.id = inputId;
  input.name = inputId;

  if (className) {
    input.className = className;
  }

  if (rowCount) {
    input.setAttribute("rows", rowCount);
  }
  return input;
}

function createH2NewDog() {
  const h2 = document.createElement("h2");
  h2.innerText = "Add a new Dog";
  return h2;
}

const addButton = document.querySelector(".dogs-list__button--add");
addButton.addEventListener("click", createForm);

const dogs = data;

createDogNav(dogs);

const globalDog = dogs[1];
createDogCardPix(globalDog);

createForm();
