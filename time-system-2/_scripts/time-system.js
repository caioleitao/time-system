function day(){
var time = document.getElementById("time")
var msg = document.getElementById("msg")
var data = new Date()

var body = document.getElementById("body")
var header2 = document.getElementById("header")

// var hora = data.getHours()
var hora = 2
var minuto = data.getMinutes()
var dia = data.getDate()

time.innerHTML = `Day ${dia}<br/>${hora} hours`

if(hora >= 0 && hora < 12){

msg.innerHTML = "Bom dia!"
body.style.backgroundColor = "#ddd"
time.style.color = "#000"
header2.style.backgroundColor = "fff"


} else if(hora >= 12 && hora < 18){

msg.innerHTML = "Boa tarde!"

}else{

msg.innerHTML = "Boa noite!"

}

}
