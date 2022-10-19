console.log(data);

// WRITE YOUR CODE BELOW!
const dogsList = document.querySelector(".dogs-list");
console.log(dogsList);

for (let i = 0; i < data.length; i++) {
  const li = document.createElement("li");
  li.setAttribute("class", "dogs-list__button");
  console.log(li);
  li.innerText = data[i].name;
  dogsList.appendChild(li);

  // correct list is <ul class="dogs-list">
  // now add an event listener to listen for user clicks
  //inside the eventListerner we want to call out function
  // and give the called function the index we are looping though (i)
  li.addEventListener("click", () => {
    selectCard(i);
  });
}

let cardHasBeenCreated = false

function selectCard(index) {
  const dogsCard = document.querySelector(".main__dog-section");
  const h2 = document.querySelector("h2");
  h2.innerText = data[index].name;

  if (cardHasBeenCreated === true) {
    const img = document.querySelector("img")
  }
  const img = document.createElement("img");
  img.src = data[index].image;
  dogsCard.appendChild(img);

  const bioSection = document.createElement("div");
  bioSection.setAttribute("class", "main__dog-section__desc");
  dogsCard.appendChild(bioSection);
  const h3 = document.createElement("h3");
  h3.innerText = "bio";
  bioSection.appendChild(h3);
  const p = document.createElement("p");
  p.innerText = data[index].bio;
  bioSection.appendChild(p);

  const bio = document.createElement("bio");

  const button = document.createElement("button");
  const isDogGoodLabel = document.createElement("p");
  if (data[index].isGoodDog === true) {
    isDogGoodLabel.innerHTML = "<em>Is naughty?</em> yes!";
    button.innerText = "Good dog!";
  } else {
    isDogGoodLabel.innerHTML = "</em>Is naughty?</em> no!";
    button.innerText = "Bad dog!";
  }
  dogsCard.appendChild(isDogGoodLabel);
  dogsCard.appendChild(button);
}




//  <section class="main__dog-section">
//         <h2>Mr. Bonkers</h2>
//         <img
//           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//           alt=""
//         />
//         <div class="main__dog-section__desc">
//           <h3>Bio</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!
//           </p>
//         </div class="main__dog-section__btn">
//         <p><em>Is naughty?</em> yes!</p>
//         <button>Good dog!</button>
//   </section>
