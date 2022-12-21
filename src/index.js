console.log(data);

// WRITE YOUR CODE BELOW!

let currentid = 0
const list = document.querySelector('.dogs-list')
const main = document.querySelector('main')
const add = document.querySelector('.dogs-list__button--add')
const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!'

const isNaughty = (dog) => {
    return dog.isGoodDog ? 'No!' : 'Yes!'
}

const getButtonText = (dog) => {
    return dog.isGoodDog ? 'Bad Dog' : 'Good Dog'
}

const updateP = (str) => {
    const p = document.querySelector('section > p')
    p.innerText = ''
    const em = document.createElement('em')
    em.innerText = 'Is naugthy? '
    p.append(em)
    p.append(str)
}

const updateButton = (e) => {
    if (data[currentid].isGoodDog === true) {
        data[currentid].isGoodDog = false
        e.target.innerText = 'Good Dog'
        updateP(isNaughty(data[currentid]))
    } else if (data[currentid].isGoodDog === false) {
        data[currentid].isGoodDog = true
        e.target.innerText = 'Bad Dog'
        updateP(isNaughty(data[currentid]))
    }
}

const createDogSection = (dog) => { 
    const section = document.createElement('section')
    section.setAttribute('class', 'main__dog-section')

    const h2 = document.createElement('h2')
    h2.innerText = dog.name
    section.append(h2)

    const img = document.createElement('img')
    img.setAttribute('src', dog.image)
    section.append(img)

    const desc = document.createElement('div')
    desc.setAttribute('class', 'main__dog-section__desc')
    section.append(desc)

    const h3 = document.createElement('h3')
    h3.innerText = 'Bio'
    desc.append(h3)

    const pdesc = document.createElement('p')
    pdesc.innerHTML = lorem
    desc.append(pdesc)

    const em = document.createElement('em')
    em.innerText = 'Is naugthy? '
    const p = document.createElement('p')
    p.append(em)
    p.append(isNaughty(dog))
    section.append(p)

    const button = document.createElement('button')
    button.addEventListener('click', (e) => {
        updateButton(e) 
    })
    button.innerText = getButtonText(dog)
    section.append(button)

    main.append(section)
}

const addDogsToList = (data) => {
    let i = 0
    data.forEach(element => {
        const li = document.createElement('li')
        li.setAttribute('class', 'dogs-list__button')
        li.setAttribute('id', i)
        li.addEventListener('click', (e) => {
            displayDog(e)
        })
        li.innerText = element.name
        list.append(li)
        i++
    });
}

const displayDog = (e) => {
    const section = document.querySelector('section')
    section.remove()
    console.log(e.target.id)
    createDogSection(data[e.target.id])
    currentid = e.target.id
}

addDogsToList(data)

console.log(add)