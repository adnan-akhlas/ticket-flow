export default function ResolvedTaskStatus({ tickets }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Resolved Task</h3>
      {!tickets.length && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3">
          <p className="text-gray-800 font-medium">No Resolved Task</p>
        </div>
      )}
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-[#e0e7ff] rounded-lg shadow-sm border border-indigo-100 p-4 transition-all hover:shadow-md"
        >
          <p className="text-[#1a2b3c] font-medium text-[15px]">
            {ticket.title}
          </p>
        </div>
      ))}
    </div>
  );
}
