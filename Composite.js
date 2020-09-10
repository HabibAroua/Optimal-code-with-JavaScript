class Equipment
{
    getPrice()
    {
        return this.price || 0;
    }
    
    getName()
    {
        return this.name;
    }
    
    setName(name)
    {
        this.name = name;
    }
    
    setPrice(price)
    {
        this.price = price;
    }
}

class Engine extends Equipment
{
    constructor()
    {
        super();
        this.setName('Engine');
        this.setPrice(800);
    }
}

class Body extends Equipment
{
    constructor()
    {
        super();
        this.setName('Body');
        this.setPrice(3000);
    }
}

class Tools extends Equipment
{
    constructor()
    {
        super();
        this.setName('Tools');
        this.setPrice(4000);
    }
}