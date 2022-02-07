// Your code here
class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((sum, acc) => sum + acc,0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        for(let i = 0; i< this.array.length -1; i++) {
            if (this.array[i] >= (this.array[i+1]+this.array[i+2])){
                return false
            }
         }return true
    
    }
}

class Square extends Polygon {
    get isValid(){
        for(let i = 0; i< this.array.length -1; i++) {
            if (this.array[i] !== this.array[i+1]){
                return false
            }
        }return true

    }

    get area(){
        return (this.array[0]*this.array[1])
    }
}