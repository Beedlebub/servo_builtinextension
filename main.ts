/**
 * Servo seems to work best on 5v. 
 * 
 * Power servo directly from 5v.
 * 
 * Share same ground between add'l power and Micro:bit, but do NOT connect voltage together.
 */
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P8, buttonA_angle)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    pins.servoWritePin(AnalogPin.P8, bothBottons_angle)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P8, buttonB_angle)
})
let bothBottons_angle = 0
let buttonB_angle = 0
let buttonA_angle = 0
buttonA_angle = 30
buttonB_angle = 150
bothBottons_angle = 90
pins.servoWritePin(AnalogPin.P8, bothBottons_angle)
