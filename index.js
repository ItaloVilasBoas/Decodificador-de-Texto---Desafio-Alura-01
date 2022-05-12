function autoCopiar(){
    navigator.clipboard.writeText(document.getElementById("mostraMensagemDecodificada").children[0].innerHTML);
    alert("texto copiado!");
}
function criptografar() {
    var textoParaCriptografar = document.getElementById("textoParaCriptografar").value;
    var textoCriptografado = "";

    if (textoParaCriptografar.replaceAll(/\s/g, '') == "") {
        return;
    }
    for (let c of textoParaCriptografar) {
        switch (c) {
            case "a":
                textoCriptografado += "ai";
                break;
            case "e":
                textoCriptografado += "enter";
                break;
            case "i":
                textoCriptografado += "imes";
                break;
            case "o":
                textoCriptografado += "ober";
                break;
            case "u":
                textoCriptografado += "ufat";
                break;
            default:
                textoCriptografado += c;
                break;
        }
    }
    mostraMensagem = document.getElementById("mostraMensagemDecodificada");
    mostraMensagem.innerHTML = "<p>"+textoCriptografado+"</p>"+
    "<button style = 'position: absolute; bottom: 20px; background-color: transparent; 'onclick='autoCopiar()'>Copiar</button>";
    mostraMensagem.style.textAlign = "left";
    mostraMensagem.style.paddingTop = "10%";
}

function descriptografar() {
    var textoC = document.getElementById("textoParaCriptografar").value;
    var textoD = "";

    if (textoC.replaceAll(/\s/g, '') == "") {
        return;
    }
    for (let i = 0; i < textoC.length; i++) {
        textoD += textoC[i];
        if (!isVowel(textoC[i])) {

        } else if (textoC.substr(i, 2) == "ai") {
            i++;
        } else if (textoC.substr(i, 5) == "enter") {
            i += 4;
        } else if (textoC.substr(i, 4) == "imes" || textoC.substr(i, 4) == "ober" || textoC.substr(i, 4) == "ufat") {
            i += 3;
        }
    }
    mostraMensagem = document.getElementById("mostraMensagemDecodificada");   
    mostraMensagem.innerHTML = "<p>"+textoD+"</p>"+
    "<button style = 'position: absolute; bottom: 20px; background-color: transparent; 'onclick='autoCopiar()'>Copiar</button>";
    mostraMensagem.style.textAlign = "left";
    mostraMensagem.style.paddingTop = "10%";
}

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1;
}
