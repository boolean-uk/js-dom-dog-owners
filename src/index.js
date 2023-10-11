// WRITE YOUR CODE BELOW!
console.log(data);
// 1. Create more listed item in the loop.
function init() {
  for (let i = 0; i < data.length; i++) {
    const dogsList = document.querySelector(".dogs-list");
    const li = document.createElement("li");
    li.innerText = data[i].name;

    // 2. Add dog names into listed items.
    li.setAttribute("class", "dogs-list__button", "dogs-list__button--add");
    dogsList.append(li);
    // 3. Add eventListener for click.
    li.addEventListener("click", function () {
      // 4. Add empty .innerHTML for removing the section.
      const main = document.querySelector("main");
      main.innerText = "";
      // 5. Add dog's sections.
      const section = document.createElement("section");
      section.setAttribute("class", "main__dog-section");
      main.append(section);

      const h2 = document.createElement("h2");
      section.append(h2);
      h2.innerText = data[i].name;

      const img = document.createElement("img");
      section.append(img);
      img.src = data[i].image;
      img.setAttribute("width", "400");
      img.setAttribute("height", "300");

      const div = document.createElement("div");
      section.append(div);
      div.setAttribute("class", "main__dog-section__desc");

      const h3 = document.createElement("h3");
      div.append(h3);
      h3.innerText = "Bio";

      const p = document.createElement("p");
      div.append(p);
      p.innerText = data[i].bio;

      const pTwo = document.createElement("p");
      section.append(pTwo);

      let naughty;
      if (data[i].isGoodDog === true) {
        naughty = " No!";
      } else {
        naughty = " Yes!";
      }
      pTwo.innerText = naughty;

      const em = document.createElement("em");
      pTwo.insertAdjacentElement("afterbegin", em);
      em.innerText = "Is naughty?  ";

      const button = document.createElement("button");
      section.append(button);

      if (data[i].isGoodDog === true) {
        button.innerText = "Bad Dog";
      } else {
        button.innerText = "Good Dog";
      }

      button.addEventListener("click", function () {
        if (data[i].isGoodDog === true) {
          button.innerText = "Good Dog";
          naughty = " Yes!";
          pTwo.innerText = naughty;
          const em = document.createElement("em");
          pTwo.insertAdjacentElement("afterbegin", em);
          em.innerText = "Is naughty?  ";
        } else {
          button.innerText = "Bad Dog";
          naughty = " No!";
          pTwo.innerText = naughty;
          const em = document.createElement("em");
          pTwo.insertAdjacentElement("afterbegin", em);
          em.innerText = "Is naughty?  ";
        }
      });
    });
  }
}

init();

// select "+" button
const plus = document.querySelector(".dogs-list__button");
// add eventlistener to plus button
plus.addEventListener("click", function () {
  // Add empty .innerHTML for removing the section.
  const main = document.querySelector("main");
  main.innerText = "";
  // Add section
  const section = document.createElement("section");
  section.setAttribute("class", "main__dog-section");
  main.append(section);
  // add h2
  const h2 = document.createElement("h2");
  section.append(h2);
  h2.innerText = "Add a new Dog";
  // add form
  const form = document.createElement("form");
  form.setAttribute("class", "form");
  section.append(form);
  // add first label
  const label = document.createElement("label");
  label.setAttribute("for", "name");
  label.innerText = "Dog's name";
  form.append(label);
  // add first input
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "name");
  input.setAttribute("name", "name");
  form.append(input);
  // add second label
  const label2 = document.createElement("label");
  label2.setAttribute("for", "image");
  label2.innerText = "Dog's picture";
  form.append(label2);
  // add second input
  const input2 = document.createElement("input");
  input2.setAttribute("type", "url");
  input2.setAttribute("id", "image");
  input2.setAttribute("name", "image");
  form.append(input2);
  // add third label
  const label3 = document.createElement("label");
  label3.setAttribute("for", "bio");
  label3.innerText = "Dog's Bio";
  form.append(label3);
  // add textarea
  const textarea = document.createElement("textarea");
  textarea.setAttribute("rows", "5");
  textarea.setAttribute("id", "bio");
  textarea.setAttribute("name", "bio");
  form.append(textarea);
  // add last input
  const input3 = document.createElement("input");
  input3.setAttribute("type", "submit");
  input3.setAttribute("id", "submit");
  input3.setAttribute("name", "submit");
  input3.setAttribute("value", "Let's add a dog!");
  input3.setAttribute("class", "form__button");
  form.append(input3);
  // add eventlistener to submit button
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const dogsList = document.querySelector(".dogs-list");
    dogsList.innerText = "";
    const plusbutton = document.createElement("li");
    plusbutton.innerText = "+";
    plusbutton.setAttribute(
      "class",
      "dogs-list__button",
      "dogs-list__button--add"
    );
    dogsList.appendChild(plusbutton);
    const addnewdogList = document.querySelector(".dogs-list");
    const newli = document.createElement("li");
    const newdog = document.getElementById("name").value;
    newli.innerText = newdog;
    newli.setAttribute("class", "dogs-list__button", "dogs-list__button--add");
    addnewdogList.appendChild(newli);
    init();
  });
});

// 9. How to store the information in data.js
// 10.Display the new dog in to the new 'li' right next to the plus button.
