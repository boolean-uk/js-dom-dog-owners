// WRITE YOUR CODE BELOW!
console.log(data);
// 1. Create more listed item in the loop.
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
    img.setAttribute('width', '400');
    img.setAttribute('height', '300')

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
  

  const button = document.createElement('button');
  section.append(button);

  if(data[i].isGoodDog === true){
    button.innerText = 'Bad Dog';
  } else {
    button.innerText = 'Good Dog';
  }

button.addEventListener('click', function(){
  if(data[i].isGoodDog === true){
    button.innerText = 'Good Dog';
    naughty = " Yes!";
    pTwo.innerText = naughty;
    const em = document.createElement("em");
    pTwo.insertAdjacentElement("afterbegin", em);
    em.innerText = "Is naughty?  ";
  } else {
    button.innerText = 'Bad Dog';
    naughty = " No!";
    pTwo.innerText = naughty;
    const em = document.createElement("em");
    pTwo.insertAdjacentElement("afterbegin", em);
    em.innerText = "Is naughty?  ";
  }
})
  });
}

// 6. Add eventListener and main card to the plus button.
// 7. Add empty .innerHTML for removing the section.
// 8. Create a new form
// 9. How to store the information in data.js
// 10.Display the new dog in to the new 'li' right next to the plus button.
