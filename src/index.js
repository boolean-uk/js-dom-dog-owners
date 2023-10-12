function makeDogNavBar(dogs) {
  dogs.forEach((dog) => {
    const navListItem = document.createElement("li");
    const dogName = dog.name;
    navListItem.innerText = dogName;
    navListItem.className = "dogs-list__button";
    const dogsList = document.querySelector(".dogs-list");

    navListItem.addEventListener("click", () => makeDogCard(dog));
    dogsList.append(navListItem);
  });
}

function makeDogCard(dog) {
  const main = selectMain();
  removeMainChildren();

  const section = makeSection();

  const h2 = makeH2(dog);

  const img = makeImg(dog);

  const divDogSection = makeDivDogSection(dog);

  const p = makeP(dog);

  const button = makeButton(dog);

  main.append(section);

  section.append(h2);
  section.append(img);
  section.append(divDogSection);
  section.append(p);
  section.append(button);
}

function selectMain() {
  return document.querySelector("main.main");
}

function removeMainChildren() {
  const main = selectMain();
  Array.from(main.children).forEach((child) => {
    child.remove();
  });
}

function makeSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

function makeH2(dog) {
  const h2 = document.createElement("h2");
  h2.innerText = dog.name;
  return h2;
}

function makeImg(dog) {
  const img = document.createElement("img");
  img.src = dog.image;
  img.alt = `picture of ${dog.name}`;
  return img;
}

function makeDivDogSection() {
  const divDogSection = document.createElement("div");
  divDogSection.className = "main__dog-section__desc";

  const h3 = document.createElement("h3");
  h3.innerText = "Bio";

  const p = document.createElement("p");
  p.innerText = dog.bio;

  divDogSection.append(h3);
  divDogSection.append(p);

  return divDogSection;
}

function makeP(dog) {
    const p = document.createElement("p");
    const em = document.createElement("em");

    em.innerText = "Is naughty?";

    p.append(em);

    dog.isGoodDog ? p.innerHTML = `${em.outerHTML} yes!` : p.innerHTML = `${em.outerHTML} no!`;

    return p;
}

function makeButton(dog) {
    const button = document.createElement("button");
    button.addEventListener("click", (e) => flipIsGoodDog(e, dog));

    dog.isGoodDog ? button.innerText = `Good dog!` : button.innerText = `Bad dog!`;

    return button;
}

function flipIsGoodDog(e, dog) {
  if (dog.isGoodDog) {
    if (
      confirm(
        `Attention, proceeding will mark ${dog.name} as a bad dog.
Do you wish to continue?`
      )
    ) {
    } else {
      return null;
    }
  }

  dog.isGoodDog = !dog.isGoodDog;

  e.target = makeButton(dog); // TODO: I thought this would work but not sure why :(

  const parent = e.target.parentElement;
  const p = parent.children[3];

  e.target.remove();
  p.remove();

  parent.append(makeP(dog));
  parent.append(makeButton(dog));
}

const dogs = data;

makeDogNavBar(dogs);

const dog = dogs[5];
makeDogCard(dog);
