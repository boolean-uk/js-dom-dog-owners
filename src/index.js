console.log(data);

// WRITE YOUR CODE BELOW!

const main = document.querySelector(".main");
const dogsList = document.querySelector(".dogs-list");
const mainDogSection = document.querySelector(".main__dog-section");

// Loading the new form on + button click

function newDogFormButton() {
    const newDogButton = document.querySelector(`.dogs-list__button--add`)
    newDogButton.addEventListener("click", function() {
      refreshMenu();
      newDog();
      });
}

// Main

function createButton() {
    for (let i = 0; i < data.length; i++) {
      const dogLi = document.createElement("li");
      dogLi.setAttribute("class", "dogs-list__button");
      dogLi.classList.add(`refresh`);
      dogLi.setAttribute("id", data[i].id);
      dogLi.innerText = data[i].name;
      dogsList.append(dogLi);
  
      dogLi.addEventListener("click", function() {
        refreshMenu();
        createCard(i);
      });
    }
    newDogFormButton()
  }

// Dog Cards

function createCard(dogID) {
 
  main.innerHTML = ``;
  const currentDog = data[dogID];

  const buttonNumber = currentDog.id
  const currentButton = document.getElementById(buttonNumber)
  currentButton.style.backgroundColor = "var(--green)"

  const dogSection = document.createElement(`section`);
  dogSection.setAttribute(`class`, `main__dog-section`);

  const dogName = document.createElement(`h2`);
  dogName.innerText = currentDog.name;
  dogSection.append(dogName);

  const dogImage = document.createElement(`img`);
  dogImage.setAttribute(`src`, currentDog.image);
  dogImage.setAttribute(`alt`, ``);
  dogSection.append(dogImage);

  const dogDiv = document.createElement(`div`);
  dogDiv.setAttribute(`class`, `main__dog-section__desc`);

  const dogH3 = document.createElement(`h3`);
  dogH3.innerText = `Bio`;
  dogDiv.append(dogH3);

  const dogDivP = document.createElement(`p`);
  dogDivP.innerText = currentDog.bio;
  dogDiv.append(dogDivP);

  dogSection.append(dogDiv);

  const dogP = document.createElement(`p`);
  const dogButton = document.createElement("button");

  if (currentDog.isGoodDog) {
    dogP.innerHTML = `<em>Is naughty?</em> no!`;
    dogButton.innerText = `Good dog!`;
  } else {
    dogP.innerHTML = `<em>Is naughty?</em> yes!`;
    dogButton.innerText = `Bad dog!`;
  }

  dogSection.append(dogP);
  dogSection.append(dogButton);

  const goodBadToggle = document.createElement(`button`)
  goodBadToggle.innerText = `Good/Bad Toggle`
  dogSection.append(goodBadToggle)

  const goodBadText = document.createElement(`p`)

  goodBadToggle.addEventListener("click", function() {
    if (currentDog.isGoodDog === true) {
      goodBadText.innerText = `There is no such thing as a bad dog`
      dogSection.append(goodBadText)
    } else {
      currentDog.isGoodDog = true
      createCard(dogID)
    }
  })

  main.append(dogSection);

}

// New Dog Form

function newDog() {

    main.innerHTML = ``;

    const currentButton = document.querySelector(`.dogs-list__button--add`)
    currentButton.style.backgroundColor = "var(--green)"

    const newDogForm = document.createElement(`section`)
    newDogForm.setAttribute(`class`, `main__dog-section`)

    const newDogH2 = document.createElement(`h2`)
    newDogH2.innerText = `Add a new Dog`
    newDogForm.append(newDogH2)

    const newDogInnerForm = document.createElement(`form`)
    newDogInnerForm.setAttribute(`class`, `form`)

    const newDogNameLabel = document.createElement(`label`)
    newDogNameLabel.setAttribute(`for`, `name`)
    newDogNameLabel.innerText = `Dog's name`
    
    const newDogNameInput = document.createElement(`input`)
    newDogNameInput.setAttribute(`type`, `text`)
    newDogNameInput.setAttribute(`id`, `name`)
    newDogNameInput.setAttribute(`name`, `name`)

    const newDogImageLabel = document.createElement(`label`)
    newDogImageLabel.setAttribute(`for`, `image`)
    newDogImageLabel.innerText = `Dog's picture`
   
    const newDogImageInput = document.createElement(`input`)
    newDogImageInput.setAttribute(`type`, `url`)
    newDogImageInput.setAttribute(`id`, `image`)
    newDogImageInput.setAttribute(`name`, `image`)

    const newDogBioLabel = document.createElement(`label`)
    newDogBioLabel.setAttribute(`for`, `bio`)
    newDogBioLabel.innerText = `Dog's bio`
    
    const newDogTextArea = document.createElement(`textarea`)
    newDogTextArea.setAttribute(`rows`, `5`)
    newDogTextArea.setAttribute(`id`, `bio`)
    newDogTextArea.setAttribute(`name`, `bio`)

    const newDogInput = document.createElement(`input`)
    newDogInput.setAttribute(`type`, `submit`)
    newDogInput.setAttribute(`id`, `submit`)
    newDogInput.setAttribute(`name`, `submit`)
    newDogInput.setAttribute(`value`, `Let's add a dog!`)
    newDogInput.setAttribute(`class`, `form__button`)

    newDogInnerForm.append(newDogNameLabel)
    newDogInnerForm.append(newDogNameInput)
    newDogInnerForm.append(newDogImageLabel)
    newDogInnerForm.append(newDogImageInput)
    newDogInnerForm.append(newDogBioLabel)
    newDogInnerForm.append(newDogTextArea)
    newDogInnerForm.append(newDogInput)

    newDogForm.append(newDogInnerForm)

    main.append(newDogForm)

    newDogForm.addEventListener(`submit`, function(event) {
      event.preventDefault();
      addNewDog(newDogNameInput.value, newDogImageInput.value, newDogTextArea.value)
      newDogNameInput.value = ``
      newDogImageInput.value = ``
      newDogTextArea.value = ``
      const originalValue = newDogInput.value
      newDogInput.value = `Thank you :)`
      newDogInput.style.backgroundColor = "var(--green)"
      setTimeout(() => {
        createCard(0)
      }, 2000);
    })
}

// Add New Dog To Data Array

function addNewDog(name, image, bio) {
  const newDogObject = {
    id: data.length+1,
    name: name,
    bio: bio,
    isGoodDog: true,
    image: image,
  }
  data.unshift(newDogObject)
  refreshMenu()
}

function refreshMenu() {
  dogsList.innerHTML = ``

  const plusButton = document.createElement(`li`)
  plusButton.classList.add(`dogs-list__button`, `dogs-list__button--add`)
  plusButton.innerText = `+`
  dogsList.append(plusButton)

  createButton()
}

createButton();
newDog()

