class TeslaCar
{
    constructor(model , price , interior , autopilot)
    {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    
    produce()
    {
        return new TeslaCar(this.model,this.price,this.interior,this.autopilot);
    }
}

//Produce base auto
const protoTypeCar = new  TeslaCar('S',8000,'black',false);

//Cloning of base auto
const car1 = protoTypeCar.produce();
const car2 = protoTypeCar.produce();
const car3 = protoTypeCar.produce();

//Change the particular auto
car1.interior = "white";
car1.autopilot = true;

//Show the result
console.log(car1);
console.log(car2);
console.log(car3);