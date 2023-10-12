console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector("dogs-list");

const mainCard = document.querySelector("main__dog-section");

function renderDogList() {
  data.forEach((dog) => {
    const listItem = document.createElement("li");
    listItem.textContent = dog.name;
  });
}
