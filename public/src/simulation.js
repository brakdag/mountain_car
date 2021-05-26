var y=0
class Simulation{
  constructor(){
    this.brain = {"neurons":[2,3,2],"weights":[-0.3009018711481377,2.4521966242550803,1.6153652087718566,0.6600180905009052,0.24100870254675688,-2.035925643979285,0.7248828987540787,0.17629666401322241,-0.9438295115295408,1.0066862337941662,0.15616828513148762,0.7141479696921635]}
    this.end_sim=false
    this.initial_score=2000
    this.state = 0
    this.config={networkshape:[2,[3],2],generations:10,population:100}
    this.Neuvol = new Neuroevolution({network:this.config.networkshape ,population:this.config.population})
    this.gen = this.Neuvol.nextGeneration();
  }

  train(c,obs){
    this.Neuvol.restart() 
    this.gen = this.Neuvol.nextGeneration();  
    this.state=1
    this.generation=0
    this.genoma=0
    this.score=this.initial_score
    this.scores=[]
    c.reset()
  }

  step(c,observation){
   
    if (this.generation > this.config.generations-1){
      this.end_sim=true
    }
    var r=this.gen[this.genoma].compute(observation)
    this.result=c.step(r[0]>0.5?(r[1]<0.5?0:2):1)
    //console.log(r,this.result)
    if(this.result.done==1){
      this.Neuvol.networkScore(this.gen[this.genoma],this.score);
      this.genoma++
      this.scores.push(this.score)
      if (this.genoma > this.config.population-1){
         this.gen = this.Neuvol.nextGeneration();
        if(y%1==0)console.log({genoma:this.genoma,generation:this.generation,score:Math.max.apply(null,this.scores)})
        this.generation++
        this.genoma=0;
        this.scores=[]
      }
      this.score=this.initial_score
      c.reset();
    }
    else{
      this.score+=this.result.reward
    }
    return this.result
  }


draw(){
      resetMatrix()
      textSize(20)
      fill(10)
      text(`Generation:${sim.generation}, Brain:${sim.genoma}`, 5, 25);
      text(`Score:${sim.score.toFixed(2)},OBS:${obs.map(a=>a.toFixed(5))}`, 5, 50);
      text(`Action:${env.last_u}`, 5, 75);      
      noFill()
}

test(c,ob){
    this.train(c,obs)
    for(var i in this.gen)
    this.gen[i].setSave(this.brain)
}

fast_train(c,obs){
    while(1){
      let result=this.step(c,obs)
      obs= result.state
      if(this.end_sim) break;
    }
    this.brain=this.gen[0].getSave()
}


}
