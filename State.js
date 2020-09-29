class OrderStatus
{
    constructor(name, nextStatus)
    {
        this.name = name;
        this.nextStatus = nextStatus;
    }
    
    next()
    {
        return new this.nextStatus();
    }
}

class WaitingPayment extends OrderStatus
{
    constructor()
    {
        super('waitingForPayment',Shipping);
    }
}

class Shipping extends OrderStatus
{
    constructor()
    {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus
{
    constructor()
    {
        super('delivered',Delivered);
    }
}