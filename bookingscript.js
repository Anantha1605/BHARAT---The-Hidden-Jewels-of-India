document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.trip-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const destination = document.getElementById('destination').value;
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const guests = document.getElementById('guests').value;
  
      if (!destination || !checkin || !checkout || !guests) {
        alert('Please fill out all fields.');
        return;
      }
  
      alert(`Destination: ${destination}\nCheck in: ${checkin}\nCheck out: ${checkout}\nNumber of Guests: ${guests}`);
    });
  });
  
  