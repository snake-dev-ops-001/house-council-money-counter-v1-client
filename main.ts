input.onButtonPressed(Button.A, function () {
    radio.sendString("money request!")
    radio.sendString("+1")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "yes") {
        basic.showString("apprroved!")
    } else {
        basic.showString("declined!")
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
radio.sendString("client-online")
music.play(music.stringPlayable("C D E F C C C C ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
