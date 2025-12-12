const usuarios = [
    { usuario: "admin", password: "1234", rol: "admin" },
    { usuario: "cliente", password: "abcd", rol: "usuario" },
    { usuario: "networker", password: "12345678", rol: "networker" }
];

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    const encontrado = usuarios.find(u => u.usuario === user && u.password === pass);

    if (!encontrado) {
        alert("Usuario o contraseña incorrectos");
        return;
    }

    // Guardamos el rol en el navegador
    localStorage.setItem("rol", encontrado.rol);

    // Redirección según rol
    switch (encontrado.rol) {
        case "admin":
            window.location.href = "admin-networkers.html";
            break;

        case "usuario":
            window.location.href = "index.html";
            break;

        case "networker":
            window.location.href = "networker-business.html";  
            break;

        default:
            alert("Rol no reconocido");
            break;
    }
});
