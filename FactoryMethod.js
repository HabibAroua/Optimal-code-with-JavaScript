class BmwFactory
{
    constructor(model,price,maxSpeed)
    {
        this.model=model;
        this.price=price;
        this.maxSpeed=maxSpeed;
    }
    
    create(type)
    {
        if(type == "X5")
        {
            return BmwFactory(type,108000,300);
        }
        else
        {
            if(type == "X6")
            {
                return BmwFactory(type,111000,320);
            }
        }
    }
}