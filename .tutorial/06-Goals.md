# Goals

Now you know how `collide2d` works! Let's put that knowledge to use with some exercises. Before that, however, a couple of notes: 

* checking for collisions should probably be done in the draw loop. You can insert the nested loops _after_ the loop for used for updating and drawing, which means we would be "visiting" some movers three times each draw loop. Probably not a huge concern with a small number of movers, but we might want to look for some efficency gains if we are planning on a large number of `Movers` 

1. Starting with this sketch, implement everything we've talked about, but with your own behavior upon collision. I will say that something that would be difficult would be _removing_ objects, but adding objects would work pretty well. Or updating a count. Or doing a non-fancy color change.
2. Change the implementation of `mouseClicked` to have a `Mover` object inserted where the mouse was clicked.
3. Use `collide2D` to change a `Mover` object with your mouse. 
4. **Honors/AP** use `collide2D` to remove a `Mover` object with your mouse.