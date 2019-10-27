# TASK 1:

Create a small application that allows a user to enter the dimensions and coordinates of two cubic objects in a 3-dimensional space. The two cubes are parallel to each other (they are not rotated in any way). Once the information has been entered, the application should calculate if the two cubes intersect, and if so, what the volume of the shared space is.
Note: the coordinates specify the CENTER of the cube!


## Sample Data:
        Cube A: Size = 4m. Coordinates: x = 7m, y = 7m, z = 0
        Cube B: Size = 2m. Coordinates: x = 6m, y = 6m, z = 0


## Result:

To asert the collision of the cubes and the volume intersection i build the library intersection. In this library we have the function cartesianCubesIntersect wich handles the intersection of two cubes with the same characteristics of the cubes described in the statement.

The function cartesianCubesIntersect uses the particularity of having the edges parallel to the axes to answer if they colide and the volume of the interssection. To that end cartesianCubesIntersect uses the class CartesianCube that describes a cube with this particularity.

    cartesianCubesIntersect(cube1: CartesianCube, cube2: CartesianCube) {
        let intersection= {
            intersection:cube1.cartesianCubeIntersection(cube2),
            volume: cube1.cartesianCubeVolumeOfIntersection(cube2)
        };
        return intersection;
    }

In particular cartesianCube solves us:

##### 1.  Does the cube intersect with another cube?

The cartesianCube class have the funcion cartesianCubeIntersection wich asserts if another cartesianCube collides with the cube described by the class. It does that by looking if for all the axes the distance between the centers of the cubes is less than the sumatory of half the sides distance. This works for the cartesianCubes as all the edges of the cube follow the axes, as stated before.

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

The function cartesianCubeVolumeOfIntersection of the class cartesianCube gives us the volume of the collision space between the cartesianCube by the class and another cartesianCube.

As the hexahedron resulting from that colition will have it's edges parallel to the axis. We just need to know the cube minimum and maxim values for each axis. With that information we can know the vertices of the resulting hexaedron and get it's volume.


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


#### 4. Other possible solutions

Another possible solution would be to use the Monte Carlo Estimation to check the resulting volume of the collision

The idea is to try N random points in a finite space containing the intersecting volume. As we are able to easily check if a point is part of the intersection, we can easily manage a large sample of points. Using that sample we are able to estimate the probability for a random point to be part of the intersected space. 

As we know the volume of the observed space, thus we can deduce the volume of the intersected space is: the volum of the observet space multiplied by the probability of being part of the intersected space.

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
    
To use this implementation we would just need to specify the maximum distance from the center of coordinates and the volume of the intersecting figures.

In the sample case scenario:

        
    r=4
    print(Volume(Cube(7,0,0,0),Cube(1,3.5,3.5,0),r))
    

The bigest advantage of this method is that it doesen't just allows us to get the volume of two intersecting cubes, we could define any other figure and the code would be able to estimate it's volume.

For example, we could define an sphere as we do in the following code:

    class Sphere:
      def __init__(self, radius):
        self.radius = radius
      
      def pointColides(self,x,y,z):
        return(np.sqrt(x**2 + y**2 + z**2) < self.radius)
        
    
    r=1
    print(Volume(Cube(1,0.5,0.5,0.5),Sphere(1),r))


The major drawback of this method is that we need the computation of N random points. In contrast with the geometrical way, that it would had the cost of calculaing one point. So althought for complex volumes this aproximation could be a realy reasonable way. In this particular case i prefer the geometrical way.

To check the Monte Carlo method i build the script ***Monte Carlo.ipynb*** executable in google coolab
