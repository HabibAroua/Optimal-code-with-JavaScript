class OfficialDealer
{
    constructor()
    {
        this.customers = [];
    }
    
    orderAuto(customer, auto, info)
    {
        const name = customer.getName();
        
        console.log(`Ordeer name ${name}. Order auto is ${auto}`);
        console.log(`Additional info : ${info}`);
        this.addToCustomersList(name);
    }
    
    addToCustomersList(name)
    {
        this.customers.push(name);
    }
    
    getCustomersList()
    {
        return this.customers;
    }
}