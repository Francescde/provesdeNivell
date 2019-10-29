# TASK 1:

Create a small application that allows a user to enter the dimensions and coordinates of two cubic objects in a 3-dimensional space. The two cubes are parallel to each other (they are not rotated in any way). Once the information has been entered, the application should calculate if the two cubes intersect, and if so, what the volume of the shared space is.
Note: the coordinates specify the CENTER of the cube!


## Sample Data:
        Cube A: Size = 4m. Coordinates: x = 7m, y = 7m, z = 0
        Cube B: Size = 2m. Coordinates: x = 6m, y = 6m, z = 0


## Result:

To assert the collision of the cubes and the intersection volume, I built the intersection library. The library contains the function cartesianCubesIntersect, which handles the intersection of two cubes. The two cubes have the same characteristics as the ones described in the statement.

To answer if the two cubes collide, the function cartesianCubesIntersect uses the assumption -as stated in the problem description- that the cube edges are parallel to each other. The function also assumes that the two cubes are not rotated in any way -as stated-, meaning that the two cubes' axes are perpendicular to the main Cartesian coordinates axes (x, y, z). To that end, cartesianCubesIntersect uses the class CartesianCube that describes a cube with this assumption.

    cartesianCubesIntersect(cube1: CartesianCube, cube2: CartesianCube) {
        let intersection= {
            intersection:cube1.cartesianCubeIntersection(cube2),
            volume: cube1.cartesianCubeVolumeOfIntersection(cube2)
        };
        return intersection;
    }
    
In particular, cartesianCube solves:

##### 1.  Does the cube intersect with another cube?

The cartesianCube class contains the function cartesianCubeIntersection. cartesianCubeIntersection asserts whether another cartesianCube collides with the cube described by the class. To do that, we start by comparing the size of the cubes with the distance between the centers of the cubes. Two cubes do not collide when in at least one of their three axes, the distance between the two cubes' centers is larger than the sum of the two cube's half edge lengths. Therefore, the function cartesianCubeIntersection calculates for each Cartesian axis if the distance between the centers of the two cubes is less than half of the sum of the cube sizes.

    cartesianCubeIntersection( otherCube: CartesianCube){
        //check the X axis
        if(Math.abs(this.center.x - otherCube.center.x) < (this.size + otherCube.size)/2)
        {
            //check the Y axis
            if(Math.abs(this.center.y - otherCube.center.y) < (this.size + otherCube.size)/2)
            {
                //check the Z axis
                if(Math.abs(this.center.z - otherCube.center.z) < (this.size + otherCube.size)/2)
                {
                    return true;
                }
            }
        }
        return false;
    } 

***Using this function we confirmed that in the sample case the cubes intersect.***

#### 2.  What is the volume of the shared space?

The function cartesianCubeVolumeOfIntersection of the class cartesianCube gives us the volume of the collision space between two cartesianCube.

The hexahedron resulting from the collision of the two tubes has edges that are parallel to the main Cartesian axes. Therefore, we just need to know the intersection position of the two cubes. We call these positions as minimum (min) or maximum(max), and we calculate them for each of the three axes. With that information we can know the vertices of the resulting hexaedron, and in turn, calculate its volume.

    cartesianCubeVolumeOfIntersection(other: CartesianCube) {
        let volume:number=0;
        if(this.cartesianCubeIntersection(other)) {
            let HalfSize: number = this.size / 2;
            let cube2HalfSize: number = other.size / 2;
            let minX: number = Math.max(this.center.x - HalfSize, other.center.x - cube2HalfSize);
            let minY: number = Math.max(this.center.y - HalfSize, other.center.y - cube2HalfSize);
            let minZ: number = Math.max(this.center.z - HalfSize, other.center.z - cube2HalfSize);
            let maxX: number = Math.min(this.center.x + HalfSize, other.center.x + cube2HalfSize);
            let maxY: number = Math.min(this.center.y + HalfSize, other.center.y + cube2HalfSize);
            let maxZ: number = Math.min(this.center.z + HalfSize, other.center.z + cube2HalfSize);
            volume = (Math.abs(maxX - minX)) * (Math.abs(maxY - minY)) * (Math.abs(maxZ - minZ));
        }
        return volume;

    }    


***Using this function we confirmed that in the sample case the shared volume is 8.***

#### 3. How to test the implementation


1.- Clone or download the repository.

    git clone https://github.com/Francescde/provesdeNivell.git

2.- On that terminal go to this folder

    cd provesdeNivell/Task1

2.- Install the dependancies

    npm install

4.- Run the tests on the subfolder Tests

    npm test

5.- Run the test coverage

    npm run coverage


#### 4. Other possible solutions

Another possible solution would be to use a Monte Carlo method to measure the resulting collision volume.

Monte Carlo methods rely on random sampling to obtain numerical results. In this problem, Monte Carlo could be used to sample N random points in a finite space containing the intersecting volume of the two cubes. It is simple to check if a point is inside or outside of the intersected volume. Therefore, we can easily manage a large sample of random data points. By the law of large numbers, the probability of a random point being part of the intersected space is directly correlated to the relative volume of the intersected space.

We know the volume of the observed space. Thus, we can deduce that the volume of the intersected space is the volume of the observed space multiplied by the probability of drawing a random point that is part of the intersected space

        Intersected volume = volume observation x probability of random point being inside intersection
    
The following code implements this functionality in python:


    import numpy as np
    import math
    dim=3
    iterations=30000000
    
    class Cube:
      def __init__(self, center, x, y, z):
        self.center = center
        self.x = x
        self.y = y
        self.z = z
      
      def pointColides(self,x,y,z):
        return (abs(self.x - x) <= self.center/2 and
                abs(self.y - y) <= self.center/2 and
                abs(self.z - z) <= self.center/2)
      
    def Volume(fig1,fig2,radio):
        def colision(x,y,z):
          return fig1.pointColides(x,y,z) and fig2.pointColides(x,y,z)
      
        count_in_sphere = 0
        dec=10000
        x= np.random.randint(-radio*dec,radio*dec,iterations)
        x=x/dec
        y= np.random.randint(-radio*dec,radio*dec,iterations)
        y=y/dec
        z= np.random.randint(-radio*dec,radio*dec,iterations)
        z=z/dec
        vfunc = np.vectorize(colision)
        colides = np.where(vfunc(x,y,z))
        count_in_sphere=len(colides[0])
        return np.power(radio*2, dim)* (count_in_sphere / iterations)
    
    

The main advantage of the Monte Carlo method is that it can be easily expanded to estimate the collision space between any two other arbitrary volumes.

For example, we could define a sphere as in the following code:

    class Sphere:
      def __init__(self, radius):
        self.radius = radius
      
      def pointColides(self,x,y,z):
        return(np.sqrt(x**2 + y**2 + z**2) < self.radius)
        
    
    r=1
    print(Volume(Cube(1,0.5,0.5,0.5),Sphere(1),r))


The drawbacks of Monte Carlo are that it relies on large numbers and repeated random sampling. Therefore, it requires calculating the positions of N random points.  In contrast, the geometric solution to the problem has a lower computational cost, because it allows to calculate only the position of the intersection of the two cubes. Therefore, Monte Carlo has the advantage that it can be a simpler solution for arbitrary complex shapes and the drawback of the large random sampling requirement. In this particular problem -only two cubes intersection- the most reasonable solution is to solve the problem from a purely geometrical perspective.

To check the Monte Carlo method I built the script: ***Monte Carlo.ipynb***, which is executable in google coolab
