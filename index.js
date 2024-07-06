
var setadireita = window.document.getElementById("setadireita")
var onixpreto = window.document.getElementById("onixpreto")
var onixsedanvermelho = window.document.getElementById("onixsedanvermelho")
var renegadevermelha = window.document.getElementById("renegadevermelha")
var renegadebranca = window.document.getElementById("renegadebranca")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarParaDireita() {
    onixpreto.style = "display:none"
    onixsedanvermelho.style ="display:none"
    renegadevermelha.style = "display:flex"
    renegadebranca.style = "display:flex"
    setaesquerda.style = "display:flex"
    setadireita.style = "display:none"
}function rolarParaEsquerda() {
    onixpreto.style = "display:flex"
    onixsedanvermelho.style ="display:flex"
    renegadevermelha.style = "display:none"
    renegadebranca.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}