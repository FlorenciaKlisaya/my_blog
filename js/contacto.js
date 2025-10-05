document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const submitButton = form.querySelector("button[type='submit']");
    const emailField = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    const popup = document.getElementById("success-popup");

    // Regex personalizada para validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validación en tiempo real solo del email
    emailField.addEventListener("input", () => {
        if (emailField.value && !emailRegex.test(emailField.value)) {
            emailError.textContent = "Por favor ingresa un correo electrónico válido.";
            emailField.classList.add("input-error");
        } else {
            emailError.textContent = "";
            emailField.classList.remove("input-error");
        }
    });

    // Envío del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // 1. Validación nativa del navegador (nombre y mensaje)
        if (!form.checkValidity()) {
            form.reportValidity(); // Mostrar errores del navegador
            return;
        }

        // 2. Validación personalizada del email
        const isEmailValid = emailRegex.test(emailField.value);
        if (!isEmailValid) {
            emailError.textContent = "Por favor ingresa un correo electrónico válido.";
            emailField.classList.add("input-error");
            return;
        }

        // Todo está bien → mostrar popup
        popup.classList.remove("hidden");

        form.reset();
        emailError.textContent = "";
        emailField.classList.remove("input-error");

        setTimeout(() => {
            popup.classList.add("hidden");
        }, 5000);
    });
});
