class Model
{
    constructor(color)
    {
        this.color = color;
    }
}

class Color
{
    constructor(type)
    {
        this.type = type;
    }
    
    get()
    {
        return this.type;
    }
}