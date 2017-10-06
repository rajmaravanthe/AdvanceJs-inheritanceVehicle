function Vehicle (name, description, vehicleType, costPerKm) {
    this.name = name;
    this.description = description;
    this.vehicleType = vehicleType;
    this.costPerKm = costPerKm;
}

Vehicle.prototype.twoWheeler = function() { // inherit new method 

}

Vehicle.prototype.fourWheeler = function(fuelType) {
    this.fuelType = fuelType;
}


var pulsar  = new Vehicle("Pulsar", "NS 200", "two wheeler", "30"); // call vehicle class with bike features
console.log("New brand " + pulsar.name + " " + pulsar.description + " cost per km is " + pulsar.costPerKm);



var benz  = new Vehicle("Benz", "class8", "four wheeler", "60"); // call vehicle class with bike features
benz.fuelType = "Petrol";
console.log("New brand " + benz.name + " " + benz.description + " cost per km is " + benz.costPerKm + " Fuel Type is " + benz.fuelType);