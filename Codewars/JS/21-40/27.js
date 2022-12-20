// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

function distanceBetweenPoints(a, b) {
  let k1 = (b.x - a.x) ** 2
  let k2 = (a.y - b.y) ** 2
  return Math.sqrt(k1 + k2)
}
