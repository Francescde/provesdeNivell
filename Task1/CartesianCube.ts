
import {Vertex} from "./Vertex";

export class CartesianCube implements CartesianCube{
    size: number;
    center: Vertex;
    constructor( size:number,center:Vertex){
        this.size=size;
        this.center=center;
    }

    cartesianCubeIntersection( otherCube: CartesianCube){
        //check the X axis
        if(Math.abs(this.center.x - otherCube.center.x) < this.size + otherCube.size)
        {
            //check the Y axis
            if(Math.abs(this.center.y - otherCube.center.y) < this.size + otherCube.size)
            {
                //check the Z axis
                if(Math.abs(this.center.z - otherCube.center.z) < this.size + otherCube.size)
                {
                    return true;
                }
            }
        }
        return false;
    }
}
