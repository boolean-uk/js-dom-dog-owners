console.log(data);


    for (let i = 0; i < data.length; i++) {
        const main = document.querySelector('.main')
        const dogsUl = document.querySelector('.dogs-list')
        const dogNameList = document.createElement('li')
        //make each li a link +/or add event listener
        dogNameList.setAttribute('class', 'dogs-list__button')
        dogNameList.setAttribute('id', i )
        dogNameList.innerText = data[i].name
        dogsUl.append(dogNameList)
    
        dogNameList.addEventListener('click', function (eventObj) {
            console.log(eventObj.target.id)
            const mainSection = document.createElement('section')
            mainSection.setAttribute('class', 'main__dog-section')
            
            const dogCard = createDogCard(eventObj.target.id)
            
        });  
    }
        
    function createDogCard(dogData) {
        //select area
        const dogCards = document.querySelector('section')
        console.log(dogCards)
        dogCards.innerText =''
        const dogH2 = document.createElement('h2')
        dogH2.innerText = data[dogData].name
        dogCards.append(dogH2)
        console.log(dogH2)


        //Adding an Image
        const dogImg = document.querySelector('.main__dog-section')
        const dogImage = document.createElement('img')
        dogImage.setAttribute('type', 'url')
        const dogProfilePic = new Image(256)
        dogProfilePic.src = data[dogData].image;
        dogImg.append(dogProfilePic)

        // creating the div for whole bio section
        const bioInfo = document.createElement('div')
        bioInfo.setAttribute('class', 'main__dog-section__desc')
        dogCards.append(bioInfo)


        //Adding the Bio
        const dogBioSection = document.querySelector('.main__dog-section__desc')

        const dogBio = document.createElement('h3')
        dogBio.innerText = 'Bio'
        bioInfo.append(dogBio)

        //Adding bioInfo
        const dogBioInfo = document.createElement('p')
        dogBioInfo.innerText = data[dogData].bio
        bioInfo.append(dogBioInfo)

        //Is a good dog? 
        // create the function for the true or false
        const goodDog = document.createElement('p')
        goodDog.innerText = `is naugthy? ${data[dogData].isGoodDog}`
        dogCards.append(goodDog)


        // try to make some space
        const newButton = document.createElement('button')
        newButton.innerText = `Good Dog`
        dogCards.append(newButton)
       
    }

// create the form 