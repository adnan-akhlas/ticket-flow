import { Calendar } from "lucide-react";

export default function TicketCard({ ticket }) {
  // 1. Normalize the status to lowercase to avoid case-sensitivity bugs
  const status = ticket?.status?.toLowerCase() || "";

  // 2. Define a style map for better reliability
  const statusConfig = {
    open: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
    "in progress": {
      bg: "bg-amber-100",
      text: "text-amber-700",
      dot: "bg-amber-500",
    },
  };

  // 3. Fallback to gray if status doesn't match
  const currentStyle = statusConfig[status] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
    dot: "bg-gray-400",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-bold text-slate-900 leading-tight">
          {ticket.title}
        </h3>

        {/* Dynamic Status Badge */}
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full shrink-0 ${currentStyle.bg} ${currentStyle.text}`}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${currentStyle.dot}`} />
          <span className="text-sm font-semibold capitalize">
            {ticket.status}
          </span>
        </div>
      </div>

      <p className="mt-3 text-slate-500 leading-relaxed line-clamp-2">
        {ticket.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between text-sm text-slate-400 font-medium gap-y-2">
        <div className="flex items-center gap-4">
          <span>#{ticket.id?.split("-")[1] || "000"}</span>
          <span
            className={`uppercase font-bold tracking-wider ${
              ticket.priority?.toLowerCase() === "high"
                ? "text-red-500"
                : "text-amber-500"
            }`}
          >
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-500">{ticket.customer}</span>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{formatDate(ticket.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
