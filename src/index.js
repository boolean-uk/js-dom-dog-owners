console.log(data);
// Function to render the list of dogs
function renderDogList(dogs) {
    const dogListElement = document.querySelector('.dogs-list');
    dogs.forEach(dog => {
      const dogItem = document.createElement('li');
      dogItem.textContent = dog.name;
      dogItem.classList.add('dogs-list__button');
      dogItem.onclick = () => renderDogCard(dog);
      dogListElement.appendChild(dogItem);
    });
  }
  
  // Function to render the main dog card
  function renderDogCard(dog) {
    const mainSection = document.querySelector('.main__dog-section');
    mainSection.innerHTML = `
      <section class="main__dog-section">
        <h2>${dog.name}</h2>
        <img src="${dog.image}" alt="${dog.name}">
        <div class="main__dog-section__desc">
          <h3>Bio</h3>
          <p>${dog.bio}</p>
        </div>
        <p><em>Is naughty?</em> ${dog.isGoodDog ? 'no' : 'yes'}!</p>
        <button>${dog.isGoodDog ? 'Bad dog!' : 'Good dog!'}</button>
      </section>
    `;
  }
  
  // Function to show the form
  function showAddDogForm() {
    const mainSection = document.querySelector('.main');
    mainSection.innerHTML = `
      <section class="main__dog-section">
        <h2>Add a new Dog</h2>
        <form class="form" onsubmit="addNewDog(event)">
          <label for="name">Dog's name</label>
          <input type="text" id="name" name="name">
          <label for="image">Dog's picture</label>
          <input type="url" id="image" name="image">
          <label for="bio">Dog's bio</label>
          <textarea rows="5" id="bio" name="bio"></textarea>
          <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
        </form>
      </section>
    `;
  }
  
  // Function to handle the form submission
  function addNewDog(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const bio = event.target.bio.value;
    const newDog = { name, image, bio, isGoodDog: true }; // Assuming all new dogs are good by default
    data.unshift(newDog); // Add to the beginning of the list
    renderDogList(data); // Re-render the list with the new dog
    renderDogCard(newDog); // Display the new dog's card
  }
  
  // Attach event listener to the plus button
  const addButton = document.querySelector('.dogs-list__button'); 
  addButton.addEventListener('click', showAddDogForm);
  // Initial render of the dog list
  renderDogList(data);
