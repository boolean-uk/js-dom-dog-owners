
// WRITE YOUR CODE BELOW!
const dogListUl = document.querySelector('.dogs-list')
const mainDogSection = document.querySelector('.main__dog-section')

function RenderDogList() {    
    dogListUl.innerHTML = ''
    const addDogForum = document.createElement('li')
    addDogForum.setAttribute('class', 'dogs-list__button dogs-list__button--add')
    addDogForum.innerText = '+'
    addDogForum.addEventListener('click', (event) => AddForumOfDog())
    dogListUl.appendChild(addDogForum)

    for (let i = 0; i < data.length; i++) {
        const dogList = document.createElement('li')
        dogList.setAttribute('class', 'dogs-list__button')
        dogList.innerText = data[i].name
        dogList.addEventListener('click', (event => RenderMainDogCard(data[i])))
        dogListUl.appendChild(dogList)
    }
}

function RenderMainDogCard(dog) {        
    mainDogSection.innerHTML = ''
    
    const h2 = document.createElement('h2')
    h2.innerText = dog.name

    const image = document.createElement('img')
    image.setAttribute('src', dog.image)
    image.setAttribute('alt', '')

    const div = document.createElement('div')
    div.setAttribute('class', 'main__dog-section__desc')
    const h3 = document.createElement('h3')
    h3.innerText = "Bio"
    const pText = document.createElement('p')
    pText.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!"
    div.appendChild(h3)
    div.appendChild(pText)

    const pText2 = document.createElement('p')
    const button = document.createElement('button')
    if (dog.isGoodDog) {
        button.innerText = 'Good dog!'
        pText2.innerText = "Is naughty? no!"
    }
    else {
        button.innerText = 'Bad dog'
        pText2.innerText = "Is naughty? yes!"
    }

    button.addEventListener('click', (event) => {
        dog.isGoodDog = !dog.isGoodDog

        if (dog.isGoodDog) {
            button.innerText = 'Good dog!'
            pText2.innerText = "Is naughty? no!"
        }
        else {
            button.innerText = 'Bad dog'
            pText2.innerText = "Is naughty? yes!"
        }
    })

    mainDogSection.appendChild(h2)
    mainDogSection.appendChild(image)
    mainDogSection.appendChild(div)
    mainDogSection.appendChild(pText2)
    mainDogSection.appendChild(button)
}

function SubmitNewDog() {
}

function AddForumOfDog() {
    mainDogSection.innerHTML = ''

    const h2 = document.createElement('h2')
    const form = document.createElement('form')
    form.setAttribute('class', 'form')

    const label = document.createElement('label')
    label.setAttribute('for', 'name')
    label.innerText = "Dog's name"
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'name')
    input.setAttribute('name', 'name')

    const label2 = document.createElement('label')
    label2.setAttribute('for', 'image')
    label2.innerText = "Dog's picture"
    const input2 = document.createElement('input')
    input2.setAttribute('type', 'url')
    input2.setAttribute('id', 'image')
    input2.setAttribute('name', 'image')

    const label3 = document.createElement('label')
    label3.setAttribute('for', 'bio')
    label3.innerText = "Dog's bio"
    const textarea = document.createElement('textarea')
    textarea.setAttribute('rows', '5')
    textarea.setAttribute('id', 'bio')
    textarea.setAttribute('name', 'bio')

    const input3 = document.createElement('input')
    input3.setAttribute('type', 'submit')
    input3.setAttribute('id', 'submit')
    input3.setAttribute('name', 'submit')
    input3.setAttribute('value', "Let's add another dog!")
    input3.setAttribute('class', 'form__button')
    
    form.addEventListener('submit', (event) => {
        const obj = 
        {
            id: 1,
            name: input.value,
            bio: textarea.value,
            isGoodDog: true,
            image: input2.value
        }
        
        data.unshift(obj)
        RenderDogList()
    })

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(label2)
    form.appendChild(input2)
    form.appendChild(label3)
    form.appendChild(textarea)
    form.appendChild(input3)

    mainDogSection.appendChild(h2)
    mainDogSection.appendChild(form)
}

function main() {
    RenderDogList()
}

main()