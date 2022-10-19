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

  dogImg = document.createElement('img')
  bio = document.createElement('h2')
  desc = document.createElement('p')
  goodOrNot = document.createElement('p')
  
  li.addEventListener('click', () => {
    
    const dogCard = document.querySelector('.main__dog-section')
    
    const dogName = document.querySelector('h2')
    dogName.innerText = dogJSData.name

    dogImg.src = dogJSData.image
    dogCard.appendChild(dogImg)

    bio.innerText = 'Bio'
    dogCard.appendChild(bio)

    desc.innerText = dogJSData.bio
    dogCard.appendChild(desc)

    goodOrNot.innerText = 'Is naughty?'
    dogCard.appendChild(goodOrNot)


  })
  
  // now add an event listener to listen for user clicks
  // that event listener function, if defined here, will have access to the specific dogJSData for the current forEach iteration
});