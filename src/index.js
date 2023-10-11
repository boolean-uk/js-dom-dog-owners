// WRITE YOUR CODE BELOW!
data[1].bio = "This is nugget, he doesn't have a bio because he is a bad dog.";
//Card
const dogList = document.querySelector(".dogs-list");

function createDogList(data) {
    const addDog = document.querySelector(".dogs-list__button--add");
    addDog.addEventListener("click", renderForm)

    data.forEach(dog => {
        const list = document.createElement("li");

        list.setAttribute("class","dogs-list__button");
        list.innerText = dog.name;
        list.addEventListener("click", () => renderDogCard(dog));

        dogList.append(list);
    });
};

function updateDogList(dog) {
    const list = document.createElement("li");

    list.setAttribute("class","dogs-list__button");
    list.innerText = dog.name;
    list.addEventListener("click", () => renderDogCard(dog));

    dogList.append(list);
};

function createSection() {
    const section = document.createElement("section");
    section.setAttribute("class", "main__dog-section");

    return section
};

function createDogCardDesc(dog) {
    const div = document.createElement("div");
    div.setAttribute("class", "main__dog-section__desc");

    const h3 = document.createElement("h3");
    h3.innerText = "Bio";
    const p = document.createElement("p");
    p.innerText = dog.bio;

    div.append(h3, p);
    return div
};

function createDogCard(dog) {
    const main = document.querySelector(".main");
    const section = createSection();

    //Top Half
    const h2 = document.createElement("h2");
    h2.innerText = dog.name;
    const img = document.createElement("img");
    img.src = dog.image;
    img.style.width = "350px";
    img.style.height = "300px"

    //Bottom Half
    const p = document.createElement("p");
    p.innerHTML = "<em>Is naughty?</em> yes!"
    const button =  document.createElement("button");
    button.innerText = "Bad dog!";
    dog.isGoodDog ? 
    (button.innerText = "Good Dog!", p.innerHTML = "<em>Is naughty?</em> no!")
    : (button.innerText = "Bad Dog!", p.innerHTML = "<em>Is naughty?</em> yes!");

    const desc = createDogCardDesc(dog);

    //Append Changes
    section.append(h2, img, desc, p, button);
    main.append(section);
};

function renderDogCard(dog) {
    const noDogs = document.querySelector(".main__dog-section");

    noDogs ? (noDogs.remove(), createDogCard(dog)): noDogs;
};

//Form
function createForm() {
    const form = document.createElement("form");
    form.setAttribute("class", "form");

    //Input Name
    const labelName = document.createElement("label");
    labelName.setAttribute("for", "name");
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("id", "name");

    //Input Pic
    const labelPic = document.createElement("label");
    labelPic.setAttribute("for", "name");
    const inputPic = document.createElement("input");
    inputPic.setAttribute("type", "url");
    inputPic.setAttribute("name", "image");
    inputPic.setAttribute("id", "image");

    //Input Bio
    const labelBio = document.createElement("label");
    labelBio.setAttribute("for", "name");
    const inputBio = document.createElement("textarea");
    inputBio.setAttribute("rows", "5");
    inputBio.setAttribute("name", "bio");
    inputBio.setAttribute("id", "bio");

    //Submit
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.setAttribute("name", "submit");
    submit.setAttribute("value", "Let's add a dog!");
    submit.setAttribute("class", "form__button");

    form.addEventListener("submit", submitForm)

    form.append(
        labelName, 
        inputName,
        labelPic,
        inputPic,
        labelBio,
        inputBio, 
        submit
        );
    
    return form
};

function createFormCard() {
    const main = document.querySelector(".main");
    const section = createSection();
    const form = createForm();

    const h2 = document.createElement("h2");
    h2.innerText = "Add a new Dog";

    section.append(h2, form)
    main.append(section)
};

function renderForm() {
    const noDogs = document.querySelector(".main__dog-section");

    noDogs ? (noDogs.remove(), createFormCard()): noDogs;
};

//Submit Form 
function submitForm(e) {
    e.preventDefault();

    const newDog = {
        id: data.length +1,
        bio: e.target.bio.value,
        image: e.target.image.value,
        isGoodDog: true,
        name: e.target.name.value
    };

    data.push(newDog);
    updateDogList(newDog);
};

createDogList(data)