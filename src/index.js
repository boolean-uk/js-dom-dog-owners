console.log(data);

// WRITE YOUR CODE BELOW!

const ul=document.querySelector('ul')


data.forEach((value)=>{

const li = document.createElement('li')
li.setAttribute('class','dogs-list__button')
li.innerText = `${value.name}`
ul.append(li)

li.addEventListener('click',()=>{ 
// for the main dog card
    const section = document.querySelector('section')
    // for the removal of other thing inside section
    const removal = document.querySelectorAll('section > *')
    removal.forEach(element => element.remove())

// for the head of card
const h2 = document.createElement('h2')
h2.innerText = `${value.name}`
section.append(h2)

//for image
const img = document.createElement('img')
img.setAttribute('src',`${value.image}`)
img.setAttribute('height','400px')
img.setAttribute('width','400px')
img.setAttribute('alt','')
section.append(img)

//for div part
const div =document.createElement('div')
     const h3= document.createElement('h3')
     h3.innerText= 'Bio'
     div.append(h3)

//for p inside the div
const p = document.createElement('p')
p.innerText = `${value.bio}`
div.append(p)

section.append(div)// putting div in section

//for outside div p
const p1 = document.createElement('p')

//for em
if(value.isGood === 'true'){
    p1.innerText = 'No'
}else{
    p1.innerText = 'yes'
}


section.append(p1)// putting p1 in section

const em = document.createElement('em')
em.innerText = "Is naughty?"
p1.innerText = "yes!"
p1.append(em)

//button
const button = document.createElement('button')
//button.innerText = 'Good Dog!'
// 'value' is button value
const textValue = document.createElement('value')

if(value.isGoodDog === true){
    textValue.innerText = 'Good Dog'
}else{
    textValue.innerText = 'Bad Dog'
}
section.append(button)
button.append(textValue)

//for eventListner
button.addEventListener('click',() => {
    if(textValue.innerText === 'Good Dog!'){
        textValue.innerText = 'Bad Dog!'
        p1.innerText = 'yes!'
    }else{
        textValue.innerText= 'Good Dog!'
        p1.innerText = 'No!'
    }
})
})
})

// for the form
const addForm = document.querySelector('.dogs-list__button--add')

const newForm =document.querySelector('section')

addForm.addEventListener('click',()=>{
const toRemove = document.querySelectorAll('section > *')
toRemove.forEach(element => element.remove())


//for form title
const title = document.createElement('h2')
title.innerText = 'Add a new dog'
newForm.append(title)

//for form name
const form = document.createElement('form')
form.setAttribute('class','form')

// for new day name
const dogName = document.createElement('label')

dogName.setAttribute('for','name')
dogName.innerText = "Dog's name"
form.append(dogName)

const inputName =document.createElement('input')
inputName.setAttribute('type','text')
inputName.setAttribute('id','name')
inputName.setAttribute('name','name')

form.append(inputName)

// for dog image
const dogImage = document.createElement('label')
dogImage.setAttribute('for','image')
dogImage.innerText = "Dog's picture"
form.append(dogImage)

//for input image of dog
const inputImage =document.createElement('input')
inputImage.setAttribute('type','url')
inputImage.setAttribute('id','image')
inputImage.setAttribute('name','image')
form.append(inputImage)

//for dog bio
const dogBio = document.createElement('label')
dogBio.setAttribute('for','bio')
dogBio.innerText = "Dog's bio"
form.append(dogBio)


//for textarea
const textarea =document.createElement('textarea')
textarea.setAttribute('rows','5')
textarea.setAttribute('id','bio')
textarea.setAttribute('name','bio')
textarea.style.background = 'lightgrey'
form.append(textarea)


//input submit

const submit = document.createElement('input')
submit.setAttribute('type','submit')
submit.setAttribute('id','submit')
submit.setAttribute('name','submit')
submit.setAttribute('value',`let's add a dog`)
submit.setAttribute('class','form__button')
form.append(submit)


newForm.append(form)
})