const navbar = document.querySelector(".nav-link");
const humberg = document.querySelector(".humberg");


// humberg.onclick = function () {
// }

humberg.addEventListener("click", function () {
    navbar.classList.toggle("show-hide");
})
