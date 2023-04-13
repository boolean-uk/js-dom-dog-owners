console.log(data);

// WRITE YOUR CODE BELOW!

const main = document.querySelector('.main')

const dogsList = document.querySelector('.dogs-list')

const mainDogSection = document.querySelector('.main__dog-section')

// Main

function createButton() {
    for (let i = 0; i < data.length; i++) {
        const dogLi = document.createElement('li');
        dogLi.setAttribute('class','dogs-list__button');
        // dogLi.setAttribute('id', `menu-${i}`);
        dogLi.innerText = data[i].name
        dogsList.append(dogLi);
    }
}

// Dogs List



// Main-Dog-Section

// create a constant for the "li"
// set attributes of the "li"
// set the innerText of the "li"
// append in to the "ul" constant

createButton()