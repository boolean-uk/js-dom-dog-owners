console.log(data);

// WRITE YOUR CODE BELOW!
const doglist = document.querySelector('ul')
const dogcard = document.querySelector('.main__dog-section')

for (let i = 0; i < data.length; i++) {
    const name = data[i].name
  const dognames = document.createElement('li')
  dognames.setAttribute('class', 'dogs-list__button')
  doglist.append(dognames)
  dognames.innerText = name
}
function dog_1(index) {
    const div1 = document.createElement('div')
    div1.setAttribute('class', '.main__dog-section__desc')
    div1
   const name1 = document.querySelector('h2')
   name1.innerText = data[index].name
   dogcard.append(name1)
   const img1 = document.createElement('img')
   img1.setAttribute('src', data[index].image)
   dogcard.append(img1)
   const bio = document.createElement('h3')
   bio.innerText = 'bio'
   const para = document.createElement('p')
   para.innerText = data[index].bio
   dogcard.append(div1)
   div1.append(bio)
   div1.append(para)

   const isGoodDog = document.createElement('Boolean')

}
dog_1(0)