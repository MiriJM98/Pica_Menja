if (sessionStorage.getItem("token") === "") {
    document.getElementById("bLogin").style.display = "block";
} else {
    document.getElementById("bPerfil").style.display = "block";
}