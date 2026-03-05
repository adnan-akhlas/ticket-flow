import TicketCard from "./TicketCard";

export default function TicketSection({ tickets, onProgressAction }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <button
          key={ticket.id}
          className="text-left"
          onClick={() => onProgressAction(ticket.id)}
        >
          <TicketCard ticket={ticket} />
        </button>
      ))}
    </div>
  );
}
