var loginButton = document.getElementById("loginButton");
var contactForm = document.getElementById("contactForm");

loginButton.onclick = function () {
    alert("Online banking login is coming soon!");
};

contactForm.onsubmit = function (event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Thanks! We will be in touch soon.";
    contactForm.reset();
};
