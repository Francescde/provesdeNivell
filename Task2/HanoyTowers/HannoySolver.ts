import {Tower} from "./Tower";

export class HannoySolver implements HannoySolver{

    towers : Tower[];
    levels : number;

    constructor(levels: number){
        this.levels = levels;
        this.towers = [new Tower(levels), new Tower(0), new Tower(0)]
    }

    solve(){
        const moves:number=(2**this.levels)-1;
        let destiny:number=2;
        let auxiliar:number=1;
        console.log(moves,this.levels%2);
        if(this.levels%2==0){
            auxiliar=2;
            destiny=1;
        }
        for (let i:number=1; i<=moves; ++i){
            if(i%3==1){
                this.legalMove(0,destiny);
            }
            if(i%3==2){
                this.legalMove(0,auxiliar);
            }
            if(i%3==0){
                this.legalMove(auxiliar,destiny);
            }
        }
    }

    private legalMove(fromTower: number, toTower: number) {
        if (this.towers[fromTower].lastLevelSize()<this.towers[toTower].lastLevelSize()
            || this.towers[toTower].lastLevelSize() == undefined) {
            this.moveFromTowerTo(fromTower, toTower);
        }
        else {
            this.moveFromTowerTo(toTower, fromTower);
        }
    }

    private moveFromTowerTo(from:number, to:number){
        this.towers[to].push(this.towers[from].pop())
    }

    private move(move,from,aux,to) {
        if(move==1){
            this.moveFromTowerTo(from, to);
        }
        else{
            this.move(move-1,from,to,aux);
            this.moveFromTowerTo(from, to);
            this.move(move-1,aux,from,to);
        }
    }

    solve2(){
        this.move(this.levels,0,1,2);
    }


}
