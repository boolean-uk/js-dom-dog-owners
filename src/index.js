console.log(data);

// WRITE YOUR CODE BELOW!
const list = document.querySelector("ul");
data.forEach((element) => {
  let dog = document.createElement("li");
  dog.id = element.id;
  dog.className = "dogs-list__button";
  dog.innerHTML = element.name;

  dog.addEventListener("click", (event) => {
    const id = event.target.id;
    const selected_dog = data.find((element) => element.id == id);

    const section = document.querySelector("section");
    section.innerHTML = `
        <h2>${selected_dog.name}</h2>
        <img
          src="${selected_dog.image}"
          alt=""
        />
        <div class="main__dog-section__desc">
          <h3>Bio</h3>
          <p>
            ${selected_dog.bio}
          </p>
        </div>
        <p><em>Is naughty?</em> <span style=display:${
          selected_dog.isGoodDog ? "contents" : "none"
        } id="isGoodDog">Yes!</span><span style=display:${
      selected_dog.isGoodDog ? "none" : "contents"
    } id="isBadDog">No!</span></p>
        <button onclick="toggleIsGoodDog()">Good dog!</button>`;
  });

  list.append(dog);
});

const addDog = document.getElementsByClassName("dogs-list__button--add")[0];
addDog.addEventListener("click", (event) => {
  const section = document.querySelector("section");
  section.innerHTML = `
    <h2>Add a new Dog</h2>
      <form class="form">

        <label for="name">Dog's name</label>
        <input type="text" id="name" name="name">

        <label for="image">Dog's picture</label>
        <input type="url" id="image" name="image">

        <label for="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea>

        <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
      </form>`;

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.elements["name"].value;
    let image = event.target.elements["image"].value;
    let bio = event.target.elements["bio"].value;

    let new_dog = document.createElement("li");
    new_dog.id = data.length;
    new_dog.className = "dogs-list__button";
    new_dog.innerHTML = name;

    addDog.insertAdjacentElement("afterend", new_dog);
  });
});

const toggleIsGoodDog = () => {
  let isGoodDog = document.getElementById("isGoodDog");
  let isBadDog = document.getElementById("isBadDog");
  let button = document.querySelector("button")

  if (isGoodDog.style.display === "contents") {
    isGoodDog.style.display = "none";
    isBadDog.style.display = "contents";
    button.innerText = "Bad Dog"
  } else if (isBadDog.style.display === "contents") {
    isGoodDog.style.display = "contents";
    isBadDog.style.display = "none";
    button.innerText = "Good Dog"
  }
};
