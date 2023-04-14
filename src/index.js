console.log(data);

// WRITE YOUR CODE BELOW!

// render the top nav bar with the list of the dog's names
    // create a variable to loop through data

    // to render this I want to loop through the data file and look up the dog name property
    // create a li element that will have that dog's name
    // no need to create ul since we have that in the html
    // give it a class "dogs-list__button" to get some CSS
    // append the li to the ul


const makeDogList = () => {    
for (i = 0; i < data.length; i++) {
    // making the dog list buttons
        const dogInfo = data[i];
        const ul = document.querySelector('ul')
        const li = document.createElement('li');
        li.innerText = dogInfo.name;
        li.setAttribute("class", "dogs-list__button");
        ul.append(li);
        const id = dogInfo.id;
        li.setAttribute("id", id)
        
// listen for click
        li.addEventListener('click', function () {

// --- MAIN CARD ---

// find the right section
        const main = document.querySelector('main');
// clear the card
        main.innerHTML = "";
// make the section
        const section = document.createElement('section');
        section.setAttribute("class", "main__dog-section")
        main.append(section)
        
        // make the h2
            const h2 = document.createElement('h2')
            // change the h2 inner text to the dog's name
            const dogName = dogInfo.name
            h2.innerText = dogName
            // append h2
            section.append(h2);

        // make the dog img
            const img = document.createElement('img')
            img.src = dogInfo.image
            img.setAttribute("alt", "")
            // img styling size
            img.style.height = "400px"; 
            img.style.width = "450px";
            // append to the card
            section.append(img)

        // make div
            const div = document.createElement('div')
            div.setAttribute('class', 'main__dog-section__desc')
            section.append(div)
            // make h3
                const h3 = document.createElement('h3')
                h3.innerText = 'Bio'
                div.append(h3)
            // make p
                const p = document.createElement('p')
                p.innerText = dogInfo.bio
                div.append(p)
    })
}
}
// when page loads - run this
// when submit refreshes the list, don't run
makeDogList(data)



// 1 - When the plus button is clicked, it should replace the main card 
// with a form to add a new dog to the list. You'll find a template for 
// the form on the HTML page. 

// --- CLICKING PLUS ---

// find plus button
    const plusButton = document.querySelector('.dogs-list__button--add')
// click event for + button    
    plusButton.addEventListener('click', function() {

// when clicked
    // find main
        const main = document.querySelector('main');
    // clear section
        main.innerHTML = "";
    // make new section
        const section = document.createElement('section');
        section.setAttribute("class", "main__dog-section")
        main.append(section)
    //make the h2
        const h2 = document.createElement('h2')        
    // change the h2 inner text to Add a new Dog
        h2.innerText  = "Add a new dog"
    // append h2
        section.append(h2);
    
// make new form
    //form
        const form = document.createElement('form')
        form.setAttribute('class', 'form')
        section.append(form)
        // label - dog's name
            const newDogName = document.createElement('label')
            newDogName.setAttribute('for', 'name')
            newDogName.innerText = "Dog's name"
            form.append(newDogName)
        //input id=name
            const inputName = document.createElement('input')
            inputName.setAttribute('type', 'text')
            inputName.setAttribute('id', 'name')
            inputName.setAttribute('name', 'name')
            form.append(inputName)
        //label for=image
            const newDogImgLabel = document.createElement('label')
            newDogImgLabel.setAttribute('for', 'image')
            newDogImgLabel.innerText = "Dog's picture"
            form.append(newDogImgLabel)
        // input image
            // input 
            const newDogImgInput = document.createElement('input')
            newDogImgInput.setAttribute('type', 'url')
            newDogImgInput.setAttribute('id', 'image')
            newDogImgInput.setAttribute('name', 'image')
            form.append(newDogImgInput)
        //label for=bio
            const newDogBio = document.createElement('label')
            newDogBio.setAttribute('for', 'bio')
            newDogBio.innerText = "Dog's Bio"
            form.append(newDogBio)
        //textarea
            const newDogBioTextArea = document.createElement('textarea')
            newDogBioTextArea.setAttribute('rows', '5')
            newDogBioTextArea.setAttribute('id', 'bio')
            newDogBioTextArea.setAttribute('name', 'bio')
            form.append(newDogBioTextArea)
        //input - submit
            const newDogSubmit = document.createElement('input')
            newDogSubmit.setAttribute('type','submit')
            newDogSubmit.setAttribute('id','submit')
            newDogSubmit.setAttribute('name','submit')
            newDogSubmit.setAttribute('value',"Let's add a dog!")
            newDogSubmit.setAttribute('class',"form__button")
            newDogSubmit.innerText = "Let's add a dog!"
            form.append(newDogSubmit);
       
// when submit is clicked:
// 1 - read the info from form
// 2 - make an new object
// 3 - put info from form into object
// 4 - put object into array


// create a click event targeting the submit button
// prevent the browser refreshing on submit
            form.addEventListener('submit', (event) => {
                event.preventDefault()
            })
            // create var for form - queryselector
            const newForm = document.querySelector('form')
            // create vars for each form element - queryselector

// check where the info is being stored in the browser
            function handleSubmit(event) {
                // this targets the dog's name input value
                console.log('name:', event.target.name.value)
                console.log('image:', event.target.image.value)
                console.log('bio:', event.target.bio.value)
// create a new object 
    // template of data array objects
                const newDogData = {
                    id: '',
                    name: event.target.name.value,
                    bio: event.target.bio.value,
                    isGoodDog: true,
                    image: event.target.image.value,
                }
                console.log('new dog', newDogData)
                // unshift that new object into our existing array - data
                data.unshift(newDogData)
                console.log('data after unshift', data)
                
                // clear the list 
                const ul = document.querySelector('ul')
                ul.innerHTML= ''
                const refreshPlusButton = document.createElement('li')
                refreshPlusButton.setAttribute('class', 'dogs-list__button dogs-list__button--add')
                refreshPlusButton.innerText= '+'
                ul.append(refreshPlusButton)

                makeDogList(data)
            }
            newForm.addEventListener('submit', handleSubmit)   
    })







/*

2 - Once the form is submitted, add the new dog to the beginning of 
the list, right next to the plus button.
// create a click event targeting the submit button




// check where the info is being stored in the browser
    // click event that when submit is clicked add the new object to the array
// find a way to push use that information
// create a new object with that
// push that new object into our existing array - data



*/