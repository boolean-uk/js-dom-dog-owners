console.log(data);

// WRITE YOUR CODE BELOW!
const dogUlList = document.querySelector(".dogs-list");
const dogPlusButton = document.querySelector(".dogs-list__button--add");
const mainDogSection = document.querySelector(".main__dog-section");

for (let i = 0; i < data.length; i++) {
  const dogLiButton = document.createElement("li");

  dogLiButton.setAttribute("class", "dogs-list__button");
  dogLiButton.innerText = data[i].name;
  dogUlList.append(dogLiButton);

  // main dog

  dogLiButton.addEventListener("click", function () {
    mainDogSection.innerHTML = "<h2> <h2>";
    dogInfo(i);
  });
}

function dogInfo(index) {
  console.log("hit");

  const dogNameH2 = document.querySelector("h2");
  dogNameH2.innerText = data[index].name;

  const dogImg = document.createElement("img");
  dogImg.setAttribute(
    "src",
    `https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_${data[index].id}.jpg`
  );

  const dogSectionDesc = document.createElement("div");
  dogSectionDesc.setAttribute("class", "main__dog-section__desc");

  const dogBioTitle = document.createElement("h3");
  dogBioTitle.innerText = "Bio";

  const dogBio = document.createElement("p");
  dogBio.innerText = data[index].bio;

  const isNaughtyEm = document.createElement("em");
  isNaughtyEm.innerText = "Is naughty?";
  const isNaughtyP = document.createElement("p");

  const goodBadDogButton = document.createElement("button");
  if (data[index].isGoodDog === true) {
    isNaughtyP.innerText = "yes!";
    goodBadDogButton.innerText = "Bad dog!";
  } else {
    isNaughtyP.innerText = "no!";
    goodBadDogButton.innerText = "Good dog!";
  }

  isNaughtyEm.append(isNaughtyP);

  mainDogSection.append(
    dogNameH2,
    dogImg,
    dogSectionDesc,
    isNaughtyEm,
    goodBadDogButton
  );
  dogSectionDesc.append(dogBio, dogBioTitle);

  console.log(dogNameH2, dogImg, dogSectionDesc, isNaughtyEm, goodBadDogButton);
}
