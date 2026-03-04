import { use } from "react";
import { getData } from "../loader/data";
import TicketCard from "./TicketCard";

const dataPromise = getData("/data.json");

export default function TicketSection() {
  const tickets = use(dataPromise);
  return (
    <div>
      <h2 className="my-2 text-2xl font-bold">Customer Tickets</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
