let menu = document.querySelector(".adaptiveMenu");
let navigation = document.querySelector(".navigation")
menu.addEventListener("click", function() {
    if (navigation.style.display === "block") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }
})