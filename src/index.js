console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector('.dogs-list')

const section = document.querySelector('.main__dog-section')
const image = document.createElement('img')

const div = document.createElement('div')
const dogName = document.querySelector('h2')
const bioTitle = document.createElement('h3')
const desc = document.createElement('p')
const isNaughty = document.createElement('p')
const isNaughtyEm = document.createElement('em')
const goodDog = document.createElement('button')



data.forEach(dog => {
    const dogSelect = document.createElement('li')
    dogSelect.className = 'dogs-list__button'
    dogSelect.innerText = dog.name

    dogSelect.addEventListener('click', listener => {
        
        if (dog.goodDog) {
            isNaughtyEm.innerText = 'Yes!'
        } else {
            isNaughtyEm.innerText = 'No!'
        }

        dogName.innerText = dog.name
        image.src = dog.image
        desc.innerText = dog.bio
        isNaughty.innerText = 'Is naughty? '
        goodDog.innerText = 'Good Dog'

        div.append(bioTitle, desc)
        isNaughty.append(isNaughtyEm, goodDog)
        section.append(image, div, isNaughty, goodDog)
    })
  
    goodDog.addEventListener('click', listener => {
        if (dog.goodDog) {
            dog.goodDog = false
            goodDog.innerText = 'Good Dog'
        } else {
            dog.goodDog = true
            goodDog.innerText = 'Bad Dog'
        }
    })
    
    



    dogList.append(dogSelect)
});