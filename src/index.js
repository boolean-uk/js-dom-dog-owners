console.log(data);

// WRITE YOUR CODE BELOW!

// render the top nav bar with the list of the dog's names
    // create a variable to loop through data

    // to render this I want to loop through the data file and look up the dog name property
    // create a li element that will have that dog's name
    // no need to create ul since we have that in the html
    // give it a class "dogs-list__button" to get some CSS
    // append the li to the ul
    
for (i = 0; i < data.length; i++) {
    // making the dog list buttons
        const dogInfo = data[i];
        const ul = document.querySelector('ul')
        const li = document.createElement('li');
        li.innerText = dogInfo.name;
        li.setAttribute("class", "dogs-list__button");
        ul.append(li);
        const id = dogInfo.id;
        li.setAttribute("id", id)
        
// listen for click
        li.addEventListener('click', function () {

// --- MAIN CARD ---

// find the right section
        const main = document.querySelector('main');
// clear the card
        main.innerHTML = "";
// make the section
        const section = document.createElement('section');
        section.setAttribute("class", "main__dog-section")
        main.append(section)
        
        // make the h2
            const h2 = document.createElement('h2')
            // change the h2 inner text to the dog's name
            const dogName = dogInfo.name
            h2.innerText = dogName
            // append h2
            section.append(h2);

        // make the dog img
            const img = document.createElement('img')
            img.src = dogInfo.image
            img.setAttribute("alt", "")
            // img styling size
            img.style.height = "400px"; 
            img.style.width = "450px";
            // append to the card
            section.append(img)

        // make div
            const div = document.createElement('div')
            div.setAttribute('class', 'main__dog-section__desc')
            section.append(div)
            // make h3
                const h3 = document.createElement('h3')
                h3.innerText = 'Bio'
                div.append(h3)
            // make p
                const p = document.createElement('p')
                p.innerText = dogInfo.bio
                div.append(p)
    })
}

// --- CLICKING PLUS ---

// find plus button
    const plusButton = document.querySelector('.dogs-list__button--add')
// click event for + button    
    plusButton.addEventListener('click', function() {
        console.log('hello')
// when clicked
    // find main
        const main = document.querySelector('main');
    // clear section
        main.innerHTML = "";
    // make new section
        const section = document.createElement('section');
        section.setAttribute("class", "main__dog-section")
        main.append(section)
    //make the h2
        const h2 = document.createElement('h2')        
    // change the h2 inner text to Add a new Dog
        h2.innerText  = "Add a new dog"
    // append h2
        section.append(h2);
    




    })




/*
1 - When the plus button is clicked, it should replace the main card 
with a form to add a new dog to the list. You'll find a template for 
the form on the HTML page. 

2 - Once the form is submitted, add the new dog to the beginning of 
the list, right next to the plus button.




1 - 


make new form
    section
        h2
        form
            label for=name
            input id=name
            label for=image
            input id=image
            label
            textarea
            input - submit




    This is a template for the add dog form

    <section class="main__dog-section">

      <h2>Add a new Dog</h2>

      <form class="form">

        <label for="name">
            Dog's name
        </label>

        <input 
            type="text" 
            id="name" 
            name="name">

        <label for="image">
            Dog's picture
        </label>

        <input 
            type="url"
            id="image"
            name="image">

        <label for="bio">
            Dog's bio
        </label>

        <textarea 
            rows="5" 
            id="bio" 
            name="bio">
        </textarea>

        <input type="submit" 
            id="submit" name="submit" 
            value="Let's add a dog!" 
            class="form__button">
      </form>

  </section>

*/