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
    addEngine(){}
    installChassis(){}
    addElectronic(){}
    collectAccessoires(){}
}

class BmwBuilder extends Builder
{
    addEngine(){}
    installChassis(){}
    addElectronic(){}
    collectAccessoires(){}
}