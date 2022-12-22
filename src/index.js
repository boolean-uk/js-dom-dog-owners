const dogmenulist = document.querySelector(".dogs-list");
const dogArrayInfo = {};
const mainDogArea=document.querySelector('.main')
const dogButton=document.querySelector('.dog-list_button--add')


function createheaderAndCard() {
  dogmenulist.innerHTML=""
  const dogplus=document.createElement("li")
  
  dogplus.setAttribute("class","dogs-list__button dogs-list__button--add")
  dogplus.innerHTML= "+"
 dogmenulist.appendChild(dogplus)
 
  for (let i = 0; i < data.length; i++) {
    const dogItem = document.createElement("li");
    dogItem.setAttribute("class", "dogs-list__button");
    const uniqid = "menuitem" + data[i].id;
    dogItem.setAttribute("id", uniqid);
    dogItem.innerText = data[i].name;
    dogmenulist.appendChild(dogItem);
    const menulistitem = document.getElementById(uniqid);
    dogArrayInfo[uniqid]= createDogCard(data[i].id,data[i].name,data[i].image,data[i].bio)
    menulistitem.addEventListener("click", function () {
    mainDogArea.innerHTML=""
   mainDogArea.appendChild(dogArrayInfo[this.id])   
   
    });
  }
}

createheaderAndCard();
console.log(dogArrayInfo)

function createDogCard(id, name, image, bio,text1,button) {
  //create h2
  const dogName = document.createElement("h2");
  //add the dog name to h2
  dogName.innerText = name;
  //create an image
  const dogimage = document.createElement("img");
  //set the attribute for src
  dogimage.setAttribute("src", image);
  dogimage.setAttribute("alt", name);
  //create div element
  const dogdiv = document.createElement("div");
  //class to the div element
  dogdiv.setAttribute("class", 'main__dog-section__desc');
  //create h3
  const dogh3 = document.createElement("h3");
  dogh3.innerText = "bio";
  //creat the p
  const dogp = document.createElement("p");

  //add the bio information to data
  dogp.innerText = bio;
  //append the h3 and p into the div
  dogdiv.appendChild(dogh3);
  dogdiv.appendChild(dogp);
  const dogsection=document.createElement("section")
  dogsection.setAttribute('class','main__dog-section')
  dogsection.appendChild(dogName)
  dogsection.appendChild(dogimage)
  dogsection.appendChild(dogdiv)
  // create a button 
  const button1 = document.createElement("button");
   button1.innerText= button
 dogsection.appendChild(button1)

  return dogsection
}


function createSection() {
  // creat a new <section> 
  const section = document.createElement("section");
// set css class of new section to  = main__dog-section
  section.className = "main__dog-section";
  return section;
};


function createInput(idName,type="text",value){
  let input=null
  if(type==="textarea"){
    input=document.createElement("textarea")
    input.setAttribute("rows","5")

  } else{
    input=document.createElement("input")
    input.setAttribute("type",type)
  }
  input.setAttribute("id",idName)
  input.setAttribute("name",idName)
  if (value) input.setAttribute("value",value)
  return input
}


function createLabel(forAt,text)
{
  const label=document.createElement("label")
  label.attributes.for=forAt
  label.innerText=text
  return label
}

function createForm() {
  const form = document.createElement("form");

  const nameInput = createInput("name");
  const imgInput = createInput("image", "url");
  const bioInput = createInput("bio", "textarea");
  const submitInput = createInput("submit", "submit", "Let's add a dog!");

  const nameLabel = createLabel("name", "Dog's name");
  const imgLabel = createLabel("image", "Dog's picture");
  const bioLabel = createLabel("bio", "Dog's bio");

  form.className = "form";
  submitInput.className = "form__button";
  form.addEventListener('submit',function (event){
    event.preventDefault()
    const dogname=document.getElementById('name').value
  console.log("dog name",dogname)
  const dogimag=document.getElementById('image').value
  console.log("dog img",dogimag)
  const dogbiof=document.getElementById('bio').value
 console.log("dog bio",dogbiof)
 const Dog ={
  id:data.length+1,
  name:dogname,
  image:dogimag,
  bio:dogbiof,
  isGoodDog:true

 }
 data.unshift(Dog)
 dogmenulist.innerHTML=""
 createheaderAndCard()
})

  //(5)
  //TODO: Add an event listener on to the form to capture the
  //submit event. In the submit event, add a item  to the
  //list of dogs at the top of the page, and add a new object
  //in to the dogs array with the data captured from the form.

  

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  );
  return form;
};






function renderMainForm() {
  const section=document.querySelector(".main__dog-section")
  //  section = createSection();
  const form = createForm();
  const h2 = document.createElement("h2");

  h2.innerText = "Add a new Dog";

  section.append(h2, form);

  return section;
};

// get existing  + buttom form the Html pageand store in formButton variable 


// (4)
//TODO: Add an event listener on to form button so that
//when the user clicks the button, the form is displayed.
//the renderMainForm method will return an element that
//contains the form, so you only need to add it to the 
//dogContainer and remove any existing children.


const formButton = document.querySelector(".dogs-list__button--add");
const dogContainer = document.querySelector(".main");

formButton.addEventListener("click", ()=>{
  dogContainer.innerHTML=""
  const section =createSection();
  const titleNewDog=document.createElement("h2")
  titleNewDog.innerText="Add a New Dog"
  const createDogForm=createForm();

  dogContainer.append(section)
  section.append(titleNewDog,createDogForm)
  console.log("test form")


})


