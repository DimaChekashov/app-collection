const people = [
    {
        name: "Dmitry Chekashov",
        street: "Lenina",
        city: "Zainsk",
        state: "Tatarstan",
        country: "Russia",
        telephone: "89196340584",
        birthday: "07.03.1999",
    },
    {
        name: "Kiril Hovoelov",
        street: "Stroitele",
        city: "Solkon",
        state: "Par",
        country: "France",
        telephone: "89195955848",
        birthday: "22.09.1994",
    },
    {
        name: "Genadii Fokin",
        street: "Block",
        city: "Valcon",
        state: "Udmurtia",
        country: "Russia",
        telephone: "89120432535",
        birthday: "15.01.2005",
    },
    {
        name: "Vasya Bobin",
        street: "Stook",
        city: "Hans",
        state: "Texas",
        country: "America",
        telephone: "89191646435",
        birthday: "23.12.2001",
    },
    {
        name: "Ruslan Ralov",
        street: "Nook",
        city: "Berlin",
        state: "Chuvashia",
        country: "Russia",
        telephone: "89131359281",
        birthday: "06.07.1995",
    },
    {
        name: "Ilnur Koval",
        street: "Cook",
        city: "Paris",
        state: "Harkov",
        country: "Ukraine",
        telephone: "89198982622",
        birthday: "10.02.1985",
    },
];

const userList = document.querySelector(".user-list");

people.forEach((item, i) => {
    userList.innerHTML += `<li class="user-list-item" user-id="${i + 1}">${
        item.name
    }</li>`;
});

const listItems = document.querySelectorAll(".user-list-item");

listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (document.querySelector(".active-item")) {
            document
                .querySelector(".active-item")
                .classList.remove("active-item");
        }
        e.target.classList.add("active-item");
        renderInfo(+item.getAttribute("user-id"), people);
    });
});

function renderInfo(id, userDB) {
    document.querySelector(".user-info").innerHTML = `
        <li class="user-info-item">Имя: <span class="user-info-item-output">${
            userDB[id - 1].name
        }</span></li>
        <li class="user-info-item">Улица: <span class="user-info-item-output">${
            userDB[id - 1].street
        }</span></li>
        <li class="user-info-item">Город: <span class="user-info-item-output">${
            userDB[id - 1].city
        }</span></li>
        <li class="user-info-item">Регион: <span class="user-info-item-output">${
            userDB[id - 1].state
        }</span></li>
        <li class="user-info-item">Страна: <span class="user-info-item-output">${
            userDB[id - 1].country
        }</span></li>
        <li class="user-info-item">Номер телефона: <span class="user-info-item-output">${
            userDB[id - 1].telephone
        }</span></li>
        <li class="user-info-item">Дата рождения: <span class="user-info-item-output">${
            userDB[id - 1].birthday
        }</span></li>
    `;
}
