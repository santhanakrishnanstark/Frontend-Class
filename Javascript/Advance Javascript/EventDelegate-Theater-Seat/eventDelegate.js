// Without Event Delegate : Add same event listener to multiple seat

/**
const seats = document.querySelectorAll(".seat");

seats.forEach((seat) => {
    seat.addEventListener("click", (event) => {
        event.target.classList.add("selected");
    });
});

 */

// Event Delegates - One event listener for all the seat

const theater = document.querySelector(".theater");
const selectedSeat = [];

theater.addEventListener("click", (event) => {
    if (event.target.classList.contains("seat")) {
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");

            const seatIndex = selectedSeat.indexOf(event.target.id);
            if (seatIndex !== -1) {
                selectedSeat.splice(seatIndex, 1);
            }
        } else {
            event.target.classList.add("selected");
            selectedSeat.push(event.target.id);
        }

        document.getElementById("seatCount").textContent = selectedSeat.length;
        console.log(selectedSeat);
    }
});