//write a class to calculate the Uber price.

class UberPriceCalculator {
    static basic_fare = 100;
    static per_km = 1.5;
    static per_min = 0.5;

    constructor(distance, duration) {
    this.distance = distance;
    this.duration = duration;
    }
    calculateFare() {
    
    let distanceFare = this.distance * UberPriceCalculator.per_km;
    let timeFare = this.duration * UberPriceCalculator.per_min;
    let totalFare = UberPriceCalculator.basic_fare + distanceFare + timeFare;
    return totalFare;
    }
    
    toString() {
        return `UberPriceCalculator[distance=${this.distance} km, duration=${this.duration} minutes]`;
    }
    
    }
    
    let calculator = new UberPriceCalculator(5, 15);
    console.log(calculator.toString());
    let fare = calculator.calculateFare();
    console.log(`Total Fare: ${fare}`);