console.log(data);

const main = document.querySelector('.main')

for (let i = 0; i < data.length; i++) {
    const dogsUl = document.querySelector('.dogs-list')
    const dogNameList = document.createElement('li')
    //make each li a link +/or add event listener
    dogNameList.setAttribute('class', 'dogs-list__button')
    dogNameList.setAttribute('id', i)
    dogNameList.innerText = data[i].name
    dogsUl.append(dogNameList)

    dogNameList.addEventListener('click', function (eventObj) {
        console.log(eventObj.target.id)
        const mainSection = document.createElement('section')
        mainSection.setAttribute('class', 'main__dog-section')

        const dogCard = createDogCard(eventObj.target.id)

    });
}

function createDogCard(dogData) {
    //select area
    const dogCards = document.querySelector('section')
    console.log(dogCards)
    dogCards.innerText = ''
    const dogH2 = document.createElement('h2')
    dogH2.innerText = data[dogData].name
    dogCards.append(dogH2)
    console.log(dogH2)


    //Adding an Image
    const dogImg = document.querySelector('.main__dog-section')
    const dogImage = document.createElement('img')
    dogImage.setAttribute('type', 'url')
    const dogProfilePic = new Image(256)
    dogProfilePic.src = data[dogData].image;
    dogImg.append(dogProfilePic)

    // creating the div for whole bio section
    const bioInfo = document.createElement('div')
    bioInfo.setAttribute('class', 'main__dog-section__desc')
    dogCards.append(bioInfo)


    //Adding the Bio
    const dogBioSection = document.querySelector('.main__dog-section__desc')

    const dogBio = document.createElement('h3')
    dogBio.innerText = 'Bio'
    bioInfo.append(dogBio)

    //Adding bioInfo
    const dogBioInfo = document.createElement('p')
    dogBioInfo.innerText = data[dogData].bio
    bioInfo.append(dogBioInfo)

    //Is a good dog? 
    // create the function for the true or false
    const goodDog = document.createElement('p')
    goodDog.innerText = `is naugthy? ${data[dogData].isGoodDog}`
    dogCards.append(goodDog)


    // try to make some space
    const newButton = document.createElement('button')
    newButton.innerText = `Good Dog`
    dogCards.append(newButton)

}

// !!!!!!!!!!!!!!!!!!!create the form !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//remove everything when + button is clicked. can reuse some code from above


//create the form 

// function addANewDog() {

const addDogFormSection = document.createElement('section')
addDogFormSection.setAttribute('class', 'main__dog-section')
addDogFormSection.innerText = ''
main.append(addDogFormSection)
// }
const formH2 = document.createElement('h2')
formH2.innerText = 'Add a new Dog'
addDogFormSection.append(formH2)

const formForm = document.createElement('form')
formForm.setAttribute('class', 'form')
addDogFormSection.append(formForm)


//INPUT STUFF
function addNewDogForm() {

    const formLabelName = document.createElement('label')
    formLabelName.setAttribute('for', 'name')
    const formInputName = document.createElement('input')
    formLabelName.setAttribute('type', 'text')
    formLabelName.setAttribute('id', 'name')
    formLabelName.setAttribute('name', 'name')

    const formLabelImg = document.createElement('label')
    formLabelImg.setAttribute('for', 'image')
    const formInputImg = document.createElement('input')
    formLabelImg.setAttribute('type', 'url')
    formLabelImg.setAttribute('id', 'image')
    formLabelName.setAttribute('name', 'image')

    const formLabelBio = document.createElement('label')
    formLabelBio.setAttribute('for', 'bio')
    const formInputBio = document.createElement('input')
    formLabelBio.setAttribute('textarea rows', '5')
    formLabelBio.setAttribute('id', 'bio')
    formLabelBio.setAttribute('name', 'bio')

    //submit button (remove default function so it doesn't refresh the page)
    const submitNewDogButton = document.createElement('button')
    submitNewDogButton.setAttribute('class', 'form__button')
    submitNewDogButton.setAttribute('id', 'submit')
    submitNewDogButton.setAttribute('type', 'submit')
    submitNewDogButton.setAttribute('name', 'submit')
    submitNewDogButton.setAttribute('value', 'Lets add a dog!')

    //Appending our input stuff
    formForm.append(formLabelName, formLabelImg, formLabelBio, submitNewDogButton)
    // formForm.append(formLabelName)

}

formForm.append(addNewDogForm())


dogNameList.addEventListener('click', function (eventObj) {
    main.innerText = ''
    addNewDogForm(eventObj.target.id)
})


//function to add a new dog to LI section from pt 1 