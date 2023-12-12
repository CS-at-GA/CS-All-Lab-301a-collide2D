# Collide, part 2

Now, we need to actually check for collisions, but where should we do this? There are probably a couple good answers, but no matter how you cut it, this should be a part of the `Mover` class, and it should probably be a function.  

One could argue that this should be a `static` function such that the code we would call would look something like this:

```javascript
// in setup
a = Mover.createRandom();
b = Mover.createRandom();
// in draw
if( Mover.collided(a,b) ) {
  // do something
}
```

One could also make a function that belongs to an object such that the code we would call would look something like this: 

```javascript
// in setup
a = Mover.createRandom();
b = Mover.createRandom();
// in draw
if( a.collided(b) ) {
  // do something
}
```

And, in fact, you could do both. In this example, to get practice using `this` and working with objects, we will do it the second way. Let's have a look:

```javascript
class Mover {
//...
  collided(otherMover) {
    return collideCircleCircle(
      this.position.x, this.position.y, this.r,
      otherMover.position.x, otherMover.position.y, otherMover.r
    )
  }
}
```

Easy, we just use our function to pull out the required information for the `collide2D` function, pass it along and return the result. Programming is easy! 

## Goals

1. Write a `static` version of the function.
2. While we are working here, let's add a static function to make a random `Mover` where we click our mouse.
3. **Honors** rewrite the class to have both versions of the function, but only do the _work_ in one of them.