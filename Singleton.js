class Counter
{
    constructor()
    {
        if(typeof Counter.instance == 'object')
        {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }
    
    getCounter()
    {
        return this.count;
    }
    
    increaseCounter()
    {
        return this.count++;
    }
}

//Link of tuto is https://www.youtube.com/watch?v=GrYs0qDQEp0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=2