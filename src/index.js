// WRITE YOUR CODE BELOW!

const dogName = data

dogsListFnc()
showDog()
addDog()


function addDog(){
  const addDog = document.querySelector('.dogs-list__button--add')
  addDog.addEventListener('click', (event) => {
    event.defaultPrevented
  const dogForm = createDogForm()
  
  console.log(dogName[8])
  })
}

function createDogForm(){
  const main = document.querySelector('.main')

  removeH2Text()
    const section = document.createElement('section')
    section.classList.add('main__dog-section')
    const h2 = document.createElement('h2')
    
  h2.innerText = 'Add a new Dog'

  const form = document.createElement('form')
  form.classList.add('form')

  const labelName = document.createElement('label')
  labelName.htmlFor = 'name'
  labelName.innerText = 'Dog\'s name'

  const inputName = document.createElement('input')
  inputName.type = 'text'
  inputName.id = 'name'
  inputName.name = 'name'

  const labelImage = document.createElement('label')
  labelImage.htmlFor = 'image'
  labelImage.innerText = 'Dog\'s picture'

  const inputImage = document.createElement('input')
  inputImage.type = 'url'
  inputImage.id = 'image'
  inputImage.name = 'image'

  const labelBio = document.createElement('label')
  labelBio.htmlFor = 'bio'
  labelBio.innerText = 'Dog\'s bio'

  const textarea = document.createElement('textarea')
  textarea.rows = 5
  textarea.id = 'bio'
  textarea.name = 'bio'

  const inputButton = document.createElement('input')
  inputButton.type = 'submit'
  inputButton.id = 'submit'
  inputButton.name = 'submit'
  inputButton.value = 'let\'s add a dog!'
  inputButton.classList = 'form__button'
  
  form.append(labelName,inputName,labelImage,inputImage,labelBio,textarea,inputButton)
  section.append(h2,form)
  main.append(section)

  return main
}

{/* 
<section class="main__dog-section">
      <h2>Add a new Dog</h2>
      <form class="form">

        <label for="name">Dog's name</label>
        <input type="text" id="name" name="name">

        <label for="image">Dog's picture</label>
        <input type="url" id="image" name="image">

        <label for="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea>

        <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
      </form>
  </section>
   --></input> */}

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
    removeH2Text()
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

function removeH2Text(){
  const noDogSection = document.querySelector('.main__dog-section')
  noDogSection.remove()
}

