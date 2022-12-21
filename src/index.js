console.log(data);

// WRITE YOUR CODE BELOW!
const dogListUl = document.querySelector(".dogs-list")
const dogListButton = document.querySelector(".dogs-list__button")
const dogMain = document.querySelector(".main")
const card = document.querySelector(".main__dog-section");

function clearCard() {
    card.innerHTML = "<h2></h2>";
  }

const dogList = () => {
    for (i = 0; i < data.length; i++) {
    const li = document.createElement("li")
    li.setAttribute("class", "dogs-list__button")
    li.setAttribute("id", i)
    li.innerText = data[i].name
    dogListUl.append(li)
    li.addEventListener("click", (eventObj) => {
        clearCard();
        selectCard(eventObj.target.id)
      });
    }
}

const selectCard = (dog) => {
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

dogList()