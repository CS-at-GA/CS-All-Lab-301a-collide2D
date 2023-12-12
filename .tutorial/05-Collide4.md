# Collide, part 4

We could bounce the balls, but doing it well [requires a lot of math I don't feel like doing](https://ericleong.me/research/circle-circle/), so let's just change colors instead. And actually, we are still going to do some math. 

When two balls collide, let's mix their colors using [`lerpColor`](https://p5js.org/reference/#/p5/lerpColor). The way the function works is that it takes two colors and a percent distance between them and returns that color. So, in our code example, we'd have this...

```javascript
// nested for loops over i and j
  if( movers[i].collided( movers[j] ) ) {
    const fromColor = movers[i].c;
    const toColor = movers[j].c
    //... distance calculation
    movers[i].c = lerpColor(fromColor,toColor,d);
    movers[j].c = lerpColor(toColor,fromColor,1-d);
  }
//
```

How we calculate that distance is entirely up to us, but let's have some fun with it. Let's base it off of size (the larger ball will have a greater influence over the color change), and also to have a partial effect take place, since it will be happening repeatedly. 

So, math time. Since we are looking for a ratio, essentially, we will sum the radii of the two circles and use each circle's proportion of that total radii as a baseline for the distance:

```javascript
// distance calculation
const totalRadii = movers[i].r + movers[j].r
const di = movers[i].r/totalRadii;
const dj = movers[i].r/totalRadii;
```

Then, let's reduce the total effect by 1/100;

```javascript
// distance calculation
// ...
const di = movers[i].r/totalRadii/100;
const dj = movers[i].r/totalRadii/100;
```

And now the code will look like this:

```javascript
// nested for loops over i and j
  if( movers[i].collided( movers[j] ) ) {
    const fromColor = movers[i].c;
    const toColor = movers[j].c
    const totalRadii = movers[i].r + movers[j].r
    const di = movers[i].r/totalRadii/100;
    const dj = movers[j].r/totalRadii/100;    
    movers[i].c = lerpColor(fromColor,toColor,di);
    movers[j].c = lerpColor(toColor,fromColor,dj);
  }
//
```