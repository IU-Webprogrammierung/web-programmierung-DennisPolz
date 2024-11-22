let loader = document.querySelector(".wrapperLoader");
let lock = document.querySelector(".wrapperLock");

window.addEventListener("load",() => {

hideLoader();

})

function hideLoader() {
    loader.remove();
    lock.classList.remove("wrapperLock");
}