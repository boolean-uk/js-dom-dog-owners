console.log(data)

// WRITE YOUR CODE BELOW!

// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item **should be clickable**. When you click on an item, the selected dog should display on the main card
// Display/create list items for the buttons

const unorderedList = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const formsSection = document.querySelector('.main__dog-section')

// Loop to access the elements inside of the data.js file
for (let i = 0; i < data.length; i++) {
  const listItem = document.createElement('li')
  listItem.setAttribute('class', 'dogs-list__button')
  unorderedList.append(listItem)
  const dogName = data[i].name
  listItem.innerText = dogName

  function removeCard() {
    main.innerHTML = ''

  }
  listItem.addEventListener('click', () => {
    removeCard()
    dogCards()

  })
  function dogCards() {
    // Create a section
    // const main = document.querySelector('.main')
    const section = document.createElement('section')
    section.setAttribute('class', 'main__dog-section')
    main.append(section)
    // create H2
    const cardName = document.createElement('h2')
    cardName.innerText = data[i].name
    section.append(cardName)
    // create IMG
    const dogImg = document.createElement('img')
    dogImg.setAttribute('src', data[i].image)
    section.append(dogImg)
    // Create a Div
    const bioDiv = document.createElement('div')
    bioDiv.setAttribute('class', 'main__dog-section__desc')
    section.append(bioDiv)
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

    function changeButton(){
      if (button.innerText === 'Good dog!'){
        emTag.innerText = ' No!'
        button.innerText = 'Bad dog!'
      } else if (button.innerText === 'Bad dog!'){
        emTag.innerText = ' Yes!'
        button.innerText = 'Good dog!'
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
    section.append(pTag)
    section.append(button)
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

function forms(){
  // const formslist = document.querySelector('.dogs-list__button--add')

  const formsTitle = document.querySelector('h2')
  formsTitle.innerText = "Add a new Dog"
  formsSection.append(formsTitle)

  const form = document.createElement('form')
  form.setAttribute("class", "form")
  formsSection.append(form)

  const formLabelName = document.createElement('label')
  formLabelName.setAttribute("for", "name")
  formLabelName.innerText = "Dog's Name"
  form.append(formLabelName)



  const formLabelIamge = document.createElement('label')
  const formLabelBio = document.createElement('label')

}

}

forms()
