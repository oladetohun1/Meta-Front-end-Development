# JavaScript modules
A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application.

## files structure
```
index.html
main.js
modules/
    canvas.js
    square.js
```

## Exporting modules features
```
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

## A more convenient way of exporting 
```
export { name, draw, reportArea, reportPerimeter };
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";

```

## importing modules using import map
```
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/moduleshapes/square.js";
```

# DOM
doucment - to return the dom
document.querySelector('element') => to select the first instance of an element
document.querySelector('element') => to select the all instance of an element

document.getElementById('id),document.getElementByClassName('classname),= to slect by id and class rspectively