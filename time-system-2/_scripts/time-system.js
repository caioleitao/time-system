function day(){
var time = document.getElementById("time")
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var dia = data.getDate()

time.innerHTML = `Day ${dia}<br/>${hora} hours`
}