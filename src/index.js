document.addEventListener("DOMContentLoaded", function () {
  const dogList = document.querySelector(".dogs-list");
  const mainDogSection = document.querySelector(".main__dog-section");

  function renderDogList() {
    data.forEach((dog) => {
      const listItem = document.createElement("li");
      listItem.textContent = dog.name;
      listItem.className = "dogs-list__button";

      listItem.addEventListener("click", () => {
        renderMainDog(dog);
      });

      dogList.appendChild(listItem);
    });
  }

  function renderMainDog(dog) {
    clearMainDogSection();

    const dogInfo = document.createElement("div");
    dogInfo.className = "dog-info";

    const image = document.createElement("img");
    image.src = dog.image;
    image.alt = dog.name;

    const name = document.createElement("h2");
    name.textContent = dog.name;

    const bio = document.createElement("p");
    bio.textContent = dog.bio;

    const isGoodDog = document.createElement("p");
    isGoodDog.textContent = dog.isGoodDog ? "Good Dog" : "Not a Good Dog";

    dogInfo.appendChild(image);
    dogInfo.appendChild(name);
    dogInfo.appendChild(bio);
    dogInfo.appendChild(isGoodDog);

    mainDogSection.appendChild(dogInfo);
  }

  renderDogList();

  const addDogButton = document.querySelector(".dogs-list__button--add");
  addDogButton.addEventListener("click", function () {
    clearMainDogSection();

    // Create form elements dynamically
    const addForm = document.createElement("form");

    const dogName = document.createElement("input");
    dogName.type = "text";
    dogName.placeholder = "Enter dog's name";
    dogName.name = "dog-name";

    const dogBio = document.createElement("input");
    dogBio.type = "text";
    dogBio.placeholder = "Enter dog's bio";
    dogBio.name = "dog-bio";


    const dogGood = document.createElement("input");
    dogGood.type = "checkbox";
    dogGood.textContent="Is your dog good or bad?"
    dogGood.name = "dog-good";

    const dogPhotoLabel = document.createElement("label");
    dogPhotoLabel.textContent = "Upload dog's photo:";
    const dogPhotoInput = document.createElement("input");
    dogPhotoInput.type = "file";
    dogPhotoInput.accept = "image/*";

    const addSubmit = document.createElement("input");
    addSubmit.type = "submit";
    addSubmit.value = "Add Dog";

    addForm.appendChild(dogName);
    addForm.appendChild(dogBio);
    addForm.appendChild(dogGoodLabel);
    addForm.appendChild(dogGood);
    addForm.appendChild(dogPhotoLabel);
    addForm.appendChild(dogPhotoInput); 
    addForm.appendChild(addSubmit);

    
    mainDogSection.appendChild(addForm);

    // Form submission event listener
    addForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(addForm);
      const newDog = {
        id: data.length + 1, // Generate a unique ID (not persistent)
        name: formData.get("dog-name"),
        bio: formData.get("dog-bio"),
        isGoodDog: formData.get("dog-good") === "on",
        image: URL.createObjectURL(dogPhotoInput.files[0])
      };

      data.unshift(newDog);

      
      addForm.reset();

     
      clearMainDogSection();

      // Re-render the dog list to include the newly added dog
      renderDogList();
    });
  });

  function clearMainDogSection() {
    // Remove all child elements of main__dog-section
    while (mainDogSection.firstChild) {
      mainDogSection.removeChild(mainDogSection.firstChild);
    }
  }
});
