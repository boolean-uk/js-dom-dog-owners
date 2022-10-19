console.log(data);

// select the dogs-list UL
const dogsList = document.querySelector('.dogs-list')


console.log(dogsList);
// for each dog JS object in data, generate a li
data.forEach((dogJSData) => {
  console.log(dogJSData);
  // generate this HTML template: <li class="dogs-list__button">Mr. Bonkers</li>
  const li = document.createElement('li')
  dogsList.appendChild(li)
  li.setAttribute('class', 'dogs-list__button')
  li.innerText = dogJSData.name

  
  // now add an event listener to listen for user clicks
  // that event listener function, if defined here, will have access to the specific dogJSData for the current forEach iteration
});