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