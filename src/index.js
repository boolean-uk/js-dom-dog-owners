//TODO: render the navbar (dog list) : DONE
//TODO: break down the problem: DONE
//TODO: draft overal code structure, name functions: DONE
//TODO: write the functions to render the image and info for dog[0]: DONE
//TODO: Make dog[0] main card render only on click
//TODO: figure out how to make this apply to all other dogs and their corresponding buttons



//access the mainCard section 
const mainCard= document.querySelector('.main__dog-section')


// render and append a dog button
const dogsList = document.querySelector('.dogs-list')
let dogsListElement

const makeDogButton = (dog) => {
    dogsListElement = document.createElement('li')
    dogsList.append(dogsListElement)
    dogsListElement.innerText = `${dog.name}`
    dogsListElement.setAttribute('class', 'dogs-list__button')
}



//render each element inside the main card
const renderDogName = (dog) => {
    const dogName = document.querySelector('h2')
    dogName.innerText = `${dog.name}`
}
const renderDogImage = (dog) => {
    const dogPic = document.createElement('img')
    mainCard.append(dogPic)
    dogPic.setAttribute('src', `${dog.image}`)
    
} 

//render the info section
let infoSection
const createDogInfoSection = () => {
    infoSection = document.createElement('div')
    mainCard.append(infoSection)
    infoSection.setAttribute('class', "main__dog-section__desc")
}
const createDogBioH3 = () => {
    const dogBioTitle = document.createElement('h3')
    infoSection.append(dogBioTitle)
    dogBioTitle.innerText = 'Bio'
}
const renderBio = (dog) => {
    const dogBio  = document.createElement('p')
    infoSection.append(dogBio)
    dogBio.innerText = `${dog.bio}`
}
const renderIsDogNaughty = (dog) => {
    const isDogNaughty = document.createElement('p')
    mainCard.append(isDogNaughty)
    isDogNaughty.innerText = `Is naughty? ${
        dog.isGoodDog === true ? "No!" : "Yes!"
    }`
}

//render the main card
const renderDogCard = (dog) => {
    renderDogName(dog)
    renderDogImage(dog)
    createDogInfoSection()
    createDogBioH3()
    renderBio(dog)
    renderIsDogNaughty(dog)
}





// render and append EACH dog button
data.forEach(dog => {

    makeDogButton(dog)
    dogsListElement.addEventListener('click', event => renderDogCard(dog))

})

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