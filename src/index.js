let newData = [...data];

const dogList = document.querySelector(".dogs-list");
const main = document.querySelector(".main");

const renderNavigation = () => {
    const add = document.createElement("li");
    add.setAttribute("class", "dogs-list__button dogs-list__button--add");
    add.innerText = "+";
    dogList.innerText = "";
    dogList.append(add);

    newData.forEach((dog) => {
        const li = document.createElement("li");
        li.innerText = dog.name;
        li.setAttribute("class", "dogs-list__button");
        dogList.append(li);
    });

    const navigation__buttons = document.querySelectorAll(".dogs-list__button");

    navigation__buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const res = newData.find((i) => i.name === button.innerHTML);
            render(res);
        });
    });

    const addButton = document.querySelector(".dogs-list__button--add");

    addButton.addEventListener("click", () => {
        const section = document.createElement("section");
        section.setAttribute("class", "main__dog-section");

        const formTitle = document.createElement("h2");
        formTitle.innerText = "Add a new Dog";

        const formBlock = document.createElement("form");
        formBlock.setAttribute("class", "form");

        const labelName = document.createElement("label");
        labelName.setAttribute("for", "name");
        labelName.innerText = "Dog's name";
        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "name");
        inputName.setAttribute("name", "name");

        const labelPic = document.createElement("label");
        labelPic.setAttribute("for", "image");
        labelPic.innerText = "Dog's picture";
        const inputPic = document.createElement("input");
        inputPic.setAttribute("type", "url");
        inputPic.setAttribute("id", "image");
        inputPic.setAttribute("name", "image");

        const labelBio = document.createElement("label");
        labelBio.setAttribute("for", "bio");
        labelBio.innerText = "Dog's bio";
        const inputBio = document.createElement("textarea");
        inputBio.setAttribute("rows", "5");
        inputBio.setAttribute("id", "bio");
        inputBio.setAttribute("name", "bio");

        const submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("id", "submit");
        submitButton.setAttribute("name", "submit");
        submitButton.setAttribute("value", "Let's add a dog!");
        submitButton.setAttribute("class", "form__button");

        // configuration
        section.append(formTitle, formBlock);
        formBlock.append(
            labelName,
            inputName,
            labelPic,
            inputPic,
            labelBio,
            inputBio,
            submitButton
        );

        main.innerText = "";
        main.append(section);

        const form = document.querySelector(".form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const element = {
                id: newData.length + 1,
                name: e.target.name.value,
                bio: e.target.bio.value,
                isGoodDog: true,
                image: e.target.image.value,
            };

            newData.push(element);
            renderNavigation();
            render(element);
        });
    });
};

const render = (res) => {
    const section = document.createElement("section");
    section.setAttribute("class", "main__dog-section");

    const dogTitle = document.createElement("h2");
    dogTitle.innerText = res.name;

    const dogImg = document.createElement("img");
    dogImg.src = res.image;
    dogImg.setAttribute("alt", "dog");
    dogImg.setAttribute("style", "width: 350px; height: 300px;");

    const dogBio = document.createElement("div");
    dogBio.setAttribute("class", "main__dog-section__desc");

    const dogBioTitle = document.createElement("h3");
    dogBioTitle.innerText = "Bio";

    const dogBioParagraph = document.createElement("p");
    dogBioParagraph.innerText = res.bio;

    const dogIsNaughty = document.createElement("p");
    const em = document.createElement("em");
    em.innerText = "Is naughty?";
    dogIsNaughty.append(em);
    dogIsNaughty.innerText += `${res.isGoodDog ? " No!" : " Yes!"}`;

    const isGoodDogBlock = document.createElement("button");
    isGoodDogBlock.setAttribute(
        "onClick",
        `toggleDogStatus(${res.id + "," + res.isGoodDog})`
    );
    isGoodDogBlock.innerText = `${res.isGoodDog ? "Good dog!" : "Bad Dog!"}`;

    // configuration
    section.append(dogTitle, dogImg, dogBio, dogIsNaughty, isGoodDogBlock);
    dogBio.append(dogBioTitle, dogBioParagraph);

    main.innerText = "";
    main.append(section);
};

const toggleDogStatus = (id, status) => {
    const dog = newData.find((dog) => dog.id === id);
    dog.isGoodDog = !status;
    render(dog);
};

renderNavigation();
