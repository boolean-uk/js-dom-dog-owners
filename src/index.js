console.log(data);

// WRITE YOUR CODE BELOW!
// first enter the dog name li in to the header part
// first add the list to the header part

// function listOfDogs(){ : Write this function  after the loop created 
    for(let i = 0;i < data.length; i++){
        const dogsUl = document.querySelector('.dogs-list')
        const dogNameList = document.createElement('li')
        dogNameList.setAttribute('class','dogs-list__button')
        dogNameList.innerText = data[i].name
        dogsUl.append(dogNameList)

    }
// add the eventlistener to the all list items

    for (i = 0; i < data.length; i++) {
      const dogCards = document.querySelector('.main__dog-section')
    // const dogImage = document.createElement('ul')
    // dogCards.setAttribute('class', 'main')
      const dogH2 = document.querySelector('.main__dog-section > h2')
      dogH2.innerText = data[i].name

      

    //Adding an Image
    const dogImg = document.querySelector('.main__dog-section')
    const dogImage = document.createElement('img')
    dogImage.setAttribute('type', 'url')
    const dogProfilePic = new Image(256)
    dogProfilePic.src = data[i].image;
    dogImg.append(dogProfilePic )



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
// creat the function for the true or false
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

    // dogsUl.addEventlistener('click', function(){
    //     for (i = 0; i < data.length; i++) {
    //         const dogTitle = data[i].name
      
    //         const dogName= document.createElement('h2')
    //         const mainSection = main__dog-section
    //         h2.setAttribute('main__dog-section')
    //         h2.innerText = dog[i].name
            

    //         mainSection.append(h2)

            
    //     }
    // })

  
   
// }
// add eventlistener "click" to that list





// second part add the dog names and card to the each every dog names, 
// than add the all information about the dog
