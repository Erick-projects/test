document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dataForm");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {
        const fullName = document.getElementById("fullName").value;
        const country = document.getElementById("country").value;
        const bio = document.getElementById("bio").value;

        const data = {
            fullName: fullName,
            country: country,
            bio: bio
        };

        // Almacenar en sessionStorage
        sessionStorage.setItem("formData", JSON.stringify(data));
        alert("Datos almacenados en sessionStorage.");
    });

    // Cargar datos del sessionStorage al formulario si existen
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        document.getElementById("fullName").value = parsedData.fullName;
        document.getElementById("country").value = parsedData.country;
        document.getElementById("bio").value = parsedData.bio;
    }
});
