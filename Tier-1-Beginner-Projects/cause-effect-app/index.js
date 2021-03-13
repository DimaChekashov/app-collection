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

people.forEach((item) => {
    userList.innerHTML += `<li class="user-list-item">${item.name}</li>`;
});
