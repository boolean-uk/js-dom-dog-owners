console.log(data);

// WRITE YOUR CODE BELOW!
const dogListUl = document.querySelector(".dogs-list")
const dogListButton = document.querySelector(".dogs-list__button")
const dogMain = document.querySelector(".main")
const card = document.querySelector(".main__dog-section")
const addDog = document.querySelector(".dogs-list__button--add")

function clearCard() {
    card.innerHTML = "<h2>No dogs ?!?</h2>"
}

const clearTopButtons = () => {
    dogListUl.innerHTML = "<li class='dogs-list__button dogs-list__button--add'>+</li>"
    const addDog = document.querySelector(".dogs-list__button--add")
    addDog.addEventListener("click", () => {
        form()
    })
}

const dogList = () => {
    clearTopButtons()
    for (i = 0; i < data.length; i++) {
    const li = document.createElement("li")
    li.setAttribute("class", "dogs-list__button")
    li.setAttribute("id", i)
    li.innerText = data[i].name
    dogListUl.append(li)
    li.addEventListener("click", (eventObj) => {
        clearCard()
        dogCard(eventObj.target.id)
      })
    }
}

const dogCard = (dog) => {
    const name = document.querySelector("h2")
    name.innerText = data[dog].name

    const img = document.createElement("img")
    img.setAttribute("src", data[dog].image)
    card.append(img)

    const biodiv = document.createElement("div")
    biodiv.setAttribute("class", "main__dog-section__desc")
    card.append(biodiv)

    const bio = document.createElement("h3")
    bio.innerText = "bio"
    biodiv.append(bio)

    const text = document.createElement("p")
    text.innerText = data[dog].bio
    biodiv.append(text)

    goodBad(dog)
}

const goodBad = (dog) => {
    const button = document.createElement("button")
    const goodOrBad = document.createElement("p")

    if (data[dog].isGoodDog === false) {
        goodOrBad.innerHTML = "<em>Is naughty?</em> yes!"
        button.innerText = "Good dog!"
    } else {
        goodOrBad.innerHTML = "<em>Is naughty?</em> no!"
        button.innerText = "Bad dog!"
    }
    button.addEventListener("click", function () {
    data[dog].isGoodDog = !data[dog].isGoodDog
        if (data[dog].isGoodDog === true) {
            goodOrBad.innerHTML = "<em>Is naughty?</em> yes!"
            button.innerText = "Good dog!"
        } else {
            goodOrBad.innerHTML = "<em>Is naughty?</em> no!"
            button.innerText = "Bad dog!"
        }
    })
    card.append(goodOrBad)
    card.append(button)
}

const form = () => {
    clearCard()
    const title = document.querySelector("h2")
    title.innerText = "Add a dog!"

    const form = document.createElement("form")
    form.setAttribute("class", "form")
    card.append(form)

    // LABEL FOR NAME
    const name = document.createElement("label")
    name.setAttribute("for", "name")
    name.innerText = "Dog's name"
    form.append(name)
    // INPUT FOR NAME
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    form.append(nameInput)

    // LABEL FOR IMAGE
    const image = document.createElement("label")
    image.setAttribute("for", "image")
    image.innerText = "Dog's picture"
    form.append(image)
    // INPUT FOR IMAGE
    const imageInput = document.createElement("input")
    imageInput.setAttribute("type", "url")
    imageInput.setAttribute("id", "image")
    imageInput.setAttribute("name", "image")
    form.append(imageInput)

    // LABEL FOR BIO
    const bio = document.createElement("label")
    bio.setAttribute("for", "bio")
    bio.innerText = "Dog's bio"
    form.append(bio)
    // INPUT FOR BIO
    const bioInput = document.createElement("textarea")
    bioInput.setAttribute("rows", "5")
    bioInput.setAttribute("id", "bio")
    bioInput.setAttribute("name", "bio")
    form.append(bioInput)

    // SUBMIT
    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "submit")
    submit.setAttribute("name", "submit")
    submit.setAttribute("value", "Let's add a dog!")
    submit.setAttribute("class", "form__button")
    form.append(submit)

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        submitted(nameInput.value, imageInput.value, bioInput.value)
    })
}

const submitted = (name, image, bio) => {
    if (image === "") {
        image = "https://t4.ftcdn.net/jpg/05/07/58/41/360_F_507584110_KNIfe7d3hUAEpraq10J7MCPmtny8EH7A.jpg"
    }
    const newDog = {
        id: data.length + 1,
        name: name,
        image: image,
        isGoodDog: true,
        bio: bio
    }
    data.unshift(newDog)
    console.log(newDog)
    dogList()
    clearCard()
}

dogList()