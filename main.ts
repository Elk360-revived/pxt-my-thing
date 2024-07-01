function Pin_thingy () {
    for (let index = 0; index < 4; index++) {
        pins.A0.digitalWrite(true)
        pins.D3.digitalWrite(true)
    }
}
