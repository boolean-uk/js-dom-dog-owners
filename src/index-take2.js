//create button li

const dogButtonUL = document.querySelector(".dog-list");
const main =document.querySelector('.main__dog-section')

//selecting relevant dog data
for (let i=0; i < data.length; i++) {
    const dogData = data[i]
}

//Create clickable Dog tabs
//make tabs
for (let i = 0; i < data.length; i++) {
    const main = document.querySelector('.main')
    const dogsUl = document.querySelector('.dogs-list')
    const dogNameList = document.createElement('li')
    //make each li a link +/or add event listener
    dogNameList.setAttribute('class', 'dogs-list__button')
    dogNameList.innerText = data[i].name
    dogsUl.append(dogNameList)
}

//click-events
function clearMainSection() {
    main.innerText = ''
}


function appendDogCards() {
    //create new section
      const dogCards = document.querySelector('.main__dog-section')
      const dogH2 = document.querySelector('.main__dog-section > h2')
      dogH2.innerText = dogData.name
      console.log(dogH2)
    //write the content
    //put new content inside the main section
}

function createDogCard(dogData) {
    for (i = 0; i < data.length; i++) {

        //Adding an Image
        const dogImg = document.querySelector('.main__dog-section')
        const dogImage = document.createElement('img')
        dogImage.setAttribute('type', 'url')
        const dogProfilePic = new Image(256)
        dogProfilePic.src = dogData.image;
        dogImg.append(dogProfilePic)

        //Adding the Bio
        const dogBioSection = document.querySelector('.main__dog-section__desc')

        const dogBio = document.createElement('h3')
        dogBio.innerText = 'Bio'
        dogImg.append(dogBio)

        //Adding bioInfo
        const dogBioInfo = document.createElement('p')
        dogBioInfo.innerText = dogData.bio
        dogBio.append(dogBioInfo)

        //Is a good dog? 
        // create the function for the true or false
        const goodDog = document.createElement('p')
        goodDog.innerText = `is naugthy? ${dogData.isGoodDog}`
        dogBio.append(goodDog)


        // try to make some space
        const newButton = document.createElement('button')
        newButton.innerText = `Good Dog`
        dogBio.append(newButton)
    }
}
