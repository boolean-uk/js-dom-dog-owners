// console.log(data);

// WRITE YOUR CODE BELOW!

// select the dogs-list UL
const dogsList = document.querySelector('.dogs-list')
// console.log(dogsList);

function dogListButton(index) {
  // generate this HTML template: <li class="dogs-list__button">Mr. Bonkers</li>
  // append each generated <li> to the correct part of the page
  const dogListButton = document.createElement('li') // create a list item called dogListButton
  // correct list is <ul class="dogs-list">
  dogsList.appendChild(dogListButton) // Add dogListButton to dogsList
  dogListButton.setAttribute('class', 'dogs-list__button') // Give dogListButton the class dogs-list__button

  dogListButton.innerText = data[index].name // Set dogListButton's text to be the object key 'name' from within the data array, based on the idex given by the for loop on below

  // now add an event listener to listen for user clicks
  dogListButton.addEventListener('click', (event) => {
    // whenever there is a click on the dogListButton trigger the event function
    console.log(data[index].name) // log the dog's name
  })
}

// for each dog JS object in data, generate a li
for (let i = 0; i < data.length; i++) {
  // i = index that is used in line 10, 14 and 16
  dogListButton(i)
}
