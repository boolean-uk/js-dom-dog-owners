console.log(data);

// WRITE YOUR CODE BELOW!
const dogsList = document.querySelector(".dogs-list");
console.log(dogsList);

for (let i = 0; i < data.length; i++) {
  const li = document.createElement("li");
  li.setAttribute("class", "dogs-list__button");
  console.log(li);
  li.innerText = data[i].name;
  dogsList.appendChild(li);

  // correct list is <ul class="dogs-list">
  // now add an event listener to listen for user clicks
  //inside the eventListerner we want to call out function
  // and give the called function the index we are looping though (i)
  li.addEventListener("click", () => {
    const dogsCard = document.querySelector(".main__dog-section");
    dogsCard.innerHTML = "<h2>No dogs ?!?</h2>";
    selectCard(i);
  });
}
const addButton = document.querySelector(".dogs-list__button--add");
addButton.addEventListener("click", () => {
  const dogsCard = document.querySelector(".main__dog-section");
  dogsCard.innerHTML = "<h2>No dogs ?!?</h2>";
  createForm();
});

function createForm() {
  const formCard = document.querySelector(".main__dog-section");
  const h2 = document.querySelector("h2");
  h2.innerText = "Add a new Dog";

  const form = document.createElement("form");
  form.setAttribute("class", "form");
  formCard.appendChild(form);

  const labelForName = document.createElement("label");
  labelForName.innerText = "name";
  labelForName.setAttribute("for", "name");
  form.appendChild(labelForName);

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("name", "name");
  form.appendChild(inputName);

  const labelForImage = document.createElement("label");
  labelForImage.setAttribute("for", "image");
  labelForImage.innerText = "image";
  form.appendChild(labelForImage);

  const inputForImage = document.createElement("input");
  inputForImage.setAttribute("type", "url");
  inputForImage.setAttribute("id", "image");
  inputForImage.setAttribute("name", "image");
  form.appendChild(inputForImage);

  const labelForBio = document.createElement("label");
  labelForBio.setAttribute("for", "bio");
  labelForBio.innerText = "bio";
  form.appendChild(labelForBio);

  const textarea = document.createElement("textarea");
  textarea.setAttribute("rows", "5");
  textarea.setAttribute("id", "bio");
  textarea.setAttribute("name", "bio");
  form.appendChild(textarea);

  const submit = document.createElement("submit");
  submit.setAttribute("class", "form__button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("name", "submit");
  submit.setAttribute("value", "Let's add a dog!");
  submit.innerText = "submit";
  form.appendChild(submit);
  console.log("createForm has been called");
}

function selectCard(index) {
  const dogsCard = document.querySelector(".main__dog-section");
  const h2 = document.querySelector("h2");
  h2.innerText = data[index].name;

  const img = document.createElement("img");
  img.src = data[index].image;
  dogsCard.appendChild(img);

  const bioSection = document.createElement("div");
  bioSection.setAttribute("class", "main__dog-section__desc");
  dogsCard.appendChild(bioSection);
  const h3 = document.createElement("h3");
  h3.innerText = "bio";
  bioSection.appendChild(h3);
  const p = document.createElement("p");
  p.innerText = data[index].bio;
  bioSection.appendChild(p);

  const bio = document.createElement("bio");

  const button = document.createElement("button");
  const isDogGoodLabel = document.createElement("p");
  button.addEventListener("click", () => {
    data[index].isGoodDog = !data[index].isGoodDog;
    if (data[index].isGoodDog === true) {
      isDogGoodLabel.innerHTML = "<em>Is naughty?</em> yes!";
      button.innerText = "Good dog!";
    } else {
      isDogGoodLabel.innerHTML = "</em>Is naughty?</em> no!";
      button.innerText = "Bad dog!";
    }
    console.log(data[index]);
  });
  if (data[index].isGoodDog === true) {
    isDogGoodLabel.innerHTML = "<em>Is naughty?</em> yes!";
    button.innerText = "Good dog!";
  } else {
    isDogGoodLabel.innerHTML = "</em>Is naughty?</em> no!";
    button.innerText = "Bad dog!";
  }
  dogsCard.appendChild(isDogGoodLabel);
  dogsCard.appendChild(button);
}
