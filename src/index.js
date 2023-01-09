console.log(data);

const doglist = document.querySelector('.dogs-list');
const dogmain = document.querySelector('.main__dog-section') 
const doglistAdd = document.querySelector('.dogs-list__button--add') 

const dogMain = document.querySelector(".main")


function clearCard() {
    dogmain.innerHTML = '<h2> </h2>'
}
const clearTopButtons = () => {
    doglist.innerHTML = "<li class='dogs-list__button dogs-list__button--add'>+</li>"
    const doglistAdd = document.querySelector(".dogs-list__button--add")
    doglistAdd.addEventListener("click", () => {
        createForm()
    })
}



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
    console.log("buton isimler")
}

function cards(i) {
    const name = document.querySelector('h2')
    name.innerText =data[i].name
    dogmain.append(name)
   

    const img = document.createElement('img')
    img.setAttribute("src", data[i].image)
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

   
    const naughty = document.createElement('p')
    const dogButton = document.createElement('button')
   
    if(data[i].isGoodDog === false) {
        naughty.innerHTML = "<em>Is naughty?</em> Yes! "
        dogButton.innerText = "Good dog! " 
    } else {
        naughty.innerHTML = "<em>Is naughty?</em> No! "
        dogButton.innerText = "Bad dog! " 
    }

    
    dogButton.addEventListener("click", function (eventObj) {
        data[i].isGoodDog = !data[i].isGoodDog
        if (data[i].isGoodDog === false) {
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


doglistAdd.addEventListener('click', function () {
    clearCard()
    createForm()
})

// Create a form for new dog in the main section
function createForm (){
    clearCard()
   const formCard = document.querySelector('.main__dog-section');
   const h2 = document.querySelector('h2');
   h2.innerText='Add a new Dog';
   

  const form = document.createElement('form');
  form.setAttribute('class', 'form');
  dogmain.append(form);

//label
  const labelForName = document.createElement('label');
  labelForName.setAttribute("for", "name");
  labelForName.innerText = "Dog's name ";
  form.append(labelForName);

  //input
  const inputname = document.createElement('input');
  inputname.setAttribute('id', 'name');
  inputname.setAttribute('name', 'name')
  inputname.setAttribute('type', 'text');
  form.append(inputname)

  const labelForImage = document.createElement('label');
  labelForImage.setAttribute("for", "image");
  //labelForImage.setAttribute('class', 'Label-image');
  labelForImage.innerText = "Dog's picture  "
  form.append(labelForImage);

  const inputImg = document.createElement('input');
  inputImg.setAttribute('id', 'image');
  inputImg.setAttribute('name', 'image')
  inputImg.setAttribute('type', 'url');
  form.append(inputImg)

  const labelForBio = document.createElement('label');
  labelForBio.setAttribute("for", "bio");
  labelForBio.innerText = "Dog's bio";
  form.append(labelForBio);

  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'bio');
  textarea.setAttribute('name', 'bio');
  textarea.setAttribute('rows', "5");
  form.append(textarea);

  const submit =document.createElement('input');
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'submit')
  submit.setAttribute('name', 'submit')
  submit.setAttribute('value', "Let's add a dog!")
  submit.setAttribute('class', 'form__button')
  form.append(submit)
  
 


form.addEventListener('submit', (event) => {
    //event.defaultPrevented();

    //newDogObj.addEventListener("click", () =>{
        newDogObj ={
            id: data.length +1,
            name: inputname.value,
            image: inputImg.value,
            isGoodDog: true,
            bio: textarea.value    
        }
        //cards(i)
        data.unshift(newDogObj)    
    //})


    
   //console.log(newDogObj)
    button()
    dogListRefresh()
    createForm()
    clearCard()
    dogmain.innerHTML= '<h2>No dogs ?!?</h2>';
})
button()
}

// add  button on the list
function addbutton() {
    
    const addbutton = document.createElement('button')
    addbutton.setAttribute('class', 'dogs-list__button')
    addbutton.classList.add('dogs-list__button--add')
    addbutton.innerText = '+'
    doglist.append(addbutton)
    addbutton.addEventListener('click', function () {
      clearCard()
      createForm()
      
    })
  }

function dogListRefresh () {
   clearTopButtons()
    
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name
      const dognames = document.createElement('li')
      dognames.setAttribute('class', 'dogs-list__button')
      dognames.setAttribute('id', i)
      doglist.append(dognames)
      dognames.innerText = name
      dognames.addEventListener('click', function () {
        clearCard()
        cards(i)  
      })
    }
  }
createForm();
