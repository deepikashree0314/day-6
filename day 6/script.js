class Movie {
    // Constructor
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }

    // Getter for Rating
    getRating() {
        return this.rating;
    }

    // Method to filter movies with a rating of "PG"
    static getPG(movies) {
        return movies.filter(movie => movie.getRating() === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);

/// circle -Class

class Circle {
    // Constructor with default values
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    // Getter for radius
    getRadius() {
        return this.radius;
    }

    // Setter for radius
    setRadius(radius) {
        this.radius = radius;
    }

    // Getter for color
    getColor() {
        return this.color;
    }

    // Setter for color
    setColor(color) {
        this.color = color;
    }

    // Method to calculate area
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Method to calculate circumference
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    // Method to represent the Circle as a string
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
}

// Example usage
const circle1 = new Circle();
const circle2 = new Circle(2.5, "blue");

console.log(circle1.toString()); // Output: Circle[radius=1, color=red]
console.log(circle2.toString()); // Output: Circle[radius=2.5, color=blue]

console.log("Area of circle2: " + circle2.getArea()); // Output: Area of circle2: 19.634954084936208
console.log("Circumference of circle2: " + circle2.getCircumference()); // Output: Circumference of circle2: 15.707963267948966






/// person details 

class Person {
    // Constructor
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // Getter for full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Getter for age
    getAge() {
        return this.age;
    }

    // Getter for gender
    getGender() {
        return this.gender;
    }

    // Method to represent the Person as a string
    toString() {
        return `Person[name=${this.getFullName()}, age=${this.age}, gender=${this.gender}]`;
    }
}




/// uber price

class UberCalculator {
    // Constructor with base fare and rate per mile/minute
    constructor(baseFare, ratePerMile, ratePerMinute) {
        this.baseFare = baseFare;
        this.ratePerMile = ratePerMile;
        this.ratePerMinute = ratePerMinute;
    }

    // Method to calculate the total fare based on distance (in miles) and time (in minutes)
    calculateFare(distance, time) {
        const distanceFare = distance * this.ratePerMile;
        const timeFare = time * this.ratePerMinute;

        // Total fare is the sum of base fare, distance fare, and time fare
        const totalFare = this.baseFare + distanceFare + timeFare;

        return totalFare;
    }
}

// Example usage
const uberCalculator = new UberCalculator(5.0, 1.5, 0.2); // Example rates (base fare, rate per mile, rate per minute)

const distance = 10; // Distance in miles
const time = 15; // Time in minutes

const totalFare = uberCalculator.calculateFare(distance, time);
console.log(`Uber Fare: $${totalFare.toFixed(2)}`);
