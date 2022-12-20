// Given two points P and Q, output the symmetric point of point P about Q. 
// Each argument is a two-element array of integers representing the point's X and Y coordinates. 
// Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

function symmetricPoint(p, q) {
  const rx = q[0] * 2 - p[0]
  const ry = q[1] * 2 - p[1]
  return [rx, ry]
}
