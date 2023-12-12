# Physics Lab 02 - collide2D

In this lab we are going to make use of a library to allow us to detect collisions between objects. Certainly, we could do what the author of the library did use math and a [good resource](http://www.jeffreythompson.org/collision-detection/table_of_contents.php), but it is somewhat out of the scope of what we are trying to do. Instead, we will rely on the good work of Ben Moren and his [collide2D library](https://github.com/bmoren/p5.collide2D).

To use it, we need to actually edit our `index.html` file. We will include the following `script` tag in the `body` of the file, just above the `script` tag for our own `script.js` file. This loads the linked javascript file and allows us to access the functions.

```html
<script defer src="https://unpkg.com/p5.collide2d"></script>
```

## Lab

With that done, we will now see how it works in the [tutorial](.tutorial/00-Overview.md)
