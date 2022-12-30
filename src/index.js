console.log(data);

// QUERY SELECTORS FOR EXISTING ELEMENTS
const listUL = document.querySelector(".dogs-list");
const mainArea = document.querySelector(".main");
// const mainDescription = document.querySelector(".main__dog-section");
const headerArea = document.querySelector(".header");
const plusButton = document.querySelector(
  ".dogs-list__button.dogs-list__button--add"
);

const listItems = data;

// CREATE & DISPLAY THE LIST ITEMS W/ EVENT LISTENERS
function displayListItems() {
  for (let i = 0; i < listItems.length; i++) {
    const dogToShow = listItems[i];
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "dogs-list__button");
    listItem.innerText = dogToShow.name;
    listUL.append(listItem);

    listItem.addEventListener("click", function () {
      console.log("Clicked dog", dogToShow.name);
      // Throw away main section content, replace <section> in <main>
      // with the template <section> for a dog profile
      // Call function here to create & append the data.
      mainArea.innerHTML = "";
      showDogCard(dogToShow);
    });
  }
  plusButton.addEventListener("click", function () {
    console.log("Clicked on plus button");
    mainArea.innerHTML = "";
    newForm();
  });
}

// Create and append the form contents
function newForm() {
  const header = document.createElement("h2");
  header.innerText = "Add a new Dog";

  // Create form elements and apply attributes
  const section = document.createElement("section");
  section.setAttribute("class", "main__dog-section");

  const form = document.createElement("form");
  form.setAttribute("class", "form");

  // The form elements below will be appended to const form

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");

  const imageLabel = document.createElement("label");
  imageLabel.setAttribute("for", "image");

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "url");
  imageInput.setAttribute("id", "image");
  imageInput.setAttribute("name", "image");

  const bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");

  const bioTextArea = document.createElement("textarea");
  bioTextArea.setAttribute("rows", "5");
  bioTextArea.setAttribute("id", "bio");
  bioTextArea.setAttribute("name", "bio");

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.setAttribute("name", "submit");
  submitButton.setAttribute("value", "Let's add a dog!");
  submitButton.setAttribute("class", "form__button");

  // TO-DO: Add a submit event here
  // Go over the form lesson recording/slides

  // Append elements: section in mainArea, header & form in section
  // All form elements in form
  mainArea.append(section);
  section.append(header);
  section.append(form);
  form.append(nameLabel);
  form.append(nameInput);
  form.append(imageLabel);
  form.append(imageInput);
  form.append(bioLabel);
  form.append(bioTextArea);
  form.append(submitButton);

  const submitEvent = document.querySelector("form");
  submitEvent.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("SUBMITTED");

    const dogCreatedFromForm = {
      id: data.length + 1,
      name: nameInput.value,
      image: imageInput.value,
      isGoodDog: true,
      bio: bioTextArea.value,
    };

    listItems.unshift(dogCreatedFromForm);
    listUL.innerHTML = `<li class="dogs-list__button dogs-list__button--add">+</li>`;
    displayListItems();
  });
}

// Create and append the dog card contents - Called from listItem event listener
function showDogCard(dogToShow) {
  const section = document.createElement("section");
  section.setAttribute("class", "main__dog-section");

  const dogName = document.createElement("h2");
  dogName.innerText = dogToShow.name;

  const image = document.createElement("img");
  image.src = dogToShow.image;

  const description = document.createElement("div");
  description.setAttribute("class", "main__dog-section__desc");

  const header = document.createElement("h3");
  header.innerText = "Bio";

  const paragraph = document.createElement("p");
  paragraph.innerText = dogToShow.bio;

  const isNaughty = document.createElement("p");
  const emphasis = document.createElement("em");
  emphasis.innerText = "Is naughty? ";

  // APPEND ELELEMENTS
  mainArea.append(section);
  section.append(dogName);
  section.append(image);
  section.append(description);
  description.append(header);
  description.append(paragraph);
  isNaughty.append(emphasis);

  if (dogToShow.isGoodDog === true) {
    isNaughty.append("No!");
  } else if (dogToShow.isGoodDog === false) {
    isNaughty.append("Yes!");
  }
  description.append(isNaughty);
}
displayListItems();
