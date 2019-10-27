
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
        const halfSize:number= this.size/2;
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

    cartesianCubeVolumeOfIntersection(other: CartesianCube) {
        let volume:number=0;
        if(this.cartesianCubeIntersection(other)) {
            const HalfSize: number = this.size / 2;
            const cube2HalfSize: number = other.size / 2;
            const minX: number = Math.max(this.center.x - HalfSize, other.center.x - cube2HalfSize);
            const minY: number = Math.max(this.center.y - HalfSize, other.center.y - cube2HalfSize);
            const minZ: number = Math.max(this.center.z - HalfSize, other.center.z - cube2HalfSize);
            const maxX: number = Math.min(this.center.x + HalfSize, other.center.x + cube2HalfSize);
            const maxY: number = Math.min(this.center.y + HalfSize, other.center.y + cube2HalfSize);
            const maxZ: number = Math.min(this.center.z + HalfSize, other.center.z + cube2HalfSize);
            volume = (Math.abs(maxX - minX)) * (Math.abs(maxY - minY)) * (Math.abs(maxZ - minZ));
        }
        return volume;

    }
}
