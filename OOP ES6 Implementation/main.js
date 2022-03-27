/**
 Implement class Point3D using JavaScript (ES6 syntax).
    Add member variables: x,y,z.
    Create constructor that takes x,y,z as parameters and make default 0 for each parameter.
    Add member function print3DPoint(), that prints the point values in console using this format: “3DPoint: X=0, Y=0,Z=0”.
 * 
 * 
 * 
 * 
 */
class Point3D 
{
    X;
    Y;
    Z;

    constructor(x = 0, y = 0, z = 0) {        
       this.X=x;
       this.Y=y;
       this.Z=z;
    }

    print3DPoint() {
        console.log("3D Point:" + 'X= ' + this.X + 'Y= ' + this.Y + 'Z= ' + this.Z)
    }

    calculateDistance(x1, x2, y1, y2, z1, z2){
        let d = 
            Math.pow(
            Math.pow(x2 - x1, 2) +
            Math.pow(y2 - y1, 2) +
            Math.pow(z2 - z1, 2), 0.5);

        console.log(d)
        alert('Distance: ' + d)
    }
}

var p1 = new Point3D();
p1.print3DPoint()

var X1 = prompt('Enter X1 Value:'),
    X2 = prompt('Enter X2 Value:'),
    Y1 = prompt('Enter Y1 Value:'),
    Y2 = prompt('Enter Y2 Value:'),
    Z1 = prompt('Enter Z1 Value:'),
    Z2 = prompt('Enter Z2 Value:');

p1.calculateDistance(X1,X2,Y1,Y2,Z1,Z2);