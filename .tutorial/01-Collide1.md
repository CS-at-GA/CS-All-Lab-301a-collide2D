# Collide, part 1

Ok, let's get these things colliding with one another. To do this, we need to know how the [`collide2d`](https://github.com/bmoren/p5.collide2D) library works. As you can see, there are a ton of functions in this library, all of the format `collideAB` where `A` and `B` are different geometric constructions. `Mover`s circles, at least for the time-being, so the function we are looking for is [`collideCircleCircle`](https://github.com/bmoren/p5.collide2D#collidecirclecircle). 

In this documentation, you can see a couple of things. First, we have to pass in the properties of both circles to the function. Second, the function returns a boolean if there is a collision between those two circles. Third, the function assumes `ellipseMode(CENTER)`. 

The last one of this turns out to be a bit problematic, since our code assumes `ellipseMode(RADIUS)`. `CENTER` is the default and what it does is interpret the third parameter of the `circle` call as its width and height, rather than the radius, which effectively doubles the size of the circles. This doesn't really impact us in terms of drawing the circles, but it does impact how we calculate the collision with the wall. We now need to adjust all references to `this.r` by half. 

# Goals

In `script.js`, change the ellipse mode to `CENTER` and make the appropriate adjustments to the rest of the code. 