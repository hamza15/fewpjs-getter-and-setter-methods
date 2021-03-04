// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * parseInt(this.radius)
    }

    get circumference() {
        return 2 * Math.PI * parseInt(this.radius) 
    }

    get area() {
        return Math.PI * parseInt(this.radius) * parseInt(this.radius)
    }

    set diameter(value) {
        this.radius = value / 2
    }

    set circumference(value) {
        this.radius = value / (Math.PI * 2)
    }


}