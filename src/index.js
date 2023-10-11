console.log(data);

// WRITE YOUR CODE BELOW!

const goodBadDog = () => {
    data.isGoodDog = !data.isGoodDog;
}

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


const removeDogs = () => {
    const allContent = document.querySelectorAll(".main > *");
    allContent.forEach((val) => val.remove());
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
    pOne.innerHTML = `<em> Is naughty? <em> ${yesOrNo(dogCard)}`;
    mainDogSection.append(pOne);


    // NEED HELP SORTING THIS ONE OUT//
    const button = document.createElement("button");
    button.innerText = `${goodBad(dogCard)}`;
    mainDogSection.append(button);
    button.addEventListener("click", () => {
        goodBadDog();
        console.log(data.isGoodDog)
        pOne.innerHTML = `<em> Is naughty? <em> ${yesOrNo(dogCard)}`;
        button.innerText = `${goodBad(dogCard)}`;
        mainDogSection.append(pOne);
        mainDogSection.append(button);
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
