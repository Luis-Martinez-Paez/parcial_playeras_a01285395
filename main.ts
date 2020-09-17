input.onButtonPressed(Button.B, function () {
    basic.showNumber(cant_playeras_mujer)
    basic.showString("Mujer")
    basic.showNumber(cant_playeras_hombre)
    basic.showString("Hombre")
    basic.showString("Total:")
    basic.showNumber(precio_playeras_hombre + precio_playeras_mujer)
})
let precio_playeras_hombre = 0
let precio_playeras_mujer = 0
let cant_playeras_hombre = 0
let cant_playeras_mujer = 0
cant_playeras_mujer = randint(20, 200)
cant_playeras_hombre = randint(20, 200)
precio_playeras_mujer = cant_playeras_mujer * 250
precio_playeras_hombre = cant_playeras_hombre * 200
basic.forever(function () {
	
})
