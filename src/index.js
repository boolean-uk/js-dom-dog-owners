console.log(data);

const dogsUl = document.querySelector(".dogs-list");
const dogNameList = document.createElement("li");

function creatingHeaderList() {
    dogsUl.innerHTML = '<li class="dogs-list__button dogs-list__button--add">+</li>'
  for (let i = 0; i < data.length; i++) {
    const dogsUl = document.querySelector(".dogs-list");
    const dogNameList = document.createElement("li");
    //make each li a link +/or add event listener
    dogNameList.setAttribute("class", "dogs-list__button");
    dogNameList.setAttribute("id", i);
    dogNameList.innerText = data[i].name;
    dogsUl.append(dogNameList);

    dogNameList.addEventListener("click", function (eventObj) {
      console.log(eventObj.target.id);
      const dogCard = createDogCard(eventObj.target.id);
    });
  }
}
creatingHeaderList();
// this is the new section we created now

function creatingRenderNewDog(name, bio, image) {
  const addedDogObject = {
    id: data.length + 1,
    name: name,
    image: image,
    bio: bio,
    isGoodDog: true,
  };
  data.unshift(addedDogObject);
  creatingHeaderList();
  
}

function createDogCard(dogData) {
  //select area
  const dogCards = document.querySelector(".main__dog-section");
  console.log(dogCards);
  dogCards.innerHTML = "";
  const dogH2 = document.createElement("h2");
  dogH2.innerText = data[dogData].name;
  dogCards.append(dogH2);
  console.log(dogH2);

  //Adding an Image
  const dogImg = document.querySelector(".main__dog-section");
  const dogImage = document.createElement("img");
  dogImage.setAttribute("type", "url");
  const dogProfilePic = new Image(256);
  dogProfilePic.src = data[dogData].image;
  dogImg.append(dogProfilePic);

  // creating the div for whole bio section
  const bioInfo = document.createElement("div");
  bioInfo.setAttribute("class", "main__dog-section__desc");
  dogCards.append(bioInfo);

  //Adding the Bio
  const dogBioSection = document.querySelector(".main__dog-section__desc");

  const dogBio = document.createElement("h3");
  dogBio.innerText = "Bio";
  bioInfo.append(dogBio);

  //Adding bioInfo
  const dogBioInfo = document.createElement("p");
  dogBioInfo.innerText = data[dogData].bio;
  bioInfo.append(dogBioInfo);

  //Is a good dog?
  // create the function for the true or false
  const goodDog = document.createElement("p");
  goodDog.innerText = `is naugthy? ${data[dogData].isGoodDog}`;
  dogCards.append(goodDog);

  // try to make some space
  const newButton = document.createElement("button");
  newButton.innerText = `Good Dog`;
  dogCards.append(newButton);
}

// !!!!!!!!!!!!!!!!!!!create the form !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//remove everything when + button is clicked. can reuse some code from above

const formH2 = document.createElement("h2");
formH2.innerText = "Add a new Dog";
// addDogFormSection.append(formH2)

//create the form

//INPUT STUFF
function addNewDogForm() {
  const mainSection = document.querySelector(".main__dog-section");
  const formForm = document.createElement("form");
  formForm.className = "form";
  

  const formLabelName = document.createElement("label");
  formLabelName.innerText = "dogName";
  formLabelName.setAttribute("for", "name");
  const formInputName = document.createElement("input");
  formInputName.setAttribute("type", "text");
  formInputName.setAttribute("id", "name");
  formInputName.setAttribute("name", "name");

  const formLabelImg = document.createElement("label");
  formLabelImg.innerText = "dogImage";
  formLabelImg.setAttribute("for", "image");
  const formInputImg = document.createElement("input");
  formInputImg.setAttribute("type", "url");
  formInputImg.setAttribute("id", "image");
  formInputImg.setAttribute("name", "image");

  const formLabelBio = document.createElement("label");
  formLabelBio.innerText = "Bio";
  formLabelBio.setAttribute("for", "bio");
  const formInputBio = document.createElement("input");
  formInputBio.setAttribute("textarea", "5");
  formInputBio.setAttribute("id", "bio");
  formInputBio.setAttribute("name", "bio");

  //submit button (remove default function so it doesn't refresh the page)
  const submitNewDogButton = document.createElement("button");
  submitNewDogButton.innerText = "Lets add a dog!";
  // submitNewDogButton.setAttribute('class', 'form__button')
  submitNewDogButton.className = "form__button";
  submitNewDogButton.setAttribute("id", "submit");
  submitNewDogButton.setAttribute("type", "submit");
  submitNewDogButton.setAttribute("name", "submit");
  submitNewDogButton.setAttribute("value", "Lets add a dog!");

  //Appending our input stuff
  formForm.append(formLabelName);
  formForm.append(formInputName);
  formForm.append(formLabelImg);
  formForm.append(formInputImg);
  formForm.append(formLabelBio);
  formForm.append(formInputBio);

  formForm.append(submitNewDogButton);
  // formForm.append(formLabelName)

  mainSection.append(formForm);

  //  confirm which one you are using addevent listner for

  formForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // clearing the text of list
    dogNameList.innertext = "";
    // create the new Ul and append the li
    const newDogsUl = document.querySelector(".dogs-list");
    const newListItem = document.createElement("li");
    newDogsUl.append(newListItem);
    creatingRenderNewDog(
      formInputName.value,
      formInputBio.bio,
      formInputImg.value
    );
  });
}

// formForm.append(addNewDogForm())
const addDogButton = document.querySelector(".dogs-list__button");

addDogButton.addEventListener("click", function (eventObj) {
  console.log("click");
  const mainSection = document.querySelector(".main__dog-section");
  mainSection.innerHTML = "<h2>dogcards</h2>";
  addNewDogForm(eventObj.target.id);
});
// create the function the for loop so that we can you use it again.
// create the add even listener for the submit button and it should be createthe new dog heading.
// prepend is opposite of the append.
