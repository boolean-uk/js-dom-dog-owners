// WRITE YOUR CODE BELOW!

const dogName = data

dogsListFnc()
dogInformation()



function dogsListFnc(){
  let key = 0
  const dogsList = document.querySelector('.dogs-list')

  for(key in dogName){
    const dogListBtn = document.createElement('li')
    dogListBtn.classList.add('dogs-list__button')
    dogListBtn.innerText = dogName[key].name
    dogsList.append(dogListBtn)
  }
}

function dogInformation () { 
  let key = 0
  const main = document.querySelector('.main')

  for(key in dogName) {
    const section = document.createElement('section')
    section.classList.add('main__dog-section')
    const h2 = document.createElement('h2')
    h2.innerText = dogName[key].name
    section.append(h2)

    const image = document.createElement('img')
    image.src = dogName[key].image
    section.append(image)

    const div = document.createElement('div')
    div.classList.add('main__dog-section__desc')

    const h3 = document.createElement('h3')
    h3.innerText = 'Bio'
    div.append(h3)

    const pBio = document.createElement('p')
    pBio.innerText = dogName[key].bio
    div.append(pBio)
    section.append(div)

    const pQuestion = document.createElement('p')
    const em = document.createElement('em')
    em.innerText = 'Is naughty?'
    pQuestion.append(em)
    
    pQuestion.innerText = 'goodOrBadDog(yesOrNo)'

    section.append(pQuestion)
    
    const button = document.createElement('button')
    button.innerText = 'Good dog!'
    
    section.append(button)

    main.append(section)
  }
 }


//  <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!
//           </p>
//         </div>
//         <p><em>Is naughty?</em> yes!</p>
//         <button>Good dog!</button>


function goodOrBadDog(yesOrNo){
  if(yesOrNo){
    return 'Yes!'
  } else return 'No!'
}