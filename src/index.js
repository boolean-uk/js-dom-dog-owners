console.log(data);

// QUERY SELECTORS FOR EXISTING ELEMENTS
const listUL = document.querySelector(".dogs-list");
const mainArea = document.querySelector(".main");
const mainDescription = document.querySelector(".main__dog-section");

// POPULATE THE LIST
for (let i = 0; i < data.length; i++) {
  const newDog = data[i];
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "dogs-list__button");
  listItem.innerText = newDog.name;
  listUL.append(listItem);
}

for (let i = 0; i < data.length; i++) {
  const newDog = data[i];

  // CREATE ELEMENTS & FILL IN CONTENTS

  const section = document.createElement("section");
  section.setAttribute("class", "main__dog-section");

  const dogName = document.createElement("h2");
  dogName.innerText = newDog.name;

  const image = document.createElement("img");
  image.src = newDog.image;
  const description = document.createElement("div");
  description.setAttribute("class", "main__dog-section__desc");

  const header = document.createElement("h3");
  header.innerText = "Bio";
  const paragraph = document.createElement("p");
  paragraph.innerText = newDog.bio;

  const isNaughty = document.createElement("p");
  const emphasis = document.createElement("em");
  emphasis.innerText = "Is naughty? ";

  // APPEND ELELEMENTS

  mainArea.append(section);
  section.append(dogName);
  section.append(image);
  section.append(description);
  description.append(header);
  description.append(paragraph);
  isNaughty.append(emphasis);

  if (newDog.isGoodDog === true) {
    isNaughty.append("No!");
  } else if (newDog.isGoodDog === false) {
    isNaughty.append("Yes!");
  }
  description.append(isNaughty);

  // EVENT LISTENERS
}
