// ✅ Expanded Event List (9 total)
const events = [
    { id: 1, name: "Music Festival", price: 500, image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" },
    { id: 2, name: "Dance Show", price: 300, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" },
    { id: 3, name: "Comedy Night", price: 400, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" },
    { id: 4, name: "Tech Expo", price: 200, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
    { id: 5, name: "Gaming Tournament", price: 450, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420" },
    { id: 6, name: "Food Carnival", price: 250, image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" },
    { id: 7, name: "Art Exhibition", price: 350, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
    { id: 8, name: "Photography Workshop", price: 600, image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" },
    { id: 9, name: "Startup Summit", price: 550, image: "https://images.unsplash.com/photo-1485217988980-11786ced9454" }
];

let selectedEvent = null;

// ✅ Load Events into UI
window.onload = () => {
    const box = document.getElementById("eventContainer");

    events.forEach(event => {
        box.innerHTML += `
            <div class="event-card">
                <img src="${event.image}">
                <h3>${event.name}</h3>
                <p>₹${event.price} / ticket</p>
                <button onclick="bookEvent(${event.id})">Book Now</button>
            </div>
        `;
    });
};

// ✅ Open Form
function bookEvent(id) {
    selectedEvent = events.find(evt => evt.id === id);
    document.getElementById("bookingForm").style.display = "block";
}

// ✅ Close Form
function closeForm() {
    document.getElementById("bookingForm").style.display = "none";
}

// ✅ Booking Handler
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const booking = {
        event: selectedEvent.name,
        price: selectedEvent.price,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tickets: document.getElementById("tickets").value,
        total: selectedEvent.price * document.getElementById("tickets").value
    };

    // Save in Local Storage
    let data = JSON.parse(localStorage.getItem("bookings")) || [];
    data.push(booking);
    localStorage.setItem("bookings", JSON.stringify(data));

    alert(`✅ Booking Successful!\nEvent: ${booking.event}\nTotal: ₹${booking.total}`);

    closeForm();
});
