serial.onEvent(SerialEvent.DataReceived, function () {
    serial.writeBuffer(null)
})
forever(function () {
    pins.A0.digitalWrite(false)
    pause(500)
    pins.A0.digitalWrite(true)
    pause(1000)
})
