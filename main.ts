input.onButtonPressed(Button.A, function () {
    number_1 += -1
    basic.showNumber(number_1)
})
input.onButtonPressed(Button.B, function () {
    number_2 += 1
    basic.showNumber(number_2)
})
let number_2 = 0
let number_1 = 0
basic.showIcon(IconNames.Heart)
basic.showNumber(0)
