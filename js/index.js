
function generate() {
    let generateCode = Math.floor(Math.random() * 16777269).toString(16)
    if (generateCode.length == 5) {
        generateCode
    }
    document.getElementById('hexText').innerHTML = `#${generateCode}`
    document.getElementById("color").style.backgroundColor = `#${generateCode}`;
}
document.getElementById('btn').addEventListener("click", generate)