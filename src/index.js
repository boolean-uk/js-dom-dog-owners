console.log(data);

// WRITE YOUR CODE BELOW!

// Function to change boolean of if the dog is good or bad//
const goodBadDog = () => {
    data.isGoodDog = !data.isGoodDog;
};

// Function to create a string for the value of the boolean that determines a good or bad dog.//
const yesOrNo = (data) => {
    let answer = "";
    if (data.isGoodDog === true) {
        answer = " Yes!";
    } else if (data.isGoodDog === false) {
        answer = " No!";
    }
    return answer;
};

// Function to create a string for a button for the value of the boolean that determines a good or bad dog.//
const goodBad = (data) => {
    let answer = "";
    if (data.isGoodDog === true) {
        answer = "Good Dog!";
    } else if (data.isGoodDog === false) {
        answer = "Bad Dog!";
    }
    return answer;
};

// Some query selectors//
const dogButtonList = document.querySelector(".dogs-list");
const main = document.querySelector(".main");
const addDog = document.querySelector(".dogs-list__button--add");

// A function to remove dogs on the screen//
const removeDogs = (value) => {
    const allContent = document.querySelectorAll(".main > *");
    allContent.forEach((value) => value.remove());
};

// A function to remove the list items from header
const removeDogsNames = (value) => {
    dogButtonList.innerHTML = "";
    const li = document.createElement("li");
    li.classList.add("dogs-list__button")
    li.classList.add("dogs-list__button--add");
    li.innerText = "+";
    dogButtonList.append(li);
};

//Main function to create a dog card//
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

// A function to create the nav bar with dogs//
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

// The entire loop to render the dogs onto the page//
data.forEach((value) => {
    createDogNav(value);
});

// A function to create a form for the new dog//
function createNewDogForm() {
    removeDogs();
    const section = createSection();
    section.setAttribute("class", "main__dog-section");

    // This creates an h2
    const h2 = createH2("Add a new Dog");

    // This creates a form
    const form = createForm();
    form.setAttribute("class", "form");

    // This creates first label and name input
    const labelName = createLabel("name", "Dog's name");
    const inputText = createInput("text", "name", "name", "", "");

    // This creates label and src for dog image
    const labelImg = createLabel("image", "Dog's Picture");
    const inputUrl = createInput("url", "image", "image", "", "");

    // This creates the label and textbox for a dog bio
    const labelBio = createLabel("bio", "Dog's Bio");
    const textArea = createTextArea("5", "bio", "bio");

    // The submit button for adding a dog
    const inputButton = createInput(
        "submit",
        "submit",
        "submit",
        "Let's add a dog!",
        "form__button"
    );

    // All appends
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

    // query selects for adding to newDogState
    const dogsName = document.querySelector("#name");
    const dogsPic = document.querySelector("#image");
    const dogsBio = document.querySelector("#bio");

    // event listener for submitting new dog information.
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newDog = {
            id: data.length + 1,
            name: dogsName.value,
            bio: dogsBio.value,
            isGoodDog: true,
            image: dogsPic.value,
        };

        data.unshift(newDog);
        removeDogsNames();
        data.forEach((value) => {
            createDogNav(value);
        });

        dogsName.value = '';
        dogsPic.value = '';
        dogsBio.value = '';
        
    });
}

//A function to create a Section//
function createSection() {
    const section = document.createElement("section");
    return section;
}

// A function to create a string //
function createH2(string) {
    const h2 = document.createElement("h2");
    h2.innerText = string;
    return h2;
}

// A function to create a form //
function createForm() {
    const form = document.createElement("form");
    return form;
}

// A function to create a Label //
function createLabel(target, string) {
    const label = document.createElement("label");
    label.setAttribute("for", target);
    label.innerText = string;
    return label;
}

// A function to create a Input //
function createInput(type, id, name, value, classe) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("value", value);
    input.setAttribute("class", classe);
    return input;
}

// A function to create a Text Area //
function createTextArea(rows, id, name) {
    const textArea = document.createElement("textarea");
    textArea.setAttribute("rows", rows);
    textArea.setAttribute("id", id);
    textArea.setAttribute("name", name);
    return textArea;
}

// When the plus button gets clicked it will run a function that adds the new dog form onto screen//
addDog.addEventListener("click", () => {
    createNewDogForm();
});
