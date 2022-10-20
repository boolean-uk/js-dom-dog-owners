console.log(data);

// select the dogs-list UL
const dogsList = document.querySelector('.dogs-list')


console.log(dogsList);
// for each dog JS object in data, generate a li
data.forEach((dogJSData) => {
  console.log(dogJSData);
  // generate this HTML template: <li class="dogs-list__button">Mr. Bonkers</li>
  const li = document.createElement('li')
  dogsList.appendChild(li)
  li.setAttribute('class', 'dogs-list__button')
  li.innerText = dogJSData.name

  dogImg = document.createElement('img')
  bio = document.createElement('h3')

  buttonDiv= document.createElement('div')
  buttonDiv.setAttribute('class', 'main__dog-section__btn')
  desc = document.createElement('p')
  goodOrNot = document.createElement('p')
  goodOrNot.setAttribute('style', 'font-style: italic')
  goodDogButton = document.createElement('button')

  
  li.addEventListener('click', () => {
    
    const dogCard = document.querySelector('.main__dog-section')
    const dogName = document.querySelector('h2')
    dogName.innerText = dogJSData.name

    dogImg.src = dogJSData.image

    dogCard.appendChild(dogImg)
    dogImg.setAttribute('height', '300px')
    dogImg.setAttribute('width', '500px')



    bio.innerText = 'Bio'
    dogCard.appendChild(bio)

    desc.innerText = dogJSData.bio
    dogCard.appendChild(desc)

    dogCard.appendChild(buttonDiv)

    if (dogJSData.isGoodDog === true){
      goodOrNot.innerText = 'is Naughty?' + ' ' + 'yes!'
      goodDogButton.innerText = 'Good'
    }
    else{
      goodOrNot.innerText = 'is Naughty?' + ' ' + 'no!'
      goodDogButton.innerText = 'Bad'
    }

    buttonDiv.appendChild(goodOrNot)
    buttonDiv.appendChild(goodDogButton)


  })
  
  // now add an event listener to listen for user clicks
  // that event listener function, if defined here, will have access to the specific dogJSData for the current forEach iteration
});