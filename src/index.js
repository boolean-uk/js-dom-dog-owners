console.log(data);
const dogsList = document.querySelector('.dogs-list')

//create the mainCard section 
const mainSection = document.querySelector('.main__dog-section')
const mainCard = document.createElement('section')
mainSection.append(mainCard)


// render and append a dog button
let dogsListElement

const makeDogButton = (dog) => {
    dogsListElement = document.createElement('li')
    dogsList.append(dogsListElement)
    dogsListElement.innerText = `${dog.name}`
    dogsListElement.setAttribute('class', 'dogs-list__button')
}

// render and append EACH dog button
data.forEach(dog => makeDogButton(dog))



//core

//rendering each element inside the main card
const renderDogName = () => {}
const renderDogImage = () => {} 
const createDogInfoSection = () => {}
const createDogBioH3 = () => {}
const renderBio = () => {}
const renderIsDogNaughty = () => {}

//render the main card
const renderDogCard = () => {
    renderDogName = () => {}
    renderDogImage = () => {}
    createDogInfoSection = () => {}
    createDogBioH3 = () => {}
    renderBio = () => {}
    renderIsDogNaughty = () => {}
}

dogsListElement.addEventListener('click', renderDogCard())

//extension
const createIsGoodOrBad = () => {}








// - Make each list item clickable. 
// - on click: display dog on main card.
// - render all info from the selected dog on the main card.
// - There should be only **one card at the time** on the screen, showing as 


//<section class="main__dog-section">
//      <h2>Mr. Bonkers</h2>
//      <img
//           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//           alt=""
//         />
//         <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!
//           </p>
//         </div>
//         <p><em>Is naughty?</em> yes!</p>
//         <button>Good dog!</button>
//   </section>  