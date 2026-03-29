
let ticket = [{ id: "T101", resolved: true},
              { id: "T102", resolved: false},
              { id: "T103", resolved: true},
              { id: "T104", resolved: false},
              { id: "T105", resolved: false}
            
            ]

ticket.unshift({id: "T107",resolved: false});
ticket.push({id:"T106",resolved: true},{id:"T107",resolved: false})
console.log(ticket);
let currentTicket = ticket.shift();
console.log("current tickets",currentTicket);
let droppedTicket = ticket.pop();
console.log("dropped tickets",droppedTicket);
let pending = ticket.filter(pending => pending.resolved == false);
console.log("pending tickets",pending);
let pendingIds = ticket.map(ticket => ticket.id);
console.log("pendingIDs",pendingIds);