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
    let buttonText = document.createTextNode(`${goodBad(dogCard)}`)
    button.append(buttonText)
    mainDogSection.append(button);

    button.addEventListener("click", () => {
        goodBadDog();
        text.nodeValue = yesOrNo(data)
        buttonText.nodeValue = goodBad(data)
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
