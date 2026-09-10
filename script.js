const form = document.querySelector("form");
const inputNom = document.querySelector('input[name="nom"]');
const inputEmail = document.querySelector('input[name="email"]');
const textareaMessage = document.querySelector('textarea[name="message"]');


form.addEventListener("submit" , function (e) {
    e.preventDefault();

    const nom = inputNom.value.trim();
    const email = inputEmail.value.trim();
    const message = textareaMessage.value.trim();

    if (nom === "") {
        alert("Merci d'indiquer votre nom.");
        return;
    }
    if (!email.includes("@")) {
        alert("votre email ne semble pas valide.");
        return;
    }

    if (message ==="") {
        alert("N'oubliez pas d'ecrire votre message.");
        return;
    }

    alert("Merci " + nom + " ! Votre message a bien été pris en compte.");
    form.reset();

});

const anneeEl = document.querySelector("#annee");
if (anneeEl) {
    anneeEl.textContent = new Date().getFullYear();

}
const services = document.querySelectorAll(".service");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

services.forEach((service) => {
    service.classList.add("cache");
    observer.observe(service);
});