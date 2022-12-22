console.log(data);

// WRITE YOUR CODE BELOW!

let currentid = 0
const list = document.querySelector('.dogs-list')
const main = document.querySelector('main')
const add = document.querySelector('.dogs-list__button--add')

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
    pdesc.innerHTML = dog.bio
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
    list.innerText = ''
    const addli = document.createElement('li')
    addli.setAttribute('class', 'dogs-list__button dogs-list__button--add')
    addli.innerText = '+'
    addli.addEventListener('click', () => {
        addNewDog()
    })
    list.append(addli)

    let i = 0
    data.forEach(element => {
        const li = document.createElement('li')
        li.setAttribute('class', 'dogs-list__button')
        li.setAttribute('id', i)
        li.addEventListener('click', (e) => {
            displayDog(e.target.id)
        })
        li.innerText = element.name
        list.append(li)
        i++
    });
}

const displayDog = (id) => {
    const section = document.querySelector('section')
    section.remove()
    console.log(id)
    createDogSection(data[id])
    currentid = id
}

const addNewDog = () => {
    // Clear section 
    const section = document.querySelector('section')
    section.innerText = ''

    // Build new section
    const h2 = document.createElement('h2')
    h2.innerText = 'Add a new Dog'
    section.append(h2)

    const form = document.createElement('form')
    form.setAttribute('class', 'form')
    section.append(form)

    const namelable = document.createElement('label')
    namelable.setAttribute('for', 'name')
    namelable.innerText = `Dog's name`
    form.append(namelable)
    const nameinput = document.createElement('input')
    nameinput.setAttribute('type', 'text')
    nameinput.setAttribute('id', 'name')
    nameinput.setAttribute('name', 'name')
    nameinput.setAttribute('required', '')
    form.append(nameinput)

    const imagelable = document.createElement('label')
    imagelable.setAttribute('for', 'image')
    imagelable.innerText = `Dog's picture`
    form.append(imagelable)
    const imageinput = document.createElement('input')
    imageinput.setAttribute('type', 'url')
    imageinput.setAttribute('id', 'image')
    imageinput.setAttribute('name', 'image')
    imageinput.setAttribute('required', '')
    form.append(imageinput)

    const biolabel = document.createElement('label')
    biolabel.setAttribute('for', 'bio')
    biolabel.innerText = `Dog's bio`
    form.append(biolabel)
    const bioinput = document.createElement('textarea')
    bioinput.setAttribute('rows', '5')
    bioinput.setAttribute('id', 'bio')
    bioinput.setAttribute('name', 'bio')
    bioinput.setAttribute('required', '')
    form.append(bioinput)

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('id', 'submit')
    submit.setAttribute('name', 'submit')
    submit.setAttribute('value', `Let's add a dog!`)
    submit.setAttribute('class', 'form__button')
    form.append(submit)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const pushObj = {
            id: data.length + 1,
            name: nameinput.value,
            bio: bioinput.value,
            isGoodDog: true,
            image: imageinput.value
        }
        data.push(pushObj)
        addDogsToList(data)
        displayDog(data.length-1)
    })
}

addDogsToList(data)
