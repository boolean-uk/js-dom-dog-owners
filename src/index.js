// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list")
const main= document.querySelector(".main")

function populateDogList() {
    for (let i = 0; i < data.length; i++) {
        const dogItem = document.createElement("li")
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

    const oldContent = document.querySelector(".main__dog-section")
    oldContent.remove()

    let dogDataSearch  

    data.forEach((element) => {
        if (`${element.id}` === id) {
            dogDataSearch = element
        }
    })


   

    const section = document.createElement('section')
    section.className = "main__dog-section"
    
    const dogName = document.createElement('h2')
    dogName.innerHTML = dogDataSearch.name
    
    const dogImg = document.createElement('img')
    dogImg.src = dogDataSearch.image
    
    const dogBody = document.createElement('div')
    dogBody.className = "main__dog-section__desc"

    const bioHeader = document.createElement('h3')
    bioHeader.innerHTML = "Bio"

    const bioBody = document.createElement('p')
    bioBody.innerHTML = dogDataSearch.bio

    const isNaughty = !dogDataSearch.isGoodDog

    const naughtyBox = document.createElement('p')
    naughtyBox.append(document.createElement('em').innerHTML= "Is naughty?")
    const naughtyCheck = isNaughty === true ? " yes!" : " no!"
    naughtyBox.lastChild.after(naughtyCheck) 

    const button = document.createElement('button')

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

function newDog() {
    const oldContent = document.querySelector(".main__dog-section")
    oldContent.remove()
    
    section = document.createElement('section')
    section.className = "main__dog-section"


}

populateDogList()
