
## Exercise 2:
   
   
In the classic problem of Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e, each disk sits on top of an even larger one). You have the following constrains:

1. Only one disk can be moved at a time.
2. A disk is slid off the top of one tower onto another tower.
3. A disk cannot be placed on top of smaller disk.

## The algorithm

To solve the problem of Towers of Hanoi, one has to see first how he would solve it manualy

So lets represent a sample case as:

        1//-//-
        
To solved the next stage should be:

        -//-//1
        
Lets show differnt cases from less complex to more complex:

levels = 2


        12//-//-
        
        2//1//-
        -//1//2
        -//-//12

levels =3

        123//-//-
        
        23//-//1
        3//2//1
        3//12//-
        -//12//3
        1//2//3
        1//-//23
        -//-//123
        

From the stated before we can see that the number of steps have an exponential incrementation:

number of moves= (2**number of levels)-1

And to know the destination of the first move we have to see if the first disk is even or odd:
Once done that we will keep changing the pices in this order(origin, first destination), (origin, second destination), (second destination, origin) until wee solve the game

Therefore, the algorithm should be as follows:
        
    1. Calculate the total number of moves required i.e. "pow(2, n)
       - 1" here n is number of disks.
    2. If number of disks (i.e. n) is even then interchange destination
       pole and auxiliary pole.
    3. for i = 1 to total number of moves:
         if i%3 == 1:
        legal movement of top disk between source pole and
            destination pole
         if i%3 == 2:
        legal movement top disk between source pole and
            auxiliary pole
         if i%3 == 0:
            legal movement top disk between auxiliary pole
            and destination pole
        

## Solution:


I build this algorithm in the class HannoySolver with the function solve()


## Solution2:

Following the algorithm defined before, we can observe a base case, when the disk has to be moved to the destination, and that the origin and destination keep changing in a constant way, knowing that we can trace it's behavior as follows:

http://www.cs.utah.edu/~rmills/hanoi/hanoi_treeRecursion.jpg

As shown in the image the moves draw a tree that is an structure easy to explore recursively as follows

        move(disk, source, inter, dest)
        
            IF disk is equal 1, THEN
                  move disk from source to destination
               ELSE
                  move(disk - 1, source, destination, intermediate)   // Step 1
                  move disk from source to destination                 // Step 2
                  move(disk - 1, intermediate, source, destination)   // Step 3
               END IF
               
            END
            
With that we can avoid lots of calculations

I build this solution in the class HannoySolver with the function solve2()

## Decision

Given the fact that it uses less resources the second solution should be considered  the best performance wise

But I prefer the first implementation, although it uses more recurses as it has to do more calculations.

The main reason for that is that it's more readable than the second one. And if a new developer has to change it's behavior it will have an easier time understanding the program. So in conclusion any update would be cheaper.

Furthermore If the performance is a decisive factor, a great speed up could be archived by implementing the algorithm in a compiled language like c rather than an interpreted one, and also if all we want is a better execution time the solution is rather simple: It's as easy as to look for a better machine.

## How to test the implementations

1.- Clone or download the repository.

    git clone https://github.com/Francescde/provesdeNivell.git

2.- On that terminal go to this folder

    cd provesdeNivell/Task2/HanoyTowers

2.- Install the dependancies

    npm install

4.- Run the tests on the subfolder Tests

    npm test

5.- Run the test coverage

    npm run coverage


