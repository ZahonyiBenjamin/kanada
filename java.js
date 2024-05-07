//-------------------------------------------------------Városok-------------------------------------------------------
let varos_index = 0
for (const item of varosok)
{
    document.getElementById("varosok_doboz").innerHTML += `
    <div class="col-4">
        <p class="varos_nevek">${item.nev}</p>
        <img type="button" src="${item.kep}" alt="${item.kep}" title="${item.nev}" class="img-fluid varos_kepek" data-bs-toggle="modal" data-bs-target="#myModal" onclick="modal_csere(${varos_index})">
    </div>`
    varos_index++
}

function modal_csere(index)
{
    document.getElementById("mh").innerHTML = varosok[index].nev
    document.getElementById("mb").innerHTML = `
    <p><b>Terület:</b> ${varosok[index].terulet}</p>
    <p><b>Népesség:</b> ${varosok[index].nepesseg}</p>
    <p><b>Leírás:</b> ${varosok[index].leiras}</p>
    <img src="${varosok[index].kep}" alt="${varosok[index].kep}" title="${varosok[index].nev}" class="img-fluid">
    `
}



//-------------------------------------------------------Látványosságok-------------------------------------------------------





//-------------------------------------------------------Nemzeti Parkok-------------------------------------------------------





//-------------------------------------------------------Nevezetes Személyek-------------------------------------------------------





//-------------------------------------------------------Ételek-------------------------------------------------------