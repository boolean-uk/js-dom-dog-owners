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
    const dogInfo = data[i];
    const ul = document.querySelector('ul')
    const li = document.createElement('li');
    li.innerText = dogInfo.name;
    li.setAttribute("class", "dogs-list__button");
    ul.append(li);
}


// create the main card 
// inputing the info to the card
// generate a click event that displays the card with all the info for the dog that is being clicked
