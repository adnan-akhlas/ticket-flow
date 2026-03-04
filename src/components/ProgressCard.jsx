/**
 * ProgressCard Component
 * @param {string} title - The label for the card (e.g., "In-Progress")
 * @param {number|string} count - The value to display
 * @param {string} className - Optional additional classes for the container
 */
export default function ProgressCard({ title, count, from, to }) {
  const cardClass = `relative overflow-hidden rounded-xl bg-linear-to-br ${from} ${to}  p-10 shadow-lg`;
  return (
    <div className={cardClass}>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#line-grad)" fill="none" strokeWidth="0.5">
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M ${-50 + i * 10} 250 Q ${100 + i * 5} ${100 - i * 2} ${450 - i * 10} -50`}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <path
                key={`rev-${i}`}
                d={`M ${450 - i * 10} 250 Q ${300 - i * 5} ${100 - i * 2} ${-50 + i * 10} -50`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <span className="text-lg font-medium opacity-90 mb-2 tracking-wide">
          {title}
        </span>
        <span className="text-7xl font-bold">{count}</span>
      </div>
    </div>
  );
}
