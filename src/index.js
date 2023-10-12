// WRITE YOUR CODE BELOW!

// LIST OF DOGGOS
const dogList = document.querySelector('header > ul');

// CREATE HEADER DOGGO LIST
const dogListItem = data.forEach(dog => {
    const dogListCard = document.createElement('li');
    dogListCard.innerText = dog.name;
    dogList.append(dogListCard);

    dogListCard.setAttribute('class', 'dogs-list__button ');

    // CLICK EVENT LISTENER FUNCTION
    dogListCard.addEventListener('click', () => {

        // DEFINE SECTION TO APPEND TO
        const dogDisplayCard = document.querySelector('section');

        // REMOVE PREVIOUS DETAILS ON CLICK
        const dogDisplayDetails = document.querySelectorAll('section > *');
        dogDisplayDetails.forEach((element) => element.remove());

        // ADD NAME
        const dogDisplayName = document.createElement('h2');
        dogDisplayName.innerText = dog.name;
        dogDisplayCard.append(dogDisplayName);
           
        // ADD PHOTO
        const dogDisplayImage = document.createElement('img');
        dogDisplayImage.src = dog.image;
        dogDisplayImage.alt = `${dog.name} photo`;
        dogDisplayImage.width = '420';
        dogDisplayImage.height = '420';
        dogDisplayCard.append(dogDisplayImage);

        // ADD BIO  
        const bioHeader = document.createElement('h3');
        bioHeader.innerText = 'Bio';
        dogDisplayCard.append(bioHeader);

        const dogDisplayBio = document.createElement('p');
        dogDisplayBio.innerText = dog.bio;
        dogDisplayCard.append(dogDisplayBio);

        // MAIN SECTION BOTTOM
        const dogDisplayBottom = document.createElement('div');
        dogDisplayBottom.setAttribute('class', 'main__dog-section__btn');
        
        // ADD GOOD OR BAD BOI
        const question = (dog) => {
            const questionString = document.createElement('p');
            questionString.setAttribute('class', 'main__dog-section__desc');
    
            const em = document.createElement('em'); 
            em.innerText = 'is good boi?';
    
            const checkIfGood = (dog) => {
                let yesOrNo = '';
                if (dog.isGoodDog) {
                    yesOrNo = ' Yes!';
                }
                else {
                    yesOrNo = ' No';
                }
                return yesOrNo;
            }
            questionString.append(em, checkIfGood(dog));
            return questionString;
        }
            dogDisplayBottom.append(question(dog));
     
        // ADD GOOD/BAD BOI BUTTON
        const button = (dog) => {
            const buttonElement = document.createElement('button');
            const goodBoiButtonText = document.createElement('p');
    
            if (dog.isGoodDog) {
                goodBoiButtonText.innerText = 'Bad Doggo';
                dog.isGoodDog = false;
            }
            else {
                goodBoiButtonText.innerText = 'Good Doggo';
                dog.isGoodDog = true;
            }
            buttonElement.append(goodBoiButtonText);
            
            return buttonElement;
        }
        const goodBoiButton = button(dog);
        dogDisplayBottom.append(goodBoiButton);

        // APPEND BOTTOM DISPLAY TO CARD
        dogDisplayCard.append(dogDisplayBottom);

        // CHANGE BUTTON DISPLAY ON CLICK
        goodBoiButton.addEventListener('click', () => {

        const dogDisplayBottomContent = dogDisplayBottom.querySelectorAll('div > *');

            if (dog.isGoodDo) {
                dogDisplayBottomContent.forEach((element) => element.remove());
                dogDisplayBottom.append(question(dog), button(dog));
            }       
            else  {
                dogDisplayBottomContent.forEach((element) => element.remove());
                dogDisplayBottom.append(question(dog), button(dog));
            }
        })
    })
})


// FORM
const addDog = document.querySelector(".dogs-list__button--add");
const formContainer = document.querySelector("section");
const formHeader = document.createElement("h2");
const form = document.createElement("form");

addDog.addEventListener("click", () => {
    // REMOVE PREVIOUS DETAILS
    const dogDisplayDetails = document.querySelectorAll("section > *");
    dogDisplayDetails.forEach((element) => element.remove());

    // ADD HEADER
    formHeader.innerText = "Add a new Dog";
    formContainer.append(formHeader);

    // ADD MAIN FORM
    formContainer.append(form);
    form.setAttribute("class", "form");

    // FORM NAME
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");

    nameLabel.innerText = "Dog's name";
    nameLabel.setAttribute("for", "name");
    form.append(nameLabel);

    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    form.append(nameInput);

    // FORM PHOTO
    const photoLabel = document.createElement("label");
    const photoInput = document.createElement("input");

    photoLabel.innerText = "Dog's photo";
    photoLabel.setAttribute("for", "image");
    form.append(photoLabel);

    photoInput.setAttribute("type", "url");
    photoInput.setAttribute("id", "image");
    photoInput.setAttribute("name", "image");
    form.append(photoInput);

    // FORM BIO
    const bioLabel = document.createElement("label");
    const bioTextarea = document.createElement("textarea");

    bioLabel.innerText = "Dog's Bio";
    bioLabel.setAttribute("for", "bio");
    form.append(bioLabel);

    bioTextarea.setAttribute("rows", "5");
    bioTextarea.setAttribute("id", "bio");
    bioTextarea.setAttribute("name", "bio");
    form.append(bioTextarea);

    // FORM SUBMIT BUTTON
    const submitInput = document.createElement("input");

    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("id", "submit");
    submitInput.setAttribute("name", "submit");
    submitInput.setAttribute("value", "Let's add a dog");
    submitInput.setAttribute("class", "form__button");
    form.append(submitInput);
})