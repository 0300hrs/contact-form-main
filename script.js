const form = document.getElementById("greetingForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consent = document.getElementById("consent");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const queryError = document.getElementById("queryError");
const messageError = document.getElementById("messageError");
const consentError = document.getElementById("consentError");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  genderError.textContent = "";
  firstNameInput.classList.remove("error");
  lastNameInput.classList.remove("error");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const gender = document.querySelector('input[name="query-type"]:checked');
  const checked = consent.checked;

  // Validate inputs
  if (!firstName) {
    firstNameError.textContent = "Please enter the required information below";
    firstNameInput.classList.add("error");
  }
  if (!lastName) {
    lastNameError.textContent = "Please enter the required information below";
    lastNameInput.classList.add("error");
  }
  if (!gender) {
    genderError.textContent = "Please select a Query Type";
  }
  if (!email) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("error");
  }
  if (!message) {
    messageError.textContent = "Please enter a message";
    messageInput.classList.add("error");
  }
  if (!checked) {
    consentError.textContent =
      "To submit this form, consent to being contacted";
  }
});
