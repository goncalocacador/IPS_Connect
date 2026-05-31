const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("change", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );

});

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    toggle.checked = true;

}