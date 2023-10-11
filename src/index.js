//console.log(data);

// WRITE YOUR CODE BELOW!
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const HeaderUl = document.querySelector('.dogs-list')


data.forEach((dogDetails) =>{

    const dogNameButton = document.createElement('li')

    dogNameButton.setAttribute('class', 'dogs-list__button')

    dogNameButton.innerText = dogDetails.name
    
    HeaderUl.append(dogNameButton)


})




data.forEach((dog) =>{
    const dogSection = document.createElement('section')
    dogSection.setAttribute('class', 'main__dog-section')
    main.append(dogSection)

    const dogName = document.createElement('h2')
    dogName.innerText = dog.name
    dogSection.append(dogName)

    const dogImage = document.createElement('img')
    dogImage.src = dog.image
    dogSection.append(dogImage)

    const dogDescription = document.createElement('div')
    dogDescription.setAttribute('class','main__dog-section__desc' )
    dogSection.append(dogDescription)

    const bio = document.createElement('h3')
    bio.innerText = 'Bio'
    dogDescription.append(bio)

    const aboutDog = document.createElement('p')
    aboutDog.innerText = dog.bio
    dogDescription.append(aboutDog)

    const dogQuestion = document.createElement('p')
    dogSection.append(dogQuestion)

    const dogBehavior = dog.isGoodDog

    const button = document.createElement('button')
    dogSection.append(button)


    
if( dogBehavior === true){
    button.innerText = 'Good dog!'
    dogQuestion.innerHTML = '<em>is naughty?</em> No!';

}
else{
    button.innerText = 'Bad dog!'
    dogQuestion.innerHTML = '<em>is naughty?</em> Yes!';

}

 dogSection.style.display ='none' 
 

})

const dogNamebuttons = document.querySelectorAll('.dogs-list__button')
const dogSection = document.querySelectorAll('.main__dog-section')
const addDog = document.querySelector('.dogs-list__button--add')

dogNamebuttons.forEach((dogName, index) =>{
    dogName.addEventListener ('click', () =>{
        if(dogSection[index].style.display === 'none' ){
            dogSection[index].style.display = 'block'
            dogSection[0].style.display ='none'
           
        }
     
    }) 

     dogName.addEventListener( 'mouseout',  () =>{
        if(dogSection[index].style.display === 'block' ){
            dogSection[index].style.display = 'none'
            dogSection[0].style.display ='block'
            
        }
    }) 
    
})

