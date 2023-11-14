buttonsAdd = document.querySelectorAll(".button--add")
buttonsRemove = document.querySelectorAll(".button--remove")

for (let i = 0; i < buttonsAdd.length; i++) {
    const elementAdd = buttonsAdd[i]
    const elementRemove = buttonsRemove[i]
    elementAdd.onclick = elementAdd.addEventListener('click', function () {
        addItem(elementAdd,elementRemove)
    });

    elementRemove.onclick = elementRemove.addEventListener('click', function () {
        removeItem(elementAdd,elementRemove)
    });

}

function addItem(elementAdd, elementRemove) {
    value = parseInt(elementAdd.nextElementSibling.innerHTML)
    elementAdd.nextElementSibling.innerHTML = value + 1
    if (value == 0) {
        elementRemove.classList.remove("button--disabled")
    }
}

function removeItem(elementAdd, elementRemove) {
    value = parseInt(elementRemove.previousElementSibling.innerHTML)
    if (value == 1) {
        elementRemove.classList.add("button--disabled")
    }
    if (value > 0) {
        elementRemove.previousElementSibling.innerHTML = value - 1
    }
}
