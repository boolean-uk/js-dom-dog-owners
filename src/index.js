console.log(data);
const buildDogCard = (data) => {
  const section = buildSection();
  const sectionWithName = addName(section, data.name);
  const sectionWithImg = addImg(sectionWithName, data.image);
  const sectionWithDiv = addDiv(sectionWithImg);
  const sectionWithBio = addBio(sectionWithDiv, data.bio);
  const sectionWithNaughty = addNaughty(sectionWithBio, data.isGoodDog);
  const finalCard = addButton(sectionWithNaughty);
  return finalCard
};

const buildSection = () => {
  const newSection = document.createElement("section");
  newSection.setAttribute("class", "main__dog-section");
  return newSection;
};

const addName = (section, name) => {
  const newH2 = document.createElement("h2");
  newH2.innerText = name;
  section.append(newH2);
  return section;
};

const addImg = (section, img) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", img);
  section.append(newImg);
  return section;
};

const addDiv = (section) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "main__dog-section__desc");
  section.append(newDiv);
  return section;
};

const addBio = (section, bio) => {
  const newH3 = document.createElement("h3");
  const newP = document.createElement("p");
  const div = section.querySelector("div");

  newH3.innerText = "Bio";
  newP.innerText = bio;

  div.append(newH3);
  div.append(newP);
  return section;
};

const addNaughty = (section, isGoodDog) => {
  const newP = document.createElement("p");
  const newEm = document.createElement("em");

  isGoodDog ? (newP.innerText = " Yes") : (newP.innerText = " No");

  newEm.innerText = "Is naughty?";
  newP.prepend(newEm);
  section.append(newP);

  return section;
};

const addButton = (section) => {
    const newButton = document.createElement('button')
    newButton.innerText = 'Good Dog!'
    section.append(newButton)
    return section
};



//Header Buttons

const buildHeaderButtons = (data) => {
    const newLi = document.createElement('li')
    newLi.setAttribute('class', 'dogs-list__button')
    newLi.innerText = data.name

    addEventListener(newLi, data)

    return newLi
}

const addEventListener = (li, data) => {
    li.addEventListener('click', () => {
        let newDog = buildDogCard(data)
        let dogSection = document.querySelector('main')
       dogSection.innerHTML = ''
        dogSection.appendChild(newDog)
       
    })
}

const populateHeader = () => {
    const header = document.querySelector('.dogs-list')
    for (let i = 0; i < data.length; i++) {
      let newButton = buildHeaderButtons(data[i])
      header.append(newButton)
    }
}

populateHeader()