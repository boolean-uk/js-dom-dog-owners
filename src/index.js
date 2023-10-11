console.log(data);

// WRITE YOUR CODE BELOW!
const dogButtons = document.querySelector("ul");

for (let i = 0; i < data.length; i++) {

    // Dog selector buttons

    const dogs = data[i];

    const dogList = document.createElement("li");
    dogList.innerText = dogs.name
    dogButtons.append(dogList)

    dogList.setAttribute('class', 'dogs-list__button');
}

    //  Dog card

const allDogs = document.querySelectorAll('.dogs-list__button')

const bio = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,minima voluptates libero cumque rerum consequatur optio aliquid sinteum maxime illo laborum omnis quo ab rem cupiditate nullaperspiciatis ipsum!"

const firstDogButton = allDogs[1]
const secondDogButton = allDogs[2]
const thirdDogButton = allDogs[3]
const fourthDogButton = allDogs[4]
const fifthDogButton = allDogs[5]
const sixthDogButton = allDogs[6]
const seventhDogButton = allDogs[7]

const firstDog = data[0]
const secondDog = data[1]
const thirdDog = data[2]
const fourthDog = data[3]
const fifthDog = data[4]
const sixthDog = data[5]
const seventhDog = data[6]

const dogCard = document.querySelector('.main__dog-section')

const dogName = document.querySelector('h2');
dogCard.append(dogName)

const dogImg = document.createElement('img')
dogCard.append(dogImg)

const dogBio = document.createElement('p')
dogCard.append(dogBio)

const naughtyCheck = document.createElement('p')
dogCard.append(naughtyCheck)
dogCard.setAttribute("class", "main__dog-section")

const naughtyButton = document.createElement('button')
dogCard.append(naughtyButton)
naughtyButton.style.backgroundColor = 'white'

firstDogButton.addEventListener("click", mrBonkers);
naughtyButton.addEventListener('click', flipswitch)



function mrBonkers() {
    dogName.innerText = firstDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = firstDog.image
    if (firstDog.isGoodDog === true) {
            naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
            naughtyButton.innerText = 'Bad Dog'
    } else if(firstDog.isGoodDog === false) {
            naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
            naughtyButton.innerText = 'Good Dog'
    }
}

 
secondDogButton.addEventListener("click", nugget);

function nugget() {
    dogName.innerText = secondDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = secondDog.image
    if (secondDog.isGoodDog === true) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
        naughtyButton.innerText = 'Bad Dog'
} else if(secondDog.isGoodDog === false) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
        naughtyButton.innerText = 'Good Dog'
}
}



thirdDogButton.addEventListener("click", skittles);

function skittles() {
    dogName.innerText = thirdDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = thirdDog.image
    if (thirdDog.isGoodDog === true) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
        naughtyButton.innerText = 'Bad Dog'
} else if(thirdDog.isGoodDog === false) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
        naughtyButton.innerText = 'Good Dog'
}
}


fourthDogButton.addEventListener("click", buttercup);

function buttercup() {
    dogName.innerText = fourthDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = fourthDog.image
    if (fourthDog.isGoodDog === true) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
        naughtyButton.innerText = 'Bad Dog'
} else if(fourthDog.isGoodDog === false) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
        naughtyButton.innerText = 'Good Dog'
}
}


fifthDogButton.addEventListener("click", lucipher);

function lucipher() {
    dogName.innerText = fifthDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = fifthDog.image
    if (fifthDog.isGoodDog === true) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
        naughtyButton.innerText = 'Bad Dog'
} else if(fifthDog.isGoodDog === false) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
        naughtyButton.innerText = 'Good Dog'
}
}

sixthDogButton.addEventListener("click", snooper);

function snooper() {
    dogName.innerText = sixthDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = sixthDog.image
    if (sixthDog.isGoodDog === true) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
        naughtyButton.innerText = 'Bad Dog'
} else if(sixthDog.isGoodDog === false) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
        naughtyButton.innerText = 'Good Dog'
}
}

seventhDogButton.addEventListener("click", puddles);

function puddles() {
    dogName.innerText = seventhDog.name
    dogBio.innerText = bio
    dogBio.setAttribute("class", "main__dog-section")
    dogImg.src = seventhDog.image
    if (seventhDog.isGoodDog === true) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> No!!</p>"
        naughtyButton.innerText = 'Bad Dog'
} else if(seventhDog.isGoodDog === false) {
        naughtyCheck.innerHTML = "<p><em>Is dog naughty?<em> Yes!!</p>"
        naughtyButton.innerText = 'Good Dog'
}
}

























    