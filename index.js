let btn = document.getElementById('btn')
function convert() {
    let convtext = document.getElementById('convtext')
    let temp = document.getElementById('temp').value
    let conv = document.getElementById('conv').value
    let c
    if (conv == 'celsius') {
        c = temp * 1.8 + 32
        convtext.innerHTML = ` ${temp}°C from celsius to farenhite is ${c}°F`
    }
    else if (conv == 'farenhite') {
        c = (temp - 32) * 5 / 9
        convtext.innerHTML = `${temp}°F from farenhite to celsius is ${c}°C`
    }
    else {
        convtext.innerHTML = 'please select'
    }
}
btn.addEventListener('click', convert)