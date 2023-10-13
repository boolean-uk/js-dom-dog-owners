console.log(data);

//WRITE CODE YOUR BELOW!


// Render the top nav bar with the list of the dog's names
const makeDogList = () => {
  const ul = document.querySelector('ul');
  for (const dogInfo of data) {
    const li = document.createElement('li');
    li.innerText = dogInfo.name;
    li.setAttribute("class", "dogs-list__button");
    li.setAttribute("id", dogInfo.id);

    li.addEventListener('click', function () {
      //Mian card 
      const main = document.querySelector('main');
      main.innerHTML = "";

      const section = document.createElement('section');
      section.setAttribute("class", "main__dog-section");
      main.append(section);

      const h2 = document.createElement('h2');
      h2.innerText = dogInfo.name;
      section.append(h2);

      const img = document.createElement('img');
      img.src = dogInfo.image;
      img.setAttribute("alt", "");
      img.style.height = "400px";
      img.style.width = "450px";
      section.append(img);

      const div = document.createElement('div');
      div.setAttribute('class', 'main__dog-section__desc');
      section.append(div);

      const h3 = document.createElement('h3');
      h3.innerText = 'Bio';
      div.append(h3);

      const p = document.createElement('p');
      p.innerText = dogInfo.bio;
      div.append(p);

      // Good dog/bad dog button
      const goodDogP = document.createElement('p');
      goodDogP.setAttribute('class', 'goodness');

      const goodDogEm = document.createElement('em');
      goodDogEm.innerText = "Is naughty?!";
      goodDogP.append(goodDogEm);

      let goodDogPMessage = "No!";
      goodDogP.append(`${goodDogPMessage}`);
      section.append(goodDogP);

      const goodDogButton = document.createElement('button');
      goodDogButton.innerText = "Good dog!";
      goodDogButton.setAttribute("id", "switch-color");
      section.append(goodDogButton);

      let toggle = true;
      const findButton = document.querySelector('#switch-color');
      findButton.addEventListener("click", function () {
        const bad = document.querySelector('.goodness');
        bad.innerText = '';

        if (toggle) {
          const goodDogEm = document.createElement('em');
          goodDogEm.innerText = "Is naughty?!";
          goodDogP.append(goodDogEm);
          let goodDogPMessage = "Yes!";
          goodDogP.append(`${goodDogPMessage}`);
          section.append(goodDogP);

          goodDogButton.style.backgroundColor = "red";
          goodDogButton.innerText = "Bad dog";
          section.append(goodDogButton);
        } else {
          const goodDogEm = document.createElement('em');
          goodDogEm.innerText = "Is naughty?!";
          goodDogP.append(goodDogEm);
          let goodDogPMessage = "No!";
          goodDogP.append(`${goodDogPMessage}`);
          section.append(goodDogP);

          goodDogButton.style.backgroundColor = "green";
          goodDogButton.innerText = "Good dog";
          section.append(goodDogButton);
        }
        toggle = !toggle;
      });
    });
    ul.append(li);
  }
};

// When page loads - run this
// When submit refreshes the list, don't run
makeDogList(data);

// When the plus button is clicked, it should replace the main card with a form to add a new dog to the list.
// You'll find a template for the form on the HTML page.
function addingDogs() {
  const plusButton = document.querySelector('.dogs-list__button--add');
  plusButton.addEventListener('click', function () {
    const main = document.querySelector('main');
    main.innerHTML = "";

    const section = document.createElement('section');
    section.setAttribute("class", "main__dog-section");
    main.append(section);

    const h2 = document.createElement('h2');
    h2.innerText = "Add a new dog";
    section.append(h2);

    // Make new form
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    section.append(form);

    const formElements = [
      { label: "Dog's name", id: "name", name: "name" },
      { label: "Dog's picture", id: "image", name: "image" },
      { label: "Dog's Bio", id: "bio", name: "bio" }
    ];

    for (const element of formElements) {
      const label = document.createElement('label');
      label.setAttribute('for', element.id);
      label.innerText = element.label;

      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('id', element.id);
      input.setAttribute('name', element.name);

      form.append(label, input);
    }

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
    submitButton.setAttribute('name', 'submit');
    submitButton.setAttribute('value', "Let's add a dog!");
    submitButton.setAttribute('class', "form__button");
    form.append(submitButton);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    const newForm = document.querySelector('form');
    function handleSubmit(event) {
      const newDogData = {
        id: '',
        name: event.target.name.value,
        bio: event.target.bio.value,
        isGoodDog: true,
        image: event.target.image.value,
      };
      data.unshift(newDogData);
      const ul = document.querySelector('ul');
      ul.innerHTML = '';
      const refreshPlusButton = document.createElement('li');
      refreshPlusButton.setAttribute('class', 'dogs-list__button dogs-list__button--add');
      refreshPlusButton.innerText = '+';
      ul.append(refreshPlusButton);
      addingDogs();
      makeDogList(data);
    }
    newForm.addEventListener('submit', handleSubmit);
  });
}

addingDogs();
