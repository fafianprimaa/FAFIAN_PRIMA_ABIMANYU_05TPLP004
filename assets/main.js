document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const saveButton = document.querySelector(".save-btn");
    const cancelButton = document.querySelector(".cancel-btn");

    saveButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting right away

        // Validate form fields
        if (validateForm()) {
            alert("Data berhasil disimpan!");
            form.reset(); // Optionally reset form after submission
        } else {
            alert("Silakan lengkapi semua kolom yang diperlukan.");
        }
    });

    cancelButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default reset behavior
        if (confirm("Apakah Anda yakin ingin membatalkan? Semua perubahan akan hilang.")) {
            form.reset(); // Reset the form if confirmed
        }
    });

    function validateForm() {
        const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("error"); // Add error class if field is empty
            } else {
                field.classList.remove("error"); // Remove error class if field is filled
            }
        });

        return isValid;
    }
});