const scriptURL = 'https://script.google.com/macros/s/AKfycbzFpayI42FHtXGT8LY1Eu-qVv8F33fc6uG-4dxsBrv8vpaElMykV5pH0XAFYNOMyFgsxg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})