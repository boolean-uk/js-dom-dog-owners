console.log(data)

// WRITE YOUR CODE BELOW!

// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item **should be clickable**. When you click on an item, the selected dog should display on the main card
// Display/create list items for the buttons

const unorderedList = document.querySelector('.dogs-list')


for (let i = 0; i < data.length; i++) {
  const listItem = document.createElement('li')
  listItem.setAttribute('class', 'dogs-list__button')
  unorderedList.append(listItem)
  const dogName = data[i].name
  listItem.innerText = dogName

  function dogCards() {
    //Create a section
    const main = document.querySelector('.main')
    const section = document.createElement("section")
    section.setAttribute("class", "main__dog-section")
    main.append(section)
    //create H2
    const cardName = document.createElement('h2')
    cardName.innerText = data[i].name
    section.append(cardName)
    //create IMG
    const dogImg = document.createElement('img')
    dogImg.setAttribute("src", data[i].image)
    section.append(dogImg)
    //Create a Div
    const bioDiv = document.createElement('div')
    bioDiv.setAttribute('class',"main__dog-section__desc")
    section.append(bioDiv)
    //create h3
    const bioH3 = document.createElement('h3')
    bioH3.innerText = 'Bio'
    bioDiv.append(bioH3)
    //create p
    const bioP = document.createElement('p')
    bioP.innerText = data[i].bio
    bioDiv.append(bioP)
    

}
dogCards()
}
// dog Card




