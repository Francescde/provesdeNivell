
import {Point} from "./Point";

export class CartesianCube implements CartesianCube{
    size: number;
    center: Point;
    constructor( size:number,center:Point){
        this.size=size;
        this.center=center;
    }

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

    getVertices() {
        let halfSize:number= this.size/2;
        let vertices = [];
        vertices.push(new Point(this.center.x-halfSize,this.center.y-halfSize,this.center.z-halfSize));
        vertices.push(new Point(this.center.x+halfSize,this.center.y-halfSize,this.center.z-halfSize));
        vertices.push(new Point(this.center.x-halfSize,this.center.y+halfSize,this.center.z-halfSize));
        vertices.push(new Point(this.center.x+halfSize,this.center.y+halfSize,this.center.z-halfSize));
        vertices.push(new Point(this.center.x-halfSize,this.center.y-halfSize,this.center.z+halfSize));
        vertices.push(new Point(this.center.x+halfSize,this.center.y-halfSize,this.center.z+halfSize));
        vertices.push(new Point(this.center.x-halfSize,this.center.y+halfSize,this.center.z+halfSize));
        vertices.push(new Point(this.center.x+halfSize,this.center.y+halfSize,this.center.z+halfSize));
        return vertices;
    }

    pointInside(point: Point) {
        if(Math.abs(this.center.x - point.x) <= (this.size )/2)
        {
            //check the Y axis
            if(Math.abs(this.center.y - point.y) <= (this.size )/2)
            {
                //check the Z axis
                if(Math.abs(this.center.z - point.z) <= (this.size )/2)
                {
                    return true;
                }
            }
        }
        return false;
    }
}
