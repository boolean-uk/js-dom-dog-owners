// WRITE YOUR CODE BELOW!

// <!-- This is a template for the main dog card -->

// <!-- <section class="main__dog-section">
//         <h2>Mr. Bonkers</h2>
//         <img
//           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//           alt=""
//         />
//         <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!
//           </p>
//         </div>
//         <p><em>Is naughty?</em> yes!</p>
//         <button>Good dog!</button>
//   </section>  -->

const dogs = data;
console.log(dogs);
for (let i = 0; i < dogs.length; i++) {
  const dogList = document.querySelector(".dogs-list");
  console.log(dogList);

  const dogSelect = document.createElement("li");
  dogSelect.classList.add("dogs-list__button");
  dogSelect.innerText = dogs[i].name;
  dogList.append(dogSelect);

  const main = document.querySelector("main");
  console.log(main);

  dogSelect.addEventListener("click", () => {
    createDogCard(dogs[i]);
  });
}
function createDogCard(doggy) {
  const dogSection = document.querySelector(".main__dog-section");
  const main = document.querySelector("main");
  console.log(main);
dogSection.innerHTML = ''
  main.append(dogSection);

  const header = document.createElement("h2");
  console.log(header);
  header.innerText = doggy.name;
  dogSection.append(header);

  const image = document.createElement("img");
  image.setAttribute("src", doggy.image);
  image.setAttribute("alt", "");
  console.log(image);
  dogSection.append(image);

  const description = document.createElement("div");
  console.log(description);
  description.classList.add("main__dog-section__desc");
  dogSection.append(description);

  const smallHeader = document.querySelector(".main__dog-section__desc");
  console.log(smallHeader);
  const addsmallHeader = document.createElement("h3");
  console.log(addsmallHeader);
  addsmallHeader.innerText = "Bio";
  description.append(addsmallHeader);

  const p = document.createElement("p");
  console.log(p);
  p.innerText = doggy.bio;
  description.append(p);

  const em = document.createElement("em");
  em.innerText = "Yes!";

  const nextp = document.createElement("p");

  nextp.innerText = "is Naughty?";
  nextp.style.fontStyle = "italic";
  nextp.append(em);
  dogSection.append(nextp);
  console.log(nextp);

  const button = document.createElement("button");
  button.innerText = doggy.isGoodDog;
  dogSection.append(button);
  dogList.append(dogSelect);

  if (doggy.isGoodDog === true) {
    button.innerText = "Good Dog!";
  } else {
    button.innerText = "Bad dog!";
  }

  dogs.addEventListener("click", () => {
    main.innerHTML = "";
    const dogHeader = document.createElement("h2");
    dogHeader.innerText = "Add a new Dog";
    dogSection.append(dogHeader);

    const form = document.createElement("form");
    form.classList.add("form");
    dogSection.append(form);
    const label = document.createElement("label");
    label.setAttribute("for", "name");
    label.innerText = `Dog's name`;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "name");
    input.setAttribute("name", "name");
    form.append(label, input);

    const labelTwo = document.createElement("label");
    labelTwo.setAttribute("for", "image");
    labelTwo.innerText = `Dog's Picture`;

    const inputTwo = document.createElement("input");
    inputTwo.setAttribute("type", "url");
    inputTwo.setAttribute("id", "image");
    inputTwo.setAttribute("name", "image");
    form.append(labelTwo, inputTwo);

    const labelThree = document.createElement("label");
    labelThree.setAttribute("for", "Bio");
    labelThree.innerText = `Dog's bio`;

    const textarea = document.createElement("textarea");
    textarea.setAttribute("rows", "5");
    textarea.setAttribute("id", "bio");
    textarea.setAttribute("name", "bio");
    form.append(labelTwo, textarea);
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.setAttribute("name", "submit");
    submit.setAttribute("value", `Let's add a dog!`);
    submit.setAttribute("class", "form__button");
    form.append(submit);

    console.log(form);
  });
}
