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

const test = document.createElement("p")
test.innerText = "test"

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








    li.addEventListener("click", (event) => {
        const content = document.querySelectorAll(".main__dog-section > *")
        content.forEach((element) => {
            element.remove()
        })
        cardArea.append(h2, img, div)

        //add dog card items here when complete


    })


})

console.log(dogList)
