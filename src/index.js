console.log(data);

// WRITE YOUR CODE BELOW!

const dogsList = document.querySelector(".dogs-list");
const dogInfo = document.querySelector(".main");
const addButton = document.querySelector(".dogs-list__button--add")
const dogSection = document.querySelector(".main__dog-section")

function renderDogButtons() {
    
    clearTopButts()

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
}

function clearTopButts() {
    dogsList.innerHTML = `<li class="dogs-list__button dogs-list__button--add">+</li>`;
    const addButton = document.querySelector(".dogs-list__button--add")
    addButton.addEventListener("click", function(eventObj){
        newDogForm()
    })
}

renderDogButtons()

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

function newDogForm() {

    dogInfo.innerHTML = ''

    const dogCardForm = document.createElement("section");
    dogCardForm.setAttribute("class", "main__dog-section");
    dogInfo.append(dogCardForm);

    const dogName = document.createElement("h2");
    dogName.innerText = "Add a new Dog";
    dogCardForm.append(dogName);

    const dogForm = document.createElement("form");
    dogForm.setAttribute("class", "form");
    dogCardForm.append(dogForm);

    const name = document.createElement("label");
    name.setAttribute("for", "name")
    name.innerText = "Dog's Name"
    dogForm.append(name)

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    dogForm.append(nameInput)

    const image = document.createElement("label")
    image.setAttribute("for", "image")
    image.innerText = "Dog's picture"
    dogForm.append(image)

    const imageInput = document.createElement("input")
    imageInput.setAttribute("type", "url")
    imageInput.setAttribute("id", "image")
    imageInput.setAttribute("name", "image")
    dogForm.append(imageInput)

    const bio = document.createElement("label")
    bio.setAttribute("for", "bio")
    bio.innerText = "Dog's bio"
    dogForm.append(bio)

    const bioInput = document.createElement("textarea")
    bioInput.setAttribute("rows", "5")
    bioInput.setAttribute("id", "bio")
    bioInput.setAttribute("name", "bio")
    dogForm.append(bioInput)

    const submitForm = document.createElement("input")
    submitForm.setAttribute("type", "submit")    
    submitForm.setAttribute("id", "submit")
    submitForm.setAttribute("name", "submit")
    submitForm.setAttribute("value", "Let's add a dog!")
    submitForm.setAttribute("class", "form__button")
    dogForm.append(submitForm)

    const submit = document.querySelector("form")

    submit.addEventListener("submit", (eventObj) => {
        eventObj.preventDefault()

        const dogObj = {
            id: data.length + 1,
            name: nameInput.value,
            image: imageInput.value,
            isGoodDog: true,
            bio: bioInput.value,
        }

        data.unshift(dogObj)

        renderDogButtons()
        
        dogSection.innerHTML= "<h2>No dogs ?!?</h2>"

    })
    
}



