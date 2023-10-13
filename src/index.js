console.log(data);

const dogList = document.querySelector(".dogs-list");

const dogListItem = data.forEach((dog) => {
  const list = document.createElement("li");
  list.innerText = dog.name;
  dogList.append(list);
  list.setAttribute("class", "dogs-list__button ");

  list.addEventListener("click", () => {
    const dogCard = document.querySelector(".main__dog-section");
    const dogDetails = document.querySelectorAll("section > *");
    dogDetails.forEach((element) => element.remove());

    const dogName = document.createElement("h2");
    dogName.innerText = dog.name;
    dogCard.append(dogName);

    const dogImage = document.createElement("img");
    dogImage.setAttribute("src", dog.image);
    dogImage.setAttribute("alt", dog.name);
    dogImage.setAttribute("width", "400px");
    dogImage.setAttribute("height", "400px");
    dogCard.append(dogImage);

    const bioH3 = document.createElement("h3");
    bioH3.innerText = "Bio";
    dogCard.append(bioH3);

    const dogBio = document.createElement("p");
    dogBio.innerText = dog.bio;
    dogCard.append(dogBio);

    const p = document.createElement("p");
    const em = document.createElement("em");
    const button = document.createElement("button");
    p.innerText = "Is naughty?";

    if (dog.isGoodDog === false) {
      em.innerText = "Yes";
      button.innerText = "Bad Dog!";
    } else {
      em.innerText = "No";
      button.innerText = "Good Dog!";
    }
    p.append(em);
    dogCard.append(p);
    dogCard.append(button);

    button.addEventListener("click", () => {
      if (dog.isGoodDog === false) {
        dog.isGoodDog = true;
        em.innerText = "No";
        button.innerText = "Good Dog!";
      } else {
        dog.isGoodDog = false;
        em.innerText = "Yes";
        button.innerText = "Bad Dog!";
      }
    });

    const addDog = document.querySelector(".dogs-list__button--add");
    const formContainer = document.querySelector("section");
    const formHeader = document.createElement("h2");
    const form = document.createElement("form");

    addDog.addEventListener("click", () => {
      const dogDisplayDetails = document.querySelectorAll("section > *");
      dogDisplayDetails.forEach((element) => element.remove());
      formHeader.innerText = "Add a new Dog";
      formContainer.append(formHeader);

      formContainer.append(form);
      form.setAttribute("class", "form");
      const nameLabel = document.createElement("label");
      const nameInput = document.createElement("input");

      nameLabel.innerText = "Dog's name";
      nameLabel.setAttribute("for", "name");
      form.append(nameLabel);

      nameInput.setAttribute("type", "text");
      nameInput.setAttribute("id", "name");
      nameInput.setAttribute("name", "name");
      form.append(nameInput);

      const photoLabel = document.createElement("label");
      const photoInput = document.createElement("input");

      photoLabel.innerText = "Dog's photo";
      photoLabel.setAttribute("for", "image");
      form.append(photoLabel);

      photoInput.setAttribute("type", "url");
      photoInput.setAttribute("id", "image");
      photoInput.setAttribute("name", "image");
      form.append(photoInput);

      const bioLabel = document.createElement("label");
      const bioTextarea = document.createElement("textarea");

      bioLabel.innerText = "Dog's Bio";
      bioLabel.setAttribute("for", "bio");
      form.append(bioLabel);

      bioTextarea.setAttribute("rows", "5");
      bioTextarea.setAttribute("id", "bio");
      bioTextarea.setAttribute("name", "bio");
      form.append(bioTextarea);

      const submitInput = document.createElement("input");

      submitInput.setAttribute("type", "submit");
      submitInput.setAttribute("id", "submit");
      submitInput.setAttribute("name", "submit");
      submitInput.setAttribute("value", "Let's add a dog");
      submitInput.setAttribute("class", "form__button");
      form.append(submitInput);
    });
  });
});
