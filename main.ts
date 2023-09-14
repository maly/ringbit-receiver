radio.onReceivedString(function (receivedString) {
    motor = receivedString.charAt(0)
    smer = receivedString.charAt(1)
    dir = 0
    if (smer == "F") {
        dir = 50
    } else if (smer == "R") {
        dir = -50
    }
    if (motor == "L") {
        levy = dir
    } else if (motor == "R") {
        pravy = dir
    } else {
        pravy = dir
        levy = dir
    }
    RingbitCar.freestyle(levy, pravy)
    basic.pause(500)
    levy = 0
    pravy = 0
    RingbitCar.freestyle(levy, pravy)
})
let pravy = 0
let levy = 0
let dir = 0
let smer = ""
let motor = ""
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
radio.setGroup(1)
