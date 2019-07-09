function day(){
var time = document.getElementById("time")
var msg = document.getElementById("msg")
var data = new Date()

var body = document.getElementById("corpo")
var header = document.getElementById("menu")
var click = document.getElementsByClassName("menuclick")
var img = document.getElementById("photo")


// var hora = data.getHours()
var hora = 24
var minuto = data.getMinutes()
var dia = data.getDate()

time.innerHTML = `Day ${dia}<br/>${hora} hours`

if(hora >= 0 && hora < 12){

msg.innerHTML = "Bom dia!"
body.style.backgroundColor = "#dddddd"
header.style.backgroundColor = "#ffffff"
time.style.color = "#fff"

} else if(hora >= 12 && hora < 18){

    msg.innerHTML = "Bom dia!"
    body.style.backgroundColor = "#dddddd"
    time.style.color = "#fff"
    msg.innerHTML = "Boa tarde!"

}else{

msg.innerHTML = "Boa noite!"
msg.style.color = "#fff"
body.style.backgroundColor = "#121212"
header.style.backgroundColor = "#272727"
img.src = "_data/night.jpg"
img.style.marginLeft = "-180px"
}

}
