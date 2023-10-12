console.log(data);

// WRITE YOUR CODE BELOW!

const goodBadDog = () => {
    data.isGoodDog = !data.isGoodDog;
};

const yesOrNo = (data) => {
    let answer = "";
    if (data.isGoodDog === true) {
        answer = "Yes!";
    } else if (data.isGoodDog === false) {
        answer = "No!";
    }
    return answer;
};

const goodBad = (data) => {
    let answer = "";
    if (data.isGoodDog === true) {
        answer = "Good Dog!";
    } else if (data.isGoodDog === false) {
        answer = "Bad Dog!";
    }
    return answer;
};

const dogButtonList = document.querySelector(".dogs-list");
const main = document.querySelector(".main");
const addDog = document.querySelector(".dogs-list__button--add");

const removeDogs = (value) => {
    const allContent = document.querySelectorAll(".main > *");
    allContent.forEach((value) => value.remove());
};

const createDog = (dogCard) => {
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
    em.innerText = "Is naughty?";

    let text = document.createTextNode(`${yesOrNo(dogCard)}`);
    pOne.append(em);
    pOne.append(text);
    mainDogSection.append(pOne);

    const button = document.createElement("button");
    let buttonText = document.createTextNode(`${goodBad(dogCard)}`);
    button.append(buttonText);
    mainDogSection.append(button);

    button.addEventListener("click", () => {
        goodBadDog();
        text.nodeValue = yesOrNo(data);
        buttonText.nodeValue = goodBad(data);
    });
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

data.forEach((value) => {
    createDogNav(value);
});

function createNewDog() {
    removeDogs();
    const section = createSection();
    section.setAttribute("class", "main__dog-section");

    const h2 = createH2("Add a new Dog");

    const form = createForm();
    form.setAttribute("class", "form");

    const labelName = createLabel("name", "Dog's name");
    const inputText = createInput("text", "name", "name", "", "");

    const labelImg = createLabel("image", "Dog's Picture");
    const inputUrl = createInput("url", "image", "image", "", "");

    const labelBio = createLabel("bio", "Dog's Bio");
    const textArea = createTextArea("5", "bio", "bio");

    const inputButton = createInput("submit", "submit", "submit", "Let's add a dog!", "form__button");

    main.append(section);
    section.append(h2);
    section.append(form);

    form.append(labelName);
    form.append(inputText);

    form.append(labelImg);
    form.append(inputUrl);

    form.append(labelBio);
    form.append(textArea);

    form.append(inputButton);
}

function createSection() {
    const section = document.createElement("section");
    return section;
}

function createH2(string) {
    const h2 = document.createElement("h2");
    h2.innerText = string;
    return h2;
}

function createForm() {
    const form = document.createElement("form");
    return form;
}

function createLabel(target, string) {
    const label = document.createElement("label");
    label.setAttribute("for", target);
    label.innerText = string;
    return label;
}

function createInput(type, id, name, value, classe) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("value", value);
    input.setAttribute("class", classe);
    return input;
}

function createTextArea (rows, id, name){
    const textArea = document.createElement("textarea")
    textArea.setAttribute("rows", rows);
    textArea.setAttribute("id", id);
    textArea.setAttribute("name", name);
    return textArea
}

createNewDog();
