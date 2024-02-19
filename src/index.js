const dogList = document.querySelector(".dogs-list");
const mainSection = document.querySelector(".main__dog-section");

function init() {
  renderDogButtons();
}

function renderDogButtons() {
  clearDiv(dogList);
  data.sort((b, a) => a.id - b.id);
  const newcreateButton = document.createElement("li");
  newcreateButton.classList.add("dogs-list__button");
  newcreateButton.classList.add("dog-list__button--add")
  newcreateButton.textContent = "+";
  newcreateButton.addEventListener("click", () => {
    clearDiv(mainSection);
    addNewDogForm();
  });
  dogList.appendChild(newcreateButton);
  console.log(data);
  data.forEach((dog) => {
    const listItem = document.createElement("li");
    listItem.classList.add("dogs-list__button");
    listItem.textContent = dog.name;

    listItem.addEventListener("click", () => {
      clearDiv(mainSection);
      displayDogCard(dog);
    });

    dogList.appendChild(listItem);
  });
}

function clearDiv(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}

function addNewDogForm() {
  const heading = document.createElement("h2");
  heading.textContent = "Add a new Dog";
  mainSection.appendChild(heading);

  const form = document.createElement("form");
  form.classList.add("form");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Dog's name";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  form.appendChild(nameInput);

  const imageLabel = document.createElement("label");
  imageLabel.setAttribute("for", "image");
  imageLabel.textContent = "Dog's picture";
  form.appendChild(imageLabel);

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "url");
  imageInput.setAttribute("id", "image");
  imageInput.setAttribute("name", "image");
  form.appendChild(imageInput);

  const bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");
  bioLabel.textContent = "Dog's bio";
  form.appendChild(bioLabel);

  const bioTextarea = document.createElement("textarea");
  bioTextarea.setAttribute("rows", "5");
  bioTextarea.setAttribute("id", "bio");
  bioTextarea.setAttribute("name", "bio");
  form.appendChild(bioTextarea);

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.setAttribute("name", "submit");
  submitButton.setAttribute("value", "Let's add a dog!");
  submitButton.classList.add("form__button");
  form.appendChild(submitButton);

  mainSection.appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newDog = {
      id: (data.length += 2),
      name: nameInput.value,
      image: imageInput.value,
      bio: bioTextarea.value,
      isGoodDog: true,
    };
    data.push(newDog);
    displayDogCard(newDog);
    renderDogButtons();
    form.reset();
  });
}

function displayDogCard(dog) {
  mainSection.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = dog.name;
  mainSection.appendChild(heading);

  const image = document.createElement("img");
  image.src = dog.image;
  image.alt = "";
  mainSection.appendChild(image);

  const desc = document.createElement("div");
  desc.classList.add("main__dog-section__desc");
  const bioHeading = document.createElement("h3");
  bioHeading.textContent = "Bio";
  desc.appendChild(bioHeading);
  const bioPara = document.createElement("p");
  bioPara.textContent = dog.bio;
  desc.appendChild(bioPara);
  mainSection.appendChild(desc);

  const naughtyPara = document.createElement("p");
  naughtyPara.innerHTML = `<em>Is naughty?</em> ${
    dog.isGoodDog ? "no" : "yes"
  }`;
  mainSection.appendChild(naughtyPara);

  const button = document.createElement("button");
  button.textContent = dog.isGoodDog ? "Bad dog!" : "Good dog!";
  button.addEventListener("click", () => toggleNaugty(dog))
  mainSection.appendChild(button);
}

function toggleNaugty(dog){
    dog.isGoodDog = !dog.isGoodDog
    displayDogCard(dog)
}

window.addEventListener("load", init);
