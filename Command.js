class Driver
{
    constructor(command)
    {
        this.command = command;
    }
    
    execute()
    {
        this.command.execute();
    }
}

class Engine
{
    constructor()
    {
        this.state = false;
    }
    
    on()
    {
        this.state = true;
    }
    
    off()
    {
        this.state = false;
    }
}