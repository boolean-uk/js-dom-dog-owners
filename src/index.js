console.log(data);

// WRITE YOUR CODE BELOW!
const doglist = document.querySelector('ul')
const dogcard = document.querySelector('.main__dog-section')
const div1 = document.querySelector('.main__dog-section__desc')

function removeothercards() {
    dogcard.innerHTML = '<h2> </h2>'
    
}

for (let i = 0; i < data.length; i++) {
  const name = data[i].name
  const dognames = document.createElement('li')
  dognames.setAttribute('class', 'dogs-list__button')
  doglist.append(dognames)
  dognames.innerText = name
  dognames.addEventListener('click', function(){
    removeothercards()
    dog_1(i)
  }) 
}
function dog_1(index) {
  
  const name1 = document.querySelector('h2')
  name1.innerText = data[index].name
  dogcard.append(name1)

  const img1 = document.createElement('img')
  img1.setAttribute('src', data[index].image)
  dogcard.append(img1)

  const div1 = document.createElement('div')
  div1.setAttribute('class', 'main__dog-section__desc')
  dogcard.append(div1)
  
  const bio = document.createElement('h3')
  bio.innerText = 'bio'
  div1.append(bio)
  
  const para = document.createElement('p')
  div1.append(para)
  para.innerText = data[index].bio
  
  const para2 = document.createElement('p')
  dogcard.append(para2)
  
  const isGoodDog = document.createElement('button')
  dogcard.append(isGoodDog)   
  
  if (data[index].isGoodDog === true  ) {
    para2.innerText = 'is naughty? No!'
    isGoodDog.innerText = 'good dog'
  }
  else {
    para2.innerText = 'is naughty? Yes!'
    isGoodDog.innerText = 'bad dog'
  }

}
