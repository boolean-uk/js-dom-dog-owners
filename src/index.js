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
    






    // render the name 
    // create h2 for each dog
    // append the created h2 into the section

    
    //    this function should display the correct dog
    // clear out the card information displayed - refresh the main content
    // match the header list
    // find the correct dog
    // display new content using the same card
    
  
    
    // dogSelectButton.addEventListener('click', function() {
    //     renderDog(i)
    //   })

    li.addEventListener('click', function (event) {
        console.log('How dare you click me!?')
        // h2.innerText = "Did you click on me????"
        console.log('this is event', event);

        console.log('target', event.target);
        
        console.log('value', event.target.id);
        test(event.target.id)


    // function dogFinder() {
   
    // create the main card
    // find the section
    const section = document.querySelector('.main__dog-section')
        
    // find the h2
    const h2 = document.querySelector('h2')
    // change the inner text to the dog's name
    const dogName = dogInfo.name
    h2.innerText = dogName
       


    // add in dog img
    // create img container
       
    const img = document.createElement('img')
    // have the path to img from top data
        
    img.src = dogInfo.image
    // append to the card
    h2.append(img)

    // make div
    const div = document.createElement('div')
    div.setAttribute('class', 'main__dog-section__desc')
    h2.append(div)

    // make h3
    const h3 = document.createElement('h3')
    h3.innerText = 'Bio'
    div.append(h3)
    // make p
    const p = document.createElement('p')
    p.innerText = dogInfo.bio
    div.append(p)
        

    })


    
    // }

}

const test = (value) => {
    console.log('this is a test', value);
}

    // read the id of which button has been clicked
   



    // use that to find dog's info
    // populate card with associated dog's info
    

// inputing the info to the card
// generate a click event that displays the card with all the info for the dog that is being clicked














// ---saved for later ---
    // loop through the data
    // seperate out the above loop into a function
    // call that for the buttons AND cards