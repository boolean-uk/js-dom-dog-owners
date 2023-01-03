console.log(data);

const doglist = document.querySelector('.dogs-list');
const dogmain = document.querySelector('.main__dog-section')
const doglistAdd = document.querySelector('.dogs-list__button--add')
const dogcard = document.querySelector('.main__dog-section')

function clearCard() {
    dogcard.innerHTML = '<h2> </h2>'
}

function removeList() {
    doglist.innerHTML = '<ul> </ul>'
}


doglistAdd.addEventListener('click', function () {
    clearCard()
    createForm()
  })

function button(){
    for (let i=0; i<data.length; i++) {
        const name = data[i].name
        const dogname = document.createElement('li');
        dogname.setAttribute('class', 'dogs-list__button');
        dogname.setAttribute('id', i);
        dogname.innerText = name
        doglist.append(dogname)
        dogname.addEventListener('click', (eventObj)=> {
            clearCard()
            cards(eventObj.target.id)

        }) 
       
    }
}

function cards(i) {
    const name = document.querySelector('h2')
    name.innerText =data[i].name
   

    const img = document.createElement('img')
    img.setAttribute('class', 'dog-img')
    img.src = data[i].image
    dogmain.append(img)

    const biodiv = document.createElement('div')
    biodiv.setAttribute('class', 'main__dog-section__desc')
    dogmain.append(biodiv)

    const bio = document.createElement('h3')
    bio.innerText = 'Bio'
    biodiv.append(bio)

    const information = document.createElement('p')
    information.innerText = data[i].bio
    biodiv.append(information)

   

    const dogButton = document.createElement('button')
    const naughty = document.createElement('p')
   

    if(data[i].isGoodDog === false) {
        naughty.innerHTML = "<em>Is naughty?</em> Yes! "
        dogButton.innerText = "Good dog! " 
    } else {
        naughty.innerHTML = "<em>Is naughty?</em> No! "
        dogButton.innerText = "Bad dog! " 
    }

    
    dogButton.addEventListener("click", function (eventObj) {
        data[value].isGoodDog = !data[value].isGoodDog
        if (data[value].isGoodDog === false) {
            naughty.innerHTML = "<em>Is naughty?</em> yes!"
            dogButton.innerText = "Good Dog!"
        } else {
            naughty.innerHTML = "<em>Is naughty?</em> no!"
           dogButton.innerText = "Bad Dog!"
        }
    })
    
    dogmain.append(naughty)
    dogmain.append(dogButton)
}
button();

// Create a form for new dog in the main section
function createForm (){
   const formCard = document.querySelector('.main__dog-section');
   const h2 = document.querySelector('h2');
   h2.innerText='Add a new Dog';

  const form = document.createElement('form');
  form.setAttribute('class', 'form');
  dogmain.append(form);

  const labelForName = document.createElement('label');
  labelForName.setAttribute('class', 'labelname');
  labelForName.innerText = "Dog's name ";
  form.append(labelForName);

  const inputname = document.createElement('input');
  inputname.setAttribute('id', 'name');
  inputname.setAttribute('name', 'name')
  inputname.setAttribute('type', 'text');
  form.append(inputname)

  const labelForImage = document.createElement('label');
  labelForImage.setAttribute('class', 'Label-image');
  labelForImage.innerText = "Dog's picture  "
  form.append(labelForImage);

  const inputimg = document.createElement('input');
  inputimg.setAttribute('id', 'image');
  inputimg.setAttribute('image', 'image')
  inputimg.setAttribute('type', 'url');
  form.append(inputimg)

  const labelForBio = document.createElement('label');
  labelForBio.setAttribute('class', 'labelbio');
  labelForBio.innerText = "Dog's bio";
  form.append(labelForBio);

  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'bio');
  textarea.setAttribute('name', 'bio');
  textarea.setAttribute('row', 5);
  form.append(textarea);

  const submit =document.createElement('input');
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'submit')
  submit.setAttribute('name', 'submit')
  submit.setAttribute('value', "Let's add a dog!")
  submit.setAttribute('class', 'form__button')
  form.append(submit)

form.addEventListener('submit', (eventObj) => {
    eventObj.defaultPrevented();

    const newDogObj ={
        id: data.length +1,
        name: inputname.value,
        image: inputimg.value,
        isGoodDog: true,
        bio: textarea.value
    }

    data.unshift(newDogObj)

   
    button()
    dogmain.innerHTML= '<h2>No dogs ?!?</h2>';
})
}


function addbutton() {
    const addbutton = document.createElement('li')
    addbutton.setAttribute('class', 'dogs-list__button')
    addbutton.classList.add('dogs-list__button--add')
    addbutton.innerText = '+'
    doglist.append(addbutton)
    addbutton.addEventListener('click', function () {
      clearCard()
      cards()
    })
  }

function dogListRefresh () {
    removeList()
    addbutton()
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name
      const dognames = document.createElement('li')
      dognames.setAttribute('class', 'dogs-list__button')
      doglist.append(dognames)
      dognames.innerText = name
      dognames.addEventListener('click', function () {
        clearCard()
        cards(i)
      })
    }
  }
createForm();