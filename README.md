This is a project that i'm realy proud of, i remake a calculator and could make this 
with much more efficiency than i thought i could.

https://github.com/Jefferson13t/Calculator_2.0/issues/2#issue-742758718

The older version of this calculator -not that old- that i made you can find right here in my gitHub profile and see
the awful logic that used to create it. At this time i did it much more usable and did it with only 
55 lines of code, the previous took 217 lines and it were not complete for use.

The logic of this project is very simple and i tried to use the concepts of functional programming
and of clean code. It has three parts: input, treatment of data and output, i tried my best to keep
those parts separeted and only doing its function, and i think that i made a good job. 

The firts part is of the inputs, where the values to operate are taken. A control variable decides if 
the number pushed are going to be pushed in the first or the second value, and it switches when click 
on a operation signal. i decided to use only buttons, not textBoxes nor numbers input, to make this 
a real trial.

The second part is the business rule, this part is way to simple so i will only explain what it does, 
if you wanna know how check the code, it is very intuitive. It takes the numbers and pushes into a function
that verify the operation to be called then call it with the values as parameters, and pushes the return 
of this in a variable.

The third part only take the result and shows on screen with a DOM manipulation.
