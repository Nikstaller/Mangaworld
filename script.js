document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value

document.getElementById("msg").innerText =
"Bem-vindo ao MangaVerse, " + nome + "!"

})