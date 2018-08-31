
    function Ticket(eventType,ticket_number maximumPurchase, price){
        eventType = new Event();
        console.log('new ticket is made...')
    }

    Ticket.prototype.calculateAvailableTickets = function(){
        return this.eventType - this.tickets;
    }


    function Event(tickets, title, description){
        Object.defineProperty(this, "registerEvent", {
            get:function(){
                return "Registered event is "+title+ " with "+tickets+" tickets";
            },
            set:function(tickets, title, description){
                this.tickets = tickets;
                this.title = title;
                this.desciption = description;
                this.status = status;
            },
            configurable:false
        })
    }

 var kampalaFestival = new Event(19, "kampalaFestival", "This event is for kids between 11 and 16 years of age");

 console.log(kampalaFestival.registerEvent);
// class Book{
//  constructor()
// }