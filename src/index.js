console.log(data);

// WRITE YOUR CODE BELOW!
const boom =() =>{
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
}
boom(data)
//for the form 
const addDog = () =>{
    const addForm = document.querySelector('.dogs-list__button--add')

    addForm.addEventListener('click', () => {
        //to remove evrything inside the section
        const toRemove = document.querySelectorAll('section > *')
        toRemove.forEach(element => element.remove())

        const newFormSection = document.querySelector('section')
        newFormSection.setAttribute("class", "main__dog-section")

        //form title
        const newDogHeader =  document.createElement('h2')
        newDogHeader.innerText = 'Add a new Dog'
        newFormSection.append(newDogHeader)

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
            const inputImage = document.createElement('input')
                inputImage.setAttribute('type','url')
                inputImage.setAttribute('id','image')
                inputImage.setAttribute('name','image')

            form.append(inputImage)

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

        newFormSection.append(form)

        
            //for the submit event of the form 
        form.addEventListener('submit',(event) => {
            event.preventDefault()
        })
        

        //for the new form to display in the add button
        const newForm = document.querySelector('form')

        function submitData(event)  {
            
            const newDogData = {
                id: '',
                name: event.target.name.value,
                bio: event.target.bio.value,
                isGoodDog: true,
                image: event.target.image.value,
            }
            data.unshift(newDogData)

            const ul = document.querySelector('ul')
            ul.innerHTML = ''

            const refreshPlusButton = document.createElement('li')
            refreshPlusButton.setAttribute('class', 'dogs-list__button dogs-list__button--add')
            refreshPlusButton.innerText = '+'
            ul.append(refreshPlusButton)
            // this is adding the plus button functionality again after first submission 
            addDog()
         

            boom(data)
            
        }
        newForm.addEventListener('submit', submitData)

            
    })

}

addDog()

