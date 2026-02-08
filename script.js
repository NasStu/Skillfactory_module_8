const btnForGallery = document.querySelector(".main__items_btn");
const gallery = document.querySelector(".main__items_image");
const link = document.querySelector(".footer__link");


function showLoader() {
    document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

btnForGallery.addEventListener("click", async () => {
    try {
        showLoader();
        const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20");
        const data = await res.json();
        console.log(data, "Фотографии успешно загружены!");
        for (let i = 0; i < data.length; i++) {
            let elem = `<img src="${data[i].url}">`;
            gallery.innerHTML += elem;
        }
    } catch (error) {
        console.error(error.message, "Что-то пошло не так!");
    } finally {
        hideLoader();
    }
});

link.addEventListener("click", (e) => {
    e.preventDefault();
})