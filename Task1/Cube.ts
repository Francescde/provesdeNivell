
import {Vertex} from "./Vertex";

export class Cube implements Cube{
    size: number;
    center: Vertex;
    constructor( size:number,center:Vertex){
        this.size=size;
        this.center=center;
    }
}
