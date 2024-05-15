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
    <h2 class="szemely_foglalkozas">${szemelyek[index].foglalkozas}</h2>
    <p class="szemely_leiras">${szemelyek[index].ismertseg}</p>
    <img src="${szemelyek[index].kep}" alt="${szemelyek[index].kep}" title="${szemelyek[index].nev}" class="szemelyek_kepek img-fluid">
    `
}

valtoztat()