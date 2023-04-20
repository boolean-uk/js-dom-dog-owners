// ## Instructions Part 1
// - Use the provided `index.js` as a starting point.
// - You'll find a variable called `data` in the console.log. That's your **list of dogs**
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item **should be clickable**. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. **Follow the template for the main card that you'll find on the HTML file.**
// - There should be only **one card at the time** on the screen



console.log(data);

// WRITE YOUR CODE BELOW!
// render top list of dogs (nav bar)

const ul = document.querySelector('.dogs-list')

function renderToplist(){
    for(let i = 0; i < data.length; i++){
        const li = document.createElement('li')
        li.setAttribute('class', 'dogs-list__button')
        li.innerHTML = data[i].name
        ul.appendChild(li)
}
}

renderToplist()

// create function to render a card with info for Mr Bonkers

// const section = document.querySelector('main__dog-section')

// const h2 = document.createElement('h2')
// h2.innerHTML = 'Mr.Bonkers'
// section.appendChild(h2)

// const img = createElement(img)
// setAttribute()


const section = document.querySelector('.main__dog-section')
console.log(`section is here:`, section)

// rendering h2
const h2 = document.createElement('h2')
h2.innerHTML = 'Mr. Bonkers'
section.appendChild(h2)

// rendering img 
const img = document.createElement('img')
img.setAttribute('src', 'https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg')
img.setAttribute('alt', ' ')
section.appendChild(img)