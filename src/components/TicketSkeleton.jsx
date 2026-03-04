export default function TicketSkeleton() {
  return (
    <div>
      <h2 className="my-2 text-2xl font-bold">Customer Tickets</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm animate-pulse"
          >
            {/* Top Row: Title and Status Pill */}
            <div className="flex justify-between items-start gap-4">
              {/* Mock Title */}
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-1"></div>

              {/* Mock Status Badge */}
              <div className="h-7 bg-gray-200 rounded-full w-20 shrink-0"></div>
            </div>

            {/* Mock Description Lines */}
            <div className="mt-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Bottom Row: Metadata */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4">
              {/* ID and Priority placeholders */}
              <div className="flex items-center gap-6">
                <div className="h-4 bg-gray-200 rounded w-12"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>

              {/* Customer and Date placeholders */}
              <div className="flex items-center gap-6">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
