let latv = document.getElementById("latvanyossagok")
console.log(latvanyossagok)
let i = 0
for (const item of latvanyossagok)
{
    if (item.tipus != "Nemzeti park")
    {
        latv.innerHTML += `
        <button class="latv_gomb" data-bs-toggle="collapse" data-bs-target="#latv${i}">${item.nev}</button>
        <div id="latv${i}" class="collapse latv_dobozok">
            <p><b>Típus:</b> ${item.tipus}</p>
            <p><b>Hely:</b> ${item.hely}</p>
            <p><b>Leírás:</b> ${item.leiras}</p>
            <img src="${item.kep}" alt="${item.kep}" title="${item.nev}" class="img-fluid latv_kepek">
        </div>
        <br>
        `
        console.log(item.nev)
        i++
    }
}