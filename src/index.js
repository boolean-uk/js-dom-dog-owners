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
        li.addEventListener('click', function (event) {

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
