console.log(data);

// WRITE YOUR CODE BELOW!

const doglist = document.querySelector("ul");
const dogcard = document.querySelector(".main__dog-section");
const div1 = document.querySelector(".main__dog-section__desc");
const dogForm = document.querySelector(".form");
const doglistAdd = document.querySelector(".dogs-list__button--add");

function removeothercards() {
  dogcard.innerHTML = "<h2> </h2>";
}
function removeList() {
  doglist.innerHTML = "<ul> </ul>";
}

doglistAdd.addEventListener("click", function () {
  removeothercards();
  DogForm();
});

for (let i = 0; i < data.length; i++) {
  const name = data[i].name;
  const dognames = document.createElement("li");
  dognames.setAttribute("class", "dogs-list__button");
  doglist.append(dognames);
  dognames.innerText = name;
  dognames.addEventListener("click", function () {
    removeothercards();
    dog_1(i);
  });
}
function dog_1(index) {
  const name1 = document.querySelector("h2");
  name1.innerText = data[index].name;
  dogcard.append(name1);

  const img1 = document.createElement("img");
  img1.setAttribute("src", data[index].image);
  dogcard.append(img1);

  const div1 = document.createElement("div");
  div1.setAttribute("class", "main__dog-section__desc");
  dogcard.append(div1);

  const bio = document.createElement("h3");
  bio.innerText = "bio";
  div1.append(bio);

  const para = document.createElement("p");
  div1.append(para);
  para.innerText = data[index].bio;

  const para2 = document.createElement("p");
  dogcard.append(para2);

  const isGoodDog = document.createElement("button");
  dogcard.append(isGoodDog);

  if (data[index].isGoodDog === true) {
    para2.innerText = "is naughty? No!";
    isGoodDog.innerText = "good dog";
  } else {
    para2.innerText = "is naughty? Yes!";
    isGoodDog.innerText = "bad dog";
  }
}

function DogForm() {
  const h2El = document.createElement("h2");
  dogcard.append(h2El);
  h2El.innerText = "Add a New Dog";

  const dogForm = document.createElement("form");
  dogForm.setAttribute("class", "form");
  dogcard.append(dogForm);

  const lableName = document.createElement("label");
  lableName.setAttribute("for", "name");
  dogForm.append(lableName);
  lableName.innerText = "Dog's name";

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "image");
  inputName.setAttribute("name", "name");
  dogForm.append(inputName);

  const labelImage = document.createElement("label");
  labelImage.setAttribute("for", "image");
  dogForm.append(labelImage);
  labelImage.innerText = "dog's image";

  const inputImage = document.createElement("input");
  inputImage.setAttribute("type", "url");
  inputImage.setAttribute("id", "image");
  inputImage.setAttribute("name", "name");
  dogForm.append(inputImage);

  const labelBio = document.createElement("label");
  labelBio.setAttribute("for", "bio");
  dogForm.append(labelBio);
  labelBio.innerText = "Dog's Bio";

  const textArea1 = document.createElement("textarea");
  textArea1.setAttribute("rows", "5");
  textArea1.setAttribute("id", "bio");
  textArea1.setAttribute("name", "bio");
  dogForm.append(textArea1);

  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("id", "submit");
  inputSubmit.setAttribute("name", "submit");
  inputSubmit.setAttribute("value", "Let's add a dog!");
  inputSubmit.setAttribute("class", "form_button");
  dogForm.append(inputSubmit);

  dogForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let newDog = {};
    newDog = {
      id: data.length + 1,
      name: inputName.value,
      bio: textArea1.value,
      image: inputImage.value,
    };
    data.unshift(newDog);
    dogListRefresh();
    removeothercards();
    DogForm();
  });
}
function addbutton() {
  const addbutton = document.createElement("li");
  addbutton.setAttribute("class", "dogs-list__button");
  addbutton.classList.add("dogs-list__button--add");
  addbutton.innerText = "+";
  doglist.append(addbutton);
  addbutton.addEventListener("click", function () {
    removeothercards();
    DogForm();
  });
}

function dogListRefresh() {
  removeList();
  addbutton();
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name;
    const dognames = document.createElement("li");
    dognames.setAttribute("class", "dogs-list__button");
    doglist.append(dognames);
    dognames.innerText = name;
    dognames.addEventListener("click", function () {
      removeothercards();
      dog_1(i);
    });
  }
}

const bringButton = document.querySelector(".jsconsole");
bringButton.addEventListener("click", function () {
  console.log("hellojohns!");
});
