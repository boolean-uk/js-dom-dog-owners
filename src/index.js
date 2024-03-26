// WRITE YOUR CODE BELOW!

const dogName = data

dogsListFnc()

showDog()


function dogsListFnc(){
  let key = 0
  const dogsList = document.querySelector('.dogs-list')

  for(key in dogName){
    const dogListBtn = document.createElement('li')
    dogListBtn.classList.add('dogs-list__button')
    dogListBtn.innerText = dogName[key].name
    dogsList.append(dogListBtn)
  }
}


function dogInformation (dogTargetName) { 
  let key = 0
  const main = document.querySelector('.main')
  for(key in dogName) {
    if(dogTargetName === dogName[key].name){
      const noDogSection = document.querySelector('.main__dog-section')
      noDogSection.remove()
    const section = document.createElement('section')
    section.classList.add('main__dog-section')
    const h2 = document.createElement('h2')
    h2.innerText = dogName[key].name
    section.append(h2)

    const image = document.createElement('img')
    image.src = dogName[key].image
    section.append(image)

    const div = document.createElement('div')
    div.classList.add('main__dog-section__desc')

    const h3 = document.createElement('h3')
    h3.innerText = 'Bio'
    div.append(h3)

    const pBio = document.createElement('p')
    pBio.innerText = dogName[key].bio
    div.append(pBio)
    section.append(div)

    const pQuestion = document.createElement('p')
    const em = document.createElement('em')
    em.innerText = 'Is naughty?'
    let yesOrNo = dogName[key].isGoodDog
    pQuestion.append(em,goodOrBadDogText(yesOrNo))    
    section.append(pQuestion)
    
    const button = document.createElement('button')

    button.innerText = goodOrBadDogBtn(yesOrNo)
    
    section.append(button)

    main.append(section)

    break
    }
  }
 }

function showDog(){
  const doglist2 = document.querySelector('.dogs-list')
  
  
  doglist2.addEventListener('click', (event) => {
    const dogTargetName = event.target.innerText
    dogInformation(dogTargetName)
    // console.log(event.target)
  })

}

function goodOrBadDogText(yesOrNo){
  if(yesOrNo){
    return 'Yes!'
  } else return 'No!'
}

function goodOrBadDogBtn(yesOrNo) {
  if(yesOrNo){
    return 'Good dog!'
  } else return 'Bad dog!'
}