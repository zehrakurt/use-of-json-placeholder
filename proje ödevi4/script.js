document.addEventListener("DOMContentLoaded", async function() {
    const userContainer = document.getElementById("user-container");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        users.forEach(user => {
            const card = createUserCard(user);
            userContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-user");
    const name = document.createElement("p");
    name.textContent = `Name: ${user.name}`;

    const username = document.createElement("p");
    username.textContent = `Username: ${user.username}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const address = document.createElement("p");
    address.innerHTML = `<i class="fas fa-location-dot"></i> Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

    const company = document.createElement("p");
    company.innerHTML = `<i class="fas fa-building"></i> Company: ${user.company.name}`;

    card.appendChild(icon);
    card.appendChild(name);
    card.appendChild(username);
    card.appendChild(email);
    card.appendChild(address);
    card.appendChild(company);

    return card;
}