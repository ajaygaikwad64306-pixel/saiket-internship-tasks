function showMessage() {
  alert("Thanks for your interest!");
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("formMsg");

  if (name === "" || email === "") {
    msg.style.color = "red";
    msg.innerText = "Please fill all fields.";
  } else {
    msg.style.color = "green";
    msg.innerText = "Form submitted successfully!";
  }
}
