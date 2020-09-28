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