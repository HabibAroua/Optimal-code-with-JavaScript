class car
{
    constructor()
    {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder
{
    constructor()
    {
        this.car = new car();
    }
}