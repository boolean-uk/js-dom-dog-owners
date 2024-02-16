console.log(data);

// WRITE YOUR CODE BELOW!

document.addEventListener("DOMContentLoaded", () => {
  const formButton = document.querySelector(".dogs-list__button--add");
  const dogContainer = document.querySelector(".main");

  function createDogListItem(dog) {
    const li = document.createElement("li");
    li.className = "dogs-list__button";
    li.innerText = dog.name;

    li.addEventListener("click", () => {
      dogContainer.innerHTML = "";
      dogContainer.appendChild(createDogCard(dog));
    });

    return li;
  }

  function createSection() {
    const section = document.createElement("section");
    section.className = "main__dog-section";
    return section;
  }

  const createDogCardDesc = (bio) => {
    const div = document.createElement("div");
    div.className = "main__dog-section__desc";

    const header = document.createElement("h3");
    header.innerText = "Bio";

    const text = document.createElement("p");
    text.innerText = bio;

    div.append(header, text);

    return div;
  };

  const createDogCard = (dog) => {
    const section = createSection();
    const header = document.createElement("h2");
    header.innerText = dog.name;

    const img = document.createElement("img");
    img.src = dog.image;

    const desc = createDogCardDesc(dog.bio);
    const bottomSection = createDogCardBottomSection(dog);

    section.append(header, img, desc, bottomSection);

    return section;
  };

  formButton.addEventListener("click", () => {
    dogContainer.innerHTML = "";
    dogContainer.appendChild(renderMainForm());
  });

  function createDogCardBottomSection(dog) {
    const button = document.createElement("button");
    const text = document.createElement("p");
    const div = document.createElement("div");

    div.className = "main__dog-section__btn";

    button.innerText = dog.isGoodDog ? "Bad Dog" : "Good Dog";
    text.innerText = `Is naughty? ${dog.isGoodDog ? "no" : "yes"}`;

    button.addEventListener("click", () => {
      dog.isGoodDog = !dog.isGoodDog;
      button.innerText = dog.isGoodDog ? "Bad Dog" : "Good Dog";
      text.innerText = `Is naughty? ${dog.isGoodDog ? "no" : "yes"}`;
    });

    div.append(text, button);
    return div;
  }

  function renderMainForm() {
    const section = createSection();
    const form = createForm();
    const h2 = document.createElement("h2");

    h2.innerText = "Add a new Dog";

    section.append(h2, form);

    return section;
  }

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

      const newDog = {
        name: nameInput.value,
        image: imgInput.value,
        bio: bioInput.value,
        isGoodDog: true,
      };

      data.unshift(newDog);
      listContainer.prepend(createDogListItem(newDog));
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

  function renderDogList(dogsArr) {
    const listContainer = document.querySelector(".dogs-list");
    for (const dog of dogsArr) {
      const item = createDogListItem(dog);
      listContainer.append(item);
    }
  }

  renderDogList(data);
});
