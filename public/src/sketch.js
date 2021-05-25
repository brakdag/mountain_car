var env
var sim
var obs
var mn

function preload(){
	fuente = loadFont("./assets/VCR_OSD_MONO.ttf")
}

function setup() {
	mn  = new Menu(MENU)
	env = new Mountain_car()
	sim = new Simulation()
	createCanvas(env.viewer.width, env.viewer.height);	
	frameRate(env.frame_rate)
	textFont(fuente)
	obs=env.reset()
}

function draw(){
	clear()
	mn.draw(env)
}

function keyPressed(){
	mn.evaluate(keyCode)
}

