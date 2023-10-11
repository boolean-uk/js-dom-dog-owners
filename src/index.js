console.log(data);

// WRITE YOUR CODE BELOW!
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

  const inputFieldName = document.createElement("input")
  inputFieldName.setAttribute("type", "text")
  inputFieldName.setAttribute("id", "name")
  inputFieldName.setAttribute("name", "name")

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
  form.appendChild(inputFieldName)
  form.appendChild(formIMG)
  form.appendChild(inputIMG)
  form.appendChild(formBio)
  form.appendChild(inputBio)

  const submit = document.createElement("input")
  submit.setAttribute("type", "submit")
  submit.setAttribute("id", "submit")
  submit.setAttribute("name", "submit")
  submit.setAttribute("value", "Let's add a doge!")
  submit.setAttribute("class", "form_button")

  form.appendChild(submit)

  section.appendChild(form)

  const main = document.querySelector("main")
  main.appendChild(section)
}

const fillNav = () => {
  const nav = document.querySelector("header > ul")
  console.log(nav)
  data.forEach(dog => {
    const li = document.createElement("li")
    li.setAttribute("class", "dogs-list__button")
    li.innerText = dog.name
    li.addEventListener('click', () => renderDogCard(dog))
    nav.append(li)
  })
}

const fillMain = (element) => {
  const main = document.querySelector("main")
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
  const eval = dog.isGoodDog ? "No" : "Yes"
  p.innerHTML = `<em>Is naughty?</em> ${eval}!`
  card.appendChild(p)

  const button = document.createElement("button")
  button.innerText = "Good Dog!"

  card.appendChild(button)

  main.appendChild(card)
}

fillNav()
addForm()