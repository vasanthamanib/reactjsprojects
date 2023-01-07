// flat concept in JS interview example 

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

//for flat() empty function
arr.flat(); //o/p:-[1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]];

//for flat(2)

arr.flat(2); //o/p:-[1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]];

//for flat(Infinity)

arr.flat(Infinity); //o/p:-[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


