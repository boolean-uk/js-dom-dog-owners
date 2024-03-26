console.log(data);
const dogList = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const dogSection = document.querySelector('.main__dog-section')

// WRITE YOUR CODE BELOW!
function addDogListItem() {
    for (let i = 0; i < data.length; i++) {
        const newDogListItem = document.createElement('li')
        newDogListItem.classList.add('dogs-list__button')
        newDogListItem.innerText = data[i].name
        dogList.append(newDogListItem)
    }
}

addDogListItem()

dogList.addEventListener('click', () => {
    const newSection = createDogSection()

    dogSection.replaceWith(newSection)
})

function createDogSection() {
    const newSection = document.createElement('section')
    newSection.classList.add('main__dog-section')

    return newSection
}