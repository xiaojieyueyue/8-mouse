let number = 0
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
robotbit.GeekServo(robotbit.Servos.S1, 90)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        robotbit.GeekServo(robotbit.Servos.S1, 130)
        basic.pause(500)
        robotbit.GeekServo(robotbit.Servos.S1, 90)
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        number += 1
        basic.showNumber(number)
        basic.pause(500)
    }
    if (number >= 5) {
        music.playMelody("- E E F G A - - ", 174)
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
