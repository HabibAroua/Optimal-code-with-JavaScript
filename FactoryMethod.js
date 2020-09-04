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
        if((type == "X5") || (type == "x5"))
        {
            return new BmwFactory(type,108000,300);
        }
        else
        {
            if((type == "X6") || (type == "x6"))
            {
                return new BmwFactory(type,111000,320);
            }
        }
    }
}

const bmw = new BmwFactory();
const x5 = bmw.create('X5');
const x6 = bmw.create('X6');

console.log(x5);
console.log(x6);