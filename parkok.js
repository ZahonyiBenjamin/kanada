let park = document.getElementById("parkok")
let i = 0
for (const item of latvanyossagok)
{
    if (item.tipus == "Nemzeti park")
    {
        /*
        park.innerHTML += `
        <button class="park_gomb" data-bs-toggle="collapse" data-bs-target="#park${i}">${item.nev}</button>
        <div id="park${i}" class="collapse park_dobozok">
            <p><b>Típus:</b> ${item.tipus}</p>
            <p><b>Hely:</b> ${item.hely}</p>
            <p><b>Leírás:</b> ${item.leiras}</p>
            <img src="${item.kep}" alt="${item.kep}" title="${item.nev}" class="img-fluid park_kepek">
        </div>
        <br>
        `
        i++
        */
        if (i != 0)
        {
            document.getElementById("car_belso").innerHTML += `
            <div class="carousel-item">
                <img src="${item.kep}" alt="${item.kep}" class="d-block w-100">
            </div>` 
        }

        i++
    }
}