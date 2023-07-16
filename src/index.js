
const dogButts = document.querySelector('.dogs-list')
const main = document.querySelector('.main')
const add = document.querySelector('.dogs-list__button--add')
const oldUl = document.querySelector('ul')

// DELETED AND INSTEAD RAN THE 'renderDogs FUNCTION AT START'
// for (let i = 0; i < data.length; i++) {
//     // Creates new li
//     const newDogButt = document.createElement('li')
    
//     // Stores each dog in dog var then adds class and name
//     const dog = data[i]
//     newDogButt.classList.add('dogs-list__button')
//     newDogButt.innerText = dog.name
    
//     // appends new li into our Ul
//     dogButts.append(newDogButt)
// }

add.addEventListener('click', () => {
    // First i will clear the main section
    main.innerHTML = ''
    
    // I will need to make a section with a h2 inside
    // and a form
    const section = document.createElement('section')
    section.classList.add('main__dog-section')
    const h2 = document.createElement('h2')
    h2.innerText = 'Add a new Dog'
    const form = document.createElement('form')
    form.classList.add('form')
    section.append(h2, form)
    
    // now i will need to create the content of the 
    // form and push them into it
    
    // so i need to create labels and inputs
    // with the correct attributes
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.innerText = "Dog's name"
    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'name')
    nameInput.setAttribute('name', 'name')
    form.append(nameLabel, nameInput)
    
    const imageLabel = document.createElement('label')
    imageLabel.setAttribute('for', 'image')
    imageLabel.innerText = "Dog's picture"
    const imageInput = document.createElement('input')
    imageInput.setAttribute('placeholder', 'This is hardcoded')
    imageInput.setAttribute('type', 'url')
    imageInput.setAttribute('id', 'image')
    imageInput.setAttribute('name', 'image')
    form.append(imageLabel, imageInput)
    
    const bioLabel = document.createElement('label')
    bioLabel.setAttribute('for', 'bio')
    bioLabel.innerText = "Dog's bio"
    const bioInput = document.createElement('input')
    bioInput.setAttribute('rows', '5')
    bioInput.setAttribute('id', 'bio')
    bioInput.setAttribute('name', 'bio')
    form.append(bioLabel, bioInput)
    
    // now to add the submit button
    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('id', 'submit')
    submit.setAttribute('name', 'submit')
    submit.setAttribute('value', "Let's add a dog!")
    submit.classList.add('form_button')
    form.append(submit)
    
    // now i need to create an eventlistener so that
    // it will take the information from the form and
    // add the new dog to the start of the list
    submit.addEventListener('click', (event) => {
        event.preventDefault()
        let newDog = {
            name: `${nameInput.value}`,
            isGoodDog: true,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg",
            bio: `${bioInput.value}`
        }
        data.unshift(newDog)
        renderDogs()
    })
    
    // now i will push it onto the main page
    main.append(section)
})


function renderDogs () {
    add.remove();
    oldUl.innerHTML = ''
    oldUl.insertAdjacentElement('afterbegin', add)
    // add.remove();
    // oldUl.innerHTML = ''
    // oldUl.append(add)
    for (let i = 0; i < data.length; i++) {
        // Creates new li
        const newDogButt = document.createElement('li')
        
        // Stores each dog in dog var then adds class and name
        const dog = data[i]
        newDogButt.classList.add('dogs-list__button')
        newDogButt.innerText = dog.name
        
        // appends new li into our Ul
        dogButts.append(newDogButt)
        
        // This will add event listener to each new li
        // Their index values will increase along with i
        newDogButt.addEventListener('click', () => {
            // First i will clear the main section
            main.innerHTML = ''
            
            // Now i will create a section element as well
            // as a h2 element with the dogs name and 
            // append the h2 into the section element
            const section = document.createElement('section')
            section.classList.add('main__dog-section')
            const h2 = document.createElement('h2')
            h2.innerText = dog.name
            section.append(h2)
            
            // i will create an img tag and set it's source
            // to the data's corresponding src
            const dogPic = document.createElement('img')
            dogPic.setAttribute('src', `${dog.image}`)
            section.append(dogPic)
            
            // now i will create a div to hold h3 and p
            // then push the div into the section
            const div = document.createElement('div')
            div.classList.add('main__dog-section__desc')
            const h3 = document.createElement('h3')
            h3.innerText = 'Bio'
            const dogBio = document.createElement('p')
            dogBio.innerText = dog.bio
            div.append(h3, dogBio)
            section.append(div)
            
            // now i will create a p tag and an em tag
            // then i will nest the em tag inside the p tag
            // then push them into the section
            const naughty = document.createElement('p')
            const em = document.createElement('em')
            const answer = document.createElement('p')
            naughty.append(em)
            em.innerText = 'Is naughty?'
            if (dog.isGoodDog === true) {
                answer.innerText = 'Yes!'
            }
            else {
                answer.innerText = 'No!'
            }
            naughty.append(answer)
            section.append(naughty)
            
            // now i will create a button for good and
            // bad dog to toggle between,
            // and have an eventlistener 
            // to change that value on click
            const button = document.createElement('button')
            if (dog.isGoodDog === true) {
                button.innerText = 'Good dog!'
            }
            else {
                button.innerText = 'Bad dog!'
            }
            button.addEventListener('click', () => {
                if (dog.isGoodDog === true) {
                    dog.isGoodDog = false
                }
                else if (dog.isGoodDog === false) {
                    dog.isGoodDog = true
                }
                if (dog.isGoodDog === true) {
                    button.innerText = 'Good dog!'
                    answer.innerText = 'Yes!'
                }
                else {
                    button.innerText = 'Bad dog!'
                    answer.innerText = 'No!'
                }
            })
            section.append(button)
            
            // Now to just append the section into the main
            main.append(section)
        })
    }
}
renderDogs()