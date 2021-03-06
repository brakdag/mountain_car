# mountain_car
This problem was first described by Andrew Moore in his PhD thesis. Port openai gym environment to javascript.

![Mountaincar](https://github.com/brakdag/mountain_car/raw/main/doc/car.png)

## Try it now online!
[Mountain Car](https://brakdag.github.io/mountain_car/)

## How install in local server.

* nodejs > v14.0.0
* browser

```sh
git clone https://github.com/brakdag/mountain_car.git
npm install
npm start
```
 Test in browser
[localhost port 3000](http://localhost:3000/)

# Original information.
    
* Description:
        The agent (a car) is started at the bottom of a valley. For any given
        state the agent may choose to accelerate to the left, right or cease
        any acceleration.

*    Source:
        The environment appeared first in Andrew Moore's PhD Thesis (1990).

*    Observation:

        Type:Box(2)
        |Num |   Observation |               Min    |        Max|
        |-|-|-|-|
        |0   |   Car Position |             -1.2     |      0.6|
        |1   |   Car Velocity  |            -0.07    |      0.07|

*    Actions:
       
        Type: Discrete(3)
       |Num  |  Action|
       |--|--|
       | 0    |  Accelerate to the Left|
       | 1    |  Don't accelerate|
       | 2    |  Accelerate to the Right|

        Note: This does not affect the amount of velocity affected by the
        gravitational pull acting on the car.

*    Reward:
         Reward of 0 is awarded if the agent reached the flag (position = 0.5)
         on top of the mountain.
         Reward of -1 is awarded if the position of the agent is less than 0.5.

*    Starting State:
         The position of the car is assigned a uniform random value in
         [-0.6 , -0.4].
         The starting velocity of the car is always assigned to 0.

*    Episode Termination:
         The car position is more than 0.5
         Episode length is greater than 200
    

