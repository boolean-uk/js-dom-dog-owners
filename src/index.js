console.log(data);
const dogList = document.querySelector(".dogs-list");
const main = document.querySelector(".main");

data.forEach((dog) => {
    dogList.innerHTML += `<li class="dogs-list__button">${dog.name}</li> `;
});

const navigation__buttons = document.querySelectorAll(".dogs-list__button");

const render = (res) => {
    const element = `
    <section class="main__dog-section">
        <h2>${res.name}</h2>
        <img
        src="${res.image}"
        alt="dog"
        />
        <div class="main__dog-section__desc">
            <h3>Bio</h3>
            <p>
                ${res.bio}
            </p>
        </div>
        <p><em>Is naughty?</em> ${res.isGoodDog ? "No!" : "Yes!"}</p>
        <button>${res.isGoodDog ? "Good dog!" : "Bad Dog!"}</button>
    </section> 
    `;

    main.innerHTML = element;
};

navigation__buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const res = data.find((i) => i.name === button.innerHTML);
        render(res);
    });
});
