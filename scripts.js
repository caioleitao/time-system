function Day(){
var msg = document.getElementById("msg")
var msg2 = document.getElementById("msg2")
var img = document.getElementById("img")
var body = document.getElementById("corpo")


var data = new Date()
var hora = data.getHours()

msg.innerText = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12){
    img.src="manha.jpg"
    msg2.innerText = "Bom dia"
    body.style.backgroundColor = "#e5cd1b"
}else if(hora >= 12 && hora <18){
    img.src="tarde.jpg"
    msg2.innerText = "Boa tarde"
    body.style.backgroundColor = "#ef9713"
}else{
    img.src="noite.jpg"
    msg2.innerText = "Boa noite"
    body.style.backgroundColor = "#59564e"
}

}