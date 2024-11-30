
function showPrice() {
    const select = document.querySelector(".select")
    const name = document.querySelector(".name")
    const price = document.querySelector(".price")

    const selectValue = select.value
    name.textContent = selectValue

    if (selectValue === "Acer") {
        price.textContent = "Acer price is 600$"
    }
    else if (selectValue ==="MacBook") {
        price.textContent = "MacBook price is 1000$"
    }
    else if (selectValue === "HP") {
        price.textContent = "HP price is 700$"
    }
}
document.querySelector(".btn").addEventListener("click", showPrice);
