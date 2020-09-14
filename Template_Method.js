class Builder
{
    build()
    {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessoires();
    }
}

class TeslaBuilder extends Builder
{
    addEngine()
    {
        console.log('Add Electronic Engine');
    }
    
    installChassis()
    {
        console.log('Install Tesla chassis');
    }
    
    addElectronic()
    {
        console.log('Add special electronic');
    }
    
    collectAccessoires()
    {
        console.log('Collect Accessoires');
    }
}

class BmwBuilder extends Builder
{
    addEngine()
    {
        console.log('Add BMW Engine');
    }
    
    installChassis()
    {
        console.log('Install BMW chassis');
    }
    
    addElectronic()
    {
        console.log('Add electronic');
    }
    
    collectAccessoires()
    {
        console.log('Collect Accessores');
    }
}