console.log(data);
data[1].bio = "This is nugget, he doesn't have a bio because he is a bad dog.";

// WRITE YOUR CODE BELOW!
function createDogList(data) {
    const dogList = document.querySelector(".dogs-list");

    data.forEach(dog => {
        const list = document.createElement("li");
        list.setAttribute("class","dogs-list__button");
        list.innerText = dog.name;
        list.addEventListener("click", () => renderDogCard(dog));

        dogList.append(list);
    });

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
    const section = document.createElement("section");
    section.setAttribute("class", "main__dog-section");

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
    main.append(section)
};

function renderDogCard(dog) {
    const noDogs = document.querySelector(".main__dog-section");
    const dogCard = createDogCard(dog);

    noDogs ? (noDogs.remove(), dogCard): noDogs;
};

createDogList(data)