radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        screen_timer = 20
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        screen_timer = 20
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . # #
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (state == 0) {
        music.play(music.stringPlayable("F A C5 - - - - - ", 800), music.PlaybackMode.InBackground)
        radio.setGroup(channel)
        state = 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        if (channel <= 0) {
            channel = 9
        } else {
            channel += -1
        }
        basic.showNumber(channel)
    } else if (state == 1) {
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        if (channel >= 9) {
            channel = 0
        } else {
            channel += 1
        }
        basic.showNumber(channel)
    } else if (state == 1) {
        radio.sendNumber(1)
    }
})
let screen_timer = 0
let channel = 0
let state = 0
state = 0
channel = 0
basic.showNumber(channel)
basic.forever(function () {
    if (state == 1) {
        if (screen_timer > 0) {
            screen_timer += -1
        } else {
            basic.clearScreen()
        }
    }
})
