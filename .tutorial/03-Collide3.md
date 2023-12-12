# Collide, part 3

Of course, our `Mover` class now has the ability to detect when two `Mover` objects collide, but we haven't actually written the code to use that functionality nor respond to the collisions. This is a little tricky, so let's plan out what we are going to do. 

First of all, we have, potentially, many `Mover` objects. How can we check to see if _any_ of them have collided? Let's say we have five `Mover` objects which we will call `a`, `b`, `c`, `d`, and `e`. 

How do I see if `a` collides with anything? Well, I could start checking at `a`, but that will _always_ be a collision, so maybe I should start at `b` and check `b`, `c`, `d`, and `e`. 

Now, how about `b`? Again, I _could_ start at `a`, but I have already checked to see if `a` and `b` collided previously. I also _could_ start at `b`, but that doesn't make sense for the reason previously stated, so I should start at `c` and check the rest. 

And so on. 

```
a check b, c, d, e
b check c, d, e
c check d, e
d check e
```

Now, let's think about this in terms of arrays: `[a,b,c,d,e]`. I want to start checking at index 0 and then compare to index 1, 2, and so on. Then I want to move on to index 1, and then compare index 2, 3, and so on. 

```
0 check 1, 2, 3, 4
1 check 2, 3, 4
2 check 3, 4
3 check 4
````

Now let's think about this in terms of loops: 

```javascript
for( let i = 0; i < movers.length-1; i++ ) { // start at 0
  for( let j = i + 1; j < movers.length; j++ ) { // start at the next item
    // i goes from 0 to the second to last item
    // j goes from i+1 to the last item
    if( movers[i].collided( movers[j] ) ) {
      console.log( `${i} collided with ${j}` )
    }
  }   
}
```

It should be worth noting that this code doesn't change the movers in any way, so if two movers collide, they will likely continue to collide over a number of frames. A natural result of running this code will be a lot calls to `console.log` and a I don't recommend you do this (since writing to the console is slow). Let's do something a bit more interesting, though! 