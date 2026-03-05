export default function ProgressTaskStatus({ tickets }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">In Progress Task</h3>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
        >
          {/* Title / Status Label */}
          <h3 className="text-[#1a2b3c] font-semibold text-lg mb-4">
            {ticket.title}
          </h3>

          {/* Action Button */}
          <button className="w-full bg-[#10a342] hover:bg-[#0d8a37] text-white font-medium py-2.5 rounded-md transition-colors duration-200">
            Complete
          </button>
        </div>
      ))}
    </div>
  );
}
