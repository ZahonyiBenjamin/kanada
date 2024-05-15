let szemelyek_doboz = document.getElementById("szemelyek_doboz")
let szemelyek_lista = document.getElementById("szemelyek_lista")

let i = 0
for (const item of szemelyek)
{
    szemelyek_lista.innerHTML += `
    <option value="${i}" class="lista_elemek">${item.nev}</option>`
    i++
}

function valtoztat()
{
    let index = szemelyek_lista.value
    document.getElementById("szemelyek_doboz").innerHTML = `
    <h2>${szemelyek[index].ismertseg}</h2>
    `
}

valtoztat()