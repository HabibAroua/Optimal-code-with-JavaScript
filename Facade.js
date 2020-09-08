class Convetor
{
    setBody()
    {
        console.log('Body set !');
    }
    
    getEngine()
    {
        console.log('Dismant Engine !');
    }
    
    setEngine()
    {
        console.log('Engine set !');
    }
    
    setInterior()
    {
        console.log('Exterior added!');
    }
    
    getInterior()
    {
        console.log('Update interior');
    }
    
    setExterior()
    {
        console.log('Added interior');
    }
    
    setWheels()
    {
        console.log('Wheels!');
    }
    
    addElectronics()
    {
        console.log('Added electronics!');
    }
    
    paint()
    {
        console.log('Car painted!');
    }
}

class ConveyorFacade
{
    constructor(car)
    {
        this.car = car;
    }
    
    assembleCar()
    {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }
}