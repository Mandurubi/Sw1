const buses = [
    { id: 1, totalSeats: 40, bookedSeats: 35 },
    { id: 2, totalSeats: 40, bookedSeats: 30 },
    { id: 3, totalSeats: 40, bookedSeats: 37 }
];

function checkAvailability(bus, seats) {
    return bus.totalSeats - bus.bookedSeats >= seats;
}

function bookSeats(busId) {
    const bus = buses.find(b => b.id === busId);
    const input = document.getElementById(`seats-${busId}`);
    const seatsToBook = parseInt(input.value) || 0;

    if (bus && checkAvailability(bus, seatsToBook)) {
        bus.bookedSeats += seatsToBook;
        renderBuses();
    } else {
        alert("Not enough seats available.");
    }
}

function renderBuses() {
    const busesContainer = document.getElementById('buses');
    busesContainer.innerHTML = '';

    buses.forEach(bus => {
        const busDiv = document.createElement('div');
        busDiv.className = 'bus';
        busDiv.innerHTML = `
            <h3>Bus ${bus.id}</h3>
            <p>Seats Available: ${bus.totalSeats - bus.bookedSeats}</p>
            <p class="${checkAvailability(bus, 1) ? 'available' : 'full'}">
                ${checkAvailability(bus, 1) ? 'Seats Available' : 'Not Enough Seats Available'}
            </p>
            <input type="number" id="seats-${bus.id}" min="1" max="${bus.totalSeats - bus.bookedSeats}" value="1">
            <button onclick="bookSeats(${bus.id})">Book Seats</button>
        `;
        busesContainer.appendChild(busDiv);
    });
}

renderBuses();
