let list_2 = 0
let list = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(list_2)
    list_2 += 1
    if (list_2 == 4) {
        list_2 = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    list = 0
    list_2 = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(list)
    list += 1
    if (list == 5) {
        list = 0
    }
})
