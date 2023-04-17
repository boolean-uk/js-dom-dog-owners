console.log(data)

// WRITE YOUR CODE BELOW!

// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item **should be clickable**. When you click on an item, the selected dog should display on the main card
// Display/create list items for the buttons

const unorderedList = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const formsSection = document.querySelector('.main__dog-section')
const plusButton = document.querySelector('.dogs-list__button--add')



// Loop to access the elements inside of the data.js file

function renderList(){
  for (let i = 0; i < data.length; i++) {
    
    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'dogs-list__button')
    unorderedList.append(listItem)
    const dogName = data[i].name
    listItem.innerText = dogName
  
    listItem.addEventListener('click', () => {
     
      dogCards()
    })
  
    function dogCards() {
      // create H2
      formsSection.innerHTML = ''
      const cardName = document.createElement('h2')
      cardName.innerText = data[i].name
      formsSection.append(cardName)
      // create IMG
      const dogImg = document.createElement('img')
      dogImg.setAttribute('src', data[i].image)
      formsSection.append(dogImg)
      // Create a Div
      const bioDiv = document.createElement('div')
      bioDiv.setAttribute('class', 'main__dog-section__desc')
      formsSection.append(bioDiv)
      // create h3
      const bioH3 = document.createElement('h3')
      bioH3.innerText = 'Bio'
      bioDiv.append(bioH3)
      // create p
      const bioP = document.createElement('p')
      bioP.innerText = data[i].bio
      bioDiv.append(bioP)
      // Naughty Dog Text
      const pTag = document.createElement('p')
      const emTag = document.createElement('em')
      const button = document.createElement('button')
      pTag.innerText = 'Is naughty?'
  
      function changeButton() {
        if (data[i].isGoodDog === true) {
          emTag.innerText = ' No!'
          button.innerText = 'Bad dog!'
          data[i].isGoodDog = false
          
        } else if (data[i].isGoodDog === false) {
          emTag.innerText = ' Yes!'
          button.innerText = 'Good dog!'
          data[i].isGoodDog = true
        }
      }
  
      button.addEventListener('click', changeButton)
  
      if (data[i].isGoodDog === true) {
        emTag.innerText = ' Yes!'
        button.innerText = 'Good dog!'
      } else if (data[i].isGoodDog === false) {
        emTag.innerText = ' No!'
        button.innerText = 'Bad dog!'
      }
  
      pTag.append(emTag)
      formsSection.append(pTag)
      formsSection.append(button)
    }
  
    //   <!--
    //   This is a template for the add dog form
  
    //   <section class="main__dog-section">
    //     <h2>Add a new Dog</h2>
    //     <form class="form">
  
    //       <label for="name">Dog's name</label>
    //       <input type="text" id="name" name="name">
  
    //       <label for="image">Dog's picture</label>
    //       <input type="url" id="image" name="image">
  
    //       <label for="bio">Dog's bio</label>
    //       <textarea rows="5" id="bio" name="bio"></textarea>
  
    //       <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
    //     </form>
    // </section>
    //  -->
  }

}

renderList()

function addNewDog(){
  
}


plusButton.addEventListener('click', () => {

  formsSection.innerHTML = ''
  const formsTitle = document.createElement('h2')
  formsTitle.innerText = 'Add a new Dog'
  formsSection.append(formsTitle)

  const form = document.createElement('form')
  form.setAttribute('class', 'form')
  formsSection.append(form)

  const formLabelName = document.createElement('label')
  formLabelName.setAttribute('for', 'name')
  formLabelName.innerText = "Dog's Name"
  form.append(formLabelName)

  const formInputName = document.createElement('input')
  formInputName.setAttribute('type', 'text')
  formInputName.setAttribute('id', 'name')
  formInputName.setAttribute('name', 'name')
  form.append(formInputName)

  const formLabelImage = document.createElement('label')
  formLabelImage.setAttribute('for', 'image')
  formLabelImage.innerText = "Dog's Picture"
  form.append(formLabelImage)

  const formInputImage = document.createElement('input')
  formInputImage.setAttribute('type', 'url')
  formInputImage.setAttribute('id', 'image')
  formInputImage.setAttribute('name', 'image')
  form.append(formInputImage)

  const formLabelBio = document.createElement('label')
  formLabelBio.setAttribute('for', 'bio')
  formLabelBio.innerText = "Dog's bio"
  form.append(formLabelBio)

  const formInputBio = document.createElement('textarea')
  formInputBio.setAttribute('rows', '5')
  formInputBio.setAttribute('id', 'bio')
  formInputBio.setAttribute('name', 'bio')
  form.append(formInputBio)

  const formSubmitButton = document.createElement('input')
  formSubmitButton.setAttribute('type', 'submit')
  formSubmitButton.setAttribute('id', 'submit')
  formSubmitButton.setAttribute('name', 'submit')
  formSubmitButton.setAttribute('value', "Let's add a dog!")
  formSubmitButton.setAttribute('class', 'form__button')
  form.append(formSubmitButton)

  

    function addNewDog(){
      data.unshift({
        id: data.length + 1,
        name: formInputName.value,
        image: formInputImage.value,
        isGoodDog: true,
        bio: formInputBio.value
      })
    }



    formSubmitButton.addEventListener('click', (event) => {
      
      for (let i = 0; i <= data.length; i++){
        document.querySelector('.dogs-list__button').remove()
      }
      unorderedList.append(plusButton)
      addNewDog()
      renderList()
      formInputName.value = ''
      formInputImage.value = ''
      formInputBio.value = ''
      event.preventDefault()
      
      

      
        
    })


  })
  

  
