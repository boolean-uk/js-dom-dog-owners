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

function dogBio(data) {
    const dogBio = document.createElement('p');
    dogBio.setAttribute('class', 'main__dog-bio');
    dogBio.innerText = `${data.bio}`;
    return dogBio;
};

function dogImage(data) {
    const dogImage = document.createElement('img');
    dogImage.setAttribute('class', 'main__dog-image');
    dogImage.src = `${data.image}`;
    return dogImage;
};

data.forEach(dog => {
    const dogDiv = document.createElement('div');
    dogDiv.setAttribute('class', 'main__dog-section');
    dogDiv.append(dogName(dog))
    dogDiv.append(dogBio(dog))
    dogDiv.append(dogImage(dog))
    container.append(dogDiv);

});


