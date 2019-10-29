
## Exercise 2:
   
   
In the classic problem of Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e, each disk sits on top of an even larger one). You have the following constrains:

1. Only one disk can be moved at a time.
2. A disk is slid off the top of one tower onto another tower.
3. A disk cannot be placed on top of smaller disk.

## The algorithm

To solve the problem of Towers of Hanoi, one has to first think how to solve it manually:

Let's represent a first sample case of three towes and one disk as:

    1//-//-
Where 1 is the position of the disk.

 
To solve the problem with one disk, the next stage should be:

    -//-//1
    
We will now add one additional layer of complexity and solve the problem for two disks and three towers:

Disks=2, where smaller numbers represent smaller disks, and the number on the left is the disk located on top:

    12//-//-
    
    2//1//-
    -//1//2
    -//-//12
    
Disks =3

    123//-//-
    
    23//-//1
    3//2//1
    3//12//-
    -//12//3
    1//2//3
    1//-//23
    -//-//123
    
We can observe that the number of steps increments exponentially:

number of moves= (2**number of levels)-1

We decide the destination of the first move by checking if the first disk is even or odd. From there, we will keep moving the disks in this order (origin moves to first destination), (origin moves to second destination), (second destination moves to origin) until we solve the game.

Therefore, the algorithm that solves the towers of Hanoi problem should be as follows:

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


I built this algorithm in the class HannoySolver with the function solve()


## Solution2:

Following the algorithm defined above, we can observe a case where the disk has to be moved to the destination, and where the origin and destination keep changing in a constant manner. There, we can trace its behavior as follows:

http://www.cs.utah.edu/~rmills/hanoi/hanoi_treeRecursion.jpg

As shown in the image the moves draw a tree that is an easy structure to explore recursively as follows:

    move(disk, source, inter, dest)
    
        IF disk is equal 1, THEN
              move disk from source to destination
        ELSE
              move(disk - 1, source, destination, intermediate)   // Step 1
              move disk from source to destination                 // Step 2
              move(disk - 1, intermediate, source, destination)   // Step 3
        END IF
           
    END


This second algorithm is easier as it allows to reduce the number of calculations.

I built this solution in the class HannoySolver with the function solve2()
## Decision

The second solution uses less resources and therefore should be considered the best solution performance-wise. A disadvantage of this second solution is that it will be complicated for a new developer to change its behavior or edit the code.

In contrast, the first implementation uses more resources goes through more calculations. However, the code is very easy to understand and it would be straightforward for a new developer to edit or update the code.  

Therefore, if the code will be updated regularly, then the best implementation is the first one because it is more readable than the second one. In turn,  if a new developer will be able to easily update the code because the program is easy to understand. has to change it's behavior it will have an easier time understanding the program. This ultimately translates into a code that is cheaper to update.

If performance is a decisive factor, we could either use the second implementation or also greatly speed up the code by implementing the algorithm in a compiled language like c rather than an interpreted one.

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


