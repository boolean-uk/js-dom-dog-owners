console.log(data);

// WRITE YOUR CODE BELOW!

class Dog {
    constructor(name, bio, image) {
      dog.id = data.length;
      dog.name = name;
      dog.image = image;
      dog.bio = bio;
      dog.isGoodDog = true;
    }
  
    toggleGoodness() {
      dog.isGoodDog = !dog.isGoodDog;
    }
  }
  
  const goodBadDog = (dog) => {
    dog.isGoodDog = !dog.isGoodDog;
  };
  
  const dogButtonList = document.querySelector(".dogs-list");
  const main = document.querySelector(".main");
  
  const removeDogs = () => {
    const allContent = document.querySelectorAll(".main > *");
    allContent.forEach((value) => value.remove());
  };
  
  const createDog = (dogCard) => {
    clearMain();
  
    const mainDogSection = document.createElement("section");
    mainDogSection.setAttribute("class", "main__dog-section");
    main.append(mainDogSection);
  
    const dogName = document.createElement("h2");
    dogName.innerText = `${dogCard.name}`;
    mainDogSection.append(dogName);
  
    const dogImg = document.createElement("img");
    dogImg.src = `${dogCard.image}`;
    dogImg.alt = `${dogCard.name}`;
    mainDogSection.append(dogImg);
  
    const dogBioSection = document.createElement("div");
    dogBioSection.setAttribute("class", "main__dog-section__desc");
    mainDogSection.append(dogBioSection);
  
    const bio = document.createElement("h3");
    bio.innerText = "Bio";
    dogBioSection.append(bio);
  
    const p = document.createElement("p");
    p.innerText = `${dogCard.bio}`;
    dogBioSection.append(p);
  
    const pOne = document.createElement("p");
    const em = document.createElement("em");
    em.innerText = "Is naughty";
    pOne.append(em);
  
    let text = document.createTextNode(`?`);
    pOne.append(text);
    mainDogSection.append(pOne);
   
  };
  
  const createDogNav = (dogName) => {
    const dogButton = document.createElement("li");
    dogButton.innerText = `${dogName.name}`;
    dogButton.setAttribute("class", "dogs-list__button");
    dogButton.setAttribute("Id", `${dogName.name}`);
    dogButtonList.append(dogButton);
  
    dogButton.addEventListener("click", () => {
      removeDogs();
      createDog(dogName);
    });
  };
  
  const addDog = (name, bio, image) => {
    const newDog = new Dog(name, bio, image);
    data.unshift(newDog);
    clearMain();
    fillNav();
  };
  
  const findDogObj = (name) => {
    return data.find((val) => val.name === name);
  };
  
  const clearMain = () => {
    const main = document.querySelector("main");
    while (main.firstChild) {
      main.firstChild.remove();
    }
  };
  
  const addForm = () => {
    const addFormButton = document.querySelector(".dogs-list__button--add");
    addFormButton.addEventListener("click", createForm);
  };
  
  const createForm = () => {
    clearMain();
    const section = document.createElement("section");
    section.setAttribute("class", "main__dog-section");
    const h2 = document.createElement("h2");
    h2.innerText = "Add a new Dog";
    section.appendChild(h2);
    const form = document.createElement("form");
    form.setAttribute("class", "form");
  
    const formElements = [
      { label: "Dog's name", type: "text", id: "name", name: "name" },
      { label: "URL", type: "url", id: "link", name: "link" },
      { label: "Dog's bio", type: "textarea", id: "bio", name: "bio" },
    ];
  
    formElements.forEach((element) => {
      const label = document.createElement("label");
      label.setAttribute("for", element.id);
      label.innerText = element.label;
  
      const input = document.createElement(element.type === "textarea" ? "textarea" : "input");
      input.setAttribute("type", element.type);
      input.setAttribute("id", element.id);
      input.setAttribute("name", element.name);
  
      form.appendChild(label);
      form.appendChild(input);
    });
  
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.setAttribute("name", "submit");
    submit.setAttribute("value", "add!");
    submit.setAttribute("class", "form_button");
    submit.setAttribute("class", "form__button");
  
    submit.addEventListener("click", () => grabInfoFromForm());
  
    form.appendChild(submit);
    section.appendChild(form);
  
    const main = document.querySelector("main");
    main.appendChild(section);
  };
  
  const grabInfoFromForm = () => {
    const nameInput = document.getElementById("name").value;
    const imageInput = document.getElementById("link").value;
    const bioInput = document.getElementById("bio").value;
  
      addDog(nameInput, bioInput, imageInput);
  };
  
  const fillNav = () => {
    const nav = document.querySelector("header > ul");
    data.forEach((dog) => {
      const li = document.createElement("li");
      li.setAttribute("class", "dogs-list__button");
      li.innerText = dog.name;
      li.addEventListener("click", () => createDog(dog));
      nav.appendChild(li);
    });
  };
  
  const renderDogCard = (dog) => {
    clearMain();
    const card = document.createElement("section");
    card.setAttribute("class", "main__dog-section");
  
    const name = document.createElement("h2");
    name.innerText = dog.name;
    card.appendChild(name);
  
    const img = document.createElement("img");
    img.setAttribute("src", dog.image);
    card.appendChild(img);
  
    const div = document.createElement("div");
    div.setAttribute("class", "main__dog-section__desc");
    card.appendChild(div);
  
    const bio = document.createElement("h3");
    bio.innerText = "Bio";
    div.appendChild(bio);
  
    const bioText = document.createElement("p");
    bioText.innerText = dog.bio;
    div.appendChild(bioText);
  
    const p = document.createElement("p");
    card.appendChild(p);
  
    main.appendChild(card);
  };
  
  fillNav();
  addForm();
  