// console.log(data);
console.log(data[0]);
console.log("starting file");

// WRITE YOUR CODE BELOW!
// creating the button at the top
function createDogButton (dog){

  const dogList = document.querySelector(".dogs-list");
  const dogButton = document.createElement("li");
  dogButton.setAttribute("class", "dogs-list");
  dogButton.setAttribute("class", "dogs-list__button");
  dogButton.innerText = dog.name;
  dogList.append(dogButton);

  dogButton.addEventListener ('click', ()=>{
    console.log('clicked button', dog.name)
    createDogCard(dog)
  })
}



function createDogCard (dog){
  const main = document.querySelector(".main");
  main.innerHTML = ''

  console.log('cretaing dog',dog.name);

  const section = document.createElement("section");
  section.setAttribute("class", "main__dog-section");
  main.append(section);

  // creating the title
  const dogTitle = document.createElement("h2");
  dogTitle.innerText = dog.name;
  section.append(dogTitle);

  // code for the image
  const img = document.createElement("img");
  img.setAttribute("src", dog.image);
  section.append(img);

  //biolabel
  const h3 = document.createElement("h3");
  h3.innerText = "Bio";
  section.append(h3);

  //creating the bio
  const bio = document.createElement("p");
  bio.innerText = dog.bio;
  section.append(bio);

  //good dog text
  const goodDogText = document.createElement("p");
  const goodDogLabel = document.createElement("em");
  goodDogLabel.innerText = "is Naughty?";
  goodDogText.append(goodDogLabel);
  section.append(goodDogText);
}


data.forEach((dog) => {
  createDogButton(dog)

  createDogCard(dog);

 });
console.log("finishing file");

