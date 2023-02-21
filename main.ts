let A_score = 0
let B_score = 0
input.onButtonPressed(Button.A, function () {
    A_score = A_score + 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("321")
    basic.pause(2500)
    B_score = 0
    A_score = 0
    basic.pause(10000)
    basic.showNumber(10)
    basic.pause(10000)
    if (A_score > B_score) {
        basic.showString("A won")
    } else if (A_score == B_score) {
        basic.showString("Tie")
    } else {
        if (A_score < B_score) {
            basic.showString("B won")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    B_score = B_score + 1
})
