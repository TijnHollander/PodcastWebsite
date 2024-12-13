var onClick = document.getElementById("nav-toggle");
var NavbarList = document.getElementById("nav-list")
onClick.addEventListener('click', () => {NavbarList.classList.toggle("active");});