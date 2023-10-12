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

  });
});