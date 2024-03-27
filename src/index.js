
// WRITE YOUR CODE BELOW!

const dogsList = document.querySelector('.dogs-list')
const mainList = document.querySelector('.main')

for(let i = 0; i < data.length; i++){

    const dogs = document.createElement('li')
    dogs.classList.add('dogs-list__button')

    dogs.innerText = data[i].name
    dogsList.append(dogs)

    dogs.addEventListener('click',() => {
        mainList.innerHTML = ''
        const dogsCards = document.createElement('section')
        dogsCards.classList = 'main__dog-section'
        mainList.append(dogsCards)
        
        const h2 =  document.createElement('h2')
        h2.innerText = data[i].name
        dogsCards.append(h2)

        //image
        const image = document.createElement('img')
        image.setAttribute('src', data[i].image)
        dogsCards.append(image)

        const bio = document.createElement('h3')
        bio.innerText = 'Bio'
        dogsCards.append(bio)

        const bioInfo = document.createElement('p')
        bioInfo.innerText = data[i].bio
        dogsCards.append(bioInfo)

        const naughty = document.createElement('p')
        naughty.innerText = `Is naughty? ${data[i].isGoodDog}`
        naughty.style.fontStyle = 'italic'
        dogsCards.append(naughty)

        const goodDog =  document.createElement('button')
        goodDog.classList = 'form-button'
        goodDog.innerText = 'Good dog!'

        const badDog = document.createElement('button')
        badDog.classList = 'form-button'
        badDog.innerText = 'Bad dog!'


        if (data[i].isGoodDog === true){
            dogsCards.append(goodDog)
        } else {
            dogsCards.append(badDog)
        }
    })


}