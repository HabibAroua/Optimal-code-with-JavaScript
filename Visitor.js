class Tesla
{
    info()
    {
        return 'It is a Tesla Car!';
    }
    
    accept(visitor)
    {
        visitor(this);
    }
}

class Bmw
{
    info()
    {
        return 'It is a BMW car!';
    }
    
    accept(visitor)
    {
        visitor(this);
    }
}

class Audi
{
    info()
    {
        return 'It is an Audi car!';
    }
    
    accept(visitor)
    {
        visitor(this);
    }
}

function exportVisitor(auto)
{
    if(auto instanceof Tesla)
    {
        auto.export = console.log(`Exported data : $(auto.info())`);
    }
    else
    {
        if(auto instanceof Bmw)
        {
            auto.export = console.log(`Exported data : $(auto.info())`);
        }
        else
        {
            if(auto instanceof Audi)
            {
                auto.export = console.log(`Exported data : $(auto.info())`);
            }
        }
    }
}