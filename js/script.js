const noiceBox = document.querySelector("[data-notice-box]");
const successBtn = document.querySelector("[data-success-btn]");
const emailInput = document.querySelector("[data-email-input]");


function validateEmail(email) {
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
	return regex.test(email);
}

function handleSubmit() {
	const isValidEmail = validateEmail(emailInput.value);
	if (isValidEmail) {
		noiceBox.style.display = "block";
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	
}

successBtn.addEventListener("click", function () {
	noiceBox.style.display = "none";
});
