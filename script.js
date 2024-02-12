document.getElementById('offerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var service = document.getElementById('service').value;
  var message = document.getElementById('message').value;

  if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || service === '' || message.trim() === '') {
    displayMessage('error', 'Wszystkie pola są wymagane!');
    return;
  }

  displayMessage('success', 'Twoje zapytanie zostało pomyślnie wysłane!');

  document.getElementById('offerForm').reset();

  var successMessage = document.createElement('div');
  successMessage.textContent = 'Dziękuję! Twoja wiadomość została wysłana.';
  successMessage.className = 'message-display';
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('overlay').appendChild(successMessage);

  setTimeout(function() {
    successMessage.remove();
    document.getElementById('overlay').style.display = 'none';
  }, 5000);
});

function displayMessage(type, message) {
  var statusMessage = document.getElementById('statusMessage');
  statusMessage.innerHTML = message;
  statusMessage.className = type; 

  setTimeout(function() {
    statusMessage.innerHTML = '';
    statusMessage.className = '';
  }, 5000);
}
