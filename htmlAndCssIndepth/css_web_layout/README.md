# CSS WEB LAYOUT 
layout is very important and w would be looking at three different layout properties:

- flexbox
- grid
- box

## Flexbox property 
flexbox property adds responsiveness to css with float elements and positioning one dimensional refers to the fact that a given flex box container will arrange items in either a column or a row along its axis.
The flex box container applied over an element can flex to shrink or expand. Thus resulting in a flexible responsive design
```
#sample {
    display: flex;
}
```
### Alignment properties
 Let’s examine a few alignment properties inside the flex. There are four main properties used to align a flex container and items present inside it:  

- justify-content. For item alignment on main axis.

- align-items. For item alignment on cross axis.

- align-self. For unique flex items on cross axis.

- align-content. Used for packing flex lines and control over space.

Of these, justify-content and align-items are frequently used for the respective two axes. 

Let’s first examine the use of justify-content which has a value of ‘left’ by default.
## Grid property
CSS grid is similar to the flex box except it creates a two dimensional grid along both the row and column axes.while the grid increases dimensionality and helps to create an advanced layout with relative ease. It can also lead to increased complications later. If the element rules are not systematically defined.

```
#sample{
    display: grid;
}
```

There is no strict rule on choosing which layout to use, but in general flex boxes are more suitable when you want to create flexible elements in smaller spaces while grids are more suitable to large scale layouts.

