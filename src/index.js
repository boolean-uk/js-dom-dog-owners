console.log(data);
const dogList = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const dogSection = document.querySelector('.main__dog-section')

// WRITE YOUR CODE BELOW!
function addDogListItem() {
    data.forEach((dog) => {
        const newDogListItem = document.createElement('li')
        newDogListItem.classList.add('dogs-list__button')
        newDogListItem.innerText = dog.name
        dogList.append(newDogListItem)
        
        newDogListItem.addEventListener('click', () => {
        dogCard(dog)
        })
    })
}

addDogListItem()



function dogCard(dog) {
    const newSection = createDogSection()
    const dogName = document.createElement('h2')
    main.innerHTML = ''
    
    dogName.innerText = dog.name

    newSection.append(dogName)

    main.append(newSection)
}

function createDogSection() {
    const newSection = document.createElement('section')
    newSection.classList.add('main__dog-section')

    return newSection
}