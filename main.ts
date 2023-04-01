input.onButtonPressed(Button.A, function () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 100)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 100)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 100)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 100)
})
input.onSound(DetectedSound.Loud, function () {
    if (true) {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 50)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 50)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 50)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 50)
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
input.onButtonPressed(Button.B, function () {
    mecanumRobot.state(MotorState.stop)
})
irRemote.connectInfrared(DigitalPin.P9)
mecanumRobot.setLed(LedCount.Right, LedState.ON)
mecanumRobot.setLed(LedCount.Left, LedState.ON)
basic.forever(function () {
	
})
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 100)
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 100)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 100)
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 50)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 50)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 50)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 50)
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 50)
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 50)
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 50)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 50)
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
