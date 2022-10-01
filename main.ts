function setServo3 (newPos: number) {
    if (newPos <= servo3Degrees) {
        while (servo3Degrees > newPos) {
            servo3Degrees += -1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, servo3Degrees)
            basic.pause(speed)
        }
    }
    if (newPos >= servo3Degrees) {
        while (servo3Degrees < newPos) {
            servo3Degrees += 1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, servo3Degrees)
            basic.pause(speed)
        }
    }
}
function setServo1 (newPos: number) {
    if (newPos <= servo1Degrees) {
        while (servo1Degrees > newPos) {
            servo1Degrees += -1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, servo1Degrees)
            basic.pause(speed)
        }
    }
    if (newPos >= servo1Degrees) {
        while (servo1Degrees < newPos) {
            servo1Degrees += 1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, servo1Degrees)
            basic.pause(speed)
        }
    }
}
function setServo2 (newPos: number) {
    if (newPos <= servo2Degrees) {
        while (servo2Degrees > newPos) {
            servo2Degrees += -1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, servo2Degrees)
            basic.pause(speed)
        }
    }
    if (newPos >= servo2Degrees) {
        while (servo2Degrees < newPos) {
            servo2Degrees += 1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, servo2Degrees)
            basic.pause(speed)
        }
    }
}
function setServo4 (newPos: number) {
    tempServoValue = newPos
    if (tempServoValue <= 90) {
        tempServoValue = 90
    }
    if (tempServoValue <= servo4Degrees) {
        while (servo4Degrees > tempServoValue) {
            servo4Degrees += -1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, servo4Degrees)
            basic.pause(speed)
        }
    }
    if (tempServoValue >= servo4Degrees) {
        while (servo4Degrees < tempServoValue) {
            servo4Degrees += 1
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, servo4Degrees)
            basic.pause(speed)
        }
    }
}
let tempServoValue = 0
let servo4Degrees = 0
let servo3Degrees = 0
let servo2Degrees = 0
let servo1Degrees = 0
servo1Degrees = 90
servo2Degrees = 90
servo3Degrees = 90
servo4Degrees = 90
let speed = 50
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, servo1Degrees)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 90)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 90)
basic.forever(function () {
    setServo4(150)
    setServo1(0)
    setServo3(40)
    setServo2(60)
    setServo4(90)
    setServo2(120)
    setServo1(90)
    setServo4(150)
    setServo2(90)
    setServo3(90)
    setServo1(90)
})
