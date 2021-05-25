const MENU = 4
const TRAINING = 1
const MANUAL = 2
const ELITE = 3
const FAST = 5
class Menu{
	constructor(initial_state){
		this.status=initial_state
	}
	evaluate(key){
		//console.log(key)
		switch(key){			
			case 27: this.status=MENU;break;
			case 77: this.status=MANUAL;break;
			case 87: 
						sim.train(env,obs)
						this.status=TRAINING;
						break;
			case 84: 
						this.status=ELITE;
						sim.test(env,obs)
						break;
			case 70: 
					this.status=FAST;
					sim.fast_train(env,obs)
					break;
		
		}
	}
	draw(env){
		switch(this.status){
			case MENU: this.menu();break;
			case MANUAL: this.manual(env);break;
			case TRAINING: this.training(env);break;
			case ELITE: this.elite(env);break;	
		}
	}
	menu(){
		 fill(10);
		 textSize(50)
		 text("MOUNTAIN CAR",80,80)
		 textSize(25)
		 text("[M] MANUAL MODE.",50,150)
		 text("[T] ELITE TEST.",50,180)
		 text("[W] SIMULATION.",50,210)
		 text("[ESC] RETURN THIS MENU.",50,240)
		 text("[F] FAST TRAINING",50,270)
		 	 
	}
	manual(env){
		 fill(10);
		 textSize(20)
		 text("Press [LEFT] OR [RIGHT] KEY TO IMPULSE.",10,20)
		 noFill()
		let x=1
		if (keyIsDown(LEFT_ARROW)) {x = 1;}
		if (keyIsDown(RIGHT_ARROW)) { x = 2;}
		let resp = env.step(x)
		obs=resp.state
		if (resp.done==1) env.reset();
		env.draw()	
	}
	training(env){
		let resp=sim.step(env,obs)
		obs=resp.state
		env.draw()
		sim.draw()
	}
	elite(env){
		let resp=sim.step(env,obs)
		obs=resp.state
		env.draw()
		sim.draw()
	}

	fast(env){
		
	}
}


