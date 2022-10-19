// console.log(data);

// WRITE YOUR CODE BELOW!

// function createDogListItem(dog){
//   const li = document.createElement("li");
//   const dogContainer = document.querySelector(".main");

//   li.className = "dogs-list__button";
//   li.innerText = dog.name;

//   // (1)
//   //TODO: Here, add a click event listener
//   //on to the li element. Inside that listener,
//   //call the createDogCard method and pass
//   //the dog variable as a parameter. You will
//   //also need to remove any existing dog card
//   //from the dogContainer
//   li.addEventListener('click', (event) => {
//     console.log("This worked")
//   })

//   return li;
// };

// select the dogs-list UL
const dogsList = document.querySelector('.dogs-list')
// console.log(dogsList);

// generate this HTML template: <li class="dogs-list__button">Mr. Bonkers</li>
function dogListButton(index) {
  const dogListButton = document.createElement('li')
  dogsList.appendChild(dogListButton)
  dogListButton.setAttribute('class', 'dogs-list__button')
  dogListButton.innerText = data[index].name
  console.log(data[index].name)
  dogListButton.addEventListener('click', (event) => {
    console.log(data[index].name)
  })
}

// for each dog JS object in data, generate a li
for (let i = 0; i < data.length; i++) {
  // i = index that is used in line 30,34 and 37

  // console.log(dogJSData);
  dogListButton(i)

  // append each generated <li> to the correct part of the page
  // correct list is <ul class="dogs-list">

  // now add an event listener to listen for user clicks
  // that event listener function, if defined here, will have access to the specific dogJSData for the current forEach iteration
}
