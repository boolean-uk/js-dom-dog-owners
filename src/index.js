console.log(data);
// WRITE YOUR CODE BELOW!
// Query Selectors

const dogListUL = document.querySelector(".dogs-list")
const dogMain = document.querySelector(".main")
const dogSection = document.querySelector(".main__dog-section")



// clear top buttons

function clearTopButts() {
    dogListUL.innerHTML = '<li class="dogs-list__button dogs-list__button--add">+</li>';

    const addButton = document.querySelector(".dogs-list__button--add")

    addButton.addEventListener('click', function (eventOBJ) {
        newForm()
    })
}

// Creating Top Buttons from Data
function renderDogButtons() {

    clearTopButts()

    for (let i = 0; i < data.length; i++) {
        const dogLI = document.createElement("li")
        dogLI.innerText = data[i].name
        dogLI.setAttribute('class', 'dogs-list__button')
        dogLI.setAttribute('id', i)
        dogListUL.append(dogLI)

        dogLI.addEventListener('click', function (eventOBJ) {
            dogCard(eventOBJ.target.id)
        })
    }
}

// Dog Cards

function dogCard(value) {

    dogMain.innerHTML = "";

    const currentDog = data[value]
    const dogSection = document.createElement("section")
    dogSection.setAttribute('class', "main__dog-section")
    dogMain.append(dogSection)

    const cardH2 = document.createElement("h2")
    cardH2.innerText = currentDog.name
    dogSection.append(cardH2)

    const cardImg = document.createElement("img")
    cardImg.setAttribute('src', currentDog.image)
    cardImg.setAttribute('alt', "")
    dogSection.append(cardImg)

    const dogDiv = document.createElement("div")
    dogDiv.setAttribute('class', "main__dog-section__desc")
    dogSection.append(dogDiv)

    const dogH3 = document.createElement("h3")
    dogH3.innerText = "Bio"
    dogDiv.append(dogH3)

    const dogP = document.createElement("p")
    dogP.innerText = currentDog.bio
    dogDiv.append(dogP)

    const goodButton = document.createElement("button")
    const naughty = document.createElement("p")
    
    if (data[value].isGoodDog === false) {
        naughty.innerHTML = "<em>Is naughty?</em> yes!"
        goodButton.innerText = "Good Dog!"
    } else {
        naughty.innerHTML = "<em>Is naughty?</em> no!"
        goodButton.innerText = "Bad Dog!"
    }


    goodButton.addEventListener("click", function (eventOBJ) {
        data[value].isGoodDog = !data[value].isGoodDog
        if (data[value].isGoodDog === false) {
            naughty.innerHTML = "<em>Is naughty?</em> yes!"
            goodButton.innerText = "Good Dog!"
        } else {
            naughty.innerHTML = "<em>Is naughty?</em> no!"
            goodButton.innerText = "Bad Dog!"
        }
    })
    
    dogSection.append(naughty)
    dogSection.append(goodButton)
}




function newForm() {

    dogMain.innerHTML= "";

    const dogSection = document.createElement("section")
    dogSection.setAttribute('class', "main__dog-section")
    dogMain.append(dogSection)

    const newH2 = document.createElement("h2")
    newH2.innerText = "Add a new Dog"
    dogSection.append(newH2)

    const newDoggoForm = document.createElement("form")
    newDoggoForm.setAttribute("class", "form")
    dogSection.append(newDoggoForm)

    const nameLabel = document.createElement("label")
    nameLabel.setAttribute("for", "name")
    nameLabel.innerText = "Dog's name"
    newDoggoForm.append(nameLabel)

    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    newDoggoForm.append(nameInput)

    const imgLabel = document.createElement("label")
    imgLabel.setAttribute("for", "image")
    imgLabel.innerText = "Dog's picture"
    newDoggoForm.append(imgLabel)

    const imgInput = document.createElement("input")
    imgInput.setAttribute("type", "url")
    imgInput.setAttribute("id", "image")
    imgInput.setAttribute("name", "image")
    newDoggoForm.append(imgInput)

    const bioLabel = document.createElement("label")
    bioLabel.setAttribute("for", "bio")
    bioLabel.innerText = "Dog's bio"
    newDoggoForm.append(bioLabel)

    const bioTextArea = document.createElement("textarea")
    bioTextArea.setAttribute("rows", "5")
    bioTextArea.setAttribute("id", "bio")
    bioTextArea.setAttribute("name", "bio")
    newDoggoForm.append(bioTextArea)

    const doggoSubmit = document.createElement("input")
    doggoSubmit.setAttribute("type", "submit")
    doggoSubmit.setAttribute("id", "submit")
    doggoSubmit.setAttribute("name", "submit")
    doggoSubmit.setAttribute("value", "Let's add a dog!")
    doggoSubmit.setAttribute("class", "form__button")
    newDoggoForm.append(doggoSubmit)

    const dogNameInput = document.querySelector("#name")
    const dogImgInput = document.querySelector("#image")
    const bioInput = document.querySelector("#bio")
    const dogForm = document.querySelector(".form")

    dogForm.addEventListener('submit', (eventOBJ) => {
        eventOBJ.preventDefault();
        
        const dogOBJ = {
            id: data.length + 1,
            name: nameInput.value,
            image: imgInput.value,
            isGoodDog: true,
            bio: bioTextArea.value,
        }
        
        data.unshift(dogOBJ)

        renderDogButtons()
        dogSection.innerHTML= '<h2>No dogs ?!?</h2>';
    })

}







renderDogButtons()



