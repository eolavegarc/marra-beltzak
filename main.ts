DFRobotMaqueenPlus.I2CInit()
let atala_1 = 1
let atal_2 = 0
let atala_3 = 0
basic.forever(function () {
    if (atal_2 == 1) {
        basic.showNumber(1)
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) == 30) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) == 15) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) == 10) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
            basic.showIcon(IconNames.Ghost)
            atala_1 = 0
            atal_2 = 1
        }
    }
})
