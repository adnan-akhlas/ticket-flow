import TicketCard from "./TicketCard";

export default function TicketSection({ tickets, onProgressAction }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {!tickets.length && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3">
          <p className="text-gray-800 font-medium">
            No Customer Support Ticket.
          </p>
        </div>
      )}
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
