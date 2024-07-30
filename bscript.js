document.getElementById('add-destination-btn').addEventListener('click', function() {
    const customDestinationInput = document.getElementById('custom-destination');
    if (customDestinationInput.style.display === 'none') {
        customDestinationInput.style.display = 'block';
        customDestinationInput.focus();
    } else {
        customDestinationInput.style.display = 'none';
    }
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destinationSelect = document.getElementById('destination');
    let destination = destinationSelect.value;
    const customDestination = document.getElementById('custom-destination').value;
    if (customDestination) {
        destination = customDestination;
    }
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;
    const phone = document.getElementById('phone').value;
    const hotel = document.getElementById('hotel').value;
    const roomType = document.getElementById('room_type').value;
    const requests = document.getElementById('requests').value;

    const confirmationMessage = `
        Thank you, ${name}! Your trip to ${destination} has been booked for ${date} with ${people} people. 
        A confirmation email has been sent to ${email}. Your contact number is ${phone}. You will be staying at ${hotel} in a ${roomType} room.
        Special requests: ${requests}.
    `;
    
    const messageElement = document.getElementById('confirmation-message');
    messageElement.textContent = confirmationMessage;
    messageElement.style.animation = 'fadeIn 1s ease-in forwards';
});
