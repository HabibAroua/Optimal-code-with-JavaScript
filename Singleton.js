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

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCounter();
myCount1.increaseCounter();
myCount2.increaseCounter();
myCount2.increaseCounter();

console.log("the number is "+myCount1.getCounter());
console.log("the number is "+myCount2.getCounter());

//Link of tuto is https://www.youtube.com/watch?v=GrYs0qDQEp0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=2