input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.ForeverInBackground)
    for (let index = 0; index < 3; index++) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
    }
    music.stopMelody(MelodyStopOptions.Background)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.ForeverInBackground)
    for (let index = 0; index < 4; index++) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 117)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 115)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 103)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 97)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 70)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 90)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        basic.pause(1000)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 82)
        basic.pause(1000)
    }
    music.stopMelody(MelodyStopOptions.Background)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
