console.log(data);

// WRITE YOUR CODE BELOW!
const dogsList = document.querySelector(".dogs-list");
const dogTitle = document.querySelector(".main__dog-section > h2");
const mainDogSection = document.querySelector(".main__dog-section");
const dogImgEl = document.createElement("img");
const dogDescEl = document.createElement("div");
dogDescEl.classList.add("main__dog-section__desc");

const bioH3 = document.createElement("h3");
bioH3.innerText = "BIO";

const dogBioEl = document.createElement("p");
const dogIsGoodDogEl = document.createElement("p");

const selectDog = (dogId) => {};

for (let i = 0; i < data.length; i++) {
  const dogSelectButton = document.createElement("li");
  dogSelectButton.innerText = data[i]["name"];
  dogSelectButton.classList.add("dogs-list__button");
  dogSelectButton.addEventListener("click", selectDog);
  dogsList.appendChild(dogSelectButton);
  dogSelectButton.addEventListener("click", () => renderDog(i));
  // dogSelectButton.onclick = `renderDog(${i})`
}

function renderDog(dogIndex) {
  mainDogSection.querySelector(".add-dog__section")?.remove();

  const dogName = data[dogIndex]["name"];
  const dogBio = data[dogIndex]["bio"];
  const dogImage = data[dogIndex]["image"];
  const dogIsGoodDog = data[dogIndex]["isGoodDog"];

  dogTitle.remove();
  mainDogSection.append(dogTitle);
  dogTitle.innerText = dogName;

  dogImgEl.src = dogImage;
  dogImgEl.height = 300;
  dogImgEl.remove();
  mainDogSection.append(dogImgEl);

  dogDescEl.innerHTML = "";
  dogDescEl.append(bioH3);

  dogBioEl.innerText = dogBio;
  dogBioEl.remove();
  dogDescEl.append(dogBioEl);

  const isGoodDogEl = document.createElement("p");
  isGoodDogEl.innerHTML = `<em>Is naughty?</em> ${dogIsGoodDog ? "no" : "yes"}!`;

  const goodDogButton = document.createElement("button");
  goodDogButton.innerText = dogIsGoodDog ? "Good dog!" : "Bad dog!";
  goodDogButton.addEventListener("click", () => {
    data[dogIndex]["isGoodDog"] = !data[dogIndex]["isGoodDog"];
    goodDogButton.innerText = data[dogIndex]["isGoodDog"] ? "Good dog!" : "Bad dog!";
    isGoodDogEl.innerHTML = `<em>Is naughty?</em> ${data[dogIndex]["isGoodDog"] ? "no" : "yes"}!`;
  });

  dogDescEl.append(isGoodDogEl);
  dogDescEl.append(goodDogButton);

  mainDogSection.append(dogDescEl);
}


const plusButton = document.querySelector(".dogs-list__button--add");

// Data for each dog in the array list item
data.forEach((dog) => {
  const listItem = document.createElement("li");
  listItem.classList.add("dogs-list__button");
  listItem.textContent = dog.name;
  listItem.dataset.id = dog.id;

  // Shows selected dog detials (event listener)
  listItem.addEventListener("click", (event) => {
    renderDogIndex(selectDog);
  });
});

//Forms for adding a new dog
function setUpPlusButton(button) {
  button.addEventListener("click", (event) => {
    mainDogSection.innerHTML = `
      <section class="add-dog__section">
        <h2>Add a new Dog</h2>
        <form class="form">
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

    const form = document.querySelector(".form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value;
      const image = document.querySelector("#image").value;
      const bio = document.querySelector("#bio").value;

      // warning message if all fields not eneterd
      if (!name || !image || !bio) {
        alert("Fill out all fields before submitting the form.");
        return;
      }

      const newDog = {
        id: data.length + 1,
        name: name,
        image: image,
        bio: bio,
        isGoodDog: true,
      };

      data.unshift(newDog);

      // create a new list item for the new dog
      const newDogListItem = document.createElement("li");
      newDogListItem.classList.add("dogs-list__button");
      newDogListItem.textContent = newDog.name;
      newDogListItem.dataset.id = newDog.id;

      newDogListItem.addEventListener("click", (event) => {
        const selectedDog = data.find(
          (dog) => dog.id === parseInt(event.target.dataset.id)
        );
        renderDog(data.indexOf(selectedDog));
      });

      dogsList.insertBefore(newDogListItem, plusButton.nextSibling);
      form.reset();

      renderDogList(data);
    });
  });
}

setUpPlusButton(plusButton) 

function renderDogList(dogs) {
  dogsList.innerHTML = "";

  const newPlusButton = plusButton.cloneNode(true);
  dogsList.appendChild(newPlusButton);

  setUpPlusButton(newPlusButton) 
  dogs.forEach((dog) => {
    const listItem = document.createElement("li");
    listItem.classList.add("dogs-list__button");
    listItem.textContent = dog.name;
    listItem.dataset.id = dog.id;

    listItem.addEventListener("click", (event) => {
      const selectedDog = data.find(
        (dog) => dog.id === parseInt(event.target.dataset.id)
      );
      renderDog(data.indexOf(selectedDog));
    });

    dogsList.appendChild(listItem);
  });

  // add event listener to new dog list item
  const newDogListItem = dogsList.querySelector(`[data-id="${dogs[0].id}"]`);
  newDogListItem.addEventListener("click", (event) => {
    const selectedDog = data.find(
      (dog) => dog.id === parseInt(event.target.dataset.id)
    );
    renderDog(data.indexOf(selectedDog));
  });
}
