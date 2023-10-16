console.log(data);

// WRITE YOUR CODE BELOW!

const makeDogList = () => {
  const ul = document.querySelector('ul');
  
  for (const dogInfo of data) {
    const li = document.createElement('li');
    li.innerText = dogInfo.name;
    li.setAttribute("class", "dogs-list__button");
    li.setAttribute("id", dogInfo.id);

    li.addEventListener('click', function () {
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

          goodDogButton.style.backgroundColor = "green";
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

makeDogList(data);

const addingDogs = () => {
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

    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    section.append(form);

    const formElements = [
      { label: " Name", id: "name", name: "name" },
      { label: " Picture", type:"url",  id: "image", name: "image"},
      { label: " Bio", id: "bio", name: "bio" }
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
    submitButton.setAttribute('value', " add");
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
};

addingDogs();
