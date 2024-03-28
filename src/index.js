document.addEventListener("DOMContentLoaded", function() {

    const data = [
        {
            id: 1,
            name: "Mr. Bonkers",
            bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                minima voluptates libero cumque rerum consequatur optio aliquid sint
                eum maxime illo laborum omnis quo ab rem cupiditate nulla
                perspiciatis ipsum!`,
            isGoodDog: true,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
        },
        {
            id: 2,
            name: "Nugget",
            bio: `Bio 2`,
            isGoodDog: false,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
        },
        {
            id: 3,
            name: "Skittles",
            bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                minima voluptates libero cumque rerum consequatur optio aliquid sint
                eum maxime illo laborum omnis quo ab rem cupiditate nulla
                perspiciatis ipsum!`,
            isGoodDog: true,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
        },
        {
            id: 4,
            name: "Buttercup",
            bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                minima voluptates libero cumque rerum consequatur optio aliquid sint
                eum maxime illo laborum omnis quo ab rem cupiditate nulla
                perspiciatis ipsum!`,
            isGoodDog: false,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_4.jpg"
        },
        {
            id: 5,
            name: "Lucipher",
            bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                minima voluptates libero cumque rerum consequatur optio aliquid sint
                eum maxime illo laborum omnis quo ab rem cupiditate nulla
                perspiciatis ipsum!`,
            isGoodDog: false,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
        },
        {
            id: 6,
            name: "Snooper Pooper",
            bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                minima voluptates libero cumque rerum consequatur optio aliquid sint
                eum maxime illo laborum omnis quo ab rem cupiditate nulla
                perspiciatis ipsum!`,
            isGoodDog: false,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_6.jpg"
        },
        {
            id: 7,
            name: "Puddles",
            bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                minima voluptates libero cumque rerum consequatur optio aliquid sint
                eum maxime illo laborum omnis quo ab rem cupiditate nulla
                perspiciatis ipsum!`,
            isGoodDog: true,
            image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_7.jpg"
        }
    ];

    const dogList = document.querySelector('.dogs-list');
    const mainDogSection = document.querySelector('.main__dog-section');
    const addButton = document.querySelector('.dogs-list__button--add');

    function renderDogList() {
        dogList.innerHTML = "";
    
        const plusButton = document.createElement("li");
        plusButton.textContent = "+";
        plusButton.classList.add('dogs-list__button', 'plus-button');
        plusButton.addEventListener("click", showAddDogForm);
        dogList.appendChild(plusButton);
    
        data.forEach((dog, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = dog.name;
            listItem.classList.add('dogs-list__button');
            listItem.addEventListener("click", () => {
                renderMainCard(dog);
            });
            dogList.appendChild(listItem);
        });
    }

    function renderMainCard(dog) {
        mainDogSection.innerHTML = "";
        const dogSection = document.createElement('section');
        dogSection.classList.add('main__dog-section');

        const dogTitle = document.createElement('h2');
        dogTitle.textContent = dog.name;

        const dogImage = document.createElement('img');
        dogImage.src = dog.image;
        dogImage.alt = dog.name;

        const dogDescription = document.createElement('p');
        dogDescription.textContent = dog.bio;

        const toggleButton = document.createElement('button');
        toggleButton.textContent = dog.isGoodDog ? 'Good Dog' : 'Bad Dog';
        toggleButton.addEventListener('click', () => {
            dog.isGoodDog = !dog.isGoodDog;
            toggleButton.textContent = dog.isGoodDog ? 'Good Dog' : 'Bad Dog';
        });

        dogSection.appendChild(dogTitle);
        dogSection.appendChild(dogImage);
        dogSection.appendChild(dogDescription);
        dogSection.appendChild(toggleButton);

        mainDogSection.appendChild(dogSection);
    }

    function showAddDogForm() {

        mainDogSection.innerHTML = "";

        const formHTML = `
            <form id="add-dog-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="bio">Bio:</label>
                <textarea id="bio" name="bio" required></textarea><br>
                <label for="image">Image URL:</label>
                <input type="text" id="image" name="image" required><br>
                <label for="is-good-dog">Is Good Dog?</label>
                <input type="checkbox" id="is-good-dog" name="is-good-dog"><br>
                <button type="submit">Add Dog</button>
            </form>
        `;
    
        mainDogSection.innerHTML = formHTML;

        document.getElementById('add-dog-form').addEventListener('submit', handleFormSubmit);
    }
    

    function handleFormSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const bio = document.getElementById('bio').value;
        const image = document.getElementById('image').value;
        const isGoodDog = document.getElementById('is-good-dog').checked;

        const newDog = {
            id: data.length + 1,
            name: name,
            bio: bio,
            isGoodDog: isGoodDog,
            image: image
        };

        data.push(newDog);
        renderDogList();
    }

    addButton.addEventListener('click', showAddDogForm);

    renderDogList();
});
