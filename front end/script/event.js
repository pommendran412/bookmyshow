document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // ✅ Token for authentication
        }
    });

    const events = await response.json();

    const eventContainer = document.querySelector(".events-container");
    events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `<h3>${event.name}</h3><p>${event.description}</p><button>RSVP</button>`;
        eventContainer.appendChild(eventElement);
    });
});
