console.log(data);

// WRITE YOUR CODE BELOW!
// ## Learning Objectives
// * Use event listeners to render dynamic content in response to a click event
// * Render dynamic content based on the contents of a submitted form 

// PLAN

/* 
    Section 1
   - 1. select the ul element
   - 2. loop throught data with foreach
   - 3. in the loop we want to create an li element with js (<li class="dogs-list__button">name of dog</li>)
   - 4. append li to ul container, still in the loop
   - 5. add click event listener to li
   - 6. build the structure below with js

        <img src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80" />
        <h3>Bio</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, magnam. Facilis odio ipsam repudiandae ipsum. Cupiditate animi ab enim alias labore! Deleniti natus molestiae quae velit distinctio, laboriosam voluptate reiciendis.</p>
        <div class="main__dog-section__btn">
          <div class=".main__dog-section__desc">
            <i>is Naughty?</i>
            <p>Yes</p>
          </div>
          <button>Good Dog</button>
        </div>
*/

// 1. Select the ul element  - dog-list__button. Class name gives array, query selector gives the actual element
const dogListContainer = document.querySelector(".dogs-list")

// 2. Using forEach
data.forEach((singleDog) => {
    //3.
    const li = document.createElement('li')
    //add text inside li
    li.innerText = singleDog.name
    // add class attribute
    li.setAttribute("class", "dogs-list__button")
    // 4. appending
    dogListContainer.append(li)
    // 5. adding click event
    li.addEventListener("click", () => {

        // 6. select the main section
        const mainDogSection = document.querySelector(".main__dog-section")

        // 7. create h2 and add text
        const h2Main = document.createElement('h2')

        h2Main.innerText = singleDog.name
        //reset the container
        mainDogSection.innerHTML = ""
        mainDogSection.append(h2Main)


        // 8. add the image and insert the src
        const dogImg = document.createElement('img')
        dogImg.src = singleDog.image
        mainDogSection.append(dogImg)

        // create main dog section Div
        const mainSectionDiv = document.createElement('div')

        //9. add bio title
        const addBioHeader = document.createElement('h3')
        addBioHeader.innerText = "Bio"
        mainSectionDiv.append(addBioHeader)

        //10. add the bio
        const bio = document.createElement('p')
        bio.innerText = singleDog.bio
        mainSectionDiv.append(bio)

        mainDogSection.append(mainSectionDiv)

        // 10. create p and append to mainDogSection
        const p = document.createElement('p')
        console.log(p)
        p.innerHTML = "<em>Is naughty?</em> yes!"
        mainDogSection.append(p)

        // 11. Create Button and append to mainDogSection
        const buttonBadOrGood = document.createElement('button')
        buttonBadOrGood.innerText = "Good dog!"
        mainDogSection.append(buttonBadOrGood)

        buttonBadOrGood.addEventListener("click", () => {
            buttonBadOrGood.innerText = "Bad dog!"
            p.innerHTML = "<em>Is naughty?</em> no!"
        })

    })
})





