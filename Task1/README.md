# TASK 1:

Create a small application that allows a user to enter the dimensions and coordinates of two cubic objects in a 3-dimensional space. The two cubes are parallel to each other (they are not rotated in any way). Once the information has been entered, the application should calculate if the two cubes intersect, and if so, what the volume of the shared space is.
Note: the coordinates specify the CENTER of the cube!


## Sample Data:
        Cube A: Size = 4m. Coordinates: x = 7m, y = 7m, z = 0
        Cube B: Size = 2m. Coordinates: x = 6m, y = 6m, z = 0


## Result:

To asert the collision of the cubes and the volume intersection i build the library intersection. In this library we have the function cartesianCubesIntersect wich handles the intersection of two cubes with the same characteristics of the resulting cubes.

The function cartesianCubesIntersect uses the particularity of the cubes described in the statement to answer if they colide and the volume of the interection. To that end cartesianCubesIntersect uses the class CartesianCube that uses the fact that the cubes have the edges parallel to the axes to check the colition of the cubes and in given case the volume of the intersection.

The main questions CartesianCube solves are:

##### 1.  Do the cubes intersect?

In the sample case the cubes intersect. we confirmed that using the function cartesianCubeIntersection as all the edges of any of the statment cubes are parallel to the edges


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

#### 2.  What is the volume of the shared space?

In the sample case the shared volume is 8. We confirmed that using the function cartesianCubeVolumeOfIntersection. As the resulting hexahedron will have it's edges parallel to the axis we just neded to know the minimum and maxim values each axis could have to build the resulting hexaedron and get it's volume



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


#### 3. Other possible solutions

Another possible solution would be to use the Monte Carlo Estimation to check the resulting volume of the collision

The idea is to try N random points in a finite space containing the intersecting volume. As we are able to easily check if a point is part of the intersection, we can easily manage a large sample of points. Using that sample we are able to estimate the probability to be part of the intersected space for a random point. 

We know the volume of the observed space, thus we can deduce the volume of the intersected space is: the volum of the observet space multiplied by the probability of being part of the intersected space

    Intersected volume = volume observation x probability of random point being inside intersection
    
A resulting code in python would be the following


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
    
To use this structure we would just need the maximum distance from the center of coordinates and the volum of the intersecting figures.

In the sample case scenario:

        
    r=4
    print(Volume(Cube(7,0,0,0),Cube(1,3.5,3.5,0),r))
    

The bigest advantage of this method is that it doesen't just allows us to get the volume of two intersecting cubes, we could define any other figure and the code would be able to estimate it's volume.
We could for example do the following:

    class Sphere:
      def __init__(self, radius):
        self.radius = radius
      
      def pointColides(self,x,y,z):
        return(np.sqrt(x**2 + y**2 + z**2) < self.radius)
        
    
    r=1
    print(Volume(Cube(1,0.5,0.5,0.5),Sphere(1),r))


The major drawback of this method is that we need to check N random points. But for complex forms this is a grat succes

To check the Monte Carlo method i build the script ***Monte Carlo.ipynb*** executable in google coolab
