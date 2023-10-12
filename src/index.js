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

            if (dog.isGoodDo === true) {
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
