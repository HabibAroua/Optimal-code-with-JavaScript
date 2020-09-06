class Car
{
    constructor()
    {
        this.price = 1000000;
        this.model = 'Car';
    }
    
    getPrice()
    {
        return this.price;
    }
    
    getDescription()
    {
        return this.model;
    }
};

class Testla extends Car
{
    constructor()
    {
        super();
        this.price = 1000000;
        this.model = "Tesla";
    }
};

class Autopilot
{
    constructor(car)
    {
        this.car = car;
    }
    
    getPrice()
    {
        return this.car.getPrice() + 50000;
    }
    
    getDescription()
    {
        return this.car.getDescription() +" with autoPilot";
    }
    
}

class Parktronic
{
    constructor(car)
    {
        this.car = car;
    }
    
    getPrice()
    {
        return this.car.getPrice + 3000;
    }
    
    getDescription()
    {
        return this.car.getDescription()+' with parktronic';
    }
}

let testla = new Testla();
testla = new Autopilot(testla);
testla = new Parktronic(testla);
console.log(testla.getPrice(), testla.getDescription());

let testla1 = new Testla();
testla1 = new Autopilot(testla1);
console.log(testla1.getPrice(), testla1.getDescription());