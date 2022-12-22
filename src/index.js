console.log(data);

// add eventlistener "click" to that list

function createDogCard(data) {
    for (i = 0; i < data.length; i++) {
        //select area
        const dogCards = document.querySelector('.main__dog-section')
        const dogH2 = document.querySelector('.main__dog-section > h2')
        dogH2.innerText = data[i].name
        console.log(dogH2)

        //Adding an Image
        const dogImg = document.querySelector('.main__dog-section')
        const dogImage = document.createElement('img')
        dogImage.setAttribute('type', 'url')
        const dogProfilePic = new Image(256)
        dogProfilePic.src = data[i].image;
        dogImg.append(dogProfilePic)

        //Adding the Bio
        const dogBioSection = document.querySelector('.main__dog-section__desc')

        const dogBio = document.createElement('h3')
        dogBio.innerText = 'Bio'
        dogImg.append(dogBio)

        //Adding bioInfo
        const dogBioInfo = document.createElement('p')
        dogBioInfo.innerText = data[i].bio
        dogBio.append(dogBioInfo)

        //Is a good dog? 
        // create the function for the true or false
        const goodDog = document.createElement('p')
        goodDog.innerText = `is naugthy? ${data[i].isGoodDog}`
        dogBio.append(goodDog)


        // try to make some space
        const newButton = document.createElement('button')
        newButton.innerText = `Good Dog`
        dogBio.append(newButton)
        //

        break
    }
}

createDogCard(data)


// function listOfDogs(){ : Write this function  after the loop created 
for (let i = 0; i < data.length; i++) {
    const main = document.querySelector('.main')
    const dogsUl = document.querySelector('.dogs-list')
    const dogNameList = document.createElement('li')
    //make each li a link +/or add event listener
    dogNameList.setAttribute('class', 'dogs-list__button')
    dogNameList.innerText = data[i].name
    dogsUl.append(dogNameList)

    // reset main section on click
        dogNameList.addEventListener('click', function () {
        main.innerText = ''
        const mainSection = document.createElement('section')
        mainSection.setAttribute('class', 'main__dog-section')
        main.append(createDogCard(data))
        console.log(dogNameList)
    });


}


// second part add the dog names and card to the each every dog names,
// than add the all information about the dog
