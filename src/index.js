console.log(data);

// WRITE YOUR CODE BELOW!

// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item **should be clickable**. When you click on an item, the selected dog should display on the main card
// Display/create list items for the buttons

const unorderedList = document.querySelector('.dogs-list')

for (let i = 0; i < data.length; i++){
    const listItem = document.createElement('li')
    listItem.setAttribute("class", "dogs-list__button")
    unorderedList.append(listItem)
    const dogName = data[i].name
    listItem.innerText = dogName
    
}

