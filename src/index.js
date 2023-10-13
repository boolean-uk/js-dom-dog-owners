console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector('header > ul')

//for loop
    data.forEach((dog) => {
    
//for header doglist
        const newList = document.createElement('li')
            newList.setAttribute('class','dogs-list__button')
            newList.innerText = dog.name
            dogList.append(newList)

            //for eventlistener
            newList.addEventListener('click',() => {

                //section
                const section = document.querySelector('section')
                

                //to remove
                const details = document.querySelectorAll('section > *')
               
                details.forEach(element => element.remove())


                //name
                const dogName = document.createElement('h2')
                dogName.innerText = dog.name
                section.append(dogName)


                //for image
                const dogImage = document.createElement('img')
                dogImage.setAttribute('src',`${dog.image}`)
                dogImage.setAttribute('width','400px')
                dogImage.setAttribute('height','400px')
                section.append(dogImage)

                //for div
                const div = document.createElement('div')
                div.setAttribute('class','main__dog-section__desc')
                section.append(div)

                    //for bio-h3 inside div
                    const bio = document.createElement('h3')
                    bio.innerText = 'Bio'
                    div.append(bio)

                    //for bio
                    const biodetails = document.createElement('p')
                    biodetails.innerText = `${dog.bio}`
                    div.append(biodetails)
                
                //for em text
                const doggieStatus = document.createElement('p')
                
                    if(dog.isGoodDog === true){
                        doggieStatus.innerText = 'Yes!'
                    }else{
                        doggieStatus.innerText = 'No!'
                    
                    }
                    const em = document.createElement('em')
                    em.innerText = 'Is naughty?'
                    doggieStatus.append(em)
                    section.append(doggieStatus)


                //for button
                const button = document.createElement('button')
                const textButton = document.createElement('value')
                if(dog.isGoodDog === true){
                    textButton.innerText = 'Bad Dog!'     
                 }else {
                    textButton.innerText = 'Good Dog!'     
                 }
                 section.append(button)
                 button.append(textButton)

                 //for button eventlistener
                 button.addEventListener('click',() => {
                    if(textButton.innerText === 'Bad Dog!'){
                        textButton.innerText = 'Good Dog!'
                        doggieStatus.innerText = 'No!'
                        
                    }else {
                        textButton.innerText = 'Bad Dog!'
                        doggieStatus.innerText = 'Yes!'
                    }
                    doggieStatus.append(em)
                    })
            });
        
    });
   
//for the form 
const addForm = document.querySelector('.dogs-list__button--add')

const newForm = document.querySelector('section')

addForm.addEventListener('click', () => {
    //to remove evrything inside the section
    const toRemove = document.querySelectorAll('section > *')
    toRemove.forEach(element => element.remove())

    //form title
    const newDogHeader =  document.createElement('h2')
    newDogHeader.innerText = 'Add a new Dog'
    newForm.append(newDogHeader)

    //for form name
    const form = document.createElement('form')
    form.setAttribute('class','form')

        //for new dog name 
        const dogName = document.createElement('label')
            dogName.setAttribute('for','name')
            dogName.innerText ="Dog's name"

        form.append(dogName)

        //for input name of the dog
        const inputName = document.createElement('input')
            inputName.setAttribute('type','text')
            inputName.setAttribute('id','name')
            inputName.setAttribute('name','name')

        form.append(inputName)

        //for dog image
        const dogImage = document.createElement('label')
            dogImage.setAttribute('for','image')
            dogImage.innerText ="Dog's picture"
        form.append(dogImage)
        
        //for input image of dog
        const inputimage = document.createElement('input')
            inputimage.setAttribute('type','url')
            inputimage.setAttribute('id','image')
            inputimage.setAttribute('name','image')

        form.append(inputimage)

        //for dog bio
        const dogBio = document.createElement('label')
            dogBio.setAttribute('for','bio')
            dogBio.innerText ="Dog's bio"

        form.append(dogBio)

        //for  text area
        const textArea = document.createElement('textarea')
            textArea.setAttribute('rows','5')
            textArea.setAttribute('id','bio')
            textArea.setAttribute('name','bio')
        form.append(textArea)


        //input submit
        const submit = document.createElement('input')
        submit.setAttribute('type','submit')
        submit.setAttribute('id','submit')
        submit.setAttribute('name','submit')
        submit.setAttribute('value',`Let's add a dog!`)
        submit.setAttribute('class','form__button')

        form.append(submit)

        form.addEventListener('submit',event =>{
            event.preventDefault();

            const newDog =   {
                id: 0,
                name: "",
                bio: ``,
                isGoodDog: true,
                image: ""
              }
            data.unshift(newDog)
        
            newDog.name = form.querySelector('input[id="name"]').value
            newDog.image = form.querySelector('input[id="image"]').value
            newDog.bio = form.querySelector('textarea[id="bio"]').value

            
        })
    newForm.append(form)
})



