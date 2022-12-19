// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

const factory = x => arr => arr.map(el => el * x)
