console.log(data);

// WRITE YOUR CODE BELOW!

//get dom elements
const Header = document.querySelector("header");
const Main = document.querySelector("main");
const AddBtn = document.querySelector(".dogs-list__button--add");
//
function renderNavContent() {
	AddBtn.addEventListener("click", () => {
		Main.replaceChildren(Form());
		addSubmitEvent();
	});

	data.forEach((el) => {
		Header.appendChild(NavLink(el));
	});
}

function renderDogCard(dog) {
	Main.replaceChildren(DogCard(dog));
}

// elements
const NavLink = (dog) => {
	// <li class="dogs-list__button">Mr. Bonkers</li>
	const Li = document.createElement("li");
	Li.classList.add("dogs-list__button");
	const text = document.createTextNode(dog.name);
	Li.appendChild(text);
	Li.addEventListener("click", () => renderDogCard(dog));
	return Li;
};

const DogCard = (dog) => {
	//     <section class="main__dog-section">
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
	//         </div>
	//         <p><em>Is naughty?</em> yes!</p>
	//         <button>Good dog!</button>
	//   </section>

	const Section = document.createElement("section");
	Section.classList.add("main__dog-section");

	Section.innerHTML = `
        <h2>${dog.name}</h2>
        <img
        src="${dog.image}"
        alt=""
        />
        <div class="main__dog-section__desc">
        <h3>Bio</h3>
        <p>
        ${dog.bio}
        </p>
        </div>
        <p><em>Is naughty?</em> ${dog.isGoodDog ? "Yes!" : "No!"}</p>
        <button>${dog.isGoodDog ? "Good dog!" : "Bad dog!"}</button>
    `;

	return Section;
};

const addSubmitEvent = () => {
	document.querySelector("#add-dog-form").addEventListener("submit", (e) => {
		e.preventDefault();

		const name = document.querySelector('[name="name"]')?.value;
		const image = document.querySelector('[name="image"]')?.value;
		const isGoodDog = document.querySelector('[name="isGoodDog"]')?.value;
		const bio = document.querySelector('[name="bio"]')?.value;

		const dog = { name, image, isGoodDog, bio };
		data.push(dog);
		Header.appendChild(NavLink(dog));
	});
};

const Form = () => {
	const Section = document.createElement("section");
	Section.classList.add("main__dog-section");

	Section.innerHTML = `
        <section class="main__dog-section">
        <h2>Add a new Dog</h2>
        <form class="form" id="add-dog-form">

        <label for="name">Dog's name</label>
        <input type="text" id="name" name="name">

        <label for="image">Dog's picture</label>
        <input type="url" id="image" name="image">

        <label for="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea>

        <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
        </form>
        </section>
        `;

	return Section;
};

//
renderNavContent();
