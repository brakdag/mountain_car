var env
var sim
var obs

function setup() {
	env = new Mountain_car()
	//sim = new Simulation()
	createCanvas(env.viewer.width, env.viewer.height);	
	frameRate(env.frame_rate)
	obs=env.reset()
	//console.log(obs)
}

function draw(){
	clear();
	let x=1
	if (keyIsDown(LEFT_ARROW)) {x = 1;}
	if (keyIsDown(RIGHT_ARROW)) { x = 2;}
	let resp = env.step(x)
	obs=resp.state
	env.draw()
	//console.log(resp)
}