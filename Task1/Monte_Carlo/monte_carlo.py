# -*- coding: utf-8 -*-
"""Monte Carlo.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1xc3O_zqnW0ZGoZ94r6MsHBBd1w0egPly
"""

import numpy as np
import math
dim=3
iterations=30000000




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

r=4
print("aprox")
print(Volume(Cube(7,0,0,0),Cube(1,3.5,3.5,0),r))
print("result")
print(1/4)
r=2
print("aprox")
print(Volume(Cube(1,0.5,0.5,0.5),Cube(1,0,0,0),r))
print("result")
print(1/8)
r=11
print("aprox")
print(Volume(Cube(4,7,7,0),Cube(2,6,6,0),r))
print("result")
print(8)

class Sphere:
  def __init__(self, radius):
    self.radius = radius
  
  def pointColides(self,x,y,z):
    return(np.sqrt(x**2 + y**2 + z**2) < self.radius)
r=2
print("aprox")
print(Volume(Cube(1,0.5,0.5,0.5),Sphere(1),r))
r=1
print("aprox")
print(Volume(Cube(1,0.5,0.5,0.5),Sphere(1),r))

