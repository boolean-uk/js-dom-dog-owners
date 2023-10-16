console.log(data);

// WRITE YOUR CODE BELOW!
function dog(name, image, bio) {
  this.id = data.length;
  this.name = name;
  this.image = image;
  this.bio = bio;
}

const addDog = (name, image, bio) => {
  data.unshift(new dog(name, image, bio))
  fillNav()
}

const findDogObj = (name) => {
  const foundDog = data.find(val => val.name === name)
  console.log(foundDog)
  return foundDog
}

const clearMain = () => {
  const content = document.querySelectorAll("main > *")
  content.forEach((val) => val.remove())
}

const addForm = () => {
  const addForm = document.querySelector(".dogs-list__button--add")
  addForm.addEventListener("click", () => createForm())
}

const grabInfoFromForm = (formInput) => {
  console.log("in grabInfo", formInput)
  console.log(formInput.getAttribute(""))
  const inputName = document.getElementById("name").value
  setTimeout(console.log("… submitted", inputName), 3000)
  const inputIMG = document.querySelector("input#image")
  const inputBio = document.querySelector("input#bio")
}

const fillNav = () => {
  const nav = document.querySelector("header > ul")
  data.forEach(dog => {
    const li = document.createElement("li")
    li.setAttribute("class", "dogs-list__button")
    li.innerText = dog.name
    li.addEventListener('click', () => renderDogCard(dog))
    nav.append(li)
  })
}

const clearNav = () => {
  const navItems = document.querySelectorAll("header > ul > li.dogs-list__button")
  navItems.forEach(item => {
    if (item.getAttribute("class").includes("dogs-list__button--add") === false) item.remove()
  })
}


const fillMain = (element) => {
  const main = document.querySelector("main")
  main.appendChild(element)
}

const test = (input) => console.log(input)

const renderDogCard = (dog) => {
  clearMain()

  const main = document.querySelector("main")

  const card = document.createElement("section")
  card.setAttribute("class", "main__dog-section")
  const name = document.createElement("h2")
  name.innerText = dog.name
  card.appendChild(name)

  const img = document.createElement("img")
  img.setAttribute("src", dog.image)
  card.appendChild(img)

  const div = document.createElement("div")
  div.setAttribute("class", "main__dog-section__desc")
  card.appendChild(div)

  const bio = document.createElement("h3")
  bio.innerText = "Bio"
  bioText = document.createElement("p")
  bioText.innerText = dog.bio
  div.appendChild(bio)
  div.appendChild(bioText)

  const p = document.createElement("p")
  const em = document.createElement("em")
  em.innerText = "Is naughty? "
  p.appendChild(em)
  
  const eval = document.createElement("span")
  eval.setAttribute("id", "evalDesc")
  eval.innerText = dog.isGoodDog ? "No!" : "Yes!"
  p.appendChild(eval)

  card.appendChild(p)

  const button = document.createElement("button")
  button.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
  button.addEventListener("click", (event) => toggleOnClick(event.target))

  card.appendChild(button)

  main.appendChild(card)
}

const toggleOnClick = (button) => {
  const oldText = button.innerText
  const pDesc = document.querySelector("section.main__dog-section > p > span#evalDesc")

  switch (oldText) {
    case "Good Dog!":
      button.innerText = "Bad Dog!"
      pDesc.innerText = "Yes!"
      break;
      case "Bad Dog!":
        button.innerText = "Good Dog!"
        pDesc.innerText = "No!"
      break;
    default:
      pDesc.innerText = "Maybe!"
      break;
  }
}

const createForm = () => {
  clearMain()
  const section = document.createElement("section")
  section.setAttribute("class", "main__dog-section")

  const h2 = document.createElement("h2")
  h2.innerText = "Add a new Doge"
  section.appendChild(h2)

  const form = document.createElement("form")
  form.setAttribute("class", "form")

  const formName = document.createElement("label")
  formName.setAttribute("for", "name")
  formName.innerText = "Dog's name"

  const inputName = document.createElement("input")
  inputName.setAttribute("type", "text")
  inputName.setAttribute("id", "name")
  inputName.setAttribute("name", "name")

  const formIMG = document.createElement("label")
  formIMG.setAttribute("for", "image")
  formIMG.innerText = "Dog's picture"

  const inputIMG = document.createElement("input")
  inputIMG.setAttribute("type", "url")
  inputIMG.setAttribute("id", "image")
  inputIMG.setAttribute("name", "image")

  const formBio = document.createElement("label")
  formBio.setAttribute("for", "bio")
  formBio.innerText = "Dog's bio"

  const inputBio = document.createElement("textarea")
  inputBio.setAttribute("rows", "5")
  inputBio.setAttribute("id", "bio")
  inputBio.setAttribute("name", "bio")

  form.appendChild(formName)
  form.appendChild(inputName)
  form.appendChild(formIMG)
  form.appendChild(inputIMG)
  form.appendChild(formBio)
  form.appendChild(inputBio)

  const submit = document.createElement("input")
  submit.setAttribute("type", "submit")
  submit.setAttribute("id", "submit")
  submit.setAttribute("name", "submit")
  submit.setAttribute("value", "Let's add a doge!")
  submit.setAttribute("class", "form__button")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    clearNav()
    addDog(inputName.value, inputIMG.value, inputBio.value)
    // setTimeout(() => addDog(inputName.value, inputIMG.value, inputBio.value), 5000)
  })
  
  form.appendChild(submit)

  section.appendChild(form)

  const main = document.querySelector("main")
  main.appendChild(section)
}

fillNav()
addForm()