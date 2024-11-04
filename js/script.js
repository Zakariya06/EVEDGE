function sideMenuHandle() {
  let closeIcon = document.querySelector(".closeIcon");
  let hamberger = document.querySelector(".hamberger");
  let sideMenu = document.querySelector(".sideMenu");
  hamberger.addEventListener("click", () => {
    sideMenu.classList.toggle("show");
  });
  closeIcon.addEventListener("click", () => {
    sideMenu.classList.toggle("show");
  });
}
sideMenuHandle();


let unlockContentBtn = document.querySelectorAll(".unlockContent .dashBtn")
unlockContentBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
  btn.parentElement.style.display="none"
  })
})