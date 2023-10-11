console.log(data);

// WRITE YOUR CODE BELOW!
const body = document.querySelector('.body');
const container = document.querySelector('.main');


function dogName(data) {
    const dogName = document.createElement('h2');
    dogName.setAttribute('class', 'main__dog-name');
    dogName.innerText = `${data.name}`;
    return dogName;
};

function dogImage(data) {
    const dogImage = document.createElement('img');
    dogImage.setAttribute('class', 'main__dog-image');
    dogImage.src = `${data.image}`;
    return dogImage;
};

function dogBio(data) {
    const dogBio = document.createElement('p');
    dogBio.setAttribute('class', 'main__dog-bio');
    dogBio.innerText = `${data.bio}`;
    return dogBio;
};

function isGoodDog(data) {
    const dogGood = document.createElement('p');
    dogGood.setAttribute('class', 'main__dog-bio');
    if (data.isGoodDog === true) {
        dogGood.innerText = 'Good Dog!';
    } else {
        dogGood.innerText = 'Bad Dog!';
    }
    return dogGood;
};

function dogButton(data) {
    const dogButton = document.createElement('button');
    dogButton.setAttribute('class', 'dog-list__button');
    if (data.isGoodDog === true) {
        dogButton.innerText = 'Bad Dog!';
    } else {
        dogButton.innerText = 'Good Dog!';
    }
};

data.forEach(dog => {
    const dogDiv = document.createElement('div');
    dogDiv.setAttribute('class', 'main__dog-section');
    dogDiv.append(dogName(dog))
    dogDiv.append(dogImage(dog))
    dogDiv.append(dogBio(dog))
    dogDiv.append(isGoodDog(dog))
    container.append(dogDiv);
});


