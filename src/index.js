// console.log(data);

function createDogListItem(data, index) {
  const dogContainer = document.querySelector(".main");

  // Create new element for the list.
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  ul.append(li);
  li.className = "dogs-list__button";
  li.innerText = data[index].name;

  // Add click event listener
  li.addEventListener("click", () => {
    dogContainer.innerHTML = "";
    createDogCardNamePhoto(data, index, dogContainer);
  });
}

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

// Function to display Bio text and the description.
const createDogCardDescBio = (data, index) => {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  const h3 = document.createElement("h3");
  h3.innerText = "Bio";

  const divP = document.createElement("p");
  divP.innerText = data[index].bio;

  div.append(h3, divP);

  return div;
};

// Function to display Bio text and the description.
function cardButtonSection(data, index) {
  const button = document.createElement("button");
  const text = document.createElement("p");

  const em = document.createElement("em");
  em.innerText = `Is Naughty? ${data[index].isGoodDog ? "No" : "Yes"}`;
  text.append(em);

  const div = document.createElement("div");

  div.className = "main__dog-section__btn";

  if (data[index].isGoodDog) {
    button.innerText = "Good Dog";
  } else {
    button.innerText = "Bad Dog";
  }

  div.append(text, button);
  return div;
}

// Function to display dog name, image and everything inside the section element.
const createDogCardNamePhoto = (data, index, dogContainer) => {
  const section = createSection();
  dogContainer.append(section);
  // Get and display dog name
  const h2 = document.createElement("h2");
  h2.innerText = data[index].name;

  // Fetch and display dog image path
  const image = document.createElement("img");
  image.setAttribute("src", data[index].image);
  image.setAttribute("alt", data[index].name);

  const desc = createDogCardDescBio(data, index);
  const bottomSec = cardButtonSection(data, index);

  section.append(h2, image, desc, bottomSec);
  return section;
};

// Use a for loop to loop through the list of the dogs and creeate a list.
for (let index = 0; index < data.length; index++) {
  createDogListItem(data, index);
}
