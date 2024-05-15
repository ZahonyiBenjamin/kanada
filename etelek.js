let tabla = document.getElementById("tabla_test")

let i = 0
for (const item of etelek)
{
    tabla.innerHTML += `
    <tr>
        <td class="etel_nevek">${item.nev}</td>
        <td>${item.leiras}</td>
        <td class="receptek">
            <ul id="recept${i}"></ul>
        </td>
        <td><img src="${item.kep}" alt="${item.kep}" title="${item.nev}" class="etel_kepek img-fluid"></td>
    </tr>`

    for (const lepes of item.recept)
    {
        document.getElementById(`recept${i}`).innerHTML += `
        <li>${lepes}</li>
        ` 
    }

    i++
}