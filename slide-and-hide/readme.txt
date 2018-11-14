Description
- This is a script for a click slider using css transition for the animations. The basic layout of the slider is this, the slider container has overflow of none and all of the elements are absolute positioned. The first element is always set to 1 column widths behind the container. The rest of the elements keep spacing themselves out right. When a slider control button is clicked the elements will shift in that direction. Depending on which direction the elements are moving, the end element will be moved to the opposite end of the elements row.
- slide-first is hidden and to the left by default
- slide-last is hidden and to the right by default
- on click the elements slide over and the slide-last now get the class slide-first(vice versa for other direction)

Dependencies
- Jquery


Editing Notes
- all of the columns must be same height and width
- first .slide-column must have slide-first class
- last .slide-column must have slide-last class
- edit the scripts.js config variables
