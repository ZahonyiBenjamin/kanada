let latv = document.getElementById("latvanyossagok")
console.log(latvanyossagok)
for (const item of latvanyossagok)
{
    latv.innerHTML += `
    <button>${item.nev}</button>
    `
    console.log(item.nev)
}