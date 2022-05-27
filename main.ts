DFRobotMaqueenPlus.I2CInit()
let atala_1 = 1
let atal_2 = 0
let atala_3 = 0
basic.forever(function () {
    if (atala_1 == 1) {
        if (0 == (false && false)) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        }
    }
})
basic.forever(function () {
    if (atala_3 == 1) {
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 15) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 10) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
            basic.showIcon(IconNames.Ghost)
            atala_3 = 0
        }
    }
})
