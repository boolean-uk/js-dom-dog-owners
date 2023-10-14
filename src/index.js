console.log(data);

// WRITE YOUR CODE BELOW!
// ## Learning Objectives
// * Use event listeners to render dynamic content in response to a click event
// * Render dynamic content based on the contents of a submitted form 

// PLAN

/* 
    Section 1
   - 1. select the ul element
   - 2. loop throught data with foreach
   - 3. in the loop we want to create an li element with js (<li class="dogs-list__button">name of dog</li>)
   - 4. append li to ul container, still in the loop
   - 5. add click event listener to li
   - 6. build the structure below with js

   Main Section
-   Select the main Section
       
*/

// 1. Select the ul element  - dog-list__button. Class name gives array, query selector gives the actual element
const dogListContainer = document.querySelector(".dogs-list")

// 2. Using forEach
data.forEach((singleDog) => {
    //3.
    const li = document.createElement('li')
    //add text inside li
    li.innerText = singleDog.name
    // add class attribute
    li.setAttribute("class", "dogs-list__button")
    // 4. appending
    dogListContainer.append(li)
    // 5. adding click event
    li.addEventListener("click", () => {

        // 6. select the main section
        const mainDogSection = document.querySelector(".main__dog-section")

        // 7. create h2 and add text
        const h2Main = document.createElement('h2')

        h2Main.innerText = singleDog.name
        //reset the container
        mainDogSection.innerHTML = ""
        mainDogSection.append(h2Main)


        // 8. add the image and insert the src
        const dogImg = document.createElement('img')
        dogImg.src = singleDog.image
        mainDogSection.append(dogImg)

        // Look at the HTML template - line 33 - Create main dog section Div
        const mainSectionDiv = document.createElement('div')

        //9. add bio title
        const addBioHeader = document.createElement('h3')
        addBioHeader.innerText = "Bio"
        mainSectionDiv.append(addBioHeader)

        //10. add the bio
        const bio = document.createElement('p')
        bio.innerText = singleDog.bio
        mainSectionDiv.append(bio)

        mainDogSection.append(mainSectionDiv)

        // 10. create p and append to mainDogSection
        const p = document.createElement('p')
        console.log(p)
        p.innerHTML = "<em>Is naughty?</em> yes!"
        mainDogSection.append(p)

        // 11. Create Button and append to mainDogSection
        const buttonBadOrGood = document.createElement('button')
        buttonBadOrGood.innerText = "Good dog!"
        mainDogSection.append(buttonBadOrGood)


        // 12. add event listener to goodOrBad button
        buttonBadOrGood.addEventListener("click", () => {


            singleDog.isGoodDog = !singleDog.isGoodDog

            if (singleDog.isGoodDog === false) {
                p.innerHTML = "<em>Is naughty?</em> no"
                buttonBadOrGood.innerText = "Bad dog!"
            }
            else {
                p.innerHTML = "<em>Is naughty?</em> yes!"
                buttonBadOrGood.innerText = "Good dog!"
            }
        })

    })
})


// When the plus button is clicked --> should replace main card with a form to add a new dog to the list.

// Template of form on the HTML file.

// Once the form is submitted - add the new dog to the beginning of the list, right next to the plus button.

// The data does not need to persist - so once you refresh the page, it is fine that your newly added data disappears.

// This is a template for the add dog form

//     <section class="main__dog-section">
//       <h2>Add a new Dog</h2>
//       <form class="form">

//         <label for="name">Dog's name</label>
//         <input type="text" id="name" name="name">

//         <label for="image">Dog's picture</label>
//         <input type="url" id="image" name="image">

//         <label for="bio">Dog's bio</label>
//         <textarea rows="5" id="bio" name="bio"></textarea>

//         <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
//       </form>
//   </section>
//    -->

//PLAN

// Everything should be appended in the main__dog-section.


// 1.Select the main section - when the "plus" button is clicked, so we need an addEvent... then create the elements below 

const plusButton = document.querySelector(".dogs-list__button--add")
console.log("I am a plus Button", plusButton)

// my question is do i need to create a variable for main section again and select the main page?
plusButton.addEventListener('click', () => {
    const mainSec = document.querySelector(".main__dog-section")
    console.log("this is the main section, when plus clicked", mainSec)

    // 2. Create h2
    // Inside that give it text
    // Reset the form
    // Append h2 to mainSec

    const formh2 = document.createElement('h2')
    formh2.innerText = 'Add a new Dog'
    // reset the container
    mainSec.innerHTML = ""
    mainSec.append(formh2)

    // 3. Create form tag
    // set the class attribute 

    const formCreated = document.createElement('form')
    formCreated.setAttribute("class", "form")
    mainSec.append(formCreated)

    // 4. Create label inside the form
    // set "for" attribute
    // give it inner text - Dog's name - so possibly loop through the dog's name.


    const labelForName = document.createElement('label')
    labelForName.setAttribute("for", "name")
    labelForName.innerText = "Dog's name"
    formCreated.append(labelForName)

    // 5. Create input 
    // set attributes like type, id, name
    // append thre in put to the name
    const inputForName = document.createElement('input')
    inputForName.setAttribute('type', 'text')
    inputForName.setAttribute('id', 'name')
    inputForName.setAttribute('name', 'name')
    formCreated.append(inputForName)

    // 6. Create a label for dog's picture
    // set attributes like for, inner text
    // append this to form

    const labelImg = document.createElement('label')
    labelImg.setAttribute("for", "image")
    labelImg.innerText = "Dog's picture"
    formCreated.append(labelImg)

    // 7. Create input
    // set type to URL
    // set id to image
    // set name to image

    const inputImg = document.createElement('input')
    inputImg.setAttribute("type", "url")
    inputImg.setAttribute("id", "image")
    inputImg.setAttribute("name", "image")
    formCreated.append(inputImg)

    //8. Create a label 
    // set for to "bio"
    // set innerText = "dog's bio"

    const labelBio = document.createElement('label')
    labelBio.setAttribute("for", "bio")
    labelBio.innerText = "Dog's bio"
    formCreated.append(labelBio)

    //9. create text area
    // set rows to 5
    // set id to bio
    // set name to bio

    const textArea = document.createElement("textarea")
    textArea.setAttribute("rows", "5")
    textArea.setAttribute("id", "bio")
    textArea.setAttribute("name", "bio")
    formCreated.append(textArea)

    // 10. create input
    // set type to submit
    // set name to submit
    // set value to "let's add a Dog"
    // set class to form__button

    const inputSubmit = document.createElement("input")
    inputSubmit.setAttribute("type", "submit")
    inputSubmit.setAttribute("id", "submit")
    inputSubmit.setAttribute("name", "submit")
    inputSubmit.setAttribute("value", "Let's add a dog!")
    inputSubmit.setAttribute("class", "form__button")
    formCreated.append(inputSubmit)

})


