console.log(data)

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list")
const main= document.querySelector(".main")

function populateDogList() {
    for (let i = 0; i < data.length; i++) {
        dogItem = document.createElement("li")
        dogItem.className = "dogs-list__button"
        dogItem.innerHTML = data[i].name
        dogItem.id = data[i].id
        dogItem.addEventListener('click', (e) => {
            displayDog(e.currentTarget)
        })
        dogList.append(dogItem)
    }
}

function displayDog(object) {
    const id = object.id
    console.log(id)
    const oldContent = document.querySelector(".main__dog-section")
    oldContent.remove()

    let dogDataSearch  

    data.forEach((element) => {
        if (`${element.id}` === id) {
            dogDataSearch = element
        }
    })
    console.log(dogDataSearch)

   

    section = document.createElement('section')
    section.className = "main__dog-section"
    
    dogName = document.createElement('h2')
    dogName.innerHTML = dogDataSearch.name
    
    dogImg = document.createElement('img')
    dogImg.src = dogDataSearch.image
    
    dogBody = document.createElement('div')
    dogBody.className = "main__dog-section__desc"

    bioHeader = document.createElement('h3')
    bioHeader.innerHTML = "Bio"

    bioBody = document.createElement('p')
    bioBody.innerHTML = dogDataSearch.bio

    isNaughty = !dogDataSearch.isGoodDog

    naughtyBox = document.createElement('p')
    naughtyBox.append(document.createElement('em').innerHTML= "Is naughty?")
    naughtyCheck = isNaughty === true ? " yes!" : " no!"
    naughtyBox.lastChild.after(naughtyCheck) 

    button = document.createElement('button')

    button.innerText= "Good dog!"

    dogBody.append(bioHeader)
    dogBody.append(bioBody)


    section.append(dogName)
    section.append(dogImg)
    section.append(dogBody)
    section.append(naughtyBox)
    section.append(button)

    main.append(section)

}

populateDogList()
