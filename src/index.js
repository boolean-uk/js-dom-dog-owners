console.log(data);
const dogList = document.querySelector('.dogs-list')


// WRITE YOUR CODE BELOW!
function addDogListItem() {
    for (let i = 0; i < data.length; i++) {
        const newDogListItem = document.createElement('li')
        newDogListItem.classList.add('dogs-list__button')
        newDogListItem.innerText = data[i].name
        dogList.append(newDogListItem)

        const dogListItem = document.querySelectorAll('.dogs-list__button')
    }
    return dogListItem
}

addDogListItem()
const dogsListItem = addDogListItem()
console.log(dogsListItem)