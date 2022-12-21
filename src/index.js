console.log(data);

// WRITE YOUR CODE BELOW!

const dogsList = document.querySelector(".dogs-list");
const dogInfo = document.querySelector(".main");


for (let i = 0; i < data.length; i++) {
    const dogIcon = document.createElement("li");
    dogIcon.innerText = data[i].name;
    dogIcon.setAttribute("class", "dogs-list__button");
    dogIcon.setAttribute("id", i);
    dogsList.append(dogIcon);
    dogIcon.addEventListener("click", function(eventObj) {
        console.log(eventObj);
        const value = eventObj.target.id;
        createDogCard(value);
    })
}

function createDogCard(value) {

    dogInfo.innerHTML = ''

    const dogCardMain = document.createElement("section");
    dogCardMain.setAttribute("class", "main__dog-section");
    dogInfo.append(dogCardMain);

    const dogName = document.createElement("h2");
    dogName.innerText = data[value].name;
    dogCardMain.append(dogName);

    const dogPic = new Image();
    dogPic.src = data[value].image;
    dogCardMain.append(dogPic);

    const dogContainer = document.createElement("div");
    dogContainer.setAttribute("class", "main__dog-section__desc");
    dogCardMain.append(dogContainer);

    const dogBio = document.createElement("h3");
    dogBio.innerText = "Bio";
    dogContainer.append(dogBio);

    const dogDesc = document.createElement("p");
    dogDesc.innerText = data[value].bio;
    dogContainer.append(dogDesc);

    const goodButton = document.createElement("button");
    const naughty = document.createElement("p")

    if (data[value].isGoodDog === false) {
        naughty.innerHTML = "<em>Is naughty?<em> yes!"
        goodButton.innerText = "Good Dog!"
    } else {
        naughty.innerHTML = "<em>Is naughty?<em> no!"
        goodButton.innerText = "Bad Dog!"
    }

    dogCardMain.append(naughty)
    dogCardMain.append(goodButton)

    goodButton.addEventListener("click", function (eventObj) {
        data[value].isGoodDog = !data[value].isGoodDog
        if (data[value].isGoodDog === false) {
            naughty.innerHTML = "<em>Is naughty?<em> yes!"
            goodButton.innerText = "Good Dog!"
        } else {
            naughty.innerHTML = "<em>Is naughty?<em> no!"
            goodButton.innerText = "Bad Dog!"
        }
    })
}


