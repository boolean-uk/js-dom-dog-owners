console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list")
const cardArea = document.querySelector(".main__dog-section")
console.log(cardArea)

//create single list item
// const li = document.createElement("li")
// li.setAttribute("class", "dogs-list_button")
// li.innerText = data[0].name

// console.log(li)

// const test = document.createElement("p")
// test.innerText = "test"

function navLayout () { 
    data.forEach((dog) => {
    const li = document.createElement("li")
    li.setAttribute("class", "dogs-list__button")
    li.innerText = dog.name
    dogList.append(li)

    // create individual dog card items here
    const h2 = document.createElement("h2")
    h2.innerText = dog.name

    const img = document.createElement("img")
    img.src = dog.image
    img.alt = `${dog.name} picture`

    const div = document.createElement("div")
    div.setAttribute("class", "main__dog-section__desc")

    // create elements within div then append to div
    const h3 = document.createElement("h3")
    h3.innerText = "Bio"

    const bio = document.createElement("p")
    bio.innerText = dog.bio

    div.append(h3, bio)

    const p = document.createElement("p")
    // const em = document.createElement("em")
    // em.innerText = "Is naughty?"
    p.innerHTML = "<em>Is naughty?</em> yes!"

    // console.log(p)
    const button = document.createElement("button")
    button.innerText = "Good dog!"

    li.addEventListener("click", (event) => {
        const content = document.querySelectorAll(".main__dog-section > *")
        content.forEach((element) => {
            element.remove()
        })
        cardArea.append(h2, img, div, p, button)

        //add dog card items here when complete


    })


})
}
navLayout()

// console.log(dogList)


// section for adding the form
const extraDog = {
    id: null,
    name: null,
    bio: null,
    isGoodDog: true,
    image: null,
}


const addButton = document.querySelector(".dogs-list__button--add")
addButton.addEventListener("click", () => {
    console.log("in add button")


    removeContent()
    createForm()

})

function removeContent () {
    const content = document.querySelectorAll(".main__dog-section > *")
        content.forEach((element) => {
            element.remove()
        })
}

function createForm () {
    const h2 = document.createElement("h2")
    h2.innerText = "Add a new Dog"

    const form = document.createElement("form")
    form.setAttribute("class", "form")

    cardArea.append(h2, form)

    // create form elements
    const nameLabel = document.createElement("label")
    nameLabel.setAttribute("for", "name")
    nameLabel.innerText = "Dog's name"

    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")

    const imageLabel = document.createElement("label")
    imageLabel.setAttribute("for", "image")
    imageLabel.innerText = "Dog's picture"

    const imageInput = document.createElement("input")
    imageInput.setAttribute("type", "url")
    imageInput.setAttribute("id", "image")
    imageInput.setAttribute("name", "image")

    const bioLabel = document.createElement("label")
    bioLabel.setAttribute("for", "bio")
    bioLabel.innerText = "Dog's bio"

    const bioTextarea = document.createElement("textarea")
    bioTextarea.setAttribute("rows", "5")
    bioTextarea.setAttribute("id", "bio")
    bioTextarea.setAttribute("name", "bio")

    const submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("id", "submit")
    submitButton.setAttribute("name", "submit")
    submitButton.setAttribute("value", "Let's add a dog!")
    submitButton.setAttribute("class", "form__button")



    form.append(nameLabel, nameInput, imageLabel, imageInput, bioLabel, bioTextarea, submitButton)

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("tried to submit")
        extraDog.id = 0
        extraDog.name = nameInput.value
        extraDog.bio = bioTextarea.value
        extraDog.image = imageInput.value
        data.unshift(extraDog)

        removeContent()
        createForm()

        // create code for removing updating list items
        let doggs = document.querySelectorAll(".dogs-list > .dogs-list__button + .dogs-list__button")
        // doggs = doggs.splice(1, 20)
        doggs.forEach((element) => {
            element.remove()
        })

        // const plusButton = docu




        navLayout()



    })
        
}

