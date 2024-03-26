// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list")
const main = document.querySelector(".main")
const addDog = document.querySelector(".dogs-list__button--add")

function clearOldContent() {
    const oldContent = document.querySelector(".main__dog-section")
    oldContent.remove()
}

function createDogListItem(i) {
    const dogItem = document.createElement("li")
        dogItem.className = "dogs-list__button"
        dogItem.innerHTML = data[i].name
        dogItem.id = data[i].id
        dogItem.addEventListener("click", (e) => {
            displayDog(e.currentTarget)
        })

        return dogItem
}

function populateDogList() {
    for (let i = 0; i < data.length; i++) {
        const dogItem = createDogListItem(i)
        dogList.append(dogItem)
    }
}

function displayDog(object) {
    const id = object.id

    clearOldContent()

    let dogDataSearch

    data.forEach((element) => {
        if (`${element.id}` === id) {
            dogDataSearch = element
        }
    })

    const section = document.createElement("section")
    section.className = "main__dog-section"

    const dogName = document.createElement("h2")
    dogName.innerHTML = dogDataSearch.name

    const dogImg = document.createElement("img")
    dogImg.src = dogDataSearch.image

    const dogBody = document.createElement("div")
    dogBody.className = "main__dog-section__desc"

    const bioHeader = document.createElement("h3")
    bioHeader.innerHTML = "Bio"

    const bioBody = document.createElement("p")
    bioBody.innerHTML = dogDataSearch.bio

    const isNaughty = !dogDataSearch.isGoodDog

    const naughtyBox = document.createElement("p")
    naughtyBox.append((document.createElement("em").innerHTML = "Is naughty?"))
    const naughtyCheck = isNaughty === true ? " yes!" : " no!"
    naughtyBox.lastChild.after(naughtyCheck)

    const button = document.createElement("button")

    button.innerText = "Good dog!"

    dogBody.append(bioHeader)
    dogBody.append(bioBody)

    section.append(dogName)
    section.append(dogImg)
    section.append(dogBody)
    section.append(naughtyBox)
    section.append(button)

    main.append(section)
}

function addNewDog(form) {
    clearOldContent()
    
    const dogName = form.querySelector("#name").value
    const dogImg = form.querySelector("#image").value
    const dogBio = form.querySelector("#bio").value
    data.push({
        id: data.length + 1,
        name: dogName,
        bio: dogBio,
    isGoodDog: true,
    image: dogImg
    })
    const listItem = createDogListItem(data.length-1)
    dogList.children[0].after(listItem)

    const section = document.createElement("section")
    section.className = "main__dog-section"

    const heading = document.createElement("h2")
    heading.innerHTML = "No dogs ?!?"

    section.append(heading)

    main.append(section)

}

function newDog() {
    clearOldContent()

    const section = document.createElement("section")
    section.className = "main__dog-section"

    const heading = document.createElement("h2")
    heading.innerHTML = "Add a new Dog"

    const form = document.createElement("form")
    form.className = "form"
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        addNewDog(e.currentTarget)
    })

    const labelName = document.createElement("label")
    labelName.for = "name"
    labelName.innerHTML = "Dog's Name"

    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name"
    nameInput.name = "name"

    const labelPicture = document.createElement("label")
    labelPicture.for = "image"
    labelPicture.innerHTML = "Dog's picture"

    const picInput = document.createElement("input")
    picInput.type = "url"
    picInput.id = "image"
    picInput.name = "image"

    const labelBio = document.createElement("label")
    labelBio.for = "bio"
    labelBio.innerHTML = "Dog's bio"

    const bioInput = document.createElement("textarea")
    bioInput.rows = "5"
    bioInput.id = "bio"
    bioInput.name = "bio"

    const submit = document.createElement("input")
    submit.type = "submit"
    submit.id = "submit"
    submit.name = "submit"
    submit.value = "Let's add a dog!"
    submit.className = "form__button"

    form.append(labelName)
    form.append(nameInput)
    form.append(labelPicture)
    form.append(picInput)
    form.append(labelBio)
    form.append(bioInput)
    form.append(submit)

    section.append(heading)
    section.append(form)

    main.append(section)
}

populateDogList()

addDog.addEventListener("click", () => {
    newDog()
})
