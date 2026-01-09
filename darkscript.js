const btn = document.getElementById("modeBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        btn.textContent = "Light Mode";
    } else{
        btn.textContent = "Dark Mode";
        alert("Do you Really wants to Change the Mode!");
    }
});