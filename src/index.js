let newData = [...data];

const dogList = document.querySelector(".dogs-list");
const main = document.querySelector(".main");

const renderNavigation = () => {
    dogList.innerHTML =
        '<li class="dogs-list__button dogs-list__button--add">+</li>';
    newData.forEach((dog) => {
        dogList.innerHTML += `<li class="dogs-list__button">${dog.name}</li> `;
    });

    const navigation__buttons = document.querySelectorAll(".dogs-list__button");

    navigation__buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const res = newData.find((i) => i.name === button.innerHTML);
            render(res);
        });
    });

    const addButton = document.querySelector(".dogs-list__button--add");

    addButton.addEventListener("click", () => {
        const element = `
            <section class="main__dog-section">
                <h2>Add a new Dog</h2>
                <form class="form">
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

        main.innerHTML = element;

        const form = document.querySelector(".form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const element = {
                id: newData.length + 1,
                name: e.target.name.value,
                bio: e.target.bio.value,
                isGoodDog: true,
                image: e.target.image.value,
            };

            newData.push(element);
            renderNavigation();
            render(element);
        });
    });
};

const render = (res) => {
    const element = `
        <section class="main__dog-section">
            <h2>${res.name}</h2>
            <img
            src="${res.image}"
            alt="dog" style="width: 350px; height: 300px;"
            />
            <div class="main__dog-section__desc">
                <h3>Bio</h3>
                <p>
                    ${res.bio}
                </p>
            </div>
            <p><em>Is naughty?</em> ${res.isGoodDog ? "No!" : "Yes!"}</p>
            <button onClick=toggleDogStatus(${res.id + "," + res.isGoodDog})>${
        res.isGoodDog ? "Good dog!" : "Bad Dog!"
    }</button>
        </section> 
    `;

    main.innerHTML = element;
};

const toggleDogStatus = (id, status) => {
    const dog = newData.find((dog) => dog.id === id);
    dog.isGoodDog = !status;
    render(dog);
};

renderNavigation();
